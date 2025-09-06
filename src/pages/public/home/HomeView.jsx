import { HeroSection } from "./components/sections/index";
import VehicleChecksSection from "./components/sections/VehicleChecksSection";
import PricingSection from "./components/sections/PricingSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CTASection from "./components/sections/CTASection";
// import MergedLoginComponent from "../../../desginTest/DesginTest";

const HomeView = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <VehicleChecksSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomeView;
