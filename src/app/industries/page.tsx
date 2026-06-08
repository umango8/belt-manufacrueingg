import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import IndustryDetails from "@/components/industries/IndustryDetails";
import BeltApplications from "@/components/industries/BeltApplications";
import WhyTrustUs from "@/components/industries/WhyTrustUs";
import Certifications from "@/components/industries/Certifications";
import IndustriesFAQ from "@/components/industries/IndustriesFAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | EarthIndia Industries — Industrial Belt Solutions",
  description:
    "EarthIndia Industries serves 10+ industries with premium industrial belt solutions — textile, food processing, automotive, pharmaceutical, logistics, printing, ceramic, paper, and agriculture. ISO 9001:2015 certified manufacturer.",
  keywords: [
    "industrial belt industries",
    "conveyor belt applications",
    "textile industry belts",
    "food processing conveyor belt",
    "automotive belts manufacturer",
    "pharmaceutical conveyor belt",
    "industrial belt solutions",
    "EarthIndia Industries served",
  ],
  openGraph: {
    title: "Industries We Serve | EarthIndia Industries",
    description:
      "Discover how EarthIndia's premium industrial belt solutions power operations across 10+ major industries worldwide.",
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
