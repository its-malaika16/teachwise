import "./reporting_cta_section.css";
import { Link } from "react-router-dom";

export default function ReportingDemoCTA() {
  return (
    <section className="reporting-demo-section">
      <div className="reporting-demo-container">

        <h2>
          See your numbers in a live demo
        </h2>

        <p>
          We'll load sample data that mirrors your business
          so you can explore the dashboards that matter to you.
        </p>
        <Link to="/contact">
          <button className="reporting-demo-btn">
            Request a reporting demo
          </button>
        </Link>
      </div>
    </section>
  );
}