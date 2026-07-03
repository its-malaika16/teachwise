import "./dashboard_section.css";

export default function DashboardShowcase() {
  return (
    <section className="dashboard-showcase">

      <div className="dashboard-container">

        {/* IMAGE SIDE */}
        <div className="dashboard-image">

          <img
            src="/assets/images/desktop.png"
            alt="Desktop Dashboard"
          />

        </div>

        {/* CONTENT SIDE */}
        <div className="dashboard-content">

          <h2>Desktop dashboard</h2>

          <p>
            A single pane of glass across every vacancy,
            candidate and placement. Live filters, saved
            views and one-click exports keep managers
            in control.
          </p>

          <ul>
            <li>Drag-and-drop pipeline</li>
            <li>Automated compliance alerts</li>
            <li>Custom reporting and CSV/PDF export</li>
          </ul>

        </div>

      </div>

    </section>
  );
}