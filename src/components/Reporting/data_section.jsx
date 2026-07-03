import "./data_section.css";

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-7" />
    <path d="M22 20V8" />
    <path d="M3 20h19" />
  </svg>
);

const ComplianceIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3a9 9 0 1 0 9 9" />
    <path d="M12 3v9h9" />
  </svg>
);

const RevenueIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

const ExportIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

const insights = [
  {
    icon: <AnalyticsIcon />,
    title: "Fill-rate analytics",
    description:
      "Track vacancy fulfilment across sectors, sites and consultants in real time.",
  },
  {
    icon: <ComplianceIcon />,
    title: "Compliance overview",
    description:
      "See every document status at a glance — never miss a DBS or right-to-work renewal.",
  },
  {
    icon: <RevenueIcon />,
    title: "Revenue & margin",
    description:
      "Live gross-profit reporting per placement, per client, per consultant.",
  },
  {
    icon: <ExportIcon />,
    title: "Exportable everything",
    description:
      "CSV, PDF and scheduled email reports — plug into Power BI, Tableau or your own BI stack.",
  },
];

export default function DataInsightsSection() {
  return (
    <section className="data-insights-section">
      <div className="data-insights-container">

        <div className="data-insights-header">
          <h2>Decisions backed by data</h2>

          <p>
            Every action inside Teachwise is captured and
            turned into a metric you can act on.
          </p>
        </div>

        <div className="data-insights-grid">
          {insights.map((item, index) => (
            <div className="data-insight-card" key={index}>
              <div className="data-insight-icon">
                {item.icon}
              </div>

              <div className="data-insight-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
