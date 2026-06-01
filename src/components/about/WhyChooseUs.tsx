"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const FEATURES = [
  {
    title: "Premium Quality Materials",
    description:
      "We source only the finest natural and synthetic rubber compounds, reinforced with high-tensile polyester and nylon fabrics for unmatched durability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Manufacturing Technology",
    description:
      "State-of-the-art vulcanizing presses, precision calendering machines, and automated production lines ensure consistent quality at scale.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Belt Solutions",
    description:
      "From chevron patterns to heat-resistant compounds — we engineer bespoke conveyor belts tailored to your exact operational requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Strict Quality Control",
    description:
      "Multi-stage testing protocols including tensile strength, elongation, abrasion resistance, and adhesion testing per IS:1891 and DIN 22102 standards.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description:
      "India's largest ready-stock inventory combined with streamlined logistics ensures delivery within 7 business days, even for custom orders.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Technical Team",
    description:
      "Our engineers bring 15+ years of industry expertise, providing on-site installation guidance, belt selection consultation, and preventive maintenance support.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="section-padding bg-linear-to-br from-[#0F1424] via-[#070b13] to-[#0A0E1A] relative overflow-hidden"
    >
      {/* Huge Backdrop text like the image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/4 tracking-[0.10em] leading-none uppercase translate-y-[28%] select-none">
          BELTFORGE
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center overflow-visible pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-white/4 tracking-[0.10em] leading-none uppercase translate-y-[-25%] select-none">
          BELTFORGE
        </span>
      </div>

      {/* Animated conveyor belt background pattern */}
      {/* <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    
        <div className="about-conveyor-line about-conveyor-line-1 !bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_80px)]" />
        <div className="about-conveyor-line about-conveyor-line-2 !bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_80px)]" />
        <div className="about-conveyor-line about-conveyor-line-3 !bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_80px)]" />
      </div> */}

      {/* Subtle grid texture */}
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #ffffff 80px, #ffffff 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #ffffff 80px, #ffffff 81px)",
        }}
      /> */}

      {/* Radial dot matrix for high-tech industrial aesthetic */}
      {/* <div 
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F97316 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      /> */}

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left mb-14 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-6"
          >
            The <span className="text-accent">BeltForge</span> Difference
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-white/60 leading-relaxed font-medium text-justify sm:text-left"
          >
            Six pillars of excellence that make BeltForge the preferred conveyor
            belt partner for India&apos;s leading industries — from raw material
            sourcing to final delivery.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative bg-[#0f172a]/40 border border-white/5 backdrop-blur-md rounded-xl p-6 sm:p-7 lg:p-8 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              id={`why-choose-${index}`}
            >
              {/* Corner bracket accents */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/10 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/10 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />

              {/* Technical index */}
              <span className="absolute right-6 top-6 text-xs font-mono font-bold text-white/5 group-hover:text-accent/60 transition-colors duration-300">
                0{index + 1}
              </span>

              {/* Hover glow */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/3 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] relative z-10">
                <div className="group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed font-medium relative z-10">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
