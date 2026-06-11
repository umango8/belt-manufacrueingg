import type { Metadata } from "next";
import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import AboutHero from "@/components/earthflex/about/AboutHero";
import CompanyIntroHistory from "@/components/earthflex/about/CompanyIntroHistory";
import MissionVision from "@/components/earthflex/about/MissionVision";
import WhyChooseUs from "@/components/earthflex/about/WhyChooseUs";
import CTASection from "@/components/earthflex/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Earth Flex Industries — Premium Conveyor Belt Manufacturer",
  description:
    "Discover Earth Flex Industries — a leading manufacturer of premium industrial conveyor belts since 2008. Learn about our history, mission, vision, and why top industries trust us for heavy-duty conveyor solutions.",
  keywords: [
    "about Earth Flex",
    "conveyor belt manufacturer history",
    "industrial belt company",
    "Earth Flex Industries about",
    "manufacturing excellence",
  ],
  openGraph: {
    title: "About Us | Earth Flex Industries",
    description:
      "Learn about Earth Flex Industries — engineering excellence in premium conveyor belt manufacturing since 2008.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyIntroHistory />
        <MissionVision />
        <WhyChooseUs />
        <div className="section-padding relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/4 tracking-[0.10em] leading-none uppercase translate-y-[28%] select-none">
          Earth Flex
        </span>
      </div>
      {/* <div className="absolute inset-x-0 top-0 flex justify-center overflow-visible pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/8 tracking-[0.10em] leading-none uppercase translate-y-[-80%] select-none">
          Earth Flex
        </span>
      </div> */}
            <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
