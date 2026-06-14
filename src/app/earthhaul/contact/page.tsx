import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact EarthHaul | Get a Conveyor & Automation Quote",
  description:
    "Contact EarthHaul for a free project consultation. Get a custom quote for conveyor systems, automation solutions, and material handling engineering.",
};

export default function ContactPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main><ContactPageClient /></main>
      <EarthHaulFooter />
    </div>
  );
}
