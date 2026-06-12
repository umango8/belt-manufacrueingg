"use client";

import React from "react";
import { motion } from "framer-motion";
import { EH_STATS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

const STAT_ICONS: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  projects: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  industries: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  installations: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function StatsSection() {
  return (
    <section className="relative bg-white py-20 border-b border-[#E2E8F0]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Company Overview */}
          <div className="lg:col-span-2">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              COMPANY OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
              Decades of Industrial <span style={{ color: BLUE }}>Engineering Excellence</span>
            </h2>
            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              EarthHaul brings over two decades of expertise in designing, manufacturing, and installing
              conveyor and automation systems for the most demanding industrial environments worldwide.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EH_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Orange top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: ORANGE }} />

                <div
                  className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${BLUE}08`, color: BLUE }}
                >
                  {STAT_ICONS[stat.icon]}
                </div>
                <div className="text-2xl font-extrabold text-[#1E293B] tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
