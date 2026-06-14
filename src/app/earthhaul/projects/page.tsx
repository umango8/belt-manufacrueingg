import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata = {
  title: "Projects | Industrial Conveyor & Automation Case Studies | EarthHaul",
  description:
    "Explore EarthHaul's completed industrial projects — mining conveyors, food processing automation, warehouse sortation systems, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><ProjectsPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
