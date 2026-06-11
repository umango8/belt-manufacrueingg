"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/ui/Button";

export default function IndustriesCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="cta-industries-wrapper relative overflow-hidden rounded-xl md:rounded-[24px] border border-white/10 bg-linear-to-br from-[#0F1424] to-[#0B1628] p-6 sm:p-12 lg:p-16 shadow-2xl shadow-accent/5"
        >
          {/* Inline hover style for background image zoom */}
          <style dangerouslySetInnerHTML={{ __html: `
            .cta-industries-wrapper:hover .cta-ind-bg-image {
              transform: scale(1.05);
            }
          `}} />

          {/* Background Industrial Image */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/industries-detail.png"
              alt="Industrial Belt Manufacturing"
              className="cta-ind-bg-image absolute inset-0 w-full h-full object-cover opacity-[0.35] transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#0F1424]/95 via-[#0B1628]/90 to-[#0B1628]/95" />
          </div>

          {/* Subtle tech grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#C87533 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Spinning gear element */}
          <div className="absolute -right-16 -bottom-16 lg:right-12 lg:top-1/2 lg:-translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] pointer-events-none opacity-[0.20] lg:opacity-[0.40] z-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="absolute inset-0 w-full h-full text-accent animate-[spin_100s_linear_infinite]">
              <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="38" />
              <circle cx="50" cy="50" r="45" strokeDasharray="4 2" />
              {[...Array(18)].map((_, i) => (
                <line key={i} x1="50" y1="2" x2="50" y2="10" transform={`rotate(${i * 20} 50 50)`} />
              ))}
            </svg>
            <span className="relative z-10 text-[20px] sm:text-[30px] font-black tracking-[0.25em] text-white uppercase font-sans select-none pl-[0.25em]">
              Earth Flex
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              INDUSTRY-SPECIFIC SOLUTIONS
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Looking for Industry-Specific <br />
              <span className="text-accent">Industrial Belt Solutions?</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl lg:mb-10 md:mb-8 mb-6 leading-relaxed font-medium text-justify sm:text-left">
              Whether you need FDA-compliant food-grade belts, heat-resistant conveyor solutions,
              or precision timing belts for automated systems — our engineering team is ready to
              design and manufacture the perfect belt for your industry.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="#contact"
                variant="accent"
                id="industries-cta-quote"
                className="shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Request a Quote
              </Button>
              <Button
                href="tel:+91-8200223669"
                variant="outline"
                className="text-white border-white/10 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm"
                id="industries-cta-contact"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
