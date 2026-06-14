"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const INDUSTRIES_DATA = [
  {
    slug: "mining-minerals",
    name: "Mining & Minerals",
    desc: "Super strong conveyor systems built to move heavy rocks and minerals easily in rough outdoor areas.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L21 3m-6.5 6.5l-5 5L3 21l1.5-6.5 5-5 5-5zM17 5l2 2" />
      </svg>
    ),
  },
  {
    slug: "iron-steel",
    name: "Iron & Steel",
    desc: "Heavy-duty, heat-proof conveyor lines made to carry heavy metals and survive very hot factory temperatures.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M5 22V4a2 2 0 012-2h10a2 2 0 012 2v18M9 2v20M15 2v20M5 8h14M5 14h14" />
      </svg>
    ),
  },
  {
    slug: "cement-infrastructure",
    name: "Cement & Infrastructure",
    desc: "Dust-proof and long-lasting conveyors designed to move sand, stones, and bags of cement without breaking down.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "food-confectionery",
    name: "Food & Confectionery",
    desc: "100% clean and safe conveyor belts made specifically to handle everyday snacks and bakery foods without any germs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8l-5-5M7 8l5-5M17 14l-5 5M7 14l5 5" />
      </svg>
    ),
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    desc: "Ultra-clean and certified automated systems built to handle medicines and medical bottles safely and cleanly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    slug: "tyre-automation",
    name: "Tyre & Automation",
    desc: "Special high-grip roller lines made to hold and move heavy rubber vehicle tyres smoothly across the floor.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeWidth={1.5} d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      </svg>
    ),
  },
  {
    slug: "paper-packaging",
    name: "Paper, Printing & Packaging",
    desc: "Fast-moving flat belts designed to carry large paper rolls and cardboard boxes smoothly without any jamming.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    slug: "warehousing-logistics",
    name: "Warehousing & Logistics",
    desc: "Smart, high-speed automated systems that sort and move delivery boxes quickly to save time in big packing centers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative bg-white py-24 border-b border-[#E2E8F0] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1565C020 1px, transparent 1px), linear-gradient(90deg, #1565C020 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-4" style={{ color: CHARCOAL }}>
            Serving India&apos;s <span style={{ color: BLUE }}>Core Industries</span>
          </h2>
          <p className="text-[15px] text-[#57585C] leading-relaxed">
            From mining pits to high-speed logistics centers, we manufacture reliable conveyor and automation systems tailored for every sector.
          </p>
        </motion.div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, i) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(21,101,192,0.08)] hover:border-[#1565C0]/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${BLUE}08`, color: BLUE }}
                >
                  {ind.icon}
                </div>
                <h3 className="text-[15px] font-bold leading-snug mb-2 group-hover:text-[#1565C0] transition-colors" style={{ color: CHARCOAL }}>
                  {ind.name}
                </h3>
                <p className="text-[12.5px] text-[#57585C] leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              <Link
                href={`/earthhaul/industries#${ind.slug}`}
                className="inline-flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 mt-auto"
                style={{ color: BLUE }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}
              >
                Read More
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
