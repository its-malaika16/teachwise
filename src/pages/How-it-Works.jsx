import HowItWorksHero from "../components/How-it-Works/howitwork_hero";
import RegisterSchool from "../components/HomePage/register_school_section";
import OnboardingJourney from "../components/How-it-Works/onboarding_journey_section";
import Comparison from "../components/HomePage/comparison_section";
import FAQSection from "../components/How-it-Works/faq_section";

export default function HowItWorks() {
  return (
    <>
      <HowItWorksHero />
      <RegisterSchool />
      <OnboardingJourney />
      <Comparison />
      <FAQSection />
    </>
  );
}

