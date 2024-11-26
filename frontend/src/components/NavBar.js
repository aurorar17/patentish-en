import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Dovrai installare react-icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/LOGO.png" alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/login">Login</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
