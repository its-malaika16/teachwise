import "./onboarding_journey_section.css";

const journeySteps = [
  {
    label: "Week 1",
    title: "Discovery & Configuration",
    description:
      "We map your workflows, brand the platform and configure roles.",
  },
  {
    label: "Week 2",
    title: "Data Migration",
    description:
      "Candidates, clients, historic placements and compliance records imported and validated.",
  },
  {
    label: "Week 3",
    title: "Training & Go-Live",
    description:
      "Live training for consultants, managers and finance. Soft launch with active support.",
  },
  {
    label: "Ongoing",
    title: "Growth & Optimisation",
    description:
      "Quarterly reviews, new feature rollouts and continuous best-practice guidance.",
  },
];

export default function OnboardingJourney() {
  return (
    <section className="journey-section">
      <div className="journey-container">

        <div className="journey-header">
          <h2>Your onboarding journey</h2>

          <p>
            A dedicated success manager guides you
            every step of the way.
          </p>
        </div>

        <div className="journey-list">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="journey-card"
            >
              <div className="journey-label">
                {step.label}
              </div>

              <div className="journey-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}