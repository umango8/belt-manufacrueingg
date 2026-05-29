import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeServeSection from "@/components/sections/WhatWeServeSection";
import ProductsSection from "@/components/sections/ProductsSection";
// import IndustriesSection from "@/components/sections/IndustriesSection";  
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhatWeServe from "@/components/sections/WhatServe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        {/* <WhatWeServeSection /> */}
        <WhatWeServe/>
        <ProductsSection />
        {/* <IndustriesSection /> */}
        <ProcessSection />
        <WhyUsSection />
        <CTASection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}

