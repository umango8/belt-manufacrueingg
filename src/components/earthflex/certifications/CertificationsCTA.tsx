"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/ui/Button";

export default function CertificationsCTA() {
  return (
    <section className="relative overflow-hidden select-none">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="cta-card-wrapper relative overflow-hidden rounded-2xl md:rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0F1424] to-[#0B1628] p-6 sm:p-12 lg:p-16 shadow-2xl shadow-accent/5"
        >
          {/* Style for Card Background Hover Scale */}
          <style dangerouslySetInnerHTML={{ __html: `
            .cta-card-wrapper:hover .cta-bg-image {
              transform: scale(1.04);
            }
          `}} />

          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600&q=80"
              alt="Heavy Duty Industrial Manufacturing Plant"
              className="cta-bg-image absolute inset-0 w-full h-full object-cover opacity-35 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Multi-layered dark gradients to preserve text legibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F1424]/95 via-[#0B1628]/90 to-[#0B1628]/95" />
          </div>

          {/* Technical blueprint grid overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#C87533 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Spinning Vector Gear Illustration (brand-consistent) */}
          <div className="absolute -right-20 -bottom-20 lg:right-12 lg:top-1/2 lg:-translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] pointer-events-none opacity-20 lg:opacity-35 z-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="absolute inset-0 w-full h-full text-accent animate-[spin_100s_linear_infinite]">
              <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="38" />
              <circle cx="50" cy="50" r="45" strokeDasharray="4 2" />
              {[...Array(18)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="2"
                  x2="50"
                  y2="10"
                  transform={`rotate(${i * 20} 50 50)`}
                />
              ))}
            </svg>
            <span className="relative z-10 text-[20px] sm:text-[28px] font-black tracking-[0.25em] text-white/90 uppercase font-sans pl-[0.25em]">
              Earth Flex
            </span>
          </div>

          {/* Content Box */}
          <div className="relative z-10 max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              CERTIFIED ASSURANCES
            </span>
            
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6"
            >
              Looking for Certified <br />
              <span className="text-accent">Industrial Belt Solutions?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed font-medium text-justify sm:text-left">
              Ensure plant uptime and high safety indices with our ISO, CE, and DIN-accredited conveyor products. We configure belt plies, cover compounds, and dimensions to match your extreme operations.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/quote"
                variant="accent"
                id="cta-request-quote"
                className="shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300 px-6 py-3.5"
              >
                Request a Quote
              </Button>
              <Button
                href="/quote"
                variant="outline"
                className="text-white border-white/10 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm px-6 py-3.5"
                id="cta-contact-experts"
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
