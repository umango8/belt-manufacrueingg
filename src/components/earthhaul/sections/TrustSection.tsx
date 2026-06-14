"use client";

import React from "react";
import { motion } from "framer-motion";
import { EH_CERTIFICATIONS, EH_TRUST_PARTNERS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

export default function TrustSection() {
  return (
    <section id="trust" className="relative bg-white py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            TRUST & CERTIFICATIONS
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
            Internationally Certified <span style={{ color: BLUE }}>Quality Standards</span>
          </h2>
          <p className="text-[14px] text-[#57585C] mt-4">Every EarthHaul system is manufactured under ISO 9001:2015 certification with full traceability.</p>
        </motion.div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {EH_CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 px-6 py-4 bg-[#F5F5F5] border border-[#E2E8F0] rounded-xl hover:shadow-md hover:border-[#1565C0]/20 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${BLUE}08` }}
              >
                <svg className="w-5 h-5" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-extrabold" style={{ color: CHARCOAL }}>{cert.name}</div>
                <div className="text-[11px] text-[#818487]">{cert.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="border-t border-[#E2E8F0] pt-12">
          <p className="text-center text-[11px] font-bold text-[#818487] uppercase tracking-[0.15em] mb-8">
            Trusted by India&apos;s Leading Industrial Brands
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {EH_TRUST_PARTNERS.map((partner) => (
              <span key={partner} className="text-[14px] font-bold text-[#B1B4B6] hover:text-[#1565C0] transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
