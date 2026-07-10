import "./hero_section.css";

export default function PlatformHero() {
  return (
    <section className="platform-hero">

      {/* Decorative Elements */}
      <div className="hero-corner hero-corner-left"></div>
      <div className="hero-corner hero-corner-right"></div>
      <div className="hero-circle"></div>

      <div className="platform-hero-content">

        <div className="platform-tag-wrapper">
          <span className="tag-line"></span>

          <span className="platform-tag subheading">
            THE PLATFORM
          </span>

          <span className="tag-line"></span>
        </div>

        <h1 className="platform-title">
          Software and mobile
          <br />
          apps <span className="sub-text">built for</span>
          <br />
          <span className="sub-text">recruitment</span>
        </h1>

        <p className="platform-description">
          Cloud-first, mobile-ready, secure by design
          everything your team needs in one connected
          workspace.
        </p>

      </div>

    </section>
  );
}