"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EH_CASE_STUDIES } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative bg-[#F8FAFC] py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
            Proven Results Across <span style={{ color: BLUE }}>Industries</span>
          </h2>
          <p className="text-sm text-[#475569] mt-4 leading-relaxed">
            Real projects, measurable outcomes — see how EarthHaul transforms industrial operations.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {EH_CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white"
                    style={{ backgroundColor: `${BLUE}DD` }}
                  >
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[15px] font-bold text-[#1E293B] leading-snug mb-4 group-hover:text-[#1565C0] transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-3 text-[12px]">
                  <div>
                    <span className="font-bold text-[#64748B] uppercase tracking-wider text-[10px]">Challenge</span>
                    <p className="text-[#475569] mt-0.5 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: BLUE }}>Solution</span>
                    <p className="text-[#475569] mt-0.5 leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: ORANGE }}>Result</span>
                    <p className="text-[#1E293B] font-semibold mt-0.5">{study.result}</p>
                  </div>
                </div>

                <button
                  className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors"
                  style={{ color: BLUE }}
                >
                  View Case Study
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
