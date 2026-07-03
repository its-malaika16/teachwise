import "./info_card.css";

const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.9-1.8a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const contactData = [
  {
    icon: <MailIcon />,
    title: "Email",
    text: "hello@teachwise.co.uk",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    text: "+44 (0)1706 000 000",
  },
  {
    icon: <LocationIcon />,
    title: "Office",
    text: "465 Oldham Rd, Rochdale, OL16 4TD",
  },
  {
    icon: <ClockIcon />,
    title: "Hours",
    text: "Mon–Fri, 8:30am – 6:00pm",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">

        {contactData.map((item, index) => (
          <div
            className="contact-info-card"
            key={index}
          >
            <div className="contact-info-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
}