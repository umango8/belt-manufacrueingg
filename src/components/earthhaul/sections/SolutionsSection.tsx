"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EH_PRODUCTS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-[#F8FAFC] py-24 border-b border-[#E2E8F0]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-4"
              style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              OUR SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#1E293B] leading-tight tracking-tight">
              Engineered Conveyor & <span style={{ color: BLUE }}>Automation Systems</span>
            </h2>
            <p className="text-sm text-[#475569] mt-4 leading-relaxed max-w-xl">
              From heavy-duty mining conveyors to precision automation belts — each system is custom-engineered
              for your specific operational requirements.
            </p>
          </div>

          <Link
            href="/earthhaul"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#1E293B] hover:text-[#1565C0] transition-colors group shrink-0"
          >
            View All Products
            <div className="w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center group-hover:border-[#1565C0] group-hover:bg-[#1565C0] group-hover:text-white transition-all duration-300">
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EH_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/earthhaul/products/${product.slug}`}
                className="group block bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(21,101,192,0.08)] transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-[180px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm"
                      style={{ color: BLUE }}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[14px] font-bold text-[#1E293B] leading-snug group-hover:text-[#1565C0] transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] mt-2 leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: BLUE }}>
                    Learn More
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
