import "./Footer.css";
import { Link } from "react-router-dom";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4.5 4.5 0 0 1 4-3z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h3v4h-3c-1.1 0-2 .9-2 2v2h5l-1 4h-4v6h-4v-6H5v-4h4V8a5 5 0 0 1 5-5z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4l16 16" />
    <path d="M20 4L4 20" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-7-6-7-11a7 7 0 1 1 14 0c0 5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.5 4.2 2 2 0 0 1 4.5 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.5 10.8a16 16 0 0 0 5.7 5.7l1.7-1.7a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 1.9z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* TOP */}
        <div className="footer-top">
          <div className="footer-about">
            <div className="footer-logo">
              <img src="assets//logo/Teachwise_logo.png" alt="Teachwise Logo" />
              <span>Teachwise</span>
            </div>

            <p>
              Specialist recruitment powered by purpose-built technology
              connecting talent with employers across education, hospitality,
              restaurants, office and executive search.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>

              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>

              <a href="#" aria-label="X">
                <XIcon />
              </a>

              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>


              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/contact">Contact</Link>

            </div>

            <div className="footer-column">
              <h4>Platform</h4>

              <Link to="/platform">Overview</Link>
              <Link to="/features">Features</Link>
              <Link to="/reporting">Reporting</Link>
              <a href="/contact">Book a Demo</a>
            </div>

          <div className="footer-column">
            <h4>Services</h4>

            <a href="#">General Recruitment</a>
            <a href="#">Education</a>
            <a href="#">Restaurants</a>
            <a href="#">Executive Search</a>
          </div>
        </div>
      </div>

      {/* CONTACT BAR */}
      <div className="footer-contact-bar">
        <div className="footer-contact-item">
          <LocationIcon />
          <span>
            465 Oldham Rd, Rochdale, OL16 4TD, United Kingdom
          </span>
        </div>

        <div className="footer-contact-item">
          <MailIcon />
          <span>info@teachwise.co.uk</span>
        </div>

        <div className="footer-contact-item">
          <PhoneIcon />
          <span>+44 20 3970 3050</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 TW Education Limited . All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a
            href="https://www.teachwise.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.teachwise.co.uk
          </a>
        </div>
      </div>
    </div>
    </footer >
  );
}