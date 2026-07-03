import "./comparison_section.css";

const comparisonData = [
  {
    feature: "Transparent Pricing",
    teachwise: true,
    agencies: true,
  },
  {
    feature: "Absence Reporting",
    teachwise: true,
    agencies: false,
  },
  {
    feature: "Easy To Use App",
    teachwise: true,
    agencies: false,
  },
  {
    feature: "Centralised Compliance",
    teachwise: true,
    agencies: false,
  },
  {
    feature: "One Click Timesheets",
    teachwise: true,
    agencies: false,
  },
  {
    feature: "Real-Time Dashboards",
    teachwise: true,
    agencies: false,
  },
  {
    feature: "No Monthly Fees",
    teachwise: true,
    agencies: false,
  },
];

export default function ComparisonSection() {
  return (
    <section className="comparison-section">

      <div className="comparison-header">
        <span className="comparison-tag">
          WHY TEACHWISE?
        </span>

        <h2>See the Difference</h2>
      </div>

      <div className="comparison-table-wrapper">

        <table className="comparison-table">

          <thead>
            <tr>
              <th>Feature</th>
              <th>Teachwise</th>
              <th>Other Agencies</th>
            </tr>
          </thead>

          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index}>
                <td>{item.feature}</td>

                <td>
                  {item.teachwise ? (
                    <span className="check">✓</span>
                  ) : (
                    <span className="cross">✕</span>
                  )}
                </td>

                <td>
                  {item.agencies ? (
                    <span className="check">✓</span>
                  ) : (
                    <span className="cross">✕</span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}