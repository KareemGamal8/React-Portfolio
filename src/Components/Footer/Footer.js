import React from "react";
import "./Footer.css";
import logoImage from "../images/logo-symbol-dark.png";
function Footer() {
  return (
    <div className="footer pd-x">
      <div className="footer-sections">
        <div className="footer-left">
          <img src={logoImage} alt="logo" />
          <h2>trydo</h2>
        </div>
        <div className="footer-center">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-right">
          <p>© 2022. All rights reserved by Rainbow-Themes.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
