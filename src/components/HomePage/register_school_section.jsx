import "./register_school_section.css";

const steps = [
  {
    number: "1",
    title: "Manage Teacher Absence",
    description:
      "Quick and easy solutions when unexpected absences arise.",
  },
  {
    number: "2",
    title: "Get Matched to Supply Teachers",
    description:
      "Work with the best supply teachers for your school.",
  },
  {
    number: "3",
    title: "Only Pay for What You Use",
    description:
      "No monthly fees or onboarding charges.",
  },
  {
    number: "4",
    title: "Improve Absence Rates with Insight",
    description:
      "Gain an understanding of patterns in teacher absence through data collection.",
  },
];

export default function RegisterSchool() {
  return (
    <section className="register-section">

      <div className="register-header">
        <span className="register-tag subheading">
          REGISTER YOUR SCHOOL
        </span>

        <h2>Getting Started Is Easy</h2>

        <p>
          It's quick and simple we just need your email to get started.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">

            <div className="step-circle">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}