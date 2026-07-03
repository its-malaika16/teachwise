import HomeHero from "../components/HomePage/home_hero";
import ServicesSection from "../components/HomePage/services_section";
import PlatformSection from "../components/HomePage/platform_section";
import FeaturesSection from "../components/HomePage/feature_section";
import RegisterSection from "../components/HomePage/register_school_section";
import ComparisonSection from "../components/HomePage/comparison_section";
import ReportingSection from "../components/HomePage/reporting_section";
import ContactSection from "../components/HomePage/contact_section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <PlatformSection />
      <FeaturesSection />
      <RegisterSection />
      <ComparisonSection />
      <ReportingSection />
      <ContactSection />
    </>
  );
}

    
