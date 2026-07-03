import "./hero_section.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">

      {/* Decorative Shapes */}
      <div className="shape shape-left" />
      <div className="shape shape-right" />
      <div className="circle-outline" />

      <div className="services-hero-content">

        <div className="services-tag-wrapper">
          <span className="line"></span>

          <span className="services-tag">
            OUR SERVICES
          </span>

          <span className="line"></span>
        </div>

        <h1>
          Specialist recruitment
          <br />
          across <span>five sectors</span>
        </h1>

        <p>
          From classroom cover to executive search —
          one partner, one platform, and a shortlist
          ready in hours.
        </p>

      </div>

    </section>
  );
}
