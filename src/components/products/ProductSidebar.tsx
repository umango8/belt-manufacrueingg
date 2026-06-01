"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRODUCT_CATALOG } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  conveyor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
    </svg>
  ),
  timing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  pu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" /><line x1="3" y1="14" x2="21" y2="14" />
    </svg>
  ),
  rubber: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M4 8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M8 8v8M12 8v8M16 8v8" />
    </svg>
  ),
  transmission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  flat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <rect x="2" y="10" width="20" height="4" rx="2" />
    </svg>
  ),
  modular: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

// Group products by category
const grouped = PRODUCT_CATALOG.reduce<Record<string, typeof PRODUCT_CATALOG>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

export default function ProductSidebar() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() ?? "";

  return (
    <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 lg:sticky lg:top-[100px]">
      <div
        className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_4px_32px_rgba(15,23,42,0.06)] overflow-hidden"
        data-lenis-prevent
      >
        {/* Sidebar header */}
        <div className="px-5 py-4 border-b border-[#f1f5f9] bg-[#0f172a]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] mb-1">Product Range</p>
          <p className="text-sm font-semibold text-white">All Industrial Belts</p>
        </div>

        {/* Scrollable product list */}
        <div
          className="overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-[70vh]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,0.3) transparent" }}
        >
          {Object.entries(grouped).map(([category, products]) => (
            <div key={category}>
              {/* Category label */}
              <div className="px-4 pt-4 pb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#334155]/40">{category}</span>
              </div>

              {products.map((product, idx) => {
                const isActive = product.slug === currentSlug;
                return (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      id={`sidebar-${product.slug}`}
                      className={`group flex items-center gap-3 mx-2 mb-1 px-3 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                        isActive
                          ? "bg-[#0f172a] text-white shadow-md"
                          : "hover:bg-[#f8fafc] text-[#334155]"
                      }`}
                    >
                      {/* Active left-border indicator */}
                      {isActive && (
                        <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#f97316] rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-[#f97316] text-white shadow-[0_4px_12px_rgba(249,115,22,0.4)]"
                          : "bg-[#0f172a]/5 text-[#0f172a] group-hover:bg-[#f97316]/10 group-hover:text-[#f97316]"
                      }`}>
                        {iconMap[product.icon] ?? iconMap.conveyor}
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className={`text-[13px] font-semibold leading-tight truncate ${isActive ? "text-white" : "text-[#0f172a] group-hover:text-[#f97316]"} transition-colors`}>
                          {product.title}
                        </p>
                        <p className={`text-[10px] mt-0.5 leading-tight line-clamp-1 ${isActive ? "text-white/60" : "text-[#334155]/50"}`}>
                          {product.shortDesc}
                        </p>
                      </div>

                      {/* Arrow */}
                      {isActive ? (
                        <svg className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-[#334155]/20 group-hover:text-[#f97316] flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="m-3 mt-3 p-4 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#334155]/40">
            <p className="text-xs font-bold text-white mb-1">Need a custom belt?</p>
            <p className="text-[11px] text-white/50 mb-3 leading-snug">Our engineers design bespoke solutions for your exact requirements.</p>
            <Link
              href="/quote"
              className="block w-full text-center text-[11px] font-bold text-white bg-[#f97316] hover:bg-[#ea6c0c] py-2.5 rounded-lg transition-colors duration-200"
              id="sidebar-get-quote"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
