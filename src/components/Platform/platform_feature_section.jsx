import "./platform_feature_section.css";

const CloudIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M18 18H7a4 4 0 1 1 .8-8A5 5 0 0 1 18 9a3.5 3.5 0 1 1 0 9z" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 2L4 14h6l-1 8 11-14h-6l1-6z" />
  </svg>
);

const features = [
  {
    icon: <CloudIcon />,
    title: "Cloud-first",
    description:
      "Access from any device, anywhere, with automatic updates and zero infrastructure to manage.",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile ready",
    description:
      "Native-quality apps for candidates and clients accept bookings, upload documents, message in-app.",
  },
  {
    icon: <LockIcon />,
    title: "Secure by design",
    description:
      "GDPR-compliant, encrypted data at rest and in transit, role-based access controls.",
  },
  {
    icon: <ZapIcon />,
    title: "Built for speed",
    description:
      "From vacancy to shortlist in hours. Automations remove the admin so your team focuses on people.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="platform-features">

      <div className="features-header">

        <h2>
          One platform. Every workflow.
        </h2>

        <p>
          Teachwise unifies bookings, timesheets,
          compliance and communication so nothing falls
          between the cracks.
        </p>

      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}