import "./platform_section.css";

export default function PlatformSection() {
  return (
    <section className="platform-section">

      <div className="platform-container">

        {/* LEFT */}
        <div className="platform-text">

          <span className="section-tag">
            OUR PLATFORM
          </span>

          <h2>
            Everything You Need to
            <br />
            Manage Supply Staff
          </h2>

          <p>
            The software uses specialist education technology to
            provide you with everything you need to efficiently
            connect with and manage supply staff — from vacancy
            creation and timesheet approval to invoicing and
            self-billing.
          </p>

          <p>
            Submit a job posting, match it to our candidate
            database and communicate the assignment to them —
            filling your vacancies quickly and efficiently.
          </p>

        </div>

        {/* RIGHT */}
        <div className="platform-image">

          <img
            src="/assets/images/crm.png"
            alt="Dashboard"
            className="laptop-image"
          />

        </div>

      </div>

    </section>
  );
}