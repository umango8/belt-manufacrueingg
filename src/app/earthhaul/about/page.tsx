import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About EarthHaul | Industrial Conveyor & Automation Engineering",
  description:
    "Learn about EarthHaul — 15+ years of premium industrial conveyor and automation engineering. Our mission, vision, team, and commitment to industrial excellence.",
};

export default function AboutPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main>
        <AboutPageClient />
      </main>
      <EarthHaulFooter />
    </div>
  );
}
