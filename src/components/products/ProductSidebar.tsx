"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Scope a style block to hide horizontal scrollbar elements completely */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-none {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      {/* ── 1. Desktop Sidebar (>= 1024px) ── */}
      <aside className="hidden lg:block w-[280px] xl:w-[300px] flex-shrink-0 lg:sticky lg:top-[100px]">
        <div
          className="bg-white rounded-2xl border border-[#dce1e8] shadow-[0_4px_32px_rgba(15,23,42,0.06)] overflow-hidden"
          data-lenis-prevent
        >
          {/* Sidebar header */}
          <div className="px-5 py-4 border-b border-[#eef1f5] bg-[#0c1a2e]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c87533] mb-1">Product Range</p>
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
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#3a4a5c]/40">{category}</span>
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
                            ? "bg-[#0c1a2e] text-white shadow-md"
                            : "hover:bg-[#f7f8fa] text-[#3a4a5c]"
                        }`}
                      >
                        {/* Active left-border indicator */}
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-accent rounded-r-full" />
                        )}

                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isActive
                            ? "bg-accent text-white shadow-[0_4px_12px_rgba(249,115,22,0.4)]"
                            : "bg-[#0c1a2e]/5 text-[#0c1a2e] group-hover:bg-[#c87533]/10 group-hover:text-accent"
                        }`}>
                          {iconMap[product.icon] ?? iconMap.conveyor}
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p className={`text-[13px] font-semibold leading-tight truncate ${isActive ? "text-white" : "text-[#0c1a2e] group-hover:text-accent"} transition-colors`}>
                            {product.title}
                          </p>
                          <p className={`text-[10px] mt-0.5 leading-tight line-clamp-1 ${isActive ? "text-white/60" : "text-[#3a4a5c]/50"}`}>
                            {product.shortDesc}
                          </p>
                        </div>

                        {/* Arrow */}
                        {isActive ? (
                          <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-[#3a4a5c]/20 group-hover:text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="m-3 mt-3 p-4 rounded-xl bg-gradient-to-br from-[#0c1a2e] to-[#1a2a3a] border border-[#3a4a5c]/40">
              <p className="text-xs font-bold text-white mb-1">Need a custom belt?</p>
              <p className="text-[11px] text-white/50 mb-3 leading-snug">Our engineers design bespoke solutions for your exact requirements.</p>
              <Link
                href="/quote"
                className="block w-full text-center text-[11px] font-bold text-white bg-accent hover:bg-[#ea6c0c] py-2.5 rounded-lg transition-colors duration-200"
                id="sidebar-get-quote"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* ── 2. Tablet Horizontal Tab Bar (md:block lg:hidden) ── */}
      <div className="hidden md:block lg:hidden w-full mb-3.5 relative z-10 overflow-hidden" data-lenis-prevent>
        <div className="relative flex items-center">
          {/* Horizontal Scroll container */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none w-full scroll-smooth -webkit-overflow-scrolling-touch"
            style={{ scrollbarWidth: "none" }}
          >
            {PRODUCT_CATALOG.map((product) => {
              const isActive = product.slug === currentSlug;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  id={`product-tab-${product.slug}`}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[#0c1a2e] text-white border-[#0c1a2e] shadow-[0_4px_16px_rgba(15,23,42,0.12)]"
                      : "bg-white text-[#3a4a5c] border-border/85 hover:bg-[#f7f8fa]"
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-white shadow-[0_2px_8px_rgba(249,115,22,0.3)]"
                      : "bg-[#0c1a2e]/5 text-[#0c1a2e]"
                  }`}>
                    {iconMap[product.icon] ?? iconMap.conveyor}
                  </div>
                  {/* Label */}
                  <span>{product.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Right indicator chevron overlay to convey scrolling availability */}
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#f7f8fa] via-[#f7f8fa]/90 to-transparent pointer-events-none flex items-center justify-end pr-1">
            <button 
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
                }
              }}
              className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center text-[#0c1a2e] hover:text-accent border border-border/60 pointer-events-auto active:scale-95 transition-all"
              aria-label="Scroll right"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Mobile Accordion/Dropdown Selector (< md / 768px) ── */}
      <div className="block md:hidden w-full mb-5 relative z-35" data-lenis-prevent>
        {/* Dropdown main selector button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white border border-border/80 rounded-xl font-bold text-[#0c1a2e] shadow-xs text-left"
        >
          <span className="text-sm">{PRODUCT_CATALOG.find(p => p.slug === currentSlug)?.title ?? "Select Product"}</span>
          <svg
            className={`w-4 h-4 text-[#0c1a2e]/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown panel list */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Tap backdrop to auto-close */}
              <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)} />
              
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-2 bg-white border border-border/85 rounded-xl shadow-lg z-30 max-h-[300px] overflow-y-auto"
              >
                <div className="py-2 px-1">
                  {PRODUCT_CATALOG.map((product) => {
                    const isActive = product.slug === currentSlug;
                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[#0c1a2e]/5 text-accent font-bold"
                            : "text-[#3a4a5c] hover:bg-[#f7f8fa] hover:text-[#0c1a2e]"
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                          isActive ? "bg-accent/15 text-accent" : "bg-[#0c1a2e]/5 text-[#0c1a2e]"
                        }`}>
                          {iconMap[product.icon] ?? iconMap.conveyor}
                        </div>
                        <span>{product.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
