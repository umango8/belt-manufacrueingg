"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const CORE_SOLUTIONS = [
  {
    title: "Bulk Material Handling",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: "Super strong conveyor belts built for rough and tough work. Made perfectly to move heavy materials in Mining, Cement, and Steel plants without any breakdowns.",
    cta: "See Heavy-Duty Belts",
    href: "/earthhaul/products#conveyor-systems",
  },
  {
    title: "Plant Automation & Sorting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    description: "Fast and smart systems that sort and move boxes or products automatically. Perfect for saving time in modern Warehouses, Logistics, and Packaging lines.",
    cta: "See Automation Lines",
    href: "/earthhaul/products#automation-systems",
  },
  {
    title: "Sanitary & Food Grade Conveying",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "100% clean and safe conveyor belts made for handling everyday food, drinks, and medicines without any germs or safety worries.",
    cta: "See Food-Safe Belts",
    href: "/earthhaul/products#sanitary-food-grade",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1565C0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            OUR CORE SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-4" style={{ color: CHARCOAL }}>
            How We Keep Your <span style={{ color: BLUE }}>Business Moving</span>
          </h2>
          <p className="text-[15px] text-[#57585C] leading-relaxed max-w-xl mx-auto">
            No matter your industry, layout, or payload—we engineer custom automation solutions that keep your factory moving forward.
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(21,101,192,0.08)] hover:border-[#1565C0]/25 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: BLUE, opacity: 0.2 }} />
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: BLUE }} />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${BLUE}08`, color: BLUE }}
              >
                {solution.icon}
              </div>

              <h3 className="text-[18px] font-extrabold mb-3 group-hover:text-[#1565C0] transition-colors" style={{ color: CHARCOAL }}>
                {solution.title}
              </h3>

              <p className="text-[13.5px] text-[#57585C] leading-relaxed mb-6 flex-1">
                {solution.description}
              </p>

              <Link
                href={solution.href}
                className="inline-flex items-center gap-2 font-bold text-[12.5px] uppercase tracking-wide transition-colors duration-200 mt-auto"
                style={{ color: BLUE }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}
              >
                {solution.cta}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
