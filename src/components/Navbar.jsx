import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is loaded

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle navbar collapse state
  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand fs-2" href="#home">
          Portfolio
        </a>

        {/* Toggler button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle}
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className={`collapse navbar-collapse ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto fs-6">
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "hero" ? "active-link" : ""
                }`}
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "about" ? "active-link" : ""
                }`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "skills" ? "active-link" : ""
                }`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "services" ? "active-link" : ""
                }`}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "portfolio" ? "active-link" : ""
                }`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-white ${
                  activeSection === "contact" ? "active-link" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
