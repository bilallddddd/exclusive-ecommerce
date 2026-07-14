import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ViewProduct from "./components/ViewProduct";
import AllProducts from "./components/AllProducts";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/product/:productID" element={<ViewProduct />} />

      {<Route path="/*" element={<NotFound />} />}
    </Routes>
  );
}

export default App;
