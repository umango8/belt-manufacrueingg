"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  EH_COMPANY,
  EH_NAV_LINKS,
  EH_PRODUCT_MEGAMENU,
  EH_INDUSTRY_MEGAMENU,
} from "@/lib/earthhaul-constants";

/* ─── Colors ─────────────────────────────────────────────────────────── */
const BLUE = "#1565C0";
const ORANGE = "#F28C28";
const NAVY = "#1E293B";

export default function EarthHaulHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* prevent body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const openMenu = (label: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };
  const closeMenu = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 180);
  };

  return (
    <>
      {/* ── Tier 1: Earth India Group Top Bar ─────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-white/5 text-white transition-all duration-300 hidden lg:block select-none ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-[40px] opacity-100"
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#22A6F2] transition-colors">
              <span className="font-extrabold tracking-wider text-[10px] uppercase bg-[#1565C0] text-white px-2 py-0.5 rounded-xs shadow-xs">EARTH INDIA</span>
              <span className="text-[10px] text-white/50 font-bold tracking-widest">GROUP</span>
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2 text-[11px] text-white/50 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
              Live Plant Status: Optimal · Conveyor & Automation Division
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/earthflex" className="text-[11px] text-white/60 hover:text-[#22A6F2] font-semibold transition-colors flex items-center gap-1">
              Visit EarthFlex (Belting) &rarr;
            </Link>
            <span className="text-white/20">|</span>
            <a href={`tel:${EH_COMPANY.phone}`} className="text-white/70 hover:text-[#22A6F2] text-[11px] font-semibold flex items-center gap-1.5 transition-colors">
              <svg className="w-3.5 h-3.5 text-[#1565C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{EH_COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Tier 2: EarthHaul Main Header ─────────────────────────────── */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] border-b border-[#E2E8F0]"
            : "top-0 lg:top-[40px] bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/earthhaul" className="flex items-center gap-2.5 group shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ backgroundColor: `${BLUE}12`, border: `1.5px solid ${BLUE}25` }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[15px] font-extrabold tracking-tight"
                style={{ color: isScrolled ? NAVY : "#FFFFFF" }}
              >
                Earth<span style={{ color: BLUE }}>Haul</span>
              </span>
              <span
                className="text-[9px] font-semibold tracking-[0.12em] uppercase mt-0.5"
                style={{ color: isScrolled ? "#64748B" : "rgba(255,255,255,0.55)" }}
              >
                Conveyor & Automation
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ───────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {EH_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const hasMenu = link.hasMenu;
              const isMenuOpen = activeMenu === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && openMenu(link.label)}
                  onMouseLeave={() => hasMenu && closeMenu()}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 rounded-lg ${
                      isActive
                        ? ""
                        : ""
                    }`}
                    style={{
                      color: isActive
                        ? BLUE
                        : isScrolled
                        ? NAVY
                        : "rgba(255,255,255,0.85)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget.style.color = BLUE);
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = isScrolled
                          ? NAVY
                          : "rgba(255,255,255,0.85)";
                    }}
                  >
                    {link.label}
                    {hasMenu && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="ehActiveNav"
                        className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                        style={{ backgroundColor: BLUE }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* ── Mega Menu Dropdown ────────────── */}
                  <AnimatePresence>
                    {hasMenu && isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        onMouseEnter={() => openMenu(link.label)}
                        onMouseLeave={closeMenu}
                      >
                        <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-[#E2E8F0] overflow-hidden min-w-[560px]">
                          <div className="p-6">
                            <div className={`grid gap-8 ${link.label === "Products" ? "grid-cols-3" : "grid-cols-2"}`}>
                              {(link.label === "Products"
                                ? EH_PRODUCT_MEGAMENU.columns
                                : EH_INDUSTRY_MEGAMENU.columns
                              ).map((col) => (
                                <div key={col.title}>
                                  <h4
                                    className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3 pb-2 border-b"
                                    style={{ color: NAVY, borderColor: "#E2E8F0" }}
                                  >
                                    {col.title}
                                  </h4>
                                  <ul className="space-y-0.5">
                                    {col.items.map((item) => (
                                      <li key={item.slug}>
                                        <Link
                                          href={`/earthhaul/${link.label === "Products" ? "products" : "industries"}/${item.slug}`}
                                          className="group/item flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12.5px] font-medium text-[#475569] transition-all duration-200 hover:bg-[#1565C0]/5 hover:text-[#1565C0]"
                                        >
                                          <span
                                            className="w-1 h-4 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100"
                                            style={{ backgroundColor: ORANGE }}
                                          />
                                          <svg className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx="12" cy="12" r="3" />
                                          </svg>
                                          <span className="transition-transform duration-200 group-hover/item:translate-x-0.5">
                                            {item.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ── CTA + Hamburger ───────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/earthhaul#contact"
              className="group relative overflow-hidden hidden md:inline-flex items-center justify-center font-bold tracking-wide uppercase px-5 py-2.5 text-[11px] rounded-lg text-white transition-all duration-300 shadow-md shrink-0"
              style={{ backgroundColor: BLUE }}
              id="eh-header-cta"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
            >
              Get a Project Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer relative z-20"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] rounded-full origin-center"
                style={{ backgroundColor: isScrolled || isMobileOpen ? NAVY : "#fff" }}
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-[2px] rounded-full"
                style={{ backgroundColor: isScrolled || isMobileOpen ? NAVY : "#fff" }}
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] rounded-full origin-center"
                style={{ backgroundColor: isScrolled || isMobileOpen ? NAVY : "#fff" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[72px]"
          >
            <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {EH_NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3.5 text-[15px] font-semibold rounded-xl transition-colors"
                  style={{
                    color: pathname === link.href ? BLUE : NAVY,
                    backgroundColor: pathname === link.href ? `${BLUE}08` : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-[#E2E8F0]">
              <Link
                href="/earthhaul#contact"
                className="w-full text-center inline-flex items-center justify-center font-bold tracking-wide uppercase px-6 py-3 text-xs rounded-lg text-white transition-all duration-300"
                onClick={() => setIsMobileOpen(false)}
                style={{ backgroundColor: BLUE }}
              >
                Get a Project Quote
              </Link>
              <div className="mt-4 space-y-2 text-xs text-[#64748B]">
                <a href={`tel:${EH_COMPANY.phone}`} className="flex items-center gap-2 hover:text-[#1565C0] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {EH_COMPANY.phone}
                </a>
                <a href={`mailto:${EH_COMPANY.email}`} className="flex items-center gap-2 hover:text-[#1565C0] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {EH_COMPANY.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
