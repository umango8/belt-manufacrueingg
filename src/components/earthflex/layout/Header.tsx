"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS, COMPANY, PRODUCT_CATALOG } from "@/lib/constants";

/* -- Product icon SVGs (inline, no external dependencies) --------------- */
const iconMap: Record<string, React.ReactNode> = {
  conveyor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      <line x1="6" y1="16" x2="6" y2="15" /><line x1="18" y1="16" x2="18" y2="15" />
    </svg>
  ),
  timing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
      <path d="M8 3l1 2M16 3l-1 2M21 8l-2 1M21 16l-2-1M16 21l-1-2M8 21l1-2M3 16l2-1M3 8l2 1" />
    </svg>
  ),
  pu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" /><line x1="3" y1="14" x2="21" y2="14" />
    </svg>
  ),
  rubber: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M4 8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M8 8v8M12 8v8M16 8v8" />
    </svg>
  ),
  transmission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  flat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="2" y="10" width="20" height="4" rx="2" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  modular: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

// Map product slugs to elegant B2B micro-badges
const productBadges: Record<string, string> = {
  "conveyor-belt": "Industrial",
  "timing-belt": "Zero Slip",
  "pu-belt": "FDA Approved",
  "pvc-belt": "Lightweight",
  "rubber-belt": "High Temp",
  "transmission-belt": "V-Drive",
  "flat-belt": "High Speed",
  "modular-belt": "Easy Clean",
  "customized-belt": "Bespoke",
};

/* -- Mega Menu -------------------------------------------------------------- */
interface MegaMenuProps {
  onClose: () => void;
  onMouseEnter?: () => void;
}

