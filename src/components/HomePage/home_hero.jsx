import "./home_hero.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">

      {/* Background Image */}
      <div className="hero-bg"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <span className="hero-tag subheading">
          Technology for Schools
        </span>

        <h1 className="hero-title">
          Streamline Your
          <br />
          <span className="sub-text">Recruitment</span>
          <br />
          Process
        </h1>

        <p className="hero-description">
          Our unique software platform and mobile app have
          been specifically designed for busy education
          professionals, with school recruitment needs in mind.
        </p>

        <div className="hero-buttons">

          
<div className="hero-buttons">
  <Link to="/contact">
    <button className="primary-btn">
      Request a Free Demo
    </button>
  </Link>

  <Link to="/features">
    <button className="secondary-btn">
      Learn More
    </button>
  </Link>
</div>


        </div>

      </div>

    </section>
  );
}