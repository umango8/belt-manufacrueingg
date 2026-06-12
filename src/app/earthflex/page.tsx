import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import HeroSection from "@/components/earthflex/sections/HeroSection";
import StatsSection from "@/components/earthflex/sections/StatsSection";
import AboutSection from "@/components/earthflex/sections/AboutSection";
import WhatWeServeSection from "@/components/earthflex/sections/WhatWeServeSection";
import ProductsSection from "@/components/earthflex/sections/ProductsSection";
// import IndustriesSection from "@/components/earthflex/sections/IndustriesSection";  
import ProcessSection from "@/components/earthflex/sections/ProcessSection";
import WhyUsSection from "@/components/earthflex/sections/WhyUsSection";
import CTASection from "@/components/earthflex/sections/CTASection";
import ReviewsSection from "@/components/earthflex/sections/ReviewsSection";
import WhatWeServe from "@/components/earthflex/sections/WhatServe";
import FAQSection from "@/components/earthflex/sections/FAQSection";

export default function EarthFlexHome() {
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
        <ReviewsSection />
        <FAQSection />
     <div className="section-padding">
         <CTASection />
     </div>
      </main>
      <Footer />
    </>
  );
}
