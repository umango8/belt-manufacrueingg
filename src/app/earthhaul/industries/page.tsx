import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata = {
  title: "Industries We Serve | EarthHaul Conveyor & Automation",
  description:
    "EarthHaul serves 10+ industries including mining, automotive, food processing, pharma, warehousing, cement, logistics, and more with custom conveyor and automation solutions.",
};

export default function IndustriesPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><IndustriesPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
