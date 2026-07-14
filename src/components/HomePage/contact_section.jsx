import "./contact_section.css";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://teachwise.co.uk/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Enquiry sent successfully!");

        setFormData({
          name: "",
          email: "",
          company: "",
          description: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

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
            Whatever your sector recruitment,
            hospitality, restaurants, office staff,
            or executive search tell us what you
            need and we'll be in touch.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Organisation"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              rows="5"
              placeholder="Tell us what you're looking for"
              value={formData.description}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry"}
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