import "./contact_section.css";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-overlay"></div>

      <div className="contact-container">

        <div className="contact-content">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>Get in Touch Today</h2>

          <p>
            Whatever your sector — recruitment, hospitality,
            restaurants, office staff, or executive search —
            tell us what you need and we'll be in touch.
          </p>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Company / Organisation (optional)"
            />

            <textarea
              rows="5"
              placeholder="Tell us what you're looking for (optional)"
            />

            <button type="submit">
              Send Enquiry
            </button>

          </form>

          <div className="contact-details">

            <div className="contact-item">
              <Phone size={15} />
              <span>0203 970 3050</span>
            </div>

            <div className="contact-item">
              <Mail size={15} />
              <span>info@teachwise.co.uk</span>
            </div>

          </div>

          <div className="contact-address">
            <MapPin size={15} />
            <span>
              1 Quality Court, Chancery Lane,
              London WC2A 1HR
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}