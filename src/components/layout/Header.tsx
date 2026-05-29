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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#05070F] text-white py-2.5 border-b border-white/5 hidden lg:block select-none">
        <div className="container-custom flex items-center justify-between">
          {/* Left Side: Certifications & Brand Info */}
          <div className="flex items-center gap-2.5 text-white/60 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{COMPANY.iso} Certified Manufacturer</span>
            <span className="text-white/20">|</span>
            <span>{COMPANY.established}+ Years of Engineering Excellence</span>
          </div>

          {/* Right Side: Quick Contact & Social Channels */}
          <div className="flex items-center gap-5">
            <a 
              href="tel:+91-8200223669" 
              className="text-white/60 hover:text-accent text-xs font-semibold flex items-center gap-1.5 transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 82002 23669</span>
            </a>
            <span className="text-white/10 w-px h-3.5" />
            
            {/* Social SVGs */}
            <div className="flex items-center gap-3.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-accent transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-accent transition-colors duration-300" 
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-accent transition-colors duration-300" 
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
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

            {/* Hamburger (2-Line Premium Animation) */}
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
                className="block w-6 h-[2px] bg-dark rounded-full origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -4, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] bg-dark rounded-full origin-center self-end"
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
            className="fixed inset-0 z-[100] lg:hidden"
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
