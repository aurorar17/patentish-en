import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>
            <img src="/images/LOGO.png" alt="Logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
