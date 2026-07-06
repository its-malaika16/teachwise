import "./live_demo_section.css";
import { Link } from "react-router-dom";

export default function LiveDemoCTA() {
  return (
    <section className="live-demo">

      <div className="live-demo-content">

        <h2>See it in action</h2>

        <Link to="/contact">
          <button className="live-demo-btn">
            Book a live walkthrough
          </button>
        </Link>
      </div>

    </section>
  );
}