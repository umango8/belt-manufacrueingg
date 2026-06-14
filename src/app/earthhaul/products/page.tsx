import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import ProductsPageClient from "./ProductsPageClient";

export const metadata = {
  title: "Products | Conveyor Systems & Automation | EarthHaul",
  description:
    "Explore EarthHaul's full range of industrial conveyor systems, automation solutions, material handling equipment, and custom engineering services.",
};

export default function ProductsPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />
      <main>
        <ProductsPageClient />
      </main>
      <EarthHaulFooter />
    </div>
  );
}
