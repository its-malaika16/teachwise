import "./analysis_section.css";

const reports = [
  "Invoice spend reports",
  "Forecast spend reports",
  "Reason for cover analysis",
  "Fill rate analysis",
  "Tier performance analysis",
  "Agency performance analysis",
  "Job category reporting",
  "Cost analysis",
  "Length of service reporting",
];

export default function ReportingAnalysisSection() {
  return (
    <section className="reporting-analysis-section">
      <div className="reporting-analysis-container">

        {/* Left Content */}
        <div className="reporting-analysis-content">

          <span className="reporting-analysis-tag">
            MANAGEMENT INFORMATION
          </span>

          <h2>
            Real-Time Analysis &
            <br />
            Reporting
          </h2>

          <p>
            Tried and tested across hundreds of schools,
            the Teachwise platform provides all the
            real-time analysis tools and management
            information you need to inform strategic
            planning and manage your budgets more
            effectively.
          </p>

        </div>

        {/* Right Card */}
        <div className="reporting-analysis-card">

          <h3>Available Reports</h3>

          <ul>
            {reports.map((item, index) => (
              <li key={index}>
                <span className="reporting-check">
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}