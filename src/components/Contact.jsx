import React from "react";
// import AboutHeader from "./AboutHeader.jsx";
import Header from "./Header";
import "../components-css/contact.css";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <AboutHeader /> */}
      <Header />

      <Container style={{ margin: "1rem 0", width: "max-content", paddingInline: '7%' }}>
        <RouterNavLink
          to="/"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Home
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink
          to="product-details"
          style={{
            color: "gray",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Product Details
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
        <RouterNavLink
          to="/contact"
          style={{ color: "black", textDecoration: "none" }}
        >
          Contact
        </RouterNavLink>
        <span>
          <b> / </b>
        </span>
      </Container>
      <div className="contact-container">
        <div className="call-write">
          <div className="call">
            <div className="icon-heading">
              <div className="phone-icon">
                <FaPhoneAlt
                  style={{ margin: ".4rem", color: "white" }}
                ></FaPhoneAlt>
              </div>
              <h3 className="call">Call To Us</h3>
            </div>
            <p className="time">We are available 24/7, 7days a week.</p>
            <p className="time">Phone: +0000000000</p>
          </div>
          <hr></hr>
          <div className="write">
            <div className="mail">
              <div className="icon-heading">
                <div className="mail-icon">
                  <CiMail style={{ margin: ".4rem", color: "white" }}></CiMail>
                </div>
                <h3 className="write">Write To Us</h3>
              </div>
            </div>
            <p className="address">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="address">Emails: customer@exclusive.com</p>
            <p className="address">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="contact-form">
          <form className="my-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="email"
              placeholder="Your email"
              required
            />
            <input
              type="tel"
              className="phone-number"
              placeholder="Your Phone"
            />
            <textarea className="message" placeholder="Your message" required />
            <button type="submit" className="send">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
