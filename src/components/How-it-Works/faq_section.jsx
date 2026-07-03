import "./faq_section.css";

const faqs = [
  {
    question: "How quickly can we go live?",
    answer:
      "Most clients are onboarded and live within 5 working days, including data migration and team training.",
  },
  {
    question: "Do you support multiple sites?",
    answer:
      "Yes — Teachwise is multi-site and multi-brand by default, with role-based access per location.",
  },
  {
    question: "What about data migration?",
    answer:
      "Our onboarding team handles the full migration from spreadsheets or legacy systems. No data left behind.",
  },
  {
    question: "Is training included?",
    answer:
      "Every plan includes live onboarding sessions, an on-demand video library and unlimited email support.",
  },
];

export default function FAQSection() {
  return (
    <section className="faq-section">

      <div className="faq-container">

        <div className="faq-header">
          <h2>Frequently asked questions</h2>
        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>

              <h3>{faq.question}</h3>

              <p>{faq.answer}</p>

            </div>
          ))}

        </div>

        <div className="faq-btn-wrapper">
          <button className="faq-btn">
            Ask us anything
          </button>
        </div>

      </div>

    </section>
  );
}