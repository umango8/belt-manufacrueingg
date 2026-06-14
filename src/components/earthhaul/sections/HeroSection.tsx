"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0F172A]">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/98 via-[#0F172A]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blue accent glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: `${BLUE}12` }}
      />

      <div className="container-custom relative z-10 py-32 flex flex-col justify-center min-h-[100vh]">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-2 rounded-md mb-6"
              style={{
                backgroundColor: `${BLUE}20`,
                color: "#22A6F2",
                border: `1px solid ${BLUE}40`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ORANGE }} />
              CONVEYOR & AUTOMATION SYSTEMS
            </span>
          </motion.div>

          {/* Main Headline H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.1] tracking-tight"
          >
            The Future of Material Handling.{" "}
            <span style={{ color: "#22A6F2" }}>Automated,</span>{" "}
            <span style={{ color: ORANGE }}>Efficient,</span> Unstoppable.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] text-white/65 mt-6 leading-relaxed max-w-2xl"
          >
            Stop worrying about production delays. Our custom conveyor systems are built tough and fully automated to make your material handling fast, flawless, and 100% hassle-free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            {/* Primary Button */}
            <Link
              href="/earthhaul/contact"
              className="group inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-7 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
            >
              Get Technical Consultation
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Secondary Button */}
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-7 py-4 text-[12px] rounded-lg text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
            >
              Browse Conveyor Range
              <svg className="w-4 h-4 animate-bounce mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Micro-Trust Pillars (Floating Bottom Bar) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] font-bold text-white/50 tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="text-[14px]">📦</span>
              <span>500+ Installed Systems</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[14px]">🛠️</span>
              <span>Turnkey Design-to-Site Handling</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[14px]">⏱️</span>
              <span>24/7 Lifecycle Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
