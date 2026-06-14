"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_CERTIFICATIONS, EH_TRUST_PARTNERS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const QC_STAGES = [
  { step: "01", title: "Raw Material Inspection", desc: "All incoming steel, fabric, rubber, and components are tested against material certificates before production begins." },
  { step: "02", title: "In-Process Quality Control", desc: "Dimensional checks, weld inspections, and alignment verification at every production stage by our QC engineers." },
  { step: "03", title: "Load & Stress Testing", desc: "Fully assembled systems undergo load testing at 125% rated capacity and endurance runs before dispatch." },
  { step: "04", title: "Pre-Dispatch Inspection", desc: "Final comprehensive inspection covering all mechanical, electrical, and dimensional parameters with documentation." },
  { step: "05", title: "Site Commissioning QC", desc: "Post-installation alignment checks, operational verification, and performance tests at the client site." },
  { step: "06", title: "After-Sales Monitoring", desc: "Scheduled AMC inspection visits and 24/7 support hotline to ensure long-term system performance." },
];

export default function QualityPageClient() {
  return (
    <>
      <PageHero
        badge="QUALITY & CERTIFICATIONS"
        title="ISO-Certified Manufacturing"
        highlight="Quality Standards"
        subtitle="Every EarthHaul conveyor and automation system is manufactured to international quality standards with multi-stage testing and full certification."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Quality & Certifications" },
        ]}
        ctaLabel="Download Quality Policy"
        ctaHref="/earthhaul/contact"
      />

      {/* Certifications */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>CERTIFICATIONS</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              Internationally <span style={{ color: BLUE }}>Certified Quality</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EH_CERTIFICATIONS.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border-2 border-[#E2E8F0] rounded-2xl p-7 hover:shadow-xl hover:border-[#1565C0]/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${BLUE}08` }}>
                    <svg className="w-7 h-7" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold mb-1" style={{ color: CHARCOAL }}>{cert.name}</h3>
                    <p className="text-[13px] font-semibold mb-1" style={{ color: BLUE }}>{cert.description}</p>
                    <p className="text-[11px] text-[#818487]">Certified by: {cert.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>QUALITY PROCESS</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              Our 6-Stage <span style={{ color: BLUE }}>Quality Control System</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QC_STAGES.map((stage, i) => (
              <motion.div key={stage.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white border border-[#E2E8F0] rounded-xl p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="text-[48px] font-black leading-none absolute top-3 right-4 text-[#E8EEF5]">{stage.step}</div>
                <h3 className="text-[14px] font-bold mb-2 relative z-10" style={{ color: CHARCOAL }}>{stage.title}</h3>
                <p className="text-[12.5px] text-[#57585C] leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-white py-20 border-b border-[#E2E8F0]">
        <div className="container-custom text-center">
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#818487] mb-8">Trusted by India&apos;s Leading Industrial Groups</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {EH_TRUST_PARTNERS.map((name) => (
              <div key={name} className="text-[15px] font-bold text-[#B1B4B6] hover:text-[#1565C0] transition-colors cursor-default">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: `${BLUE}10` }} />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-5">Quality You Can Rely On</h2>
          <p className="text-[15px] text-white/50 mb-8">Every system we build is backed by ISO certification, multi-stage testing, and 15+ years of engineering experience.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Request Project Quote
          </Link>
        </div>
      </section>
    </>
  );
}
