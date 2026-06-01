"use client";

import { motion, Variants } from "framer-motion";

const CERTIFICATIONS = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    authority: "Quality Management System",
    description: "The global gold standard for quality assurance, monitoring raw material sourcing, engineering precision, and operational processes.",
    benefit: "Ensures consistency in belt thickness, cover grades, and batch-to-batch uniformity.",
    status: "Status: Active & Validated",
    validity: "Audit Cycle: Annual External",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    authority: "Environmental Management",
    description: "Sets the framework for responsible resource use, reduced energy usage, waste management, and minimized environmental footprint.",
    benefit: "Guarantees eco-conscious manufacturing and low-emission production of rubber compounds.",
    status: "Status: Active & Compliant",
    validity: "Audit Cycle: Annual External",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    authority: "Occupational Health & Safety",
    description: "Governs safety management systems to proactively prevent workplace injuries, protecting our skilled workforce at every production line.",
    benefit: "Ensures an uninterrupted, safe manufacturing flow, preventing operational delays.",
    status: "Status: Active & Certified",
    validity: "Audit Cycle: Triennial External",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "ce-cert",
    title: "CE Certification",
    authority: "European Conformity standard",
    description: "Validates that our industrial belts comply with all essential safety, health, and environmental requirements of European directives.",
    benefit: "Enables hassle-free export and installation in industrial machinery across European markets.",
    status: "Status: Certified Export Grade",
    validity: "Audit Cycle: Continuous Compliance",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "quality-compliance",
    title: "Quality Compliance",
    authority: "DIN, IS & AS Standards",
    description: "Full compliance with DIN 22102 (German), IS 1891 (Indian), and AS 1332 (Australian) standards governing conveyor rubber belt specifications.",
    benefit: "Certifies cover grade ratings (e.g. SAR/EPDM Grades, Fire-Resistant Grade, Oil-Resistant).",
    status: "Status: Fully Compliant",
    validity: "Audit Cycle: Batch-by-Batch Validation",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: "testing-certs",
    title: "Product Testing Certifications",
    authority: "NABL & SGS Accredited Reports",
    description: "Third-party validation of structural indices, heat endurance logs, cover tensile limit, and ply adhesion peel values.",
    benefit: "Guarantees test reports (MTR) represent actual performance limits under real loads.",
    status: "Status: Certified Labs",
    validity: "Audit Cycle: Traceable Batch Codes",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function CertificationsGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="standards-grid" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      {/* Symmetrical tech background backing */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px)",
        }}
      />

      {/* Decorative Blueprint Line on Side */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header Title */}
        <div className="text-start mb-10 md:mb-16 sm:mb-12 lg:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              QUALITY PORTFOLIO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6"
          >
            Our Certified Standards
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-subtitle leading-relaxed font-medium"
          >
            BeltForge is committed to absolute compliance. Our products undergo multi-stage auditing to assure performance under extreme industrial conditions.
          </motion.p>
        </div>

        {/* 3-Column Grid on Desktop, 2-Column on Tablet, 1-Column on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="group relative bg-white border border-border/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(249,115,22,0.06)] transition-all duration-500 overflow-hidden"
              id={`cert-card-${cert.id}`}
            >
              {/* Card top border glow effect */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
              
              <div>
                {/* Badge Icon + Status Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Custom animated logo container */}
                  <div className="w-14 h-14 bg-primary/[0.03] border border-primary/5 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center rounded-xl transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)]">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {cert.icon}
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#64748B] bg-slate-100 px-3 py-1.5 rounded-md group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-accent animate-pulse" />
                    {cert.status.replace("Status: ", "")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-title mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Subtitle / Authority */}
                <p className="text-xs font-mono font-bold text-[#94A3B8] mb-5 uppercase tracking-wider">
                  {cert.authority}
                </p>

                {/* Description */}
                <p className="text-[13.5px] text-subtitle leading-relaxed font-medium mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Purpose/Benefit & Validity Footer */}
              <div className="pt-5 border-t border-border-light flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-wider block mb-1">Key Benefit:</span>
                  <span className="text-xs text-title font-medium leading-relaxed block">{cert.benefit}</span>
                </div>
                
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#64748B] bg-slate-50 p-2.5 rounded-lg border border-border-light/60">
                  <span>{cert.validity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
