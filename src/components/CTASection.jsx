import "./CTASection.css";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <h2>
          Not sure which service fits?
        </h2>

        <p>
          Tell us about the role — we'll recommend the right
          team and turn around a shortlist in hours, not weeks.
        </p>

        <Link to="/contact">
          <button className="cta-btn">
            Talk to a specialist
          </button>
        </Link>


      </div>

    </section>
  );
}