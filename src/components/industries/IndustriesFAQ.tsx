"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    question: "Which industries use industrial belts?",
    answer:
      "Industrial belts are used across a wide range of industries including textile manufacturing, food processing, packaging, automotive, pharmaceutical, logistics & warehousing, printing, ceramic, paper, and agriculture. Each industry has unique belt requirements based on factors like temperature, chemical exposure, speed, and load capacity.",
  },
  {
    question: "Do you provide customized industrial belts?",
    answer:
      "Yes, BeltForge specializes in custom-engineered industrial belts. Our engineering team works closely with clients to design belts tailored to specific operational requirements — including custom widths, lengths, surface textures, compounds, and reinforcement configurations. We handle everything from prototype to large-scale production.",
  },
  {
    question: "Which belts are suitable for food processing?",
    answer:
      "Our food-grade conveyor belts are manufactured using FDA-approved polyurethane (PU) and PVC compounds. They feature anti-microbial surface treatments, sealed edges to prevent bacterial ingress, and are fully compliant with HACCP and GMP standards. We offer white, blue, and detectable variants for different food processing environments.",
  },
  {
    question: "Do you offer bulk manufacturing solutions?",
    answer:
      "Absolutely. BeltForge operates state-of-the-art manufacturing facilities capable of high-volume production runs. We maintain India's largest ready-stock inventory and can scale production to meet OEM and large-scale industrial requirements. Bulk orders enjoy competitive pricing and dedicated project management.",
  },
  {
    question: "Can belts be customized according to machinery?",
    answer:
      "Yes, we offer machine-specific belt engineering. Whether you need belts for a specific conveyor system, printing press, packaging machine, or industrial drive — our team can design belts with exact dimensions, tension ratings, surface profiles, and material specifications to match your machinery's requirements perfectly.",
  },
  {
    question: "What is the typical delivery timeline?",
    answer:
      "Standard belt sizes from our ready-stock inventory ship within 3-5 business days. Custom-engineered belts typically require 7-14 business days depending on specifications. We also offer express manufacturing and priority shipping for urgent requirements. Contact our team for specific timelines.",
  },
  {
    question: "Do you provide technical consultation?",
    answer:
      "Yes, our experienced engineering team provides comprehensive technical support including on-site belt assessment, material selection consultation, installation guidance, and preventive maintenance programs. We work as a technical partner, not just a supplier — ensuring optimal belt performance throughout its lifecycle.",
  },
];

export default function IndustriesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="industries-faq"
      className="section-padding bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="about-conveyor-line about-conveyor-line-1" />
        <div className="about-conveyor-line about-conveyor-line-2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-left md:mb-16 sm:mb-12 mb-10 lg:mb-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                FREQUENTLY ASKED QUESTIONS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6"
            >
              Got <span className="text-accent">Questions?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base lg:text-lg text-subtitle leading-relaxed font-medium text-justify sm:text-left"
            >
              Find answers to the most common questions about our industrial belt solutions,
              customization options, and manufacturing capabilities.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`group bg-white border rounded-xl overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "border-accent/30 shadow-[0_8px_30px_rgba(249,115,22,0.06)]"
                    : "border-border/50 hover:border-accent/20"
                }`}
                id={`faq-item-${index}`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group/btn"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span
                      className={`text-xs font-mono font-bold shrink-0 transition-colors duration-300 ${
                        openIndex === index ? "text-accent" : "text-title/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                        openIndex === index ? "text-accent" : "text-title group-hover/btn:text-accent"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      openIndex === index
                        ? "bg-accent text-white rotate-180"
                        : "bg-primary/5 text-primary group-hover/btn:bg-accent/10 group-hover/btn:text-accent"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[52px] sm:pl-[60px]">
                        <div className="border-t border-border/30 pt-4">
                          <p className="text-sm text-subtitle leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
