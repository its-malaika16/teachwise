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
            Whatever your sector — recruitment,
            hospitality, restaurants, office staff,
            or executive search — tell us what you
            need and we'll be in touch.
          </p>

          <form
            className="contact-form"
            action="https://formsubmit.co/info@teachwise.co.uk"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Organisation (optional)"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what you're looking for (optional)"
            />

            {/* Email Subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Website Enquiry"
            />

            {/* Disable FormSubmit captcha */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            {/* Optional auto-response */}
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting Teachwise. We have received your enquiry and will get back to you shortly."
            />

            {/* Optional redirect page after submit */}
            <input
              type="hidden"
              name="_next"
              value="https://teachwise.co.uk/thank-you"
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