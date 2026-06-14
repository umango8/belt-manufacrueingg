import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import HeroSection from "@/components/earthhaul/sections/HeroSection";
import AboutPreviewSection from "@/components/earthhaul/sections/AboutPreviewSection";
import SolutionsSection from "@/components/earthhaul/sections/SolutionsSection";
import ProductsSection from "@/components/earthhaul/sections/ProductsSection";
import IndustriesSection from "@/components/earthhaul/sections/IndustriesSection";
import ProcessSection from "@/components/earthhaul/sections/ProcessSection";
import CTASection from "@/components/earthhaul/sections/CTASection";

export const metadata = {
  title: "EarthHaul | Smart Conveyor & Industrial Automation Solutions",
  description:
    "EarthHaul engineers premium conveyor systems and intelligent automation solutions for factories, warehouses, and manufacturing industries. ISO 9001:2015 certified. 15+ years of industrial engineering excellence.",
  keywords: [
    "EarthHaul",
    "conveyor systems",
    "industrial automation",
    "material handling",
    "conveyor engineering",
    "factory automation",
    "belt conveyor systems",
    "heavy duty conveyor",
    "industrial conveyor manufacturer India",
    "automation solutions",
    "Earth India Group",
  ],
};

export default function EarthHaulPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main>
        <HeroSection />
        <AboutPreviewSection />
        <SolutionsSection />
        <ProductsSection />
        <IndustriesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <EarthHaulFooter />
    </div>
  );
}
