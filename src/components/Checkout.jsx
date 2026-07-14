import { CartContext } from '../context/cart-context';
import { payment } from "../data/payment.json";
import  { useState, useContext } from "react";
import { Container, Typography } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import "../components-css/account-checkout.css";
import Footer from "./Footer";
import Header from './Header';

function Checkout() {
  const {cartItems,getCartTotal, clearCart} = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    town: "",
    number: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Payment Method:", paymentMethod);
  };

  return (
    <>
      <Header />

      <Container style={{ marginTop: "20px" }} className="upper-links">
        <RouterNavLink
          to="/account"
          style={{ color: "gray", textDecoration: "none", marginRight: "0.5rem" }}
        >
          Account
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/my-account"
          style={{ color: "gray", textDecoration: "none", marginRight: "0.5rem" }}
        >
          My Account
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/product"
          style={{ color: "gray", textDecoration: "none", marginRight: "0.5rem" }}
        >
          Product
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/cart"
          style={{ color: "gray", textDecoration: "none", marginRight: "0.5rem" }}
        >
          View Cart
        </RouterNavLink>
        <span>/</span>
        <RouterNavLink
          to="/checkout"
          style={{ color: "black", textDecoration: "none", marginRight: "0.5rem" }}
        >
          Checkout
        </RouterNavLink>
      </Container>

      <Container className="checkout-container" style={{ display: "flex", gap: "2px" }}>
        <div className="billing" style={{ width: "470px", height: "814px", marginTop: "50px", marginLeft: "5px" }}>
          <Typography variant="h1" sx={{ fontSize: "32px", mb: "1rem", fontWeight: "bold" }}>
            Billing Details
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className="form-rows">
              <div className="form-groups">
                <label htmlFor="firstName">First Name</label><span style={{ color: "red" }}>*</span><br />
                <input
                  type="text"
                  id="firstName"
                  className="my-input"
                  name="firstName"
                  value={formData.firstName}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="company">Company Name</label><br />
                <input
                  type="text"
                  id="company"
                  className="my-input"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="street">Street Address</label><span style={{ color: "red" }}>*</span><br />
                <input
                  type="text"
                  id="street"
                  className="my-input"
                  name="street"
                  value={formData.street}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="apartment">Apartment, floor, etc (optional)</label><br />
                <input
                  type="text"
                  id="apartment"
                  className="my-input"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="town">Town/city</label><span style={{ color: "red" }}>*</span><br />
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="my-input"
                  value={formData.town}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="number">Phone Number</label><span style={{ color: "red" }}>*</span><br />
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="my-number-input"
                  value={formData.number}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label htmlFor="email">Email Address</label><span style={{ color: "red" }}>*</span><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="my-email-input"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="checkbox"> </label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="checkbox-container"
              />
              <span>
                <p className="save">Save this information for faster check-out next time</p>
              </span>
            </div>
          </form>
        </div>
        <div className="checkout-container flex flex-col">
      <div className="checkout-details" style={{width: "100%", marginTop: "6rem" }}>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
           
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      <div className="checkout-summary" style={{width: '100%', marginTop: '2rem'}}>
        <div className="checkout-subtotal">
          <span>Subtotal:</span>
          <span>${getCartTotal()}</span>
        </div>
        <hr></hr>
        <div className="checkout-shipping">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <hr style={{width: '100%', marginTop: '0.5rem'}}></hr>
        <div className="checkout-total">
          <span>Total:</span>
          <span>${getCartTotal()}</span>
        </div>
      </div>
      <div className="payment-method-item" style={{ display: 'flex', gap: '0.6rem', width: '427px', height: '28px' }}>
  <input type="radio" name="payment-method" id="bank" checked={paymentMethod === "bank"} onChange={handlePaymentMethodChange} />
  <label htmlFor="bank" style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>Bank</label>
  <div className="payment-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
    {payment.map((product) => (
      <div key={product.id}>
        <img src={product.img} alt={product.alt} />
      </div>
    ))}
  </div>
</div>

<div className="payment-method-item2" style={{ display: 'flex', gap: '1.5rem', marginTop: '20px' }}>
  <input type="radio" name="payment-method" id="paypal" checked={paymentMethod === "paypal"} onChange={handlePaymentMethodChange} />
  <label htmlFor="paypal" style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>Cash on Delivery</label>
</div>

      <div className="checkout-coupon" style={{width: '100%', marginTop: '2rem'}}>
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </div>
      <button className="checkout-button" onClick={clearCart} >Place Order</button>
    </div>
    
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;


