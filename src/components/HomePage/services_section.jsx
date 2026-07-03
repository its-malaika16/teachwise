import "./services_section.css";

const UsersIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HospitalityIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 4v7" />
    <path d="M10 4v7" />
    <path d="M8 11v9" />
    <path d="M15 4v16" />
    <path d="M15 4c3 0 3 4 0 4" />
  </svg>
);

const RestaurantIcon = () => (
  
<svg viewBox="0 0 24 24">
    <path d="M4 14h16" />

    <path d="M6 14a6 6.5 0 0 1 12 0" />

    <path d="M12 6V4" />

    <circle cx="12" cy="4" r="1" />

    <path d="M3 19h18" />
  </svg>

);

const OfficeIcon = () => (
  
<svg viewBox="0 0 24 24">
    <rect
      x="4"
      y="7"
      width="16"
      height="12"
      rx="2"
    />

    <path d="M9 7V5h6v2" />

    <path d="M4 12h16" />

    <path d="M12 12v2" />
  </svg>
);

const CrownIcon = () => (
  
<svg viewBox="0 0 24 24">
    <path d="M4 8l4 4 4-6 4 6 4-4-2 8H6L4 8z" />

    <path d="M5 21h14" />
  </svg>

);

const services = [
  {
    icon: <UsersIcon />,
    title: "General Recruitment",
    description:
      "End-to-end recruitment solutions for permanent and temporary roles across all sectors. We match the right talent to the right position, fast.",
    points: [
      "Temporary & permanent placements",
      "Multi-sector expertise",
      "Fast turnaround",
    ],
  },
  {
    icon: <HospitalityIcon />,
    title: "Hospitality",
    description:
      "Specialist staffing for hotels, events, catering, and leisure. From front-of-house to management, we supply experienced hospitality professionals.",
    points: [
      "Hotels & events",
      "Front-of-house staff",
      "Management roles",
    ],

  },
  {
    icon: <RestaurantIcon />,
    title: "Restaurants",
    description:
      "Dedicated restaurant staffing covering chefs, waiting staff, bartenders, and kitchen teams. Reliable, vetted candidates ready to deliver.",
    points: [
      "Chefs & kitchen teams",
      "Waiting & bar staff",
      "Last-minute cover",
    ],
  },
  {
    icon: <OfficeIcon />,
    title: "Specialised Office Staff",
    description:
      "From executive assistants to finance professionals, we source highly skilled office staff tailored to your business needs and culture.",
    points: [
      "Admin & PA roles",
      "Finance & HR specialists",
      "Skilled professionals",
    ],
  },
  {
    icon: <CrownIcon />,
    title: "Head Hunting",
    description:
      "Discreet, targeted executive search for senior leadership and hard-to-fill positions. We identify and approach top-tier talent on your behalf.",
    points: [
      "Executive search",
      "Senior leadership",
      "Confidential & targeted",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">

      <div className="services-header">
        <span className="small-title">OUR SERVICES</span>

        <h2>Recruitment Across Every Sector</h2>

        <p>
          Whether you need temporary cover or a permanent hire, we
          deliver tailored recruitment solutions for every industry.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              service.featured ? "featured" : ""
            }`}
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">
              {service.description}
            </p>

            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  );
}