"use client";

import React from "react";
import { motion } from "framer-motion";
import { EH_CERTIFICATIONS, EH_TRUST_PARTNERS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function TrustSection() {
  return (
    <section id="trust" className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            TRUST & CERTIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
            Trusted by <span style={{ color: BLUE }}>Industrial Businesses</span>
          </h2>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {EH_CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 px-6 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${BLUE}08` }}
              >
                <svg className="w-5 h-5" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#1E293B]">{cert}</span>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="border-t border-[#E2E8F0] pt-12">
          <p className="text-center text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em] mb-8">
            Trusted by Leading Industrial Brands
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {EH_TRUST_PARTNERS.map((partner) => (
              <span key={partner} className="text-[14px] font-bold text-[#CBD5E1] hover:text-[#94A3B8] transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
