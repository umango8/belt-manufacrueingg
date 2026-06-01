"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "Which certifications does your company have?",
    answer: "BeltForge holds active ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety) certifications. Our products are also CE marked and comply fully with regional specifications like DIN (German) and IS (Indian Standards).",
  },
  {
    question: "Are your industrial belts quality tested?",
    answer: "Yes. Every batch of conveyor belting is subjected to strict in-house laboratory evaluations. We validate raw materials, check cover rubber tensile strength, measure volumetric wear loss via DIN abrasion testers, and run ply-adhesion pull tests to guarantee structural reliability.",
  },
  {
    question: "Can I download certification documents?",
    answer: "Certainly. Our core ISO certificates, food-safe conformity declarations (FDA), and general catalogs are readily available for download. For batch-specific Material Test Reports (MTRs) and custom compliance sheets, please contact our quality assurance team.",
  },
  {
    question: "Do you manufacture custom industrial belts?",
    answer: "Yes, our custom engineering division designs bespoke conveyor belts tailored to unique dimensional profiles, incline geometries, and environmental conditions (such as extreme temperature peaks up to 220°C or oil/chemical hazards).",
  },
  {
    question: "Do your products follow international standards?",
    answer: "Absolutely. We manufacture conveyor belts in strict accordance with major global frameworks: German DIN 22102, Indian IS 1891, Australian AS 1332, US FDA 21 CFR 177.2600 (for food processing), and WHO GMP guidelines (for pharmaceutical clean rooms).",
  },
  {
    question: "How is product quality maintained?",
    answer: "Quality is controlled at every phase of production. We enforce strict incoming checks on raw polymers, carry out continuous calender roller thickness monitoring, conduct mechanical validation during curing, and stamp each roll with a traceable batch stencil code before release.",
  },
];

export default function CertificationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#F8FAFC] relative overflow-hidden select-none">
      {/* Radial Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              FAQ & DOCUMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-title leading-[1.15] tracking-tight mb-6">
              Common Questions About Compliance
            </h2>
            <p className="text-sm sm:text-base text-subtitle leading-relaxed font-medium mb-8">
              Review details about our certification standards, testing frameworks, and custom auditing options. For specific documentation requests, reach out directly.
            </p>
            <div className="p-6 bg-white border border-border/60 rounded-2xl flex flex-col gap-4">
              <div>
                <h4 className="text-sm font-bold text-title mb-1">Require Batch Reports?</h4>
                <p className="text-xs text-subtitle font-medium leading-relaxed">
                  We supply traceable lab certificates, vulcanization logs, and SGS testing reports upon request.
                </p>
              </div>
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-primary hover:bg-accent px-4 py-2.5 rounded-xl transition-all duration-300 w-fit cursor-pointer"
              >
                Request Custom Certificates
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion Side */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-accent/40 shadow-sm" : "border-border/50 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-title text-base sm:text-lg cursor-pointer hover:text-accent transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-title transition-transform duration-300 border border-border/40 shrink-0 ml-4 ${isOpen ? "rotate-180 bg-accent/10 text-accent" : "bg-slate-50"}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-border-light text-[13.5px] sm:text-sm text-subtitle leading-relaxed font-medium text-justify sm:text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
