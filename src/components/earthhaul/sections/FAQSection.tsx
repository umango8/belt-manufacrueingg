"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EH_FAQ } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-5" style={{ color: CHARCOAL }}>
              Frequently Asked{" "}
              <span style={{ color: BLUE }}>Questions</span>
            </h2>
            <p className="text-[14px] text-[#57585C] leading-relaxed mb-8">
              Everything you need to know about our conveyor systems, automation solutions, and how we work.
            </p>

            {/* Quick contact */}
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: `${BLUE}06`, border: `1px solid ${BLUE}12` }}
            >
              <p className="text-[13px] font-semibold mb-2" style={{ color: CHARCOAL }}>
                Still have questions?
              </p>
              <p className="text-[12px] text-[#57585C] mb-4">
                Our engineering team is ready to help you find the right solution for your plant.
              </p>
              <a
                href="tel:+918200223669"
                className="inline-flex items-center gap-2 font-bold text-[12px] uppercase tracking-wide transition-colors duration-200"
                style={{ color: BLUE }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-3"
          >
            {EH_FAQ.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isOpen ? `${BLUE}30` : "#E2E8F0",
                    backgroundColor: isOpen ? `${BLUE}03` : "white",
                  }}
                >
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span
                      className="text-[14px] font-semibold leading-snug"
                      style={{ color: isOpen ? BLUE : CHARCOAL }}
                    >
                      {item.question}
                    </span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? BLUE : `${BLUE}10`,
                        color: isOpen ? "white" : BLUE,
                      }}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-[13.5px] text-[#57585C] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
