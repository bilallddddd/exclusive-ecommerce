import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Typography, Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import OurServices from "./OurServices";
import teamMembersData from "../data/teamMembersData.json";
import TeamCarousel from "./TeamCarousel";

const ServiceCard = ({ icon, number, description }) => (
  <div
    style={{
      padding: "20px",
      borderRadius: "5px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src={icon}
      alt=""
      style={{ width: "80px", height: "80px", marginBottom: "15px" }}
    />
    <Typography
      variant="h2"
      sx={{
        fontSize: "2rem",
        fontWeight: "bold",
        mb: "10px",
        textAlign: "center",
      }}
    >
      {number}
    </Typography>
    <Typography variant="body1" sx={{ fontSize: "1rem", textAlign: "center" }}>
      {description}
    </Typography>
  </div>
);

function About() {
  return (
    <>
      <Header />

      <Container
        style={{ marginTop: "50px", marginLeft: "0", width: "max-content", paddingInline: "7%" }}
      >
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
          to="/about"
          style={{ color: "black", textDecoration: "none" }}
        >
          About
        </RouterNavLink>
      </Container>

      <Container
        style={{ margin: "50px 0 0 0", width: "100%", paddingInline: "7%" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" sx={{ fontSize: "2.5rem", mb: "1rem" }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: "1rem" }}>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </Typography>
            <Typography variant="body1">
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from customer.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/assets/two-ladies.png"
              alt=""
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <div
              className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/sellers.png"
                number="10.5K"
                description="Sellers active on our site"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div
              className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/monthly-sale.png"
                number="33K"
                description="Monthly Product sales"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div
              className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/Customers.png"
                number="33K"
                description="Customers active on our site"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div
              className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
              style={{
                width: "100%",
                height: "230px",
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
              }}
            >
              <ServiceCard
                icon="/assets/Annual.png"
                number="25K"
                description="Annual gross sales on our site"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <TeamCarousel data={{ teamMembers: teamMembersData.teamMembers }} />

      <OurServices />
      <Footer />
    </>
  );
}

export default About;
