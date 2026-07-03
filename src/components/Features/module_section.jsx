import "./module_section.css";

const modules = [
  {
    title: "Recruitment & Bookings",
    items: [
      "Vacancy management",
      "Automated candidate matching",
      "Shift scheduling",
      "Client self-service portal",
    ],
  },
  {
    title: "Compliance",
    items: [
      "Right-to-work verification",
      "DBS / safeguarding tracking",
      "Document expiry alerts",
      "Audit-ready records",
    ],
  },
  {
    title: "Finance",
    items: [
      "Digital timesheets",
      "Automated invoicing",
      "Payroll export",
      "Client statement generation",
    ],
  },
  {
    title: "Insights",
    items: [
      "Real-time dashboards",
      "Custom reports",
      "Fill-rate analytics",
      "Consultant performance tracking",
    ],
  },
];

export default function ModulesSection() {
  return (
    <section className="modules-section">

      <div className="modules-header">

        <h2>
          Everything you need — nothing you don't
        </h2>

        <p>
          Purpose-built modules that plug into each
          other so your team never re-keys data.
        </p>

      </div>

      <div className="modules-grid">

        {modules.map((module, index) => (
          <div className="module-card" key={index}>

            <h3>{module.title}</h3>

            <ul>
              {module.items.map((item, i) => (
                <li key={i}>
                  <span className="check-circle">✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}