import "./integration_section.css";

const integrations = [
  "Xero",
  "Sage",
  "QuickBooks",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Stripe",
  "DocuSign",
];

export default function IntegrationsSection() {
  return (
    <section className="integrations-section">

      <div className="integrations-container">

        <div className="integrations-header">
          <h2>Integrations</h2>

          <p>
            Teachwise plays nicely with the tools you already use —
            payroll, accounting, calendar and identity providers.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((item, index) => (
            <div
              className="integration-card"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="integrations-btn-wrapper">
          <button className="integrations-btn">
            Request a feature demo
          </button>
        </div>

      </div>

    </section>
  );
}