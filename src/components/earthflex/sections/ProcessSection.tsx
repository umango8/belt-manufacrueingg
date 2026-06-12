"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  stage: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    stage: "STAGE 01",
    title: "Expert Consultation",
    description:
      "Direct advisory support to evaluate your conveyor layout, material load specifications, and daily capacity throughput needs.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "02",
    stage: "STAGE 02",
    title: "Precision Engineering",
    description:
      "Custom-engineered width, thickness, and specialized rubber compounds matching exact factory machinery specifications.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18v-8m0 8l6-3m-6-5l6-3m-6 0V2m0 2l5.447 2.724A1 1 0 0121 7.618v10.764a1 1 0 01-.553.894L15 22m0-18v18" />
      </svg>
    ),
  },
  {
    step: "03",
    stage: "STAGE 03",
    title: "Rigorous Testing",
    description:
      "Severe testing protocols for tensile strength, heat tolerance, and wear resistance to guarantee zero-downtime performance.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "04",
    stage: "STAGE 04",
    title: "Streamlined Delivery",
    description:
      "High-capacity logistics and technical dispatch routes ensuring your custom belting systems arrive at your plant on schedule.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#F8FAFC] py-24 border-b border-[#E5E7EB]">
      {/* Background structural grid layout */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#E5E7EB 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#1F2937] leading-[1.25] tracking-tight mt-4">
            How we deliver <span className="text-[#4673C5]">operational excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mt-4 leading-relaxed">
            Our structured, engineering-led workflow minimizes plant downtime, ensures rigid compliance with global safety standards, and guarantees project reliability.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#4673C5] hover:shadow-xl hover:shadow-[#4673C5]/5 cursor-default z-10"
            >
              {/* Connecting Dashed Line (Desktop Only) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-[75%] w-[50%] h-[2px] border-t-2 border-dashed border-[#E5E7EB] z-0 pointer-events-none group-hover:border-[#4673C5]/40 transition-colors duration-300" />
              )}

              {/* Card Top Row: Icon and Number */}
              <div className="flex items-center justify-between w-full mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#4673C5] flex items-center justify-center group-hover:bg-[#4673C5] group-hover:border-[#4673C5] group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-[#E5E7EB] tracking-tight select-none group-hover:text-[#4673C5]/10 transition-colors duration-300">
                  {item.step}
                </span>
              </div>

              {/* Card Bottom Row: Details */}
              <div className="flex flex-col text-left mt-2">
                <span className="text-[9px] font-bold text-[#0A741C] uppercase tracking-widest bg-[#0A741C]/10 border border-[#0A741C]/20 px-2 py-0.5 rounded w-fit mb-3">
                  {item.stage}
                </span>
                
                <h3 className="text-base lg:text-lg font-bold text-[#1F2937] group-hover:text-[#4673C5] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
