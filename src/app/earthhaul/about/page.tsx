"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import EarthHaulHeader from "@/components/earthhaul/layout/Header";
import EarthHaulFooter from "@/components/earthhaul/layout/Footer";
import { EH_WHY_CHOOSE, EH_INDUSTRIES } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function EarthHaulAboutPage() {
  return (
    <div className="theme-earthhaul">
      <EarthHaulHeader />

      <main>
        {/* ── 1. About Hero ─────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0F172A]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/50" />

          <div className="container-custom relative z-10 py-36">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-6"
                style={{ backgroundColor: `${BLUE}15`, color: "#22A6F2", border: `1px solid ${BLUE}30` }}
              >
                ABOUT EARTHHAUL
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-white leading-[1.15] tracking-tight">
                Engineering Industrial Automation That{" "}
                <span style={{ color: "#22A6F2" }}>Moves Industries Forward</span>
              </h1>
              <p className="text-[15px] text-white/50 mt-6 leading-relaxed max-w-xl">
                Delivering high-performance conveyor and automation systems designed for modern industrial operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Who We Are ─────────────────────────────────────── */}
        <section className="bg-white py-24 border-b border-[#E2E8F0]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden h-[400px] bg-[#E2E8F0]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80')",
                  }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
                  style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
                >
                  WHO WE ARE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight mb-5">
                  Conveyor & Automation <span style={{ color: BLUE }}>Specialists</span>
                </h2>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  EarthHaul is a trusted conveyor and automation systems company specializing in engineered
                  material handling and industrial automation solutions tailored to demanding industries.
                </p>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  With over two decades of experience, we combine deep engineering expertise with advanced
                  manufacturing capabilities to deliver systems that perform reliably in the harshest
                  industrial environments — from open-pit mining operations to FDA-certified food processing lines.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. Vision & Mission ───────────────────────────────── */}
        <section className="bg-[#F8FAFC] py-24 border-b border-[#E2E8F0]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  badge: "OUR VISION",
                  title: "Vision",
                  text: "To become a leading industrial automation and conveyor engineering company known for reliability, innovation, and engineering excellence.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                },
                {
                  badge: "OUR MISSION",
                  title: "Mission",
                  text: "To deliver precision-engineered automation systems that improve industrial productivity and operational efficiency.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: i === 0 ? BLUE : ORANGE }} />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${i === 0 ? BLUE : ORANGE}08`, color: i === 0 ? BLUE : ORANGE }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 block"
                    style={{ color: i === 0 ? BLUE : ORANGE }}
                  >
                    {card.badge}
                  </span>
                  <p className="text-[15px] text-[#1E293B] font-semibold leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Why Choose Us ──────────────────────────────────── */}
        <section className="bg-white py-24 border-b border-[#E2E8F0]">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
                style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
              >
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
                Built for Industrial <span style={{ color: BLUE }}>Reliability</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EH_WHY_CHOOSE.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${BLUE}08`, color: BLUE }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-[#1E293B] mb-2 group-hover:text-[#1565C0] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Industries Grid ────────────────────────────────── */}
        <section className="bg-[#F8FAFC] py-24 border-b border-[#E2E8F0]">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
                Industries <span style={{ color: BLUE }}>We Serve</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {EH_INDUSTRIES.map((industry) => (
                <span
                  key={industry.id}
                  className="px-5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[12px] font-semibold text-[#475569] hover:text-[#1565C0] hover:border-[#1565C0]/30 transition-all duration-200 cursor-default"
                >
                  {industry.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA ────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
              Build Smarter Industrial Systems with{" "}
              <span style={{ color: "#22A6F2" }}>EarthHaul</span>
            </h2>
            <p className="text-[14px] text-white/45 mt-4 leading-relaxed">
              Partner with our engineering team for customized conveyor and automation solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/earthhaul#contact"
                className="inline-flex items-center justify-center font-bold tracking-wide uppercase px-7 py-3.5 text-[12px] rounded-lg text-white transition-all duration-300"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1976D2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
              >
                Request Quote
              </Link>
              <Link
                href="/earthhaul#contact"
                className="inline-flex items-center justify-center font-bold tracking-wide uppercase px-7 py-3.5 text-[12px] rounded-lg text-white/70 hover:text-white border border-white/12 hover:border-white/25 transition-all duration-300 hover:bg-white/5"
              >
                Talk to Engineering Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EarthHaulFooter />
    </div>
  );
}
