import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import InfrastructurePageClient from "./InfrastructurePageClient";

export const metadata = {
  title: "Infrastructure | Manufacturing Facility | EarthHaul",
  description:
    "EarthHaul's state-of-the-art 40,000 sq ft manufacturing facility with advanced CNC machinery, testing labs, and a team of 50+ engineers.",
};

export default function InfrastructurePage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><InfrastructurePageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
