"use client";

import React from "react";
import { motion } from "framer-motion";
import { EH_PROCESS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function ProcessSection() {
  return (
    <section className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
            From Assessment to <span style={{ color: BLUE }}>Installation</span>
          </h2>
          <p className="text-sm text-[#475569] mt-4 leading-relaxed">
            A structured, engineering-driven approach to every conveyor and automation project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[36px] left-0 right-0 h-[2px] bg-[#E2E8F0]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {EH_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-5">
                  <div
                    className="w-[72px] h-[72px] rounded-full mx-auto flex items-center justify-center text-lg font-extrabold transition-all duration-300 group-hover:scale-110 bg-white border-2"
                    style={{
                      borderColor: "#E2E8F0",
                      color: "#64748B",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = BLUE;
                      e.currentTarget.style.color = BLUE;
                      e.currentTarget.style.backgroundColor = `${BLUE}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.color = "#64748B";
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3 className="text-[14px] font-bold text-[#1E293B] mb-2 group-hover:text-[#1565C0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
