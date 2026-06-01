"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const CERTIFICATIONS = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    description: "International quality management system certification ensuring consistent product quality and continuous process improvement.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "quality-testing",
    title: "Quality Testing Lab",
    description: "In-house testing laboratory equipped with tensile testing machines, abrasion testers, and adhesion testing equipment meeting international standards.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "manufacturing-standards",
    title: "IS:1891 & DIN 22102",
    description: "Full compliance with Indian IS:1891 Part I & II and German DIN 22102 manufacturing standards for conveyor belt production.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: "performance-assurance",
    title: "Performance Assurance",
    description: "Every belt batch undergoes rigorous performance validation — tensile strength, elongation at break, and heat resistance testing before dispatch.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.008] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left mb-14 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              CERTIFICATIONS & STANDARDS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6"
          >
            Quality <span className="text-accent">Certified</span> Manufacturing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-subtitle leading-relaxed font-medium text-justify sm:text-left"
          >
            Our manufacturing processes adhere to the highest international quality standards,
            ensuring every industrial belt meets stringent performance and reliability requirements.
          </motion.p>
        </div>

        {/* Certification Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="group relative bg-[#F9FAFB] border border-border/50 rounded-xl p-6 sm:p-7 text-center hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.07)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              id={`cert-${cert.id}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-linear-to-b from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/2 group-hover:via-accent/4 group-hover:to-accent/1 transition-all duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 rounded-2xl group-hover:bg-[#0A0E1A] group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] relative z-10">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-title mb-2.5 group-hover:text-accent transition-colors duration-300 relative z-10">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-subtitle leading-relaxed font-medium relative z-10">
                {cert.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
