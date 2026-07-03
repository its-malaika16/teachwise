import "./hero_section.css";

export default function FeaturesHero() {
  return (
    <section className="features-hero">

      {/* Decorative Elements */}
      <div className="corner-shape left"></div>
      <div className="corner-shape right"></div>
      <div className="hero-circle"></div>

      <div className="features-hero-content">

        <div className="hero-tag-wrapper">
          <span className="tag-line"></span>

          <span className="hero-tag">
            FEATURES
          </span>

          <span className="tag-line"></span>
        </div>

        <h1>
          Every tool your
          <br />
          <span>recruitment team</span> needs
        </h1>

        <p>
          Bookings, compliance, finance and insights —
          connected modules that eliminate double entry
          and manual admin.
        </p>

      </div>

    </section>
  );
}