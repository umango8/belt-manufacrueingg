"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

const TRUST_ITEMS = [
  "Customized Engineering",
  "Industrial Grade Systems",
  "End-to-End Automation",
  "Reliable Technical Support",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-md mb-6"
              style={{
                backgroundColor: `${BLUE}15`,
                color: "#22A6F2",
                border: `1px solid ${BLUE}30`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ORANGE }} />
              CONVEYOR & AUTOMATION SYSTEMS
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold text-white leading-[1.15] tracking-tight">
              Smart Conveyor &{" "}
              <span style={{ color: "#22A6F2" }}>Automation Systems</span>{" "}
              Built for Industrial Performance
            </h1>

            <p className="text-[15px] sm:text-base text-white/55 mt-6 leading-relaxed max-w-xl">
              Engineering advanced conveyor and automation solutions designed to optimize productivity,
              streamline material handling, and improve operational efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/earthhaul#solutions"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-7 py-3.5 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1976D2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
              >
                Explore Solutions
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/earthhaul#contact"
                className="inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-7 py-3.5 text-[12px] rounded-lg text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
              >
                Get Project Quote
              </Link>
            </div>
          </motion.div>

          {/* Right — Floating Engineering Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BLUE}25` }}>
                  <svg className="w-5 h-5" style={{ color: "#22A6F2" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">System Status</span>
                  <div className="text-[14px] font-bold text-white">Engineering Ready</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "System Uptime", value: "99.7%" },
                  { label: "Throughput Capacity", value: "12,000 TPH" },
                  { label: "Active Installations", value: "1,000+" },
                  { label: "Response Time", value: "< 4 Hours" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-white/5">
                    <span className="text-[12px] text-white/40 font-medium">{item.label}</span>
                    <span className="text-[13px] text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-[11px] text-white/30">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[12px] text-white/40 font-medium">
                <svg className="w-4 h-4 shrink-0" style={{ color: ORANGE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
