import "./industries_section.css";

const industries = [
  {
    title: "Education",
    description:
      "Supply teachers, cover supervisors, TAs and SEN specialists — matched to your school's ethos and curriculum needs.",
  },
  {
    title: "Hospitality",
    description:
      "Front-of-house, kitchen porters, event staff and chefs, ready for peak service with full right-to-work checks.",
  },
  {
    title: "Restaurants",
    description:
      "Chefs de partie, sous chefs, and service teams for independents and multi-site operators.",
  },
  {
    title: "Office & Professional",
    description:
      "Executive assistants, finance, HR and operations professionals for interim and permanent roles.",
  },
  {
    title: "Executive Search",
    description:
      "Confidential headhunting for senior leadership and hard-to-fill niche positions across sectors.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-header">
        <h2>Industries we specialise in</h2>

        <p>
          Deep sector expertise, backed by a technology platform
          that keeps every placement compliant, transparent and fast.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}