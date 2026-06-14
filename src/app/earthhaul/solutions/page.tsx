import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata = {
  title: "Solutions | Industrial Automation & Conveyor Solutions | EarthHaul",
  description:
    "EarthHaul delivers end-to-end industrial solutions — bulk material handling, factory automation, warehouse automation, retrofit upgrades, turnkey projects, and predictive maintenance.",
};

export default function SolutionsPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><SolutionsPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
