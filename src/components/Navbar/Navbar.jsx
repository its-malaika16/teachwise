import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-logo">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
            src="/assets/logo/Teachwise_logo.png"
            alt="Teachwise"
          />
          <span>Teachwise</span>
        </NavLink>
      </div>

      {/* MOBILE MENU ICON */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* LINKS */}
      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/platform" onClick={closeMenu}>
          Platform
        </NavLink>

        <NavLink to="/features" onClick={closeMenu}>
          Features
        </NavLink>

        <NavLink to="/how-it-works" onClick={closeMenu}>
          How It Works
        </NavLink>

        <NavLink to="/reporting" onClick={closeMenu}>
          Reporting
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-cta mobile-cta"
          onClick={closeMenu}
        >
          Request Demo
        </NavLink>

      </div>

      {/* DESKTOP CTA */}
      <NavLink to="/contact" className="nav-cta desktop-cta">
        Request Demo
      </NavLink>

    </nav>
  );
}