"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const TRUST_FEATURES = [
  {
    title: "Premium Quality Materials",
    description:
      "Only the finest natural and synthetic rubber compounds, reinforced with high-tensile polyester and nylon fabrics for unmatched durability and performance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Advanced Manufacturing",
    description:
      "State-of-the-art vulcanizing presses, precision calendering machines, and automated quality control systems ensure consistent output at scale.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Belt Solutions",
    description:
      "From chevron patterns to heat-resistant compounds — bespoke conveyor belts tailored to your exact operational requirements and environmental conditions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Strict Quality Testing",
    description:
      "Multi-stage testing including tensile strength, elongation, abrasion resistance, and adhesion testing per IS:1891, DIN 22102, and AS 1332 standards.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description:
      "India's largest ready-stock inventory combined with streamlined logistics ensures delivery within 7 business days — even for custom specifications.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Expert Technical Support",
    description:
      "Dedicated engineers with 15+ years of expertise providing on-site guidance, belt selection consultation, and preventive maintenance programs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyTrustUs() {
  return (
    <section
      id="why-trust-us"
      className="section-padding bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="about-conveyor-line about-conveyor-line-1" />
        <div className="about-conveyor-line about-conveyor-line-2" />
        <div className="about-conveyor-line about-conveyor-line-3" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #0c1a2e 80px, #0c1a2e 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #0c1a2e 80px, #0c1a2e 81px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left md:mb-16 sm:mb-12 mb-10  lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WHY INDUSTRIES TRUST US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6"
          >
            The <span className="text-accent">Earth Flex</span> Advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-subtitle leading-relaxed font-medium text-justify sm:text-left"
          >
            Six pillars of engineering excellence that make Earth Flex the preferred industrial
            belt partner for India&apos;s most demanding manufacturing environments.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-7"
        >
          {TRUST_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative bg-white border border-border/60 rounded-xl p-6 sm:p-7 lg:p-8 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(70,115,197,0.07)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              id={`trust-feature-${index}`}
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />

              {/* Index */}
              <span className="absolute right-6 top-6 text-xs font-mono font-bold text-title/15 group-hover:text-accent/60 transition-colors duration-300">
                0{index + 1}
              </span>

              {/* Glow */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/3 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/5 border border-primary/15 flex items-center justify-center text-primary mb-6 rounded-full group-hover:bg-[#0B1628] group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(70,115,197,0.2)] relative z-10">
                <div className="group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-title mb-3 group-hover:text-accent transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-subtitle leading-relaxed font-medium relative z-10">
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
