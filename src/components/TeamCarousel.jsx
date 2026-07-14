
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Grid, Container, Typography } from "@mui/material";
import undefinedImg from "../utils/undefined.png";

const TeamCarousel = ({ data }) => {
  const { teamMembers } = data;
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      slide === Math.ceil(teamMembers.length / 4) - 1 ? setSlide(0) : setSlide(slide + 1);
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slide, teamMembers.length]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <div className="relative">
        {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, pageIndex) => (
          <div
            className={slide === pageIndex ? "flex gap-3 w-full shrink-0" : "hidden"}
            key={pageIndex}
          >
            <Grid container spacing={4}>
              {teamMembers.slice(pageIndex * 4, pageIndex * 4 + 4).map((member) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
                  <div>
                    <img src={member.img === "undefined.png" ? undefinedImg : member.img} alt={member.alt} />
                    <div style={{ marginTop: "10px", marginRight: "30px" }}>
                      <Typography
                        variant="h2"
                        sx={{ fontSize: "2rem", fontWeight: "bold", mb: "10px" }}
                      >
                        {member.name}
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                        {member.role}
                      </Typography>
                      <div style={{ display: "flex", gap: "1rem", marginTop: "10px", opacity: 0.5, cursor: "not-allowed" }}>
                        <FaTwitter style={{ width: "24px", height: "24px" }} />
                        <FaInstagram style={{ width: "24px", height: "24px" }} />
                        <FaLinkedin style={{ width: "24px", height: "24px" }} />
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
       <span className="absolute bottom-2 flex gap-3 w-full justify-center" style={{ marginBottom: '-50px' }}>
          {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, pageIndex) => (
            <button
              className={slide === pageIndex ? "bg-action rounded-full w-2 h-2" : "bg-secondary rounded-full w-2 h-2"}
              key={pageIndex}
              onClick={() => setSlide(pageIndex)}
              style={{
                backgroundColor: slide === pageIndex ? '#DB4444' : '#333333',
                borderRadius: '50%',
                width: '8px',
                height: '8px',
              }}
            ></button>
          ))}
        </span>
      </div>
    </Container>
  );
};

TeamCarousel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeamCarousel;
