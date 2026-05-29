"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ProductsSection() {
  const [selectedId, setSelectedId] = useState(PRODUCTS[0].id);

  // Find the currently active product object
  const activeProduct = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[0];

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const container = e.currentTarget;
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <section id="products" className="section-padding bg-background-soft relative overflow-hidden">
      {/* Scrollbar Styling Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        .product-list-scroll::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .product-list-scroll::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.05);
          border-radius: 99px;
        }
        .product-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.35);
          border-radius: 99px;
          transition: background 0.2s;
        }
        .product-list-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.6);
        }
      `}} />

      {/* Subtle Dot Grid Pattern Vector Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] select-none"
        style={{
          backgroundImage: "radial-gradient(#F97316 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Top Right Blueprint Compass/Gear Vector */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none select-none z-0 translate-x-[20%] translate-y-[-20%] opacity-[0.06] text-accent">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" strokeWidth="0.5" strokeDasharray="4 2" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.2" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.2" />
          <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" strokeWidth="0.2" strokeDasharray="2 2" />
          <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" strokeWidth="0.2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Huge Background Vector Watermark in Accent Color (Spanning full width) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[15vw] font-black text-accent/[0.03] tracking-[0.15em] leading-none uppercase translate-y-[25%] select-none">
          BELTFORGE
        </span>
      </div>

      <div className="container-custom relative z-10">
        {/* Heading - Left-aligned & correctly styled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-left lg:mb-12 mb-8"
        >
          <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight max-w-3xl">
            <span className="text-accent">Professional</span> conveyor <span className="text-accent">solutions</span> for every industry today
          </h2>
        </motion.div>

        {/* Interactive Split Grid Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:mt-12 mt-8 items-start">
          
          {/* Mobile/Tablet Simple Tabs (<1024px) */}
          <div className="lg:hidden flex flex-row gap-2.5 overflow-x-auto pb-3 w-full max-w-full product-list-scroll snap-x">
            {PRODUCTS.map((product) => {
              const isActive = selectedId === product.id;
              
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer snap-start ${
                    isActive
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-white/80 hover:bg-white text-subtitle border border-border/40"
                  }`}
                >
                  {product.title}
                </button>
              );
            })}
          </div>

          {/* Desktop-only Product Directory (>=1024px) */}
          <div 
            data-lenis-prevent 
            onWheel={handleWheel}
            className="hidden lg:flex lg:col-span-5 flex-col gap-4 overflow-y-auto max-h-[500px] pr-4 product-list-scroll"
          >
            {PRODUCTS.map((product, index) => {
              const isActive = selectedId === product.id;
              
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border-l-4 ease-out shrink-0 w-full cursor-pointer ${
                    isActive
                      ? "bg-white border-accent shadow-md translate-x-1"
                      : "bg-white/50 hover:bg-white border-transparent hover:translate-x-0.5"
                  }`}
                >
                  <span className={`text-xs font-bold tracking-wider ${isActive ? "text-accent" : "text-subtitle/40"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h4 className={`text-base sm:text-lg font-bold transition-colors leading-tight lg:truncate ${isActive ? "text-title" : "text-subtitle/80"}`}>
                      {product.title}
                    </h4>
                    <p className="text-xs text-subtitle/60 mt-1.5 font-medium line-clamp-1">
                      {product.features.join(" • ")}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cinematic Product Display Display Card (Full width on mobile/tablet, 7 cols on desktop) */}
          <div className="lg:col-span-7 w-full h-[450px] sm:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative overflow-hidden md:rounded-3xl rounded-xl border border-border/40 shadow-lg bg-background-soft cursor-pointer w-full h-full"
              >
                {/* Background Product Image */}
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />

                {/* Dark Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent group-hover:via-[#0F172A]/60 transition-all duration-500" />

                {/* Hover Reveal Content Panel (Heading & Read More button only on mobile/tablet, full reveal on desktop) */}
                <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end overflow-hidden z-10">
                  <div className="translate-y-0 lg:translate-y-[150px] lg:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                    
                    {/* Top Tag Badges (Desktop Only) */}
                    <div className="mb-4 hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[50ms]">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                        {activeProduct.features[0]}
                      </span>
                    </div>

                    {/* Product Title (White -> Accent Orange on hover) */}
                    <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white mb-4 lg:mb-4 text-left transition-colors duration-300 group-hover:text-accent leading-tight">
                      {activeProduct.title}
                    </h3>
                    
                    {/* Divider Line (Desktop Only) */}
                    <div className="h-px bg-white/20 w-full mb-5 hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[100ms]" />
                    
                    {/* Detailed Product Description (Desktop Only) */}
                    <p className="text-[13px] sm:text-[13.5px] text-white/80 leading-[1.6] text-left mb-5 sm:mb-6 hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[150ms] font-medium max-w-xl">
                      {activeProduct.description}
                    </p>
                    
                    {/* Horizontal Feature Bullet Badges (Desktop Only) */}
                    <div className="hidden lg:flex flex-wrap gap-2 mb-5 sm:mb-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[200ms]">
                      {activeProduct.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-[10px] font-bold text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Read More Conversion Action Button (Visible on all screens) */}
                    <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-[250ms] w-full sm:w-auto">
                      <Button
                        href="#contact"
                        variant="primary"
                        className="w-full sm:w-auto justify-center px-8 py-3 text-xs font-bold tracking-widest uppercase"
                      >
                        Read More
                      </Button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
