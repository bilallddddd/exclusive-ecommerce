import { createContext, useState, useEffect } from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, red } from '@mui/material/colors';
import { allProductsStore } from "../data/allProductsStore.json";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    const items = stored ? JSON.parse(stored) : [];
    
    // Automatically correct and update prices of existing items in the cart
    return items.map((item) => {
      const matched = allProductsStore.find((p) => p.id === item.id);
      if (matched) {
        const activePrice = (matched["discount-price"] !== undefined && matched["discount-price"] !== 0)
          ? matched["discount-price"]
          : matched.price;
        return { ...item, price: activePrice || item.price };
      }
      return item;
    });
  });

  const [modalState, setModalState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    messageType: 'add',
  });

  const addToCart = (item, silent = false) => {
    // Resolve active price
    const matched = allProductsStore.find((p) => p.id === item.id) || item;
    const activePrice = (matched["discount-price"] !== undefined && matched["discount-price"] !== 0)
      ? matched["discount-price"]
      : (matched.price || item.price);

    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, price: activePrice, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, price: activePrice, quantity: 1 }]);
    }
    if (!silent) {
      setModalState({ ...modalState, open: true, messageType: 'add' });
    }
  };

  const removeFromCart = (item, silent = false) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
    if (!silent) {
      setModalState({ ...modalState, open: true, messageType: 'delete' });
    }
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setModalState({ ...modalState, open: true, messageType: 'delete' });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const { vertical, horizontal, open, messageType } = modalState;

  const getMessageContent = () => {
    if (messageType === 'add') {
      return (
        <SnackbarContent
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon style={{ color: green[600], marginRight: 8 }} />
              Item added to cart
            </span>
          }
        />
      );
    } else {
      return (
        <SnackbarContent
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <DeleteIcon style={{ color: red[600], marginRight: 8 }} />
              Item removed from cart
            </span>
          }
        />
      );
    }
  };

  const cartItemsCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemsCount,
        getCartTotal,
        removeItemFromCart,
        modalState,
        handleCloseModal: () => setModalState({ ...modalState, open: false }),
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => setModalState({ ...modalState, open: false })}
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        {getMessageContent()}
      </Snackbar>
    </CartContext.Provider>
  );
};
