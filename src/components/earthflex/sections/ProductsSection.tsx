"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";

interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
  slug: string;
}

const EARTHFLEX_CATEGORIES: ProductItem[] = [
  {
    id: "conveyor-belts",
    title: "Conveyor Belts",
    description: "High-durability fabric and steel cord conveyor belts engineered to move heavy industrial bulk materials over long distances. Built for severe wear resistance and continuous operation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    specs: ["Tensile Range: Up to 3150 N/mm", "Abrasion Loss: < 120 mm³", "Standard Widths: 500 - 2400 mm", "ISO 9001:2015 Quality QC"],
    slug: "conveyor-belt"
  },
  {
    id: "rubber-belts",
    title: "Rubber Belts",
    description: "Premium grade wear-resistant rubber belts engineered for general purpose power transmission and materials handling. Excellent flexibility and tensile strength.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    specs: ["Material: High-Grade SBR/NBR", "Hardness: 65 ± 5 Shore A", "Temp Range: -30°C to +80°C", "Anti-Static ISO Compliant"],
    slug: "rubber-belt"
  },
  {
    id: "heat-resistant",
    title: "Heat Resistant Belts",
    description: "Specialized heat-shielding conveyor belts engineered to transport materials at elevated temperatures up to 200°C (392°F). Prevents premature cracking and carcass hardening.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    specs: ["Max Temperature: 200°C (392°F)", "Cover Grade: EPDM / Heat Shield", "Carcass: High-Modulus Polyester", "DIN 22102 Tested & Certified"],
    slug: "heat-resistant"
  },
  {
    id: "heavy-duty",
    title: "Heavy Duty Belts",
    description: "Reinforced steel cord belting constructed to withstand extreme impact, crushing, and high-tension loads in quarries, mining fields, and heavy metallurgy mills.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
    specs: ["Steel Cords: High-Tensile Steel", "Impact Shield: Multi-ply Transverse", "Rip & Tear Resistance: Extreme", "FR Class K/S Certified"],
    slug: "heavy-duty"
  },
  {
    id: "food-grade",
    title: "Food Grade Belts",
    description: "Non-toxic, FDA-approved polyurethane (PU) and PVC belts designed for direct food contact. Designed with anti-microbial covers that prevent bacterial buildup.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    specs: ["Compliance: FDA & USDA Food Safety", "Material: Food-grade PU / PVC", "Resistance: Oil, Grease & Water", "Easy-to-clean sanitary profile"],
    slug: "pu-belt"
  },
  {
    id: "chevron-belts",
    title: "Chevron Conveyor Belts",
    description: "Molded chevron cleated belts designed for conveying bulk materials on steep inclines up to 40°. Prevents slip and slide of wet, granular, or round loading materials.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specs: ["Cleat Profile: 15mm - 32mm High", "Incline Angle: Up to 40° Max", "Base Belt: High-Tensile EP", "Wear Cover Grade: Abrasion Resistant"],
    slug: "chevron-belt"
  },
  {
    id: "steel-cord-belts",
    title: "Steel Cord Belts",
    description: "Ultra-high tensile steel cord belts built for long-distance bulk conveyor networks in underground mining and overland industrial lines.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
    specs: ["Cord Pitch: Configured to DIN 22131", "Tensile Rating: Up to ST 5400 N/mm", "Elongation: Extremely Low < 0.2%", "Core Protection: Steel Cord Sensor"],
    slug: "steel-cord"
  },
  {
    id: "elevator-belts",
    title: "Elevator Conveyor Belts",
    description: "High-durability vertical bucket elevator belts reinforced with specialty fabrics or steel cords to handle high-elevation material lifting.",
    image: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80",
    specs: ["Elevator Type: Bucket / Bolt Attach", "Cover Compound: Oil & Heat Shield", "Carcass: Low-stretch Polyester", "Bolt Pullout Force: High Resistance"],
    slug: "elevator-belt"
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Bespoke engineered belt profiles, sidewalls, cleats, and tracking guides tailored to solve complex material sorting, steep inclines, and automated plant routing challenges.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    specs: ["Profile Cleats: T, C, TC Shapes", "Corrugated Sidewalls: Up to 120mm", "CNC Fabrication: Made to order", "Application-engineered Design"],
    slug: "custom"
  }
];

