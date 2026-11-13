import React, { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-icon">✚</span>
        <span>
          <strong>MEDI-Health</strong>
          <small>Clinical Care Platform</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Specialties</a>
        <a href="#studies" onClick={closeMenu}>Studies</a>
        <a href="#doctors" onClick={closeMenu}>Doctors</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <a href="#appointment" className="nav-button">
        Book Appointment
      </a>
    </nav>
  );
}
export default Navbar;