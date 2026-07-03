import "./reporting_section.css";

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

export default function ReportingSection() {
  return (
    <section className="reporting-section">

      <div className="reporting-container">

        {/* LEFT */}
        <div className="reporting-content">

          <span className="reporting-tag">
            MANAGEMENT INFORMATION
          </span>

          <h2>
            Real-Time Analysis &
            <br />
            Reporting
          </h2>

          <p>
            Tried and tested across hundreds of schools, the
            Teachwise platform provides all the real-time analysis
            tools and management information you need to inform
            strategic planning and manage your budgets more
            effectively.
          </p>

        </div>

        {/* RIGHT */}
        <div className="reports-card">

          <h3>Available Reports</h3>

          <ul>
            {reports.map((report, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {report}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
}