import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CertificationsHero from "@/components/certifications/CertificationsHero";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import TestingTimeline from "@/components/certifications/TestingTimeline";
import CertificationsFAQ from "@/components/certifications/CertificationsFAQ";
import CertificationsCTA from "@/components/certifications/CertificationsCTA";

export const metadata: Metadata = {
  title: "Certifications & Quality Standards | EarthIndia Industries",
  description:
    "Delivering high-performance industrial belt solutions backed by strict quality standards, ISO 9001:2015, ISO 14001:2015, CE compliance, and rigid lab testing.",
  keywords: [
    "conveyor belt certifications",
    "ISO 9001:2015 conveyor belt",
    "ISO 14001 compliance",
    "ISO 45001 safety certified",
    "CE certified industrial belts",
    "DIN 22102 conveyor standard",
    "quality testing laboratory",
    "EarthIndia compliance portfolio",
  ],
  openGraph: {
    title: "Certifications & Quality Standards | EarthIndia Industries",
    description:
      "Explore EarthIndia's premium compliance certifications, testing timelines, and globally certified bulk material handling conveyor products.",
    type: "website",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        <CertificationsHero />
        <CertificationsGrid />
        <TestingTimeline />
        <CertificationsFAQ />
        <div className="section-padding">
          <CertificationsCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
