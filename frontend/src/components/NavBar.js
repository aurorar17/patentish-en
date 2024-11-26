import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src="/images/LOGO.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
