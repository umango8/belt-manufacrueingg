"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0F172A] py-20 border-t border-white/5">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: `${BLUE}10` }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Side Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
              style={{ backgroundColor: `${BLUE}20`, color: "#22A6F2", border: `1px solid ${BLUE}40` }}
            >
              TECHNICAL ASSISTANCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white leading-tight tracking-tight">
              Have a complex material handling challenge?
            </h2>
            <p className="text-[14.5px] text-white/50 mt-3 leading-relaxed">
              Let our senior automation engineers design a custom solution for your facility.
            </p>
          </div>

          {/* Right Side Button */}
          <div className="shrink-0">
            <Link
              href="/earthhaul/contact"
              className="group inline-flex items-center justify-center gap-2.5 font-bold tracking-wide uppercase px-8 py-4.5 text-[12px] rounded-lg text-white transition-all duration-300 shadow-xl"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
            >
              Schedule a Technical Consultation
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
