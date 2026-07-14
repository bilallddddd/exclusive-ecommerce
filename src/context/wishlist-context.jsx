import { createContext, useState, useEffect } from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, red } from '@mui/material/colors';

// Wishlist context
export const WishListContext = createContext();

// Wishlist provider
export const WishListProvider = ({ children }) => {

    const [wishListItems, setWishListItems] = useState(
        localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : []
    );
    const [modalState, setModalState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
        messageType: 'add',
    });

    const addToWishList = (item) => {
        const isItemInWishList = wishListItems.find((wishListItem) => wishListItem.id === item.id);
        if (!isItemInWishList) {
            setWishListItems([...wishListItems, item]);
            setModalState({ ...modalState, open: true, messageType: 'add' });
        }
    };

    const removeFromWishList = (item) => {
        setWishListItems(wishListItems.filter((wishListItem) => wishListItem.id !== item.id));
        setModalState({ ...modalState, open: true, messageType: 'delete' });
    };

    useEffect(() => {
        localStorage.setItem('wishListItems', JSON.stringify(wishListItems));
    }, [wishListItems]);

    const { vertical, horizontal, open, messageType } = modalState;

    const getMessageContent = () => {
        if (messageType === 'add') {
            return (
                <SnackbarContent
                    style={{ backgroundColor: green[600] }}
                    message={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon style={{ marginRight: '8px' }} />
                            Item added to wishlist!
                        </div>
                    }
                />
            );
        } else {
            return (
                <SnackbarContent
                    style={{ backgroundColor: red[600] }}
                    message={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <DeleteIcon style={{ marginRight: '8px' }} />
                            Item removed from wishlist!
                        </div>
                    }
                />
            );
        }
    };

    const wishlistItemsCount = wishListItems.length;

    return (
        <WishListContext.Provider 
        value={{ wishListItems, 
        addToWishList,
        removeFromWishList, 
        getMessageContent,
        wishlistItemsCount }}>
            {children}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={() => setModalState({ ...modalState, open: false })}
            >
                {getMessageContent()}
            </Snackbar>
        </WishListContext.Provider>
    );
};
