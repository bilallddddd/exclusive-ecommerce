import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export default function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);

  return (
    <>
      <Header />

      <div className="flex flex-col w-full px-[7%] items-center gap-10 mb-20">
        <div className="w-full flex gap-3 text-sm font-normal">
          <Link className="opacity-50 text-black" to="/">
            Home
          </Link>
          <span className="text-black">/ Cart</span>
        </div>

        <div className="w-full bg-white rounded shadow">
          <div className="flex p-4 pl-0 text-center font-semibold md:mr-22">
            <div className="flex-1">Product</div>
            <div className="flex-1">Price</div>
            <div className="flex-1">Quantity</div>
            <div className="flex-1">Subtotal</div>
          </div>
        </div>

        {cartItems.map((product) => {
          const productSubTotal = product.price * product.quantity;
          return (
            <div
              key={product.id}
              className="w-full flex flex-col md:flex-row items-center bg-white rounded shadow mb-4 p-4 gap-8 "
            >
              {/* Product Image with Close Button */}
              <div className="relative w-20 h-20 flex-shrink-0 md:ml-22">
                <img
                  className="w-full h-full object-cover rounded"
                  src={product.img}
                  alt={product.alt}
                />
                <button
                  className="absolute top-0 left-0 w-6 h-6 p-1 bg-red-500 rounded-full flex items-center justify-center"
                  onClick={() => removeItemFromCart(product)}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Details */}
              <div className="flex-1 text-center md:text-left md:mr-22">
                <div className="text-black text-base font-medium">
                  {product.name}
                </div>
              </div>

              {/* Product Price */}
              <div className="text-black text-base font-medium flex-1 text-center md:pl-10  md:text-left">
                &#36; {product.price}
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-1 md:gap-2 min-w-[20%] max-w-[80%]">
                <button
                  className="flex items-center justify-center w-8 h-8 border rounded-md border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => removeFromCart(product)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <input
                  className="w-10 text-center border-0 focus:ring-0"
                  type="text"
                  value={product.quantity}
                  readOnly
                />
                <button
                  className="flex items-center justify-center w-8 h-8 border rounded-md border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => addToCart(product)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>

              {/* Product Subtotal */}
              <div className="text-black text-base font-medium flex-1 text-center md:text-center">
                &#36; {productSubTotal}
              </div>
            </div>
          );
        })}

        {/* Cart Actions */}
        <div className="w-full flex justify-between mb-10">
          <Link to="/all-products ">
            <button className="w-max p-4 border border-gray-300 rounded hover:shadow-lg">
              Return to Shop
            </button>
          </Link>
          <button
            className="w-max p-4 bg-red-500 text-white rounded hover:shadow-lg"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Summary */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-300 rounded p-4">
              <input
                className="flex-grow border-0 focus:ring-0"
                placeholder="Coupon code"
              />
              <button className="w-max p-2 bg-red-500 text-white rounded hover:shadow-lg">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded">
            <div className="text-xl font-semibold mb-4">Cart Total</div>
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span>&#36; {getCartTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold mb-6">
              <span>Total:</span>
              <span>&#36; {getCartTotal()}</span>
            </div>
            <Link to="/checkout" className="w-full">
              <button className="w-full px-6 py-3 bg-red-500 text-white rounded hover:shadow-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
