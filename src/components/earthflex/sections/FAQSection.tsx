"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do you ensure conveyor belt durability and lifespan?",
    answer: "We use ISO-certified, premium synthetic rubber polymers and reinforced steel or fabric cords. Each production batch undergoes rigorous quality testing for abrasion loss (DIN standards), tensile strength, adhesion, and hot material heat tolerance before final vulcanization.",
  },
  {
    question: "What customization options do you offer for profiles, cleats, and sidewalls?",
    answer: "We fabricate custom chevron profiles, corrugated sidewalls, cleats, tracking guides, and CNC-punched bucket patterns. All profiles are hot-vulcanized directly onto the base belt fabric rather than cold-bonded, preventing profile separation or tearing under heavy loads.",
  },
  {
    question: "What is the typical manufacturing and delivery lead time?",
    answer: "Standard multi-ply fabric belts from our ready-stock inventory are dispatched within 3-5 business days. Custom vulcanized profiles, high-tension steel-cord configurations, or specialized chemical-resistant covers are manufactured and delivered within 10-14 business days.",
  },
  {
    question: "Do you provide on-site splicing and installation advisory support?",
    answer: "Yes, EarthFlex offers direct advisory support. Our senior field engineers assist client crews with on-site cold-bonding, hot-vulcanization splicing, belt tracking adjustment, tension optimization, and preventative maintenance workflows to maximize uptime.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background-soft relative overflow-hidden">
      {/* Background patterns */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] select-none"
        style={{
          backgroundImage: "radial-gradient(#4673C5 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-5 text-left">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              FAQ SECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6">
              Industrial Conveyor <span className="text-accent">Solutions FAQ</span>
            </h2>
            <p className="text-base text-subtitle leading-relaxed font-medium mb-8">
              Find answers to key technical questions about belt splicing, customization, material tolerances, and order timelines. For custom specifications, contact our engineering advisory directly.
            </p>
            <div className="w-full h-px bg-border/10 mb-8" />
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
            >
              Ask a custom technical question &rarr;
            </a>
          </div>

          {/* Right Accordion Block */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-border/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-accent/30"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-slate-50"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-title pr-4 leading-snug">
                      {item.question}
                    </h3>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group">
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-subtitle/90 leading-relaxed font-medium text-justify">
                          {item.answer}
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
