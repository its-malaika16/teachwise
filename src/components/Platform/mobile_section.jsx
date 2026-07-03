import "./mobile_section.css";

export default function MobileAppSection() {
  return (
    <section className="mobile-app-section">
      <div className="mobile-app-container">

        {/* LEFT CONTENT */}
        <div className="mobile-content">
          <h2>Mobile app</h2>

          <p>
            Candidates accept shifts, upload right-to-work
            documents and submit timesheets from their phone.
            Clients approve everything in a tap.
          </p>

          <ul>
            <li>Push notifications for new bookings</li>
            <li>In-app messaging and document capture</li>
            <li>Offline-first design</li>
          </ul>
        </div>

        {/* PHONE IMAGE */}
        <div className="mobile-image">
          <img
            src="/assets/images/mobile.png"
            alt="Teachwise Mobile App"
          />
        </div>

      </div>
    </section>
  );
}