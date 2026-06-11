import type { Metadata } from "next";
import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import IndustriesHero from "@/components/earthflex/industries/IndustriesHero";
import IndustriesGrid from "@/components/earthflex/industries/IndustriesGrid";
import IndustryDetails from "@/components/earthflex/industries/IndustryDetails";
import BeltApplications from "@/components/earthflex/industries/BeltApplications";
import WhyTrustUs from "@/components/earthflex/industries/WhyTrustUs";
import Certifications from "@/components/earthflex/industries/Certifications";
import IndustriesFAQ from "@/components/earthflex/industries/IndustriesFAQ";
import CTASection from "@/components/earthflex/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | Earth Flex Industries — Industrial Belt Solutions",
  description:
    "Earth Flex Industries serves 10+ industries with premium industrial belt solutions — textile, food processing, automotive, pharmaceutical, logistics, printing, ceramic, paper, and agriculture. ISO 9001:2015 certified manufacturer.",
  keywords: [
    "industrial belt industries",
    "conveyor belt applications",
    "textile industry belts",
    "food processing conveyor belt",
    "automotive belts manufacturer",
    "pharmaceutical conveyor belt",
    "industrial belt solutions",
    "Earth Flex Industries served",
  ],
  openGraph: {
    title: "Industries We Serve | Earth Flex Industries",
    description:
      "Discover how Earth Flex's premium industrial belt solutions power operations across 10+ major industries worldwide.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesHero />
        <IndustriesGrid />
        {/* <IndustryDetails /> */}
        <BeltApplications />
        {/* <WhyTrustUs /> */}
        <Certifications />
        <IndustriesFAQ />
        <div className="section-padding">
                  <CTASection />
              </div>
      </main>
      <Footer />
    </>
  );
}
