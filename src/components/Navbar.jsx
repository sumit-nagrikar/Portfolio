import React, { useState } from "react";
import "../css/Navbar.css";

export const Navbar = () => {
  const [selectedComponent, setSelectedComponent] = useState("home");

  const handleButtonClick = (component) => {
    setSelectedComponent(component);

    // Find the corresponding element by ID
    const element = document.getElementById(component);

    // Scroll to the element without smooth scrolling
    if (element) {
      const yOffset = -50; // Adjust as needed
      window.scrollTo({ top: element.offsetTop + yOffset, behavior: "auto" });
    }
  };

  const links = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#1b0f25" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-1 ms-5 " href="/">
          Sumit Nagrikar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <button
                  className={`custom-color fs-5 nav-link me-4 ${selectedComponent === link.id ? 'active' : ''}`}
                  onClick={() => handleButtonClick(link.id)}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
