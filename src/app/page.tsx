"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import Button from "@/components/shared/ui/Button";
import RollingCounter from "@/components/shared/ui/RollingCounter";

export default function EarthIndiaGateway() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    division: "General Inquiry",
    message: "",
  });

  const [hoveredCard, setHoveredCard] = useState<"flex" | "haul" | "hero-flex" | "hero-haul" | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const aboutRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle navbar sticky state on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        division: "General Inquiry",
        message: "",
      });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = (division: string) => {
    setFormData((prev) => ({ ...prev, division }));
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1E293B] flex flex-col font-sans selection:bg-[#1B70B3] selection:text-white">
      {/* 1. TOP HEADER BAR */}
      <div className="bg-[#1C4768] text-white text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#2C5F84]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
            <a
              href="tel:+918200223669"
              className="flex items-center gap-2 hover:text-[#48BAD3] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#48BAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold tracking-wide">+91 82002 23669</span>
            </a>
            <span className="hidden sm:inline text-[#2C5F84]">|</span>
            <a
              href="mailto:info@earthflex.com"
              className="flex items-center gap-2 hover:text-[#48BAD3] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#48BAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold tracking-wide">info@earthflex.com</span>
            </a>
          </div>
          {/* Right: Social Media links */}
          <div className="flex items-center gap-5">
            <span className="text-[#2C5F84] hidden sm:inline">Follow Us:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#48BAD3] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-[#2C5F84]">|</span>
            <a
              href="https://wa.me/918200223669"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#48BAD3] transition-colors"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <span className="text-[#2C5F84]">|</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#48BAD3] transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER / NAVIGATION */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-4"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-lg border border-[#1B70B3]/20 flex items-center justify-center relative overflow-hidden bg-white shadow-sm shrink-0">
              <img
                src="/earthindia_logo.jpg"
                alt="Earth India Group Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1C4768] leading-none">
                Earth India <span className="text-[#1B70B3] font-medium">Group</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#1B70B3] uppercase mt-1">
                Parent Industrial Entity
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#1C4768]">
            <Link href="/" className="text-[#1B70B3] hover:text-[#1B70B3] transition-colors">
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#1B70B3] transition-colors cursor-pointer"
            >
              About Group
            </button>
            <Link href="/earthflex" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B70B3] transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B70B3]" /> EarthFlex
            </Link>
            <Link href="/earthhaul" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B70B3] transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9BB4A]" /> EarthHaul
            </Link>
            <button
              onClick={() => scrollToSection("industries")}
              className="hover:text-[#1B70B3] transition-colors cursor-pointer"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#1B70B3] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleQuoteClick("General Inquiry")}
              variant="secondary"
              size="md"
              rounded="lg"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (MOST IMPORTANT FOR INSTANT 5-SECOND UNDERSTANDING) */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-100">
        {/* Technical grids background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#1B70B3] uppercase bg-[#1B70B3]/10 px-3.5 py-1.5 rounded-md border border-[#1B70B3]/15 mb-6">
                Earth India Group
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-black text-[#1C4768] leading-[1.15] mb-6">
                Industrial Belting &amp; Conveyor Automation Solutions
              </h1>
              
              <p className="text-[#1B70B3] font-bold text-lg leading-relaxed mb-4">
                One industrial group. Two specialized companies built for manufacturing excellence.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                <strong className="text-[#1C4768]">EarthFlex</strong> delivers state-of-the-art industrial rubber &amp; PVC belting solutions. <strong className="text-[#1C4768]">EarthHaul</strong> designs and engineers automated conveyor systems &amp; material handling machinery.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Button
                  href="/earthflex"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Explore EarthFlex
                </Button>
                <Button
                  href="/earthhaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Explore EarthHaul
                </Button>
              </div>
            </div>

            {/* Hero Right: Two massive premium cards showcasing EarthFlex vs EarthHaul */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              
              {/* EARTHFLEX HERO CARD */}
              <Link 
                href="/earthflex"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard("hero-flex")}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
                className="bg-[#F0F8FF] border border-[#1B70B3]/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(27,112,179,0.06)] hover:shadow-[0_20px_45px_rgba(27,112,179,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative cursor-default lg:cursor-none overflow-hidden border-b-4 border-b-[#1B70B3]"
              >
                {/* Tech watermark */}
                <div className="absolute right-0 top-0 w-24 h-24 opacity-[0.03] pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#1B70B3]">
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#1B70B3] uppercase bg-[#1B70B3]/10 px-2.5 py-1 rounded-md border border-[#1B70B3]/10">
                    DIVISION 01
                  </span>
                  
                  <h3 className="text-2xl font-black text-[#1C4768] mt-4 mb-1">EARTHFLEX</h3>
                  <p className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider mb-3">
                    Industrial Belting Solutions
                  </p>
                  
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-5">
                    Conveyor belts, PVC belts, heavy-duty industrial belting systems for manufacturing operations. Engineered for high resistance to heat, abrasion, and chemicals.
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Visual cue: Belt machinery */}
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-[#1B70B3]/10 mb-4 bg-white relative">
                    <img
                      src="/product-conveyor-belt.png"
                      alt="EarthFlex Industrial Belting"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F0F8FF] via-transparent to-transparent opacity-80" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B70B3] uppercase tracking-wider group-hover:text-[#1C4768] transition-colors">
                    Visit EarthFlex →
                  </span>
                </div>

                {/* Custom floating cursor pill */}
                <AnimatePresence>
                  {hoveredCard === "hero-flex" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        scale: { duration: 0.15 },
                        opacity: { duration: 0.15 },
                        left: { type: "spring", stiffness: 250, damping: 22 },
                        top: { type: "spring", stiffness: 250, damping: 22 },
                      }}
                      style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        x: "-50%",
                        y: "-50%",
                      }}
                      className="pointer-events-none absolute w-24 h-24 rounded-full bg-[#1B70B3] text-white hidden lg:flex flex-col items-center justify-center text-center font-black text-[10px] uppercase tracking-widest shadow-xl z-50 p-2 leading-tight border border-white/20"
                    >
                      <span>Click to</span>
                      <span>Visit</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>

              {/* EARTHHAUL HERO CARD */}
              <Link 
                href="/earthhaul"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard("hero-haul")}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
                className="bg-[#1C4768] text-white border border-[#2C5F84] rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(28,71,104,0.15)] hover:shadow-[0_20px_45px_rgba(28,71,104,0.25)] hover:-translate-y-1.5 transition-all duration-300 relative cursor-default lg:cursor-none overflow-hidden border-b-4 border-b-[#D9BB4A]"
              >
                {/* Tech watermark */}
                <div className="absolute right-0 top-0 w-24 h-24 opacity-[0.05] pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
                    <rect x="10" y="10" width="80" height="80" />
                  </svg>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#D9BB4A] uppercase bg-[#D9BB4A]/15 px-2.5 py-1 rounded-md border border-[#D9BB4A]/20">
                    DIVISION 02
                  </span>
                  
                  <h3 className="text-2xl font-black text-white mt-4 mb-1">EARTHHAUL</h3>
                  <p className="text-xs font-bold text-[#D9BB4A] uppercase tracking-wider mb-3">
                    Automation Conveyor Systems
                  </p>
                  
                  <p className="text-slate-300 text-[13px] leading-relaxed mb-5">
                    Industrial conveyor systems, automation solutions, and material handling engineering for factories. Built to streamline heavy bulk logistic and assembly lines.
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Visual cue: Conveyor Automation factory imagery */}
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-[#2C5F84] mb-4 bg-slate-800 relative">
                    <img
                      src="/about-conveyor-detail.png"
                      alt="EarthHaul Conveyor Automation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C4768] via-transparent to-transparent opacity-80" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9BB4A] uppercase tracking-wider group-hover:text-white transition-colors">
                    Explore EarthHaul →
                  </span>
                </div>

                {/* Custom floating cursor pill */}
                <AnimatePresence>
                  {hoveredCard === "hero-haul" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        scale: { duration: 0.15 },
                        opacity: { duration: 0.15 },
                        left: { type: "spring", stiffness: 250, damping: 22 },
                        top: { type: "spring", stiffness: 250, damping: 22 },
                      }}
                      style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        x: "-50%",
                        y: "-50%",
                      }}
                      className="pointer-events-none absolute w-24 h-24 rounded-full bg-[#D9BB4A] text-[#1C4768] hidden lg:flex flex-col items-center justify-center text-center font-black text-[10px] uppercase tracking-widest shadow-xl z-50 p-2 leading-tight border border-white/10"
                    >
                      <span>Click to</span>
                      <span>Visit</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* 4. "CHOOSE YOUR SOLUTION" DIVISION SELECTOR SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-100" id="selector">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#1B70B3] uppercase block mb-3">
              Divisional Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C4768]">
              Choose Your Industrial Solution
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Select the division that matches your manufacturing and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* EarthFlex Division Selector */}
            <Link 
              href="/earthflex"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("flex")}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
              className="relative cursor-default lg:cursor-none overflow-hidden bg-white border border-[#1B70B3]/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(27,112,179,0.03)] hover:shadow-[0_15px_35px_rgba(27,112,179,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#1B70B3]/10 text-[#1B70B3] rounded-xl flex items-center justify-center border border-[#1B70B3]/10">
                    {/* Belting Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                      <rect x="2" y="9" width="20" height="6" rx="3" />
                      <circle cx="6" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                      <line x1="6" y1="16" x2="6" y2="15" />
                      <line x1="18" y1="16" x2="18" y2="15" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#1B70B3] bg-[#1B70B3]/10 px-3 py-1 rounded-full border border-[#1B70B3]/10 uppercase">
                    Belting solutions
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#1C4768] mb-3">
                  Earth<span className="text-[#1B70B3]">Flex</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Leading manufacturer and supplier of heavy-duty and precision light-duty conveyor belts. Engineered to withstand heavy loads, extreme temperatures, and chemical exposure in harsh industrial plants.
                </p>

                <div className="border-t border-slate-100 pt-6 mb-8">
                  <span className="text-xs font-bold text-[#1C4768] uppercase tracking-wider block mb-4">
                    Key Core Specialties:
                  </span>
                  <ul className="space-y-3">
                    {[
                      "Heavy-Duty Rubber Conveyor Belting (Mining & Cement)",
                      "PVC, PU & Food-Grade Light Duty Conveyor Belts",
                      "Heat, Oil, Flame, Chemical & Wear Resistant Grades",
                      "Chevron, Sidewall, Bucket Elevator & Special Profile Belts",
                      "On-Site Belt Joining, Vulcanizing & Installation Services",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <svg className="w-4 h-4 text-[#1B70B3] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
                <span className="text-sm font-bold text-[#1B70B3] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more <span className="text-base">→</span>
                </span>
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto relative z-20">
                  <Button
                    onClick={() => handleQuoteClick("EarthFlex Belting")}
                    variant="outlineDark"
                    className="w-full sm:w-auto px-6"
                    rounded="lg"
                  >
                    Request Belt Quote
                  </Button>
                </div>
              </div>

              {/* Custom floating cursor pill */}
              <AnimatePresence>
                {hoveredCard === "flex" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: { duration: 0.15 },
                      opacity: { duration: 0.15 },
                      left: { type: "spring", stiffness: 250, damping: 22 },
                      top: { type: "spring", stiffness: 250, damping: 22 },
                    }}
                    style={{
                      left: mousePos.x,
                      top: mousePos.y,
                      x: "-50%",
                      y: "-50%",
                    }}
                    className="pointer-events-none absolute w-24 h-24 rounded-full bg-[#1B70B3] text-white hidden lg:flex flex-col items-center justify-center text-center font-black text-[10px] uppercase tracking-widest shadow-xl z-50 p-2 leading-tight border border-white/20"
                  >
                    <span>Click to</span>
                    <span>Visit</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* EarthHaul Division Selector */}
            <Link 
              href="/earthhaul"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard("haul")}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
              className="relative cursor-default lg:cursor-none overflow-hidden bg-white border border-[#2C5F84]/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(28,71,104,0.03)] hover:shadow-[0_15px_35px_rgba(28,71,104,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#1C4768]/10 text-[#1C4768] rounded-xl flex items-center justify-center border border-[#1C4768]/10">
                    {/* Conveyor/Automation Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-[#1C4768]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#D9BB4A] bg-[#1C4768] px-3 py-1 rounded-full uppercase">
                    Automation solutions
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#1C4768] mb-3">
                  Earth<span className="text-[#D9BB4A]">Haul</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Specialized design and installation of integrated conveyor networks and industrial automation mechanisms. Purpose-built to improve material throughput and streamline manufacturing logistics.
                </p>

                <div className="border-t border-slate-100 pt-6 mb-8">
                  <span className="text-xs font-bold text-[#1C4768] uppercase tracking-wider block mb-4">
                    Key Core Specialties:
                  </span>
                  <ul className="space-y-3">
                    {[
                      "Automated Conveyor Systems (Roller, Belt, Slat, Modular)",
                      "Vertical Handling Systems & Heavy-Duty Bucket Elevators",
                      "Factory Assembly Lines & Robotic Handling Integrations",
                      "Bulk Material Logistics & Heavy Stockpile Reclaimers",
                      "Custom Turnkey Material Sorting & Warehousing Controls",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <svg className="w-4 h-4 text-[#D9BB4A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
                <span className="text-sm font-bold text-[#D9BB4A] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more <span className="text-base">→</span>
                </span>
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto relative z-20">
                  <Button
                    onClick={() => handleQuoteClick("EarthHaul Automation")}
                    variant="outlineDark"
                    className="w-full sm:w-auto px-6"
                    rounded="lg"
                  >
                    Request System Quote
                  </Button>
                </div>
              </div>

              {/* Custom floating cursor pill */}
              <AnimatePresence>
                {hoveredCard === "haul" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: { duration: 0.15 },
                      opacity: { duration: 0.15 },
                      left: { type: "spring", stiffness: 250, damping: 22 },
                      top: { type: "spring", stiffness: 250, damping: 22 },
                    }}
                    style={{
                      left: mousePos.x,
                      top: mousePos.y,
                      x: "-50%",
                      y: "-50%",
                    }}
                    className="pointer-events-none absolute w-24 h-24 rounded-full bg-[#D9BB4A] text-[#1C4768] hidden lg:flex flex-col items-center justify-center text-center font-black text-[10px] uppercase tracking-widest shadow-xl z-50 p-2 leading-tight border border-white/10"
                  >
                    <span>Click to</span>
                    <span>Visit</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT EARTH INDIA GROUP (2-COLUMN PREMIUM) */}
      <section ref={aboutRef} className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#1B70B3] uppercase block">
                Parent Corporate Group
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C4768] leading-tight">
                Engineering Efficiency &amp; Durability for Global Heavy Industries
              </h2>
              <div className="h-1.5 w-20 bg-[#1B70B3] rounded" />
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Earth India Group is the parent industrial holding company supporting specialized divisions in bulk transport materials and automated machinery engineering. Our group serves as a single unified partner for factory procurement, project engineering, and plant heads across India.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                By decoupling our industrial functions, we ensure that **EarthFlex** focuses purely on high-strength belting engineering and supply, while **EarthHaul** dedicates its resources entirely to customized assembly lines, material conveyor design, and heavy automation systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#1B70B3]/10 text-[#1B70B3] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1C4768] text-sm">ISO 9001:2015 Certified Quality</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#1B70B3]/10 text-[#1B70B3] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1C4768] text-sm">Pan-India Support &amp; Servicing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl text-center space-y-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-4xl sm:text-5xl font-black text-[#1C4768] block">
                  <RollingCounter value="10+" isInView={isAboutInView} />
                </span>
                <span className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider block">Years Experience</span>
                <p className="text-[11px] text-slate-400">Of industrial engineering &amp; manufacturing excellence</p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl text-center space-y-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-4xl sm:text-5xl font-black text-[#1C4768] block">
                  <RollingCounter value="500+" isInView={isAboutInView} />
                </span>
                <span className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider block">Projects</span>
                <p className="text-[11px] text-slate-400">Completed in heavy manufacturing hubs</p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl text-center space-y-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-4xl sm:text-5xl font-black text-[#1C4768] block">
                  <RollingCounter value="100+" isInView={isAboutInView} />
                </span>
                <span className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider block">Industrial Clients</span>
                <p className="text-[11px] text-slate-400">Trusting our industrial hardware</p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl text-center space-y-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-4xl sm:text-5xl font-black text-[#1C4768] block">Pan India</span>
                <span className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider block">Service</span>
                <p className="text-[11px] text-slate-400">Quick dispatch and site engineering support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-100" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#1B70B3] uppercase block mb-3">
              Market Segments
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C4768]">
              Industries We Serve
            </h2>
            <p className="text-slate-600 mt-4">
              Providing specialized heavy-duty conveyor systems and high-strength belting to core sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Manufacturing",
                desc: "Integrated plant assembly loops",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                name: "Packaging",
                desc: "High-speed sorting conveyor lines",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                name: "Logistics",
                desc: "Rapid material distribution setups",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zm-2-7h-8.5v8H19v-8zm-8.5 0H5v8h5.5v-8z" />
                  </svg>
                ),
              },
              {
                name: "Food Processing",
                desc: "Hygiene-grade food & PVC belts",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                  </svg>
                ),
              },
              {
                name: "Mining",
                desc: "Extremely heavy raw bulk handling",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707" />
                  </svg>
                ),
              },
              {
                name: "Automotive",
                desc: "Heavy parts handling conveyor tracks",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                ),
              },
              {
                name: "Warehousing",
                desc: "Bespoke load sortation grids",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                name: "Textile",
                desc: "High-friction grip flat driving belts",
                icon: (
                  <svg className="w-8 h-8 text-[#1B70B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-[#1B70B3]/35 rounded-2xl p-6 shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="mb-4">{ind.icon}</div>
                <h3 className="font-extrabold text-[#1C4768] text-base">{ind.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE EARTH INDIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#1B70B3] uppercase block mb-3">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C4768]">
              Why Industrial Partners Choose Us
            </h2>
            <p className="text-slate-600 mt-4">
              We leverage strict standards and heavy mechanical expertise to ensure maximum plant uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Expertise",
                desc: "Over 10+ years of deep engineering background and core manufacturing knowledge in mineral, cargo, and factory production lines.",
              },
              {
                title: "Reliable Engineering",
                desc: "All conveyance units and belting compounds are built strictly compliant with ISO 9001 quality certificates for high durability.",
              },
              {
                title: "Custom Solutions",
                desc: "We design specialized configurations matching specific plant footprint boundaries and custom material weight constraints.",
              },
              {
                title: "After Sales Support",
                desc: "Providing 24/7 client support loops, emergency belt repair, site vulcanization, and scheduled preventive systems checkups.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 relative overflow-hidden group hover:border-[#1B70B3]/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1B70B3] opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-[#1C4768] mb-3 pl-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED PROJECTS (REAL MANUFACTURING VISUALS ONLY) */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#1B70B3] uppercase block mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C4768]">
              Featured Projects
            </h2>
            <p className="text-slate-600 mt-4">
              Real installations and custom manufacturing engineering deliveries from our specialized divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src="/about-factory.png"
                  alt="Automated Coal Handling Loop"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-[#D9BB4A] bg-[#1C4768] px-2.5 py-1 rounded">
                  EARTHHAUL SYSTEMS
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#1C4768] text-lg mb-2">
                  Automated Heavy Raw Handling Loop
                </h3>
                <p className="text-xs text-slate-500 mb-4">Steel Manufacturing Facility</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Turnkey roller and belt conveyor loop designed for handling 1,200 metric tons of iron ore daily. Improved factory flow safety metrics by 35%.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src="/product-chevron.png"
                  alt="Chevron Belting Installation"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-white bg-[#1B70B3] px-2.5 py-1 rounded">
                  EARTHFLEX BELTS
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#1C4768] text-lg mb-2">
                  High-Inclination Chevron Belting
                </h3>
                <p className="text-xs text-slate-500 mb-4">Mineral Packaging Warehouse</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Bespoke chevron cleated rubber conveyor belt installation for moving dry granular packaging bags up a 35-degree incline without slippage.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src="/product-heat-resistant.png"
                  alt="High-Temperature Belt Installation"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-white bg-[#1B70B3] px-2.5 py-1 rounded">
                  EARTHFLEX BELTS
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#1C4768] text-lg mb-2">
                  Super Heat-Resistant Belting
                </h3>
                <p className="text-xs text-slate-500 mb-4">Cement Production Hub</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Installation of custom glass-fiber reinforced rubber belts capable of handling hot cement clinker material reaching peak temperatures of 220°C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA & INQUIRY FORM */}
      <section className="py-24 bg-[#1C4768] text-white relative" id="contact">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: CTA Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#48BAD3] uppercase block mb-3">
                  Let's Discuss
                </span>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                  Looking for Industrial Solutions?
                </h2>
                <p className="text-slate-300 mt-4 leading-relaxed text-sm sm:text-base">
                  Connect directly with our specialized engineering sales division to configure a detailed technical roadmap and cost quote.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+918200223669"
                  className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#48BAD3] hover:bg-white/[0.08] p-4 rounded-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#48BAD3]/20 flex items-center justify-center text-[#48BAD3]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Call Directly</span>
                    <span className="text-sm font-bold block mt-0.5">+91 82002 23669</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/918200223669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#48BAD3] hover:bg-white/[0.08] p-4 rounded-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.45 5.487 0 9.954-4.466 9.957-9.956.002-2.66-1.019-5.158-2.883-7.026C16.657 1.75 14.161.73 11.5.73c-5.49 0-9.957 4.467-9.96 9.957 0 1.942.503 3.844 1.464 5.518L1.93 22.07l6.027-1.58 1.396.864z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">WhatsApp Line</span>
                    <span className="text-sm font-bold block mt-0.5">Instant Technical Support</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#173C58] border border-white/[0.06] p-8 rounded-3xl shadow-xl w-full">
              <h3 className="text-xl font-bold mb-6 text-white pb-3 border-b border-white/[0.08]">
                Request Technical Proposal
              </h3>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. UltraTech Cement"
                          className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. purchasing@company.com"
                          className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                        Relevant specialized division
                      </label>
                      <select
                        name="division"
                        value={formData.division}
                        onChange={handleInputChange}
                        className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white outline-none transition-all"
                      >
                        <option value="General Inquiry">General Group Inquiry</option>
                        <option value="EarthFlex Belting">EarthFlex - Industrial Belting solutions</option>
                        <option value="EarthHaul Automation">EarthHaul - Conveyor &amp; Automation systems</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">
                        Describe Your Project Requirements
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please include belt dimensions, material type, routing lengths, or custom system designs..."
                        className="w-full bg-[#112F45] border border-white/[0.1] focus:border-[#48BAD3] focus:ring-1 focus:ring-[#48BAD3] rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      variant="secondary"
                      className="w-full py-4"
                      rounded="lg"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <span>Submit Proposal Request</span>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#48BAD3]/20 text-[#48BAD3] border border-[#48BAD3]/30 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Proposal Request Received</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                      Thank you. Your industrial inquiry has been routed to our specialized **{formData.division}** technical coordinators. We will reply with initial layouts and cost estimates within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROFESSIONAL FOOTER */}
      <footer className="bg-[#0F1E2C] text-slate-400 text-xs sm:text-sm py-16 border-t border-[#1C4768]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#1C4768]">
            {/* Column 1: Parent Corporate Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
                  <img
                    src="/earthindia_logo.jpg"
                    alt="Earth India Group Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-base font-extrabold text-white tracking-tight">
                  Earth India Group
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                A premier industrial engineering consortium delivering heavy-duty material handling machinery and specialized rubber conveyance systems to core manufacturing and logistics hubs since 2016.
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                ISO 9001:2015 Registered Quality System
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Quick Links
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home Gateway</Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer text-left">About Group</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("industries")} className="hover:text-white transition-colors cursor-pointer text-left">Industries</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button>
                </li>
              </ul>
            </div>

            {/* Column 3: EarthFlex Division Links */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold text-[#1B70B3] uppercase tracking-wider block">
                EarthFlex Belting
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/earthflex" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Belting Home</Link>
                </li>
                <li>
                  <Link href="/earthflex#products" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rubber Conveyors</Link>
                </li>
                <li>
                  <Link href="/earthflex#about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Quality Control</Link>
                </li>
                <li>
                  <Link href="/earthflex#reviews" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Client Reviews</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: EarthHaul Division Links */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold text-[#D9BB4A] uppercase tracking-wider block">
                EarthHaul Systems
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/earthhaul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Automation Home</Link>
                </li>
                <li>
                  <Link href="/earthhaul#services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Automation Lines</Link>
                </li>
                <li>
                  <Link href="/earthhaul#fleet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bulk Logistics</Link>
                </li>
                <li>
                  <Link href="/earthhaul#quote" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">System Estimator</Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Details */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Contact Details
              </span>
              <p className="text-xs leading-relaxed text-slate-400">
                Ahmedabad, Gujarat, India
              </p>
              <p className="text-xs font-semibold text-white">
                Tel: +91 82002 23669
              </p>
              <p className="text-xs text-slate-400">
                Email: info@earthflex.com
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Earth India Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
