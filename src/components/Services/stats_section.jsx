import "./stats_section.css";
import {
  Users,
  Clock3,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: <Users />,
    value: "10,000+",
    label: "Candidates placed",
  },
  {
    icon: <Clock3 />,
    value: "24h",
    label: "Average time to shortlist",
  },
  {
    icon: <ShieldCheck />,
    value: "100%",
    label: "Compliance vetted",
  },
  {
    icon: <CheckCircle />,
    value: "98%",
    label: "Client retention",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}