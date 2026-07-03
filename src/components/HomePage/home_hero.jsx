import "./home_hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">

      {/* Background Image */}
      <div className="hero-bg"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <span className="hero-tag">
          Technology for Schools
        </span>

        <h1 className="hero-title">
          Streamline Your
          <br />
          <span>Recruitment</span>
          <br />
          Process
        </h1>

        <p className="hero-description">
          Our unique software platform and mobile app have
          been specifically designed for busy education
          professionals, with school recruitment needs in mind.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Request a Free Demo
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}