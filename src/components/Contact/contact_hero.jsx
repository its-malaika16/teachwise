import "./contact_hero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">

      {/* Decorative Elements */}
      <div className="contact-shape contact-shape-left"></div>
      <div className="contact-shape contact-shape-right"></div>
      <div className="contact-circle"></div>

      <div className="contact-hero-content">

        <div className="contact-tag-wrapper">
          <span className="contact-line"></span>

          <span className="contact-tag">
            CONTACT
          </span>

          <span className="contact-line"></span>
        </div>

        <h1>
          Let's <span>talk</span>
        </h1>

        <p>
          Whether you're hiring, exploring the platform,
          or joining our talent pool — we'd love to hear
          from you.
        </p>

      </div>

    </section>
  );
}