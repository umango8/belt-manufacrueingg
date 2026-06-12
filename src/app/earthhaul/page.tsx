import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import HeroSection from "@/components/earthhaul/sections/HeroSection";
import StatsSection from "@/components/earthhaul/sections/StatsSection";
import SolutionsSection from "@/components/earthhaul/sections/SolutionsSection";
import IndustriesSection from "@/components/earthhaul/sections/IndustriesSection";
import WhyChooseSection from "@/components/earthhaul/sections/WhyChooseSection";
import ProcessSection from "@/components/earthhaul/sections/ProcessSection";
import CaseStudiesSection from "@/components/earthhaul/sections/CaseStudiesSection";
import TrustSection from "@/components/earthhaul/sections/TrustSection";
import CTASection from "@/components/earthhaul/sections/CTASection";

export const metadata = {
  title: "EarthHaul | Smart Conveyor & Automation Systems | Earth India Group",
  description:
    "EarthHaul engineers advanced conveyor and industrial automation systems for mining, steel, cement, food processing, warehousing, and heavy manufacturing industries. ISO 9001:2015 certified.",
  keywords: [
    "EarthHaul",
    "conveyor systems",
    "industrial automation",
    "material handling",
    "conveyor engineering",
    "factory automation",
    "belt conveyor systems",
    "heavy duty conveyor",
    "Earth India Group",
  ],
};

export default function EarthHaulPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <SolutionsSection />
        <IndustriesSection />
        <WhyChooseSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TrustSection />
        <CTASection />
      </main>
      <EarthHaulFooter />
    </div>
  );
}
