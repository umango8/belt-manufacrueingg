"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INDUSTRY_CATALOG } from "@/lib/constants";

/* -- Industry icon SVGs --------------------------------------------------- */
const iconMap: Record<string, React.ReactNode> = {
  textile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      <path d="M8 6v12M12 6v12M16 6v12" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  packaging: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  automotive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  pharmaceutical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  printing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  ),
  ceramic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  paper: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  agriculture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function IndustrySidebar() {
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

      {/* -- 1. Desktop Sidebar (>= 1024px) -- */}
      <aside className="hidden lg:block w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-[100px] lg:self-start">
        <div
          className="bg-white rounded-2xl border border-border shadow-[0_4px_32px_rgba(15,23,42,0.06)] overflow-hidden"
          data-lenis-prevent
        >
          {/* Sidebar header */}
          <div className="px-5 py-4 border-b border-[#eef1f5] bg-[#0c1a2e]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Industries</p>
            <p className="text-sm font-semibold text-white">All Industries We Serve</p>
          </div>

          {/* Scrollable industry list */}
          <div
            className="overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-[70vh]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,0.3) transparent" }}
          >
            {/* Category label */}
            <div className="px-4 pt-4 pb-1.5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#3a4a5c]/40">Industry Verticals</span>
            </div>

            {INDUSTRY_CATALOG.map((industry, idx) => {
              const isActive = industry.slug === currentSlug;
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    id={`industry-sidebar-${industry.slug}`}
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
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-white shadow-[0_4px_12px_rgba(249,115,22,0.4)]"
                        : "bg-[#0c1a2e]/5 text-[#0c1a2e] group-hover:bg-accent/10 group-hover:text-accent"
                    }`}>
                      {iconMap[industry.icon] ?? iconMap.textile}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className={`text-[13px] font-semibold leading-tight truncate ${isActive ? "text-white" : "text-[#0c1a2e] group-hover:text-accent"} transition-colors`}>
                        {industry.title}
                      </p>
                      <p className={`text-[10px] mt-0.5 leading-tight line-clamp-1 ${isActive ? "text-white/60" : "text-[#3a4a5c]/50"}`}>
                        {industry.shortDesc}
                      </p>
                    </div>

                    {/* Arrow */}
                    {isActive ? (
                      <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-[#3a4a5c]/20 group-hover:text-accent shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* Bottom CTA */}
            <div className="m-3 mt-3 p-4 rounded-xl bg-linear-to-br from-[#0c1a2e] to-[#1a2a3a] border border-[#3a4a5c]/40">
              <p className="text-xs font-bold text-white mb-1">Need a custom solution?</p>
              <p className="text-[11px] text-white/50 mb-3 leading-snug">Our engineers design belts tailored to your industry requirements.</p>
              <Link
                href="/quote"
                className="block w-full text-center text-[11px] font-bold text-white bg-accent hover:bg-[#ea6c0c] py-2.5 rounded-lg transition-colors duration-200"
                id="industry-sidebar-get-quote"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* -- 2. Tablet Horizontal Tab Bar (md:block lg:hidden) -- */}
      <div className="hidden md:block lg:hidden w-full mb-3.5 relative z-10 overflow-hidden" data-lenis-prevent>
        <div className="relative flex items-center">
          {/* Horizontal Scroll container */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none w-full scroll-smooth -webkit-overflow-scrolling-touch"
            style={{ scrollbarWidth: "none" }}
          >
            {INDUSTRY_CATALOG.map((industry) => {
              const isActive = industry.slug === currentSlug;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  id={`industry-tab-${industry.slug}`}
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
                    {iconMap[industry.icon] ?? iconMap.textile}
                  </div>
                  {/* Label */}
                  <span>{industry.title}</span>
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

      {/* -- 3. Mobile Accordion/Dropdown Selector (< md / 768px) -- */}
      <div className="block md:hidden w-full mb-5 relative z-30" data-lenis-prevent>
        {/* Dropdown main selector button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white border border-border/80 rounded-xl font-bold text-[#0c1a2e] shadow-xs text-left"
        >
          <span className="text-sm">{INDUSTRY_CATALOG.find(i => i.slug === currentSlug)?.title ?? "Select Industry"}</span>
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
                  {INDUSTRY_CATALOG.map((industry) => {
                    const isActive = industry.slug === currentSlug;
                    return (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
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
                          {iconMap[industry.icon] ?? iconMap.textile}
                        </div>
                        <span>{industry.title}</span>
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
