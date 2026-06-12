"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/ui/Button";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative lg:h-[calc(100vh-60px)] lg:max-h-[800px] min-h-[600px] flex items-center bg-white overflow-hidden pt-20 pb-12 border-b border-[#E5E7EB]"
    >
      {/* Full-width background video with premium white gradient overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Left-to-right white gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 md:from-white md:via-white/92 md:to-white/20 lg:from-white lg:via-white/85 lg:to-transparent z-10" />
        
        {/* Bottom vertical fade to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Structural Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#E5E7EB 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* Main Content Container (Vertically centered text box) */}
      <div className="relative container-custom w-full z-20">
        <div className="max-w-3xl text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
              PREMIUM INDUSTRIAL BELTING SYSTEMS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.25rem] sm:text-[3rem] xl:text-[3.5rem] font-extrabold text-[#1F2937] leading-[1.15] tracking-tight mb-4"
          >
            Engineered for Durability.<br />
            <span className="text-[#4673C5]">Optimized for Zero Downtime.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#4B5563] max-w-xl mb-5 leading-relaxed font-semibold"
          >
            EarthFlex delivers high-performance rubber conveyor and timing belts certified to withstand extreme abrasions and industrial fatigue.
          </motion.p>

          {/* Corporate Pedigree Callout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-[3px] border-[#4673C5] pl-4 mb-6 text-xs sm:text-sm text-[#6B7280] max-w-lg font-bold"
          >
            Division of the Earth India Group, supplying robust materials handling solutions for mining, cement, steel, and power generation networks.
          </motion.div>

          {/* CTA Buttons - Center Split Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Button
              href="/quote"
              variant="accent"
              size="lg"
              className="shadow-lg shadow-[#0A741C]/15"
            >
              GET A FREE INSPECTION
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button
              href="/products/conveyor-belt"
              variant="outlinePrimary"
              size="lg"
            >
              VIEW OUR PRODUCTS
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
