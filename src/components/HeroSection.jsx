import React from "react";
import "animate.css"; // Ensure you have animate.css installed
import yourImage from "../assets/images/profile1.png"; // Adjust the path as per your folder structure

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          {/* Left Column */}
          <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
            <h1
              className="display-3 fw-bold animate__animated animate__fadeIn animate__delay-0.5s"
              style={{ fontSize: "3rem" }}
            >
              Hi, I'm Radhesh Joshi
            </h1>
            <div className="d-flex align-items-center mt-3 animate__animated animate__fadeIn animate__delay-0.5s">
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                  marginRight: "10px",
                }}
              ></div>
              <h2 className="fw-light mb-0" style={{ fontSize: "1.8rem" }}>
                Full Stack Developer
              </h2>
            </div>
            <p
              className="lead mt-4 animate__animated animate__fadeIn animate__delay-0.8s"
              style={{ fontSize: "1.2rem" }}
            >
              A passionate web developer and designer focused on creating
              user-friendly and efficient websites.
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-lg animate__animated animate__zoomIn animate__delay-1s"
            >
              Say Hello
              <i className="bi mx-2 bi-send"></i>
            </a>
          </div>

          {/* Right Column */}
          <div
            className="col-md-6 d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <img
              src={yourImage}
              alt="Radhesh Joshi"
              className="img-fluid card rounded-circle animate__animated animate__fadeIn animate__delay-2s"
              style={{
                maxWidth: "80%",
                height: "auto",
                maxHeight: "500px", // Add a maximum height
              }}
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for responsive font size and image */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem; /* Adjust for mobile */
          }
          h2 {
            font-size: 1.5rem; /* Adjust for mobile */
          }
          .lead {
            font-size: 1rem; /* Adjust for mobile */
          }
          img {
            max-width: 60%; /* Reduce image size for mobile */
            max-height: 300px; /* Set a smaller max height for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
