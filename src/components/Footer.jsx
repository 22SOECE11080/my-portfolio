import React from "react";
import yourImage from "../assets/images/rj.jpg"; // Adjust the path as per your folder structure

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{ backgroundColor: "#1e3a8a", color: "#fff" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Section - Logo */}
          <div className="d-flex align-items-center">
            <img
              src={yourImage}
              alt="Logo"
              style={{ height: "40px" }} // Adjust logo size
            />
            <span className="ms-2">RJ Group of Company</span>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="d-flex justify-content-center flex-wrap">
            <a
              href="https://www.linkedin.com/in/radhesh-joshi-914814277/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-primary"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a
              href="https://github.com/22SOECE11080"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-dark"
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/onetap/?next=%2Fproud.mp%2Ffeed%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-danger"
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Copyright Section */}
        <div className="text-center">
          <p>&copy; 2024 RJ Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
