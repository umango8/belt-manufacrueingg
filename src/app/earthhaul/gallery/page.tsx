import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import GalleryPageClient from "./GalleryPageClient";

export const metadata = {
  title: "Gallery | Conveyor Systems & Projects | EarthHaul",
  description:
    "Browse EarthHaul's project and facility gallery — completed conveyor systems, automation installations, manufacturing facility, and team photos.",
};

export default function GalleryPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><GalleryPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
