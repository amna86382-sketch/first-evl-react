import React from "react";
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-about">
          <h2>✚ MEDI-Health</h2>
          <p>
            Delivering modern, accessible and intelligent
            healthcare experiences through technology.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#studies">Studies</a>
          <a href="#doctors">Specialists</a>
        </div>
        <div className="footer-links">
          <h3>Our Services</h3>
          <a href="#services">Patient Monitoring</a>
          <a href="#services">Virtual Consults</a>
          <a href="#services">Diagnostic Support</a>
          <a href="#appointment">Appointments</a>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
          <p>Email: amna86382@gmail.com</p>
          <p>Phone: +92...</p>
          <p>Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 MEDI-Health. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
