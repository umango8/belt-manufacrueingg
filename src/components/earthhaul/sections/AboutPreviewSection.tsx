"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

export default function AboutPreviewSection() {
  return (
    <section className="relative bg-white py-24 border-b border-[#E2E8F0] overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1565C020 1px, transparent 1px), linear-gradient(90deg, #1565C020 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-[450px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 inline-flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${BLUE}25` }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#22A6F2" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Quality Assurance</div>
                    <div className="text-[14px] font-bold text-white">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background grids */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ backgroundColor: `${BLUE}08`, border: `2px solid ${BLUE}12` }}
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              🛠️ WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-5" style={{ color: CHARCOAL }}>
              Your Trusted Partner in <span style={{ color: BLUE }}>Industrial Automation</span>
            </h2>

            <p className="text-[15px] text-[#57585C] leading-relaxed mb-8">
              Earthhaul is a leading name in custom engineering and turnkey material handling solutions. We don’t just manufacture belts; we design smart, automated conveyor systems that resolve your plant&apos;s toughest logistics challenges. From design to final on-site installation, we deliver the reliability your business needs to stay ahead.
            </p>

            {/* Live Counters Stat Grid - 3 Column */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E2E8F0]">
              {[
                {
                  value: "15+",
                  icon: "💎",
                  label: "Years of Engineering Excellence",
                },
                {
                  value: "500+",
                  icon: "🚀",
                  label: "Successful Installations",
                },
                {
                  value: "ISO 9001:2015",
                  icon: "🏆",
                  label: "Certified Quality Standards",
                },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{stat.icon}</span>
                    <span className="text-2xl font-black" style={{ color: BLUE }}>{stat.value}</span>
                  </div>
                  <span className="text-[12px] text-[#818487] font-semibold leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/earthhaul/about"
                className="group inline-flex items-center gap-2.5 font-bold text-[13px] uppercase tracking-wide transition-all duration-300"
                style={{ color: BLUE }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}
              >
                Learn More About EarthHaul
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
