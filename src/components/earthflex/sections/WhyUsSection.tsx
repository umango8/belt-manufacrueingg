"use client";

import { motion } from "framer-motion";
import React from "react";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  iconBg: string;
  icon: React.ReactNode;
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: "BF-1",
    title: "Strong Quality",
    description: "We check every single belt before sending it to you. We make sure it is strong enough to do the job perfectly without snapping.",
    bgColor: "bg-[#4673C5]/5",
    borderColor: "border-[#4673C5]/10",
    iconColor: "text-[#4673C5]",
    iconBg: "bg-[#4673C5]/10",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "BF-2",
    title: "Made to Fit",
    description: "All machines are not the same size. We cut and shape the belts to match your exact machine size so they fit perfectly.",
    bgColor: "bg-[#0A741C]/5",
    borderColor: "border-[#0A741C]/10",
    iconColor: "text-[#0A741C]",
    iconBg: "bg-[#0A741C]/10",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: "BF-3",
    title: "Fast Delivery",
    description: "We know you cannot afford to wait. We keep a huge stock ready to ship so we can send your order fast and save your time.",
    bgColor: "bg-[#0284c7]/5",
    borderColor: "border-[#0284c7]/10",
    iconColor: "text-[#0284c7]",
    iconBg: "bg-[#0284c7]/10",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "BF-4",
    title: "Free Help",
    description: "You do not have to guess. Our team helps you pick the right belt and gives you easy tips to fix and take care of it.",
    bgColor: "bg-[#4f46e5]/5",
    borderColor: "border-[#4f46e5]/10",
    iconColor: "text-[#4f46e5]",
    iconBg: "bg-[#4f46e5]/10",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative bg-white py-24 border-b border-[#E5E7EB] overflow-hidden">
      
      {/* Top Watermark Circle Badge SVG */}
      <div className="absolute -top-12 -right-12 opacity-30 select-none pointer-events-none z-0 hidden lg:block">
        <svg width="320" height="320" viewBox="0 0 200 200" fill="none" className="text-[#4673C5]/5 stroke-current">
          <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" strokeDasharray="8 4" />
          <path d="M100 10v180M10 100h180" strokeWidth="0.5" strokeDasharray="2 2" />
          {/* Circular text path mapping */}
          <path id="badgePath" d="M100 25a75 75 0 1 1 0 150 75 75 0 1 1 0-150" fill="none" />
          <text className="text-[7.5px] font-mono font-bold tracking-[0.22em] fill-[#4673C5]/12">
            <textPath href="#badgePath" startOffset="0%">
              EARTHFLEX INDUSTRIAL BELTING SYSTEM • PREMIUM B2B DIV •
            </textPath>
          </text>
          {/* Compass Center Logo Symbol */}
          <rect x="85" y="85" width="30" height="30" rx="6" strokeWidth="1.5" />
          <path d="M92 100h16M100 92v16" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Large Background Text SVG Watermark */}
      {/* <div className="absolute -bottom-8 left-0 right-0 w-full overflow-hidden select-none pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 1000 120" className="w-full h-auto fill-none">
          <text
            x="50%"
            y="95"
            textAnchor="middle"
            className="text-[120px] font-black tracking-[-0.05em]"
            style={{ fill: "none", stroke: "rgba(70, 115, 197, 0.045)", strokeWidth: "1.2px" }}
          >
            EARTHFLEX
          </text>
        </svg>
      </div> */}

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4673C5] animate-pulse" />
              WHY CHOOSE US
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-extrabold text-[#1F2937] leading-[1.2] tracking-tight mt-6">
              The <span className="text-[#4673C5]">Earthflex</span> Advantage
            </h2>
            
            <p className="text-sm sm:text-base text-[#4B5563] mt-5 leading-relaxed font-medium">
              A broken belt brings your factory to a full stop and wastes your money. We fix this by making extra-tough Earthflex belts that do not snap. They easily handle hot heat and heavy loads so your machines keep working day and night without any issues.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-[#E5E7EB]">
              <div>
                <span className="block text-3xl font-black text-[#4673C5] tracking-tight">25+</span>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block mt-1">
                  Years of Work
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-[#1F2937] tracking-tight">100%</span>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block mt-1">
                  Safe & Tested
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {BENEFIT_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${item.bgColor} border ${item.borderColor} rounded-2xl p-6 lg:p-8 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#4673C5] hover:bg-white hover:shadow-xl hover:shadow-[#4673C5]/5 cursor-default`}
                id={`why-us-${index}`}
              >
                {/* Technical corners */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-current opacity-10 group-hover:opacity-40 group-hover:text-[#4673C5] transition-all duration-300 pointer-events-none" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-current opacity-10 group-hover:opacity-40 group-hover:text-[#4673C5] transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-current opacity-10 group-hover:opacity-40 group-hover:text-[#4673C5] transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-current opacity-10 group-hover:opacity-40 group-hover:text-[#4673C5] transition-all duration-300 pointer-events-none" />

                {/* Card index marker */}
                <span className="absolute right-6 top-6 text-[10px] font-mono font-bold text-[#6B7280]/30 group-hover:text-[#4673C5]/40 transition-colors duration-300 select-none">
                  {item.id}
                </span>

                {/* Card Header & Content */}
                <div>
                  {/* Icon Container with transition to Blue hover color */}
                  <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-6 group-hover:bg-[#4673C5] group-hover:text-white transition-all duration-300 rounded-xl shadow-xs`}>
                    {item.icon}
                  </div>

                  <h3 className="text-base lg:text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#4673C5] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
                    {item.description}
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
