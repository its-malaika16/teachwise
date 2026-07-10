import "./feature_section.css";

/* SVG Icons */

const ClockIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

const DragIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="8" cy="6" r="1.5" />
    <circle cx="8" cy="12" r="1.5" />
    <circle cx="8" cy="18" r="1.5" />
    <circle cx="16" cy="6" r="1.5" />
    <circle cx="16" cy="12" r="1.5" />
    <circle cx="16" cy="18" r="1.5" />
  </svg>
);

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 20V8" />
    <path d="M10 20V4" />
    <path d="M16 20v-6" />
    <path d="M22 20V10" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="3" />
    <path d="M4 18a5 5 0 0 1 10 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 18a4 4 0 0 1 5 0" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5h6v2" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14 2H6v20h12V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

const ReceiptIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1z" />
    <path d="M9 8h6" />
    <path d="M9 12h5" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 4l8 4-8 4-8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 16l8 4 8-4" />
  </svg>
);

const SlidersIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 7h16" />
    <circle cx="9" cy="7" r="2" />
    <path d="M4 17h16" />
    <circle cx="15" cy="17" r="2" />
  </svg>
);

const features = [
  {
    icon: <ClockIcon />,
    title: "30-Minute Training",
    description: "Platform training takes less than 30 minutes",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile App",
    description: "Available for both Android and iOS devices",
  },
  {
    icon: <DragIcon />,
    title: "Drag & Drop",
    description: "Intuitive vacancy and booking creation",
  },
  {
    icon: <DashboardIcon />,
    title: "Real-Time Dashboards",
    description: "Live analytics at your fingertips",
  },
  {
    icon: <UsersIcon />,
    title: "AWR Management",
    description: "Agency Worker Regulation compliance",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Job Board Integration",
    description: "Seamlessly connect to job boards",
  },
  {
    icon: <FileIcon />,
    title: "Digital Timesheets",
    description: "One-click timesheet authorisation",
  },
  {
    icon: <GlobeIcon />,
    title: "24-Hour Access",
    description: "Manage staffing needs anytime, anywhere",
  },
  {
    icon: <ReceiptIcon />,
    title: "Invoice Consolidation",
    description: "Contractor self-billing for PSC workers",
  },
  {
    icon: <ShieldIcon />,
    title: "Compliance Control",
    description: "Advanced compliance management",
  },
  {
    icon: <LayersIcon />,
    title: "Tier Management",
    description: "Bespoke supplier tiers for each location",
  },
  {
    icon: <SlidersIcon />,
    title: "Report Builder",
    description: "Custom reports for any data point",
  },
];

export default function FeatureSection() {
  return (
    <section className="talent-features-section">

      <div className="talent-features-header">

        <span className="talent-features-tag subheading">
          TALENT & AGENCY MANAGEMENT
        </span>

        <h2>
          Powerful Features for
          <br />
          Schools
        </h2>

        <p>
          Easy to implement, even easier to use. Manage agency workers,
          PSC workers and your own talent bank all from one platform.
        </p>

      </div>

      <div className="talent-features-grid">
        {features.map((feature, index) => (
          <div
            className="talent-feature-card"
            key={index}
          >
            <div className="talent-feature-icon">
              {feature.icon}
            </div>

            <h4>{feature.title}</h4>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}