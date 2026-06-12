"use client";

import React from "react";
import { motion } from "framer-motion";
import { EH_INDUSTRIES } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  mining: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L21 3m-6.5 6.5l-5 5L3 21l1.5-6.5 5-5 5-5zM17 5l2 2" /></svg>,
  steel: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M5 22V4a2 2 0 012-2h10a2 2 0 012 2v18M9 2v20M15 2v20M5 8h14M5 14h14" /></svg>,
  warehousing: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>,
  food: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8l-5-5M7 8l5-5M17 14l-5 5M7 14l5 5" /></svg>,
  automotive: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeWidth={1.5} d="M12 3v6M12 15v6M3 12h6M15 12h6" /></svg>,
  pharmaceutical: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  power: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  paper: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" /></svg>,
  agriculture: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
  ceramic: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9 7h6M9 12h6M9 17h4" /></svg>,
};

export default function IndustriesSection() {
  return (
    <section className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#1E293B] leading-tight tracking-tight">
            Automation Solutions Across <span style={{ color: BLUE }}>Diverse Industries</span>
          </h2>
          <p className="text-sm text-[#475569] mt-4 leading-relaxed">
            Built for demanding industrial environments.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {EH_INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white border border-[#E2E8F0] rounded-xl p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#1565C0]/30"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${BLUE}06`,
                  color: "#64748B",
                }}
              >
                <div className="group-hover:hidden">{INDUSTRY_ICONS[industry.icon]}</div>
                <div className="hidden group-hover:block" style={{ color: ORANGE }}>{INDUSTRY_ICONS[industry.icon]}</div>
              </div>
              <h3 className="text-[12.5px] font-bold text-[#1E293B] leading-snug group-hover:text-[#1565C0] transition-colors">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