function MegaMenu({ onClose, onMouseEnter }: MegaMenuProps) {
  const pathname = usePathname();
  
  // Divide catalog into columns
  const cols = [
    PRODUCT_CATALOG.slice(0, 3),
    PRODUCT_CATALOG.slice(3, 6),
    PRODUCT_CATALOG.slice(6, 9),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[1040px] max-w-[96vw] z-200 pt-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
    >
      <div className="bg-white rounded-2xl shadow-[0_24px_64px_rgba(15,23,42,0.12)] border border-[#E5E7EB] overflow-hidden">
        {/* Top brand-accent color bar - Primary Blue (#4673C5) */}
        <div className="h-[3px] bg-gradient-to-r from-[#4673C5]/20 via-[#4673C5] to-[#4673C5]/20" />

        <div className="p-6">
          {/* Top Row Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#4673C5] mb-0.5">Engineered Range</p>
              <p className="text-sm font-semibold text-[#1F2937]">9 Premium Industrial Belting Systems</p>
            </div>
            <Link
              href="/products/conveyor-belt"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1F2937] hover:text-[#4673C5] transition-colors group"
            >
              View Catalog
              <span className="w-6 h-6 rounded-full bg-[#4673C5]/10 flex items-center justify-center group-hover:bg-[#4673C5] group-hover:text-white transition-all duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Grid Layout: 3 Columns Products, 1 Column Promo */}
          <div className="grid grid-cols-12 gap-6">
            {/* Products Columns (9 out of 12 grid span) */}
            <div className="col-span-9 grid grid-cols-3 gap-3">
              {cols.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-1.5">
                  {col.map((product: any, pi: number) => {
                    const isProductActive = pathname === `/products/${product.slug}`;
                    return (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (ci * 3 + pi) * 0.03 }}
                      >
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className={`group flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                            isProductActive 
                              ? "bg-[#F8FAFC] border-[#E5E7EB]" 
                              : "hover:bg-[#F8FAFC] border-transparent hover:border-[#E5E7EB]"
                          }`}
                          id={`mega-menu-${product.slug}`}
                        >
                          {/* Circle Icon Container */}
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#4673C5] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(70,115,197,0.25)] ${
                            isProductActive 
                              ? "bg-[#4673C5] text-white shadow-[0_4px_12px_rgba(70,115,197,0.2)]" 
                              : "bg-[#1F2937]/5 text-[#1F2937]"
                          }`}>
                            {iconMap[product.icon] ?? iconMap.conveyor}
                          </div>

                          {/* Titles and Descriptions */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className={`text-[13px] font-bold transition-colors leading-tight ${
                                isProductActive ? "text-[#4673C5]" : "text-[#1F2937] group-hover:text-[#4673C5]"
                              }`}>
                                {product.title}
                              </span>
                              {productBadges[product.slug] && (
                                <span className="text-[7.5px] font-mono font-bold px-1.5 py-0.25 rounded bg-[#1F2937]/5 text-[#6B7280] group-hover:bg-[#4673C5]/10 group-hover:text-[#4673C5] transition-colors shrink-0">
                                  {productBadges[product.slug]}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#4B5563] leading-snug line-clamp-1">{product.shortDesc}</p>
                          </div>

                          {/* Arrow Indicator */}
                          <svg
                            className={`w-3.5 h-3.5 shrink-0 mt-1 transition-all duration-200 ${
                              isProductActive 
                                ? "text-[#4673C5] translate-x-0.5" 
                                : "text-[#1F2937]/20 group-hover:text-[#4673C5] group-hover:translate-x-0.5"
                            }`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Column 4: Premium Featured Promo Panel (3 out of 12 grid span) */}
            <div className="col-span-3">
              <div className="bg-gradient-to-br from-[#111827] to-[#1F2937] p-5 rounded-xl border border-white/5 flex flex-col justify-between text-white relative overflow-hidden group/promo h-full min-h-[260px]">
                {/* Background accent glow - Primary Blue (#4673C5) */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#4673C5]/10 rounded-full blur-2xl pointer-events-none group-hover/promo:bg-[#4673C5]/20 transition-colors duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8.5px] font-mono tracking-widest bg-[#4673C5]/20 text-[#4673C5] px-2 py-0.5 rounded uppercase font-bold">
                      ENGINEERING
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">Bespoke</span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover/promo:text-[#4673C5] transition-colors duration-300">
                    Custom Cleats & Profiles
                  </h4>
                  
                  <p className="text-[11px] text-white/60 leading-relaxed mb-4">
                    Need a tailored belting solution? Our engineers build cleats, sidewalls, and guides to your exact machine specifications.
                  </p>

                  {/* Conveyor schematic SVG */}
                  <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-full h-12 text-[#4673C5]/30 mb-2">
                    <path d="M5 25h90M5 15h90" strokeDasharray="3 3" />
                    <path d="M5 15a5 5 0 000 10M95 15a5 5 0 010 10" />
                    <path d="M20 15v-4M35 15v-4M50 15v-4M65 15v-4M80 15v-4" stroke="currentColor" />
                    <circle cx="25" cy="20" r="3.5" stroke="currentColor" />
                    <circle cx="75" cy="20" r="3.5" stroke="currentColor" />
                  </svg>
                </div>
                
                <Link
                  href="/quote"
                  onClick={onClose}
                  className="group/promo relative overflow-hidden inline-flex items-center justify-center gap-1.5 text-[11px] font-bold text-white bg-[#0A741C] px-3.5 py-2.5 rounded-lg transition-all duration-300 mt-2 shadow-md shadow-[#0A741C]/15 hover:shadow-[#4673C5]/20"
                >
                  {/* Left panel of the center-split hover animation */}
                  <span className="absolute top-0 right-1/2 bottom-0 left-0 bg-[#4673C5] origin-right scale-x-0 group-hover/promo:scale-x-100 transition-transform duration-300 ease-out z-0" />
                  {/* Right panel of the center-split hover animation */}
                  <span className="absolute top-0 left-1/2 bottom-0 right-0 bg-[#4673C5] origin-left scale-x-0 group-hover/promo:scale-x-100 transition-transform duration-300 ease-out z-0" />
                  
                  <span className="relative z-10 flex items-center gap-1.5 group-hover/promo:text-white transition-colors duration-300">
                    Get Free Consultation
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/promo:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Metabar */}
          <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
              ISO 9001:2015 Certified · {COMPANY.established}+ Years Manufacturing Excellence
            </div>
            <span className="text-xs font-bold text-[#6B7280]">
              24/7 Priority Support Division
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -- Main Header ----------------------------------------------------------- */
interface HeaderProps {
  theme?: "light" | "dark";
}

export default function Header({ theme = "dark" }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActiveLink = (linkHref: string, label: string) => {
    if (label === "Home") {
      return pathname === "/earthflex";
    }
    if (label === "Products") {
      return pathname.startsWith("/products");
    }
    if (label === "Industries") {
      return pathname.startsWith("/industries");
    }
    return pathname === linkHref;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) (window as any).lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) (window as any).lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) (window as any).lenis.start();
    };
  }, [isMobileMenuOpen]);

  const openMega = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const closeMega = () => {
    megaMenuTimeout.current = setTimeout(() => setIsMegaMenuOpen(false), 250);
  };

  const showSolid = isScrolled || theme === "light";

  return (
    <>
      {/* Top Announcement & Corporate Gateway */}
      <div className="bg-[#111827] text-white py-2.5 border-b border-white/5 hidden lg:block select-none">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#4673C5] transition-colors">
              <span className="font-extrabold tracking-wider text-[10px] uppercase bg-[#4673C5] text-white px-2 py-0.5 rounded-xs shadow-xs">EARTH INDIA</span>
              <span className="text-[10px] text-white/50 font-bold tracking-widest">GROUP</span>
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2 text-[11px] text-white/50 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
              Live Plant Status: Optimal · Premium Industrial Belting Division
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/earthhaul" target="_blank" className="text-[11px] text-white/60 hover:text-[#4673C5] font-semibold transition-colors flex items-center gap-1">
              Visit EarthHaul (Automation) &rarr;
            </Link>
            <span className="text-white/20">|</span>
            <a href={`tel:${COMPANY.phone}`} className="text-white/70 hover:text-[#4673C5] text-[11px] font-semibold flex items-center gap-1.5 transition-colors">
              <svg className="w-3.5 h-3.5 text-[#4673C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 82002 23669</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          showSolid 
            ? "bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#E5E7EB] py-3" 
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/earthflex" className="flex items-center group/logo" id="header-logo">
            <div className="h-9 px-4 py-1.5 rounded-full bg-white/95 border border-[#E5E7EB] flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300 group-hover/logo:scale-[1.03]">
              <img
                src="/earthflex-logo.png"
                alt="EarthFlex Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 relative" aria-label="Main navigation">
            {NAV_LINKS.map((link: any) => {
              const active = isActiveLink(link.href, link.label);
              if (link.hasMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 text-[15px] font-bold py-2 transition-colors duration-300 ${
                        isMegaMenuOpen || active 
                          ? "text-[#4673C5]" 
                          : `${showSolid ? "text-[#1F2937]" : "text-[#1F2937]"} hover:text-[#4673C5]`
                      }`}
                      id="nav-products"
                      aria-haspopup="true"
                      aria-expanded={isMegaMenuOpen}
                    >
                      {link.label}
                      <motion.svg
                        animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isMegaMenuOpen || active 
                            ? "text-[#4673C5]" 
                            : `${showSolid ? "text-[#6B7280]" : "text-[#1F2937]"}`
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </Link>

                    {/* {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#4673C5] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )} */}

                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <MegaMenu 
                          onClose={closeMega} 
                          onMouseEnter={openMega}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[15px] font-bold py-2 transition-colors duration-300 ${
                    active ? "text-[#4673C5]" : `${showSolid ? "text-[#1F2937]" : "text-[#1F2937]"} hover:text-[#4673C5]`
                  }`}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#4673C5] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="group relative overflow-hidden hidden md:inline-flex items-center justify-center font-bold tracking-wide uppercase px-6 py-2.5 text-xs rounded-xl bg-[#0A741C] text-white transition-all duration-300 shadow-md shadow-[#0A741C]/15 hover:shadow-[#4673C5]/20 shrink-0"
              id="header-get-quote"
            >
              {/* Left panel of the center-split hover animation */}
              <span className="absolute top-0 right-1/2 bottom-0 left-0 bg-[#4673C5] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
              {/* Right panel of the center-split hover animation */}
              <span className="absolute top-0 left-1/2 bottom-0 right-0 bg-[#4673C5] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
              
              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                Get Free Quote
              </span>
            </Link>
            
            <button
              className="lg:hidden flex flex-col gap-[6px] p-2 cursor-pointer relative z-20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                transition={{ duration: 0.25 }} 
                className={`block w-6 h-[2px] ${isMobileMenuOpen ? "bg-[#1F2937]" : (showSolid ? "bg-[#1F2937]" : "bg-white")} rounded-full origin-center transition-colors duration-300`} 
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className={`block w-6 h-[2px] ${showSolid ? "bg-[#1F2937]" : "bg-white"} rounded-full transition-colors duration-300`}
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "16px" }} 
                transition={{ duration: 0.25 }} 
                className={`block h-[2px] ${isMobileMenuOpen ? "bg-[#1F2937]" : (showSolid ? "bg-[#1F2937]" : "bg-white")} rounded-full origin-center self-end transition-colors duration-300`} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 lg:hidden">
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-[#111827]/60 backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-lenis-prevent
              className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-[#F8FAFC] rounded-l-3xl flex flex-col overflow-y-auto shadow-2xl border-l border-[#E5E7EB]"
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                <span className="text-lg font-bold text-[#1F2937]">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-[#1F2937]/5 hover:bg-[#1F2937]/10 flex items-center justify-center transition-colors" aria-label="Close menu" id="mobile-menu-close">
                  <svg className="w-4 h-4 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links List */}
              <div className="flex flex-col px-6 gap-0.5 py-4">
                {NAV_LINKS.map((link: any) => {
                  const active = isActiveLink(link.href, link.label);
                  if (link.hasMenu) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                          className={`w-full flex items-center justify-between text-base font-semibold py-3.5 border-b border-[#E5E7EB] transition-colors ${
                            active ? "text-[#4673C5]" : "text-[#1F2937] hover:text-[#4673C5]"
                          }`}
                          id="mobile-nav-products"
                        >
                          {link.label}
                          <motion.svg
                            animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`w-4 h-4 transition-colors ${
                              active ? "text-[#4673C5]" : "text-[#6B7280]"
                            }`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>

                        {/* Dropdown Accordion */}
                        <AnimatePresence>
                          {isMobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="py-2 pl-4 flex flex-col gap-1 border-b border-[#E5E7EB]">
                                <Link
                                  href="/products/conveyor-belt"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-2 px-3 text-[#1F2937] hover:text-[#4673C5] hover:bg-[#E5E7EB]/30 rounded-xl transition-colors font-bold text-sm"
                                  id="mobile-product-all"
                                >
                                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[#1F2937]/5 text-[#1F2937]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                      <path d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                  </div>
                                  <span>View All Products</span>
                                </Link>
                                {PRODUCT_CATALOG.map((product: any) => {
                                  const isSubActive = pathname === `/products/${product.slug}`;
                                  return (
                                    <Link
                                      key={product.slug}
                                      href={`/products/${product.slug}`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-colors group ${
                                        isSubActive ? "bg-[#E5E7EB]/30" : "hover:bg-[#E5E7EB]/30"
                                      }`}
                                      id={`mobile-product-${product.slug}`}
                                    >
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                                        isSubActive ? "bg-[#4673C5] text-white" : "bg-[#1F2937]/5 text-[#1F2937] group-hover:bg-[#4673C5] group-hover:text-white"
                                      }`}>
                                        <div className="scale-75">{iconMap[product.icon] ?? iconMap.conveyor}</div>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <p className={`text-sm font-semibold leading-tight ${
                                            isSubActive ? "text-[#4673C5]" : "text-[#1F2937]"
                                          }`}>{product.title}</p>
                                          {productBadges[product.slug] && (
                                            <span className="text-[7px] font-mono font-bold px-1 rounded bg-[#1F2937]/5 text-[#6B7280]">
                                              {productBadges[product.slug]}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-[11px] text-[#6B7280] line-clamp-1">{product.shortDesc}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-base font-semibold py-3.5 border-b border-[#E5E7EB] transition-colors ${
                        active ? "text-[#4673C5]" : "text-[#1F2937] hover:text-[#4673C5]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Branding & Details */}
              <div className="mt-auto p-6 bg-[#111827] text-white rounded-t-3xl">
                <Link
                  href="/quote"
                  className="group relative overflow-hidden w-full text-center inline-flex items-center justify-center font-bold tracking-wide uppercase px-6 py-3 text-xs rounded-xl bg-[#0A741C] text-white transition-all duration-300 shadow-md shadow-[#0A741C]/15 hover:shadow-[#4673C5]/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                  id="mobile-get-quote"
                >
                  {/* Left panel of the center-split hover animation */}
                  <span className="absolute top-0 right-1/2 bottom-0 left-0 bg-[#4673C5] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
                  {/* Right panel of the center-split hover animation */}
                  <span className="absolute top-0 left-1/2 bottom-0 right-0 bg-[#4673C5] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
                  
                  <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                    Get Free Quote
                  </span>
                </Link>
                <div className="mt-5 space-y-3 text-xs text-white/60">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-[#4673C5] transition-colors">
                    <svg className="w-4 h-4 text-[#4673C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{COMPANY.phone}</span>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#4673C5] transition-colors">
                    <svg className="w-4 h-4 text-[#4673C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{COMPANY.email}</span>
                  </a>
                  <div className="text-[10px] text-white/40 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span>{COMPANY.iso}</span>
                    <span>Est. {COMPANY.established}</span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
