import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import QualityPageClient from "./QualityPageClient";

export const metadata = {
  title: "Quality & Certifications | ISO 9001:2015 | EarthHaul",
  description:
    "EarthHaul is ISO 9001:2015 certified with BIS, CE marking, and IS:1891 compliance. Learn about our quality management systems and manufacturing standards.",
};

export default function QualityPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><QualityPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
