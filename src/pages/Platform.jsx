import PlatformHero from "../components/Platform/hero_section";
import PlatformSection from "../components/HomePage/platform_section";
import PlatformFeatures from "../components/Platform/platform_feature_section";
import DashboardShowcase from "../components/Platform/dashboard_section";
import MobileAppSection from "../components/Platform/mobile_section";
import LiveDemoCTA from "../components/Platform/live_demo_section";

export default function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformSection />
      <PlatformFeatures />
      <DashboardShowcase />
      <MobileAppSection />
      <LiveDemoCTA />
    </>
  );
}


