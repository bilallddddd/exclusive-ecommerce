import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/cart-context.jsx";
import { WishListProvider } from "./context/wishlist-context.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { BrowserRouter } from "react-router-dom";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <WishListProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishListProvider>
    </AuthContextProvider>
   </BrowserRouter>
  </React.StrictMode>,
)