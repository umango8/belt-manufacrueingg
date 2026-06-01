"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROCEDURES = [
  {
    id: "tensile",
    title: "Tensile Strength & Elongation",
    standard: "ISO 37 / IS 3400 Part 1",
    subtitle: "Carcass & Rubber Cover Integrity",
    description: "Our high-precision electronic Tensile Testing Machine measures the exact force required to rupture rubber strips and synthetic fabric carcasses. This verifies that our belts can withstand high-tension startup forces and continuous load surges without permanent stretching or tearing.",
    methodology: "Dumbbell-shaped test specimens are cut from the cover rubber and carcass. The machine stretches them at a constant rate until failure, recording the ultimate tensile strength (MPa) and elongation at break (%).",
    metric: "Safety Factor ≥ 10:1 vs Nominal Load",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "abrasion",
    title: "DIN Abrasion Resistance",
    standard: "ISO 4649 / DIN 53516",
    subtitle: "Cover Wear & Volume Loss",
    description: "Abrasion is the leading cause of cover wear. We utilize a rotating cylindrical drum abrasion tester to verify rubber compound quality. Lower volume loss means a longer-lasting cover under highly abrasive bulk materials like iron ore, quartz, or clinker.",
    methodology: "A cylindrical rubber sample is pressed against an abrasive sheet wrapped around a rotating drum. The volume loss in cubic millimeters (mm³) is measured and compared against a standard reference rubber.",
    metric: "Volumetric Loss ≤ 90mm³ (SAR Grade)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "adhesion",
    title: "Inter-Ply Adhesion Testing",
    standard: "ISO 252 / IS 1891 Part 1",
    subtitle: "Preventing Ply Delamination",
    description: "Conveyor belts undergo continuous bending fatigue around drive pulleys. Ply delamination leads to catastrophic failure. We measure the bond strength between fabric plies and between the rubber cover and the carcass to ensure unity under extreme stress.",
    methodology: "Specimens are stripped open partially, and a peeling test is conducted on a universal testing machine to record the average peel force per unit width (N/mm) required to separate the layers.",
    metric: "Bond Strength ≥ 4.5 N/mm (Fabric/Fabric)",
    image: "https://images.unsplash.com/photo-1581091224801-f4190829704f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fire",
    title: "Flame Retardancy & Friction",
    standard: "ISO 340 / IS 3181",
    subtitle: "Safety for Underground Mines",
    description: "Safety in enclosed mines is critical. Our fire testing lab evaluates self-extinguishing capabilities and electrical resistance. This prevents friction-induced fire propagation in high-risk operations.",
    methodology: "Belts are exposed to burner flames, and the self-extinction time is measured. We also test surface electrical resistance to verify static dissipation, and run drum friction tests to ensure no ignition under friction.",
    metric: "Self-Extinguishes in ≤ 3 seconds",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "heat",
    title: "EPDM Thermal Aging Test",
    standard: "ISO 188 / ASTM D573",
    subtitle: "High-Temperature Lifespan",
    description: "Cement, steel, and chemical plants convey hot clinker and ore. We subject our EPDM heat-resistant cover compounds to accelerated aging chambers to ensure they won't harden, crack, or lose flexibility over time.",
    methodology: "Rubber specimens are placed in high-temperature circulating air ovens (up to 200°C) for several days. Changes in tensile strength, hardness, and elongation are measured post-aging.",
    metric: "Rated for Continuous 180°C (Peaks 220°C)",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TestingProcedures() {
  const [activeTab, setActiveTab] = useState(PROCEDURES[0].id);
  const currentTest = PROCEDURES.find((p) => p.id === activeTab) || PROCEDURES[0];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            IN-HOUSE TESTING LAB
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6">
            How We Validate Quality
          </h2>
          <p className="text-base lg:text-lg text-subtitle leading-relaxed font-medium">
            Every production batch undergoes strict laboratory verification. We do not compromise on technical safety metrics.
          </p>
        </div>

        {/* Tab Controls (Mobile: Scrollable / Desktop: Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 lg:border-l border-border/80 scrollbar-none">
            {PROCEDURES.map((p) => {
              const isActive = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`relative text-left px-5 py-4 whitespace-nowrap lg:whitespace-normal rounded-xl lg:rounded-none lg:rounded-r-xl transition-all duration-300 font-bold cursor-pointer border lg:border-l-4 lg:border-y-0 lg:border-r-0 ${
                    isActive
                      ? "bg-primary text-white border-primary lg:border-l-accent"
                      : "bg-[#F9FAFB] text-[#64748B] border-border/60 hover:bg-slate-50 hover:text-title"
                  }`}
                  id={`tab-btn-${p.id}`}
                >
                  <div className="text-xs uppercase tracking-wider opacity-60 mb-0.5 font-semibold">
                    {p.standard}
                  </div>
                  <div className="text-sm sm:text-base leading-tight">
                    {p.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:col-span-8 bg-[#F9FAFB] border border-border/50 rounded-2xl p-6 sm:p-10 min-h-[450px] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                {/* Text Content */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-md mb-4 inline-block">
                      {currentTest.standard}
                    </span>
                    <h3 className="text-2xl font-bold text-title mb-1 leading-tight">
                      {currentTest.title}
                    </h3>
                    <p className="text-xs font-semibold text-subtitle/60 uppercase tracking-wider mb-6">
                      {currentTest.subtitle}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase text-title tracking-wider mb-1.5">Overview</h4>
                        <p className="text-[13px] text-subtitle leading-relaxed font-medium text-justify md:text-left">
                          {currentTest.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-title tracking-wider mb-1.5">Testing Method</h4>
                        <p className="text-[13px] text-subtitle leading-relaxed font-medium text-justify md:text-left">
                          {currentTest.methodology}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metric Card */}
                  <div className="mt-8 p-4 bg-white border border-border/80 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance Standard</div>
                      <div className="text-sm font-bold text-title">{currentTest.metric}</div>
                    </div>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full rounded-xl overflow-hidden shadow-inner border border-border/40 select-none">
                  <img
                    src={currentTest.image}
                    alt={currentTest.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">BeltForge Testing Laboratory</span>
                    <h5 className="text-white text-xs font-bold leading-tight">ISO Compliant Facility</h5>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
