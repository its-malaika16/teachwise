import "./reporting_hero.css";

export default function ReportingHero() {
  return (
    <section className="reporting-hero">

      <div className="reporting-shape reporting-shape-left"></div>
      <div className="reporting-shape reporting-shape-right"></div>
      <div className="reporting-circle"></div>

      <div className="reporting-content">

        <div className="reporting-tag-wrapper">
          <span className="reporting-line"></span>

          <span className="reporting-tag subheading">
            REPORTING & INSIGHTS
          </span>

          <span className="reporting-line"></span>
        </div>

        <h1>
          Real-time analysis
          <span className="sub-text"> you</span>
          <br />
          <span className="sub-text">can act on</span>
        </h1>

        <p>
          Live dashboards, compliance heat-maps and margin
          reports the whole business, one screen.
        </p>

      </div>

    </section>
  );
}