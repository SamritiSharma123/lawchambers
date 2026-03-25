import { useState } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo-area">
          <img src="/logo.png" alt="logo" />
          <div className="logo-text">
            <h3>Nidhi Sharma</h3>
            <span>Law Chambers</span>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#practice" onClick={() => setMenuOpen(false)}>Practice Areas</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* CTA inside menu for mobile */}
          <a href="tel:9988908205" className="call-btn mobile-call">
            Call Now
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <a href="tel:9988908205" className="call-btn desktop-call">
          Call Now
        </a>

        {/* HAMBURGER */}
        <div 
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}
