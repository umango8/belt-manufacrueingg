"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-dark text-white text-center text-sm py-2.5 hidden lg:block">
        <span className="opacity-70">
          {COMPANY.iso} Certified Manufacturer &nbsp;|&nbsp; {COMPANY.established}+ Years of Engineering Excellence
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-black/[0.05]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5" id="header-logo">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base">B</span>
            </div>
            <span className="text-xl font-semibold text-title tracking-tight">
              BeltForge
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-dark/70 hover:text-primary transition-colors duration-300"
                id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="hidden md:inline-flex"
              id="header-get-quote"
            >
              Get Free Quote
            </Button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-dark rounded-full origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-6 h-[2px] bg-dark rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-dark rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white rounded-l-3xl flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-6">
                <span className="text-lg font-semibold text-title">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-background-soft flex items-center justify-center"
                  aria-label="Close menu"
                  id="mobile-menu-close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col px-6 gap-0.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-dark/70 hover:text-primary py-3.5 border-b border-border-light transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                  id="mobile-get-quote"
                >
                  Get Free Quote
                </Button>
                <div className="mt-5 space-y-2 text-sm text-subtitle">
                  <a href={`tel:${COMPANY.phone}`} className="block hover:text-primary transition-colors">
                    {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="block hover:text-primary transition-colors">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
