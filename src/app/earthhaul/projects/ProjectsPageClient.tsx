"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_CASE_STUDIES } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const EXTRA_PROJECTS = [
  {
    id: "cement-conveyor",
    title: "Cement Plant Conveyor Modernization",
    industry: "Cement & Construction",
    location: "Rajasthan, India",
    challenge: "Aging dust-contaminated conveyors causing frequent blockages and 20% capacity loss.",
    solution: "Installed 1.2km dust-resistant sidewall conveyor system with sealed housings and automated cleaning.",
    result: "Zero blockage incidents, 25% capacity increase, 40% maintenance cost reduction.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pharma-line",
    title: "GMP Conveyor Line — Pharmaceutical Plant",
    industry: "Pharmaceutical",
    location: "Hyderabad, India",
    challenge: "GMP compliance requirements for tablet packaging line required full conveyor system replacement.",
    solution: "Designed stainless steel GMP-grade conveyor with FDA-grade belting and CIP wash-down capability.",
    result: "Full GMP certification achieved, 0 contamination incidents since installation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "steel-plant",
    title: "Steel Plant Material Flow Automation",
    industry: "Iron & Steel",
    location: "Jamshedpur, India",
    challenge: "Manual material transfer creating safety risks and throughput bottlenecks in a rolling mill.",
    solution: "Integrated automated conveyor network with load cells, PLCs, and SCADA control for real-time management.",
    result: "100% elimination of manual handling, 55% throughput improvement.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
  },
];

const ALL_PROJECTS = [...EH_CASE_STUDIES, ...EXTRA_PROJECTS];

export default function ProjectsPageClient() {
  return (
    <>
      <PageHero
        badge="OUR PROJECTS"
        title="Proven Industrial"
        highlight="Project Results"
        subtitle="Six completed projects across mining, food processing, pharma, steel, cement, and logistics — delivering measurable results for India's leading industries."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Projects" },
        ]}
        ctaLabel="Start Your Project"
        ctaHref="/earthhaul/contact"
      />

      {/* Projects Grid */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          {/* Stats strip */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "10+", label: "Industries Served" },
              { value: "97%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center">
                <div className="text-2xl font-extrabold mb-1" style={{ color: BLUE }}>{stat.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#818487]">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(21,101,192,0.10)] hover:border-[#1565C0]/20 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${project.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md" style={{ backgroundColor: `${ORANGE}20`, color: ORANGE, border: `1px solid ${ORANGE}40` }}>{project.industry}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-[11px] text-white/60 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[15px] font-bold mb-4 leading-snug" style={{ color: CHARCOAL }}>{project.title}</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Challenge", text: project.challenge, color: "#EF4444" },
                      { label: "Solution", text: project.solution, color: BLUE },
                      { label: "Result", text: project.result, color: "#16A34A" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5">
                        <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 mt-0.5" style={{ backgroundColor: `${item.color}12`, color: item.color }}>{item.label}</span>
                        <p className="text-[12px] text-[#57585C] leading-snug">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: `${BLUE}10` }} />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-5">Ready to Start Your Project?</h2>
          <p className="text-[15px] text-white/50 mb-8">Join 100+ industrial companies that trust EarthHaul to engineer their conveyor and automation systems.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Request Project Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
