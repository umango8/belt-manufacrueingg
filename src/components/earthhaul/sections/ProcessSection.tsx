"use client";

import React from "react";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Site Audit",
    desc: "We visit your factory to study your plant layout, understand the materials you want to move, and calculate your weight loads.",
  },
  {
    step: "02",
    title: "Custom Design & CAD Modeling",
    desc: "Our engineering team creates exact 3D models and automated computer simulations to show exactly how your new conveyor line will work.",
  },
  {
    step: "03",
    title: "Precision Manufacturing",
    desc: "We build your automation system using super strong, premium-grade materials following the highest global safety standards.",
  },
  {
    step: "04",
    title: "On-Site Setup & Support",
    desc: "Our experts install and test the entire system at your factory and provide 24/7 maintenance help to keep your business moving smoothly.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#F5F5F5] py-24 border-b border-[#E2E8F0] overflow-hidden">
      {/* Background pattern */}
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            TURNKEY PROCESS
          </span>
          <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-4" style={{ color: CHARCOAL }}>
            Our Step-by-Step Process
          </h2>
          <p className="text-[15px] text-[#57585C] leading-relaxed">
            From the first site visit to final installation, we handle everything seamlessly to set up your automated factory lines.
          </p>
        </motion.div>

        {/* 4-Step Timeline Grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2.5px] mx-auto" style={{ maxWidth: "calc(100% - 240px)", backgroundColor: `${BLUE}15` }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step number bubble */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[16px] font-black text-white z-10 relative shadow-lg"
                    style={{ backgroundColor: BLUE }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-[0_8px_30px_rgba(21,101,192,0.06)] hover:border-[#1565C0]/20 transition-all duration-300 h-[calc(100%-80px)]">
                  <h3 className="text-[15px] font-bold mb-3" style={{ color: CHARCOAL }}>
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] text-[#57585C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
