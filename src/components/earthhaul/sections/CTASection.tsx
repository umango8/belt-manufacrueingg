"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0F172A] py-24">
      {/* Blueprint texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: `${BLUE}10` }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `${ORANGE}08` }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-6"
            style={{ backgroundColor: `${BLUE}15`, color: "#22A6F2", border: `1px solid ${BLUE}30` }}
          >
            START YOUR PROJECT
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white leading-tight tracking-tight">
            Looking for a Reliable Conveyor &{" "}
            <span style={{ color: "#22A6F2" }}>Automation Partner?</span>
          </h2>

          <p className="text-[15px] text-white/45 mt-5 leading-relaxed max-w-xl mx-auto">
            Talk to our engineering experts for customized conveyor and automation solutions
            tailored to your industrial requirements.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <Link
              href="/earthhaul#contact"
              className="inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1976D2"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
            >
              Request Project Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/earthhaul#contact"
              className="inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white/70 hover:text-white border border-white/12 hover:border-white/25 transition-all duration-300 hover:bg-white/5"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
