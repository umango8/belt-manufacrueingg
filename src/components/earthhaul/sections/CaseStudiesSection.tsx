"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EH_CASE_STUDIES } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              Real Projects,{" "}
              <span style={{ color: BLUE }}>Real Results</span>
            </h2>
          </div>
          <Link
            href="/earthhaul/projects"
            className="shrink-0 inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-wide transition-colors duration-200"
            style={{ color: BLUE }}
            onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {EH_CASE_STUDIES.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(21,101,192,0.10)] hover:border-[#1565C0]/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${ORANGE}20`, color: ORANGE, border: `1px solid ${ORANGE}40` }}
                  >
                    {project.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-[11px] text-white/60 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[15px] font-bold mb-4 leading-snug" style={{ color: CHARCOAL }}>
                  {project.title}
                </h3>

                <div className="space-y-3">
                  {[
                    { label: "Challenge", text: project.challenge, color: "#EF4444" },
                    { label: "Solution", text: project.solution, color: BLUE },
                    { label: "Result", text: project.result, color: "#16A34A" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                      <span
                        className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                        style={{ backgroundColor: `${item.color}12`, color: item.color }}
                      >
                        {item.label}
                      </span>
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
  );
}
