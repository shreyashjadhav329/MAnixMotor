import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="mainContainer">
        {/* Brand and Logo */}
        <div className="footer-section brandinfo">
          <div className="footer-logo">
            <img src="/logo.svg" alt="Manix Motors Logo" />
          </div>
          <p>Since 2003 – Trusted CNG & Automotive Experts</p>
        </div>

        {/* Services */}
        <div className="footer-section products">
          <h4>Our Services</h4>
          <ul>
            <li>CNG Fitment</li>
            <li>CNG Service</li>
            <li>CNG Testing</li>
            <li>Mechanical Works</li>
            <li>Mechanical Parts</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section get-in-touch">
          <h4>Get in Touch</h4>
          <p>5VFF+5RM, Film City Rd, Azad Nagar</p>
          <p>Gokuldham Colony, Goregaon, Mumbai</p>
          <p>Maharashtra 400063</p>
          <p>Mobile: +91-98923 09024</p>
          <p>Email: ManixMotors@gmail.com</p>
          <div className="social-media">
            <a href="https://www.facebook.com/manixmotors/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/manixmotorgas/?originalSubdomain=in"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
