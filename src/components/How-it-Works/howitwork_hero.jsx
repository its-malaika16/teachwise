import "./howitwork_hero.css";

export default function HowItWorksHero() {
  return (
    <section className="how-hero">

      <div className="how-hero-shape how-shape-left"></div>
      <div className="how-hero-shape how-shape-right"></div>
      <div className="how-hero-circle"></div>

      <div className="how-hero-content">

        <div className="how-hero-tag-wrapper">
          <span className="how-line"></span>

          <span className="how-hero-tag subheading">
            HOW IT WORKS
          </span>

          <span className="how-line"></span>
        </div>

        <h1>
          From sign-up to live in
          <br />
          <span className="sub-text">under a week</span>
        </h1>

        <p>
          A guided onboarding, hands-on training and a
          dedicated success manager so your team hits
          the ground running.
        </p>

      </div>

    </section>
  );
}