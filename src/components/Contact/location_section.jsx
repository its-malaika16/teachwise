import "./location_section.css";

export default function FindUsSection() {
  const mapUrl =
    "https://www.google.com/maps?q=465+Oldham+Road+Rochdale+OL16+4TD&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=465+Oldham+Road+Rochdale+OL16+4TD";

  return (
    <section className="findus-section">
      <div className="findus-container">

        <div className="findus-header">
          <h2>Find us</h2>
        </div>

        <div className="findus-map-card">
          <iframe
            title="Teachwise Location"
            src={mapUrl}
            loading="lazy"
          />

          <div className="findus-info">
            <h3>465 Oldham Rd</h3>

            <p>
              465 Oldham Rd,
              <br />
              Rochdale,
              <br />
              OL16 4TD
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="findus-btn"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}