"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const PRODUCTS_DATA = [
  {
    id: "pallet-roller",
    title: "Pallet Roller Conveyor System",
    category: "Roller Systems",
    description: "Automated heavy-duty rollers designed to transport heavy pallets safely across the manufacturing floor with zero manual effort.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "belt-over-roller",
    title: "Belt Over Roller Automation Line",
    category: "Roller Systems",
    description: "A versatile automated system that combines a flat conveyor belt with motorized rollers underneath to transport small or irregular packages smoothly.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "multi-lane-sorting",
    title: "Multi-Lane Sorting System",
    category: "Sorting & Transfers",
    description: "Smart automated sorting conveyor equipped with sensors and pneumatic pushers to direct different products into separate lines automatically.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vertical-lifter",
    title: "Vertical Continuous Lifter",
    category: "Specialized Handling",
    description: "Automated elevator system designed to lift or lower goods between multiple mezzanine levels smoothly and continuously without stopping the line.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pop-up-transfer",
    title: "90-Degree Pop-Up Transfer System",
    category: "Sorting & Transfers",
    description: "An automated directional module that pops up to seamlessly transfer boxes or materials at right angles onto a different conveyor track.",
    image: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "flexible-roller",
    title: "Flexible Motorized Powered Roller",
    category: "Roller Systems",
    description: "Extendable and flexible automated roller systems that can expand, curve, and contract to load or unload containers and trucks efficiently.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "accumulation-conveyor",
    title: "Accumulation Conveyor System",
    category: "Sorting & Transfers",
    description: "Smart zero-pressure conveyor lines that detect package spacing and automatically pause individual sections to prevent products from crashing into each other.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "incline-cleated",
    title: "Incline Cleated Automation Line",
    category: "Specialized Handling",
    description: "Automated high-slope conveyors equipped with motorized cleated belts to lift parts or raw materials to overhead machinery securely.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All Systems", "Roller Systems", "Sorting & Transfers", "Specialized Handling"];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("All Systems");

  const filteredProducts = activeTab === "All Systems"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="relative bg-[#F5F5F5] py-24 border-b border-[#E2E8F0] overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1565C0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              FEATURED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight text-[#232A39]" style={{ color: CHARCOAL }}>
              Featured Products <span style={{ color: BLUE }}>Showcase</span>
            </h2>
            <p className="text-[14px] text-[#57585C] mt-4 leading-relaxed">
              Explore our range of automated, precision-engineered conveyor models designed to eliminate bottlenecks and optimize throughput.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 lg:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border"
                style={{
                  backgroundColor: activeTab === cat ? BLUE : "white",
                  color: activeTab === cat ? "white" : CHARCOAL,
                  borderColor: activeTab === cat ? BLUE : "#E2E8F0",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with animation */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(21,101,192,0.08)] hover:border-[#1565C0]/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-44 overflow-hidden bg-[#E2E8F0]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/95"
                      style={{ color: BLUE }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#1565C0] transition-colors" style={{ color: CHARCOAL }}>
                    {p.title}
                  </h3>
                  <p className="text-[12.5px] text-[#57585C] leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>

                  <Link
                    href="/earthhaul/products"
                    className="inline-flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 mt-auto"
                    style={{ color: BLUE }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}
                  >
                    See More Products
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
