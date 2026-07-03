import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import HowItWorks from "./pages/How-it-Works";
import Reporting from "./pages/Reporting";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/platform"
          element={<Platform />}
        />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        <Route
          path="/reporting"
          element={<Reporting />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;