import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="\ChatGPT Image Jun 15, 2025, 09_58_33 PM.png" alt="Logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-links ${menuActive ? 'active' : ''}`}>
        <Link to="/Product">Product</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-toggle">
            Services ▼
          </span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/CNGFitting">CNG Fitting</Link>
            <Link to="/CNGSERVICE">CNG Servicing & Testing</Link>
            <Link to="/MECHANICAL">Mechanical Works</Link>
          </div>
        </div>

        <Link to="/Aboutus">About Us</Link>
      </div>
    </nav>
  );
}

export default Nav;
