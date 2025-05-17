import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Hamburger on the far left */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <GiHamburgerMenu size={28} color="#2563eb" />
          )}
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <h2>Life+</h2>
        </div>
      </div>

      {/* Links below entire navbar in column when menu is open */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link className="nav-link" to="/request-ambulance" onClick={closeMenu}>
          Request Ambulance
        </Link>
        <Link className="nav-link" to="/track-ambulance" onClick={closeMenu}>
          Track Ambulance
        </Link>
        <Link className="nav-link" to="/SignIn" onClick={closeMenu}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