export default function ProductsSection() {
  const [selectedId, setSelectedId] = useState(EARTHFLEX_CATEGORIES[0].id);

  // Find active product category
  const activeProduct = EARTHFLEX_CATEGORIES.find((p) => p.id === selectedId) || EARTHFLEX_CATEGORIES[0];

  return (
    <section id="products" className="relative bg-[#F8FAFC] py-24 border-b border-[#E5E7EB]">
      {/* Scrollbar styling for the vertical tabs list */}
      <style dangerouslySetInnerHTML={{ __html: `
        .product-list-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .product-list-scroll::-webkit-scrollbar-track {
          background: rgba(70, 115, 197, 0.03);
          border-radius: 99px;
        }
        .product-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(70, 115, 197, 0.15);
          border-radius: 99px;
          transition: background 0.2s;
        }
        .product-list-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(70, 115, 197, 0.35);
        }
      `}} />

      {/* Background structural grid layout */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#E5E7EB 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#1F2937] leading-[1.25] tracking-tight mt-4">
            Industrial-grade belting <span className="text-[#4673C5]">built for high output</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mt-4 leading-relaxed">
            Browse our catalog of custom-engineered material handling solutions designed to maximize plant efficiency, resist environmental fatigue, and withstand extreme loading conditions.
          </p>
        </div>

        {/* Desktop Interactive Layout (>= 1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-10 items-stretch mt-12 h-[520px]">
          
          {/* Left Side: Large Vertical Category Tabs (Scrollable) */}
          <div data-lenis-prevent className="lg:col-span-4 flex flex-col gap-3 h-full overflow-y-auto pr-3 product-list-scroll">
            {EARTHFLEX_CATEGORIES.map((product) => {
              const isActive = selectedId === product.id;
              
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  className={`group w-full flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-300 border border-l-4 ease-out cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#4673C5]/5 border-[#4673C5]/20 border-l-[#4673C5] shadow-xs"
                      : "bg-white border-[#E5E7EB] border-l-transparent hover:border-[#4673C5]/30 hover:border-l-[#4673C5]/30"
                  }`}
                >
                  <span className={`text-base font-bold transition-colors leading-tight ${isActive ? "text-[#4673C5]" : "text-[#4B5563] group-hover:text-[#1F2937]"}`}>
                    {product.title}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-all duration-300 transform ${
                      isActive 
                        ? "translate-x-1 text-[#4673C5]" 
                        : "text-[#6B7280]/40 group-hover:translate-x-0.5 group-hover:text-[#4673C5]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Side: Product Showcase Container */}
          <div className="lg:col-span-8 flex h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-xs flex flex-col md:grid md:grid-cols-12 md:gap-8 items-stretch h-full"
              >
                {/* Left Half: Product Image */}
                <div className="md:col-span-5 relative min-h-[300px] h-full rounded-2xl overflow-hidden border border-[#E5E7EB]">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    className="object-cover"
                    sizes="35vw"
                    priority
                  />
                </div>

                {/* Right Half: Technical Specifications */}
                <div className="md:col-span-7 flex flex-col justify-between text-left mt-6 md:mt-0 h-full">
                  <div>
                    <span className="text-[9px] font-bold text-[#0A741C] uppercase tracking-widest bg-[#0A741C]/10 border border-[#0A741C]/20 px-2.5 py-1 rounded w-fit block mb-3">
                      TECHNICAL SPECIFICATIONS
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-[#1F2937] leading-tight mt-1">
                      {activeProduct.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mt-4 font-medium">
                      {activeProduct.description}
                    </p>
                    
                    {/* Specs Bullet Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 border-t border-[#E5E7EB] pt-6">
                      {activeProduct.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs font-bold text-[#1F2937]">
                          <span className="text-[#0A741C] font-black text-[13px]">✓</span> {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#E5E7EB] w-full">
                    <Button
                      href={`/products/${activeProduct.slug}`}
                      variant="outlinePrimary"
                      className="flex-1 sm:flex-initial text-center justify-center text-xs font-bold tracking-wider py-3"
                    >
                      View Details
                    </Button>
                    <Button
                      href="/quote"
                      variant="primary"
                      className="flex-1 sm:flex-initial text-center justify-center text-xs font-bold tracking-wider py-3"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile/Tablet Accordion Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col gap-4 mt-8 w-full">
          {EARTHFLEX_CATEGORIES.map((product, index) => {
            const isOpen = selectedId === product.id;
            
            return (
              <div 
                key={product.id}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xs transition-all duration-300"
              >
                {/* Accordion Tab Trigger */}
                <button
                  onClick={() => setSelectedId(product.id)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 cursor-pointer ${
                    isOpen ? "bg-[#4673C5]/5 border-b border-[#E5E7EB]" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isOpen ? "text-[#4673C5]" : "text-[#6B7280]/40"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className={`text-base font-bold transition-colors duration-300 ${isOpen ? "text-[#4673C5]" : "text-[#1F2937]"}`}>
                      {product.title}
                    </h4>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#6B7280]/50 transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-[#4673C5]" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sliding Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 flex flex-col gap-4 bg-[#F8FAFC] border-t border-[#E5E7EB] text-left">
                        {/* Zoom/Fade Entrance for Image */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw"
                            priority
                          />
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563] font-medium">
                          {product.description}
                        </p>

                        {/* Technical Bullet Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-4 border-t border-[#E5E7EB]">
                          {product.specs.map((spec) => (
                            <div
                              key={spec}
                              className="flex items-center gap-2 text-xs font-bold text-[#1F2937]"
                            >
                              <span className="text-[#0A741C] font-black">✓</span> {spec}
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mt-4 pt-4 border-t border-[#E5E7EB]">
                          <Button
                            href={`/products/${product.slug}`}
                            variant="outlinePrimary"
                            className="flex-1 justify-center py-2.5 text-xs font-bold tracking-wider"
                          >
                            View Details
                          </Button>
                          <Button
                            href="/quote"
                            variant="primary"
                            className="flex-1 justify-center py-2.5 text-xs font-bold tracking-wider"
                          >
                            Request Quote
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
