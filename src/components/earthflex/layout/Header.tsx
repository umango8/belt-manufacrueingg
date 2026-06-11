"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { NAV_LINKS, COMPANY, PRODUCT_CATALOG } from "@/lib/constants";

/* -- Product icon SVGs (inline, no extra deps) --------------------------- */
const iconMap: Record<string, React.ReactNode> = {
  conveyor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      <line x1="6" y1="16" x2="6" y2="15" /><line x1="18" y1="16" x2="18" y2="15" />
    </svg>
  ),
  timing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
      <path d="M8 3l1 2M16 3l-1 2M21 8l-2 1M21 16l-2-1M16 21l-1-2M8 21l1-2M3 16l2-1M3 8l2 1" />
    </svg>
  ),
  pu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" /><line x1="3" y1="14" x2="21" y2="14" />
    </svg>
  ),
  rubber: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <path d="M4 8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M8 8v8M12 8v8M16 8v8" />
    </svg>
  ),
  transmission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  flat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <rect x="2" y="10" width="20" height="4" rx="2" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  modular: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

/* -- Mega Menu -------------------------------------------------------------- */
interface MegaMenuProps {
  onClose: () => void;
  onMouseEnter?: () => void;
}

function MegaMenu({ onClose, onMouseEnter }: MegaMenuProps) {
  const pathname = usePathname();
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
      className="absolute top-full left-1/2 -translate-x-1/2 w-[960px] max-w-[96vw] z-200 pt-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
    >
      {/* Panel */}
      <div className="bg-white rounded-2xl shadow-[0_24px_64px_rgba(15,23,42,0.12)] border border-border overflow-hidden">
        {/* Top accent bar */}
        <div className="h-[3px] bg-linear-to-r from-[#111827] via-accent to-[#111827]" />

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#eef1f5]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-0.5">Our Product Range</p>
              <p className="text-sm font-semibold text-[#111827]">9 Premium Industrial Belt Solutions</p>
            </div>
            <Link
              href="/products/conveyor-belt"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#111827] hover:text-accent transition-colors group"
            >
              View All Products
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-2">
            {cols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-1">
                {col.map((product: any, pi: number) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (ci * 3 + pi) * 0.04 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className={`group flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                        pathname === `/products/${product.slug}` ? "bg-[#f7f8fa] border-border" : "hover:bg-[#f7f8fa] border-transparent hover:border-border"
                      }`}
                      id={`mega-menu-${product.slug}`}
                    >
                      {/* Icon */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(11,138,30,0.3)] ${
                        pathname === `/products/${product.slug}` ? "bg-accent text-white shadow-[0_4px_12px_rgba(11,138,30,0.2)]" : "bg-[#111827]/5 text-[#111827]"
                      }`}>
                        {iconMap[product.icon] ?? iconMap.conveyor}
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className={`text-[13px] font-semibold transition-colors leading-tight mb-0.5 ${
                          pathname === `/products/${product.slug}` ? "text-accent" : "text-[#111827] group-hover:text-accent"
                        }`}>
                          {product.title}
                        </p>
                        <p className="text-[11px] text-[#3a4a5c]/60 leading-snug line-clamp-1">{product.shortDesc}</p>
                      </div>

                      {/* Arrow */}
                      <svg
                        className={`w-3.5 h-3.5 shrink-0 mt-1 transition-all duration-200 ${
                          pathname === `/products/${product.slug}` ? "text-accent translate-x-0.5" : "text-[#111827]/20 group-hover:text-accent group-hover:translate-x-0.5"
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <div className="mt-5 pt-4 border-t border-[#eef1f5] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#3a4a5c]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ISO 9001:2015 Certified · {COMPANY.established}+ Years Manufacturing Excellence
            </div>
            <Link
              href="/quote"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0c1a2e] hover:bg-accent px-4 py-2 rounded-full transition-all duration-300"
            >
              Request Quote
            </Link>
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
    megaMenuTimeout.current = setTimeout(() => setIsMegaMenuOpen(false), 300);
  };

  const showSolid = isScrolled || theme === "light";

  return (
    <>
      {/* Top Announcement & Level 1 Corporate Header */}
      <div className="bg-[#0c111d] text-white py-2.5 border-b border-white/5 hidden lg:block select-none">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
              <span className="font-extrabold tracking-wider text-xs uppercase bg-accent text-white px-2.5 py-0.5 rounded-sm shadow-xs">EARTH INDIA</span>
              <span className="text-[11px] text-white/60 font-semibold tracking-widest">GROUP</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-[11px] text-white/50 font-medium">EarthFlex Division: Premium Industrial Belting</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/earthhaul" target="_blank" className="text-[11px] text-white/60 hover:text-accent font-semibold transition-colors flex items-center gap-1">
              Visit EarthHaul (Automation & Logistics) &rarr;
            </Link>
            <span className="text-white/20">|</span>
            <a href="tel:+918200223669" className="text-white/60 hover:text-accent text-[11px] font-semibold flex items-center gap-1.5 transition-colors">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 82002 23669</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${showSolid ? "bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-black/5" : "bg-transparent border-b border-transparent"}`}>
        <div className="container-custom flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* Logo */}
          <Link href="/earthflex" className="flex items-center" id="header-logo">
            <div className="h-9 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE3EA] flex items-center justify-center shadow-xs shrink-0">
              <img
                src="/earthflex-logo.png"
                alt="EarthFlex Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative" aria-label="Main navigation">
            {NAV_LINKS.map((link: any) => {
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
                      className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-300 ${
                        isMegaMenuOpen || isActiveLink(link.href, link.label) 
                          ? "text-accent" 
                          : `${showSolid ? "text-dark/70" : "text-white/75"} hover:text-accent`
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
                          isMegaMenuOpen || isActiveLink(link.href, link.label) 
                            ? "text-accent" 
                            : `${showSolid ? "text-dark/40" : "text-white/40"}`
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </Link>

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
              const active = isActiveLink(link.href, link.label);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    active ? "text-accent" : `${showSolid ? "text-dark/70" : "text-white/75"} hover:text-accent`
                  }`}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button href="/quote" variant="primary" size="lg" className="hidden md:inline-flex" id="header-get-quote">
              Get Free Quote
            </Button>
            <button
              className="lg:hidden flex flex-col gap-[6px] p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} 
                transition={{ duration: 0.3 }} 
                className={`block w-6 h-[2px] ${isMobileMenuOpen ? "bg-dark" : (showSolid ? "bg-dark" : "bg-white")} rounded-full origin-center transition-colors duration-300`} 
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -4, width: "24px" } : { rotate: 0, y: 0, width: "16px" }} 
                transition={{ duration: 0.3 }} 
                className={`block h-[2px] ${isMobileMenuOpen ? "bg-dark" : (showSolid ? "bg-dark" : "bg-white")} rounded-full origin-center self-end transition-colors duration-300`} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 lg:hidden">
            <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-lenis-prevent
              className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white rounded-l-3xl flex flex-col overflow-y-auto"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#eef1f5]">
                <span className="text-lg font-semibold text-title">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full bg-background-soft flex items-center justify-center" aria-label="Close menu" id="mobile-menu-close">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col px-6 gap-0.5 py-4">
                {NAV_LINKS.map((link: any) => {
                  const active = isActiveLink(link.href, link.label);
                  if (link.hasMenu) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                          className={`w-full flex items-center justify-between text-base font-medium py-3.5 border-b border-border-light transition-colors ${
                            active ? "text-accent" : "text-dark/70 hover:text-accent"
                          }`}
                          id="mobile-nav-products"
                        >
                          {link.label}
                          <motion.svg
                            animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`w-4 h-4 transition-colors ${
                              active ? "text-accent" : "text-dark/40"
                            }`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {isMobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="py-2 pl-4 flex flex-col gap-1 border-b border-border-light">
                                <Link
                                  href="/products/conveyor-belt"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-2 px-3 text-[#0c1a2e] hover:text-accent hover:bg-[#f7f8fa] rounded-xl transition-colors font-bold text-sm"
                                  id="mobile-product-all"
                                >
                                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[#0c1a2e]/5 text-[#0c1a2e] group-hover:bg-accent group-hover:text-white">
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
                                        isSubActive ? "bg-[#f7f8fa]" : "hover:bg-[#f7f8fa]"
                                      }`}
                                      id={`mobile-product-${product.slug}`}
                                    >
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                                        isSubActive ? "bg-accent text-white" : "bg-[#0c1a2e]/5 text-[#0c1a2e] group-hover:bg-accent group-hover:text-white"
                                      }`}>
                                        <div className="scale-75">{iconMap[product.icon] ?? iconMap.conveyor}</div>
                                      </div>
                                      <div>
                                        <p className={`text-sm font-semibold leading-tight ${
                                          isSubActive ? "text-accent" : "text-[#0c1a2e]"
                                        }`}>{product.title}</p>
                                        <p className="text-[11px] text-[#3a4a5c]/50">{product.shortDesc}</p>
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
                      className={`text-base font-medium py-3.5 border-b border-border-light transition-colors ${
                        active ? "text-accent" : "text-dark/70 hover:text-accent"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto p-6">
                <Button href="/quote" variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)} id="mobile-get-quote">
                  Get Free Quote
                </Button>
                <div className="mt-5 space-y-2 text-sm text-subtitle">
                  <a href={`tel:${COMPANY.phone}`} className="block hover:text-primary transition-colors">{COMPANY.phone}</a>
                  <a href={`mailto:${COMPANY.email}`} className="block hover:text-primary transition-colors">{COMPANY.email}</a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
