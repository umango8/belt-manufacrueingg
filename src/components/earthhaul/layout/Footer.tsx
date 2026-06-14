"use client";

import React from "react";
import Link from "next/link";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";

export default function EarthHaulFooter() {
  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/earthhaul" className="flex items-center gap-2.5 mb-5 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${BLUE}20`, border: `1.5px solid ${BLUE}40` }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold tracking-tight text-white">
                  Earth<span style={{ color: BLUE }}>Haul</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase mt-0.5 text-white/40">
                  Conveyor & Automation
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed mb-6">
              Engineering automated conveyor solutions that keep your factory moving forward.
            </p>
            <div className="mb-6">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                style={{ backgroundColor: `${BLUE}15`, color: "#22A6F2", border: `1px solid ${BLUE}25` }}
              >
                An ISO 9001:2015 Certified Company
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.112-2.021-1.861-.482-9.386-.482-9.386-.482s-7.525 0-9.386.482c-1.022.266-1.84 1.04-2.112 2.021-.497 1.802-.497 5.568-.497 5.568s0 3.765.497 5.567c.272.98 1.09 1.755 2.112 2.021 1.861.481 9.386.481 9.386.481s7.525 0 9.386-.481c1.022-.266 1.84-1.04 2.112-2.021.498-1.802.498-5.567.498-5.567s0-3.765-.498-5.568zm-13.84 8.76v-7.844l6.816 3.923-6.816 3.921z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 mb-5 pb-2 border-b border-white/5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { label: "About Us", href: "/earthhaul/about" },
                { label: "Case Studies & Projects", href: "/earthhaul/projects" },
                { label: "Careers", href: "/earthhaul/contact" },
                { label: "Technical Downloads", href: "/earthhaul/products" },
                { label: "Privacy Policy", href: "/earthhaul/contact" },
                { label: "Terms of Service", href: "/earthhaul/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/45 hover:text-[#22A6F2] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Systems & Products */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 mb-5 pb-2 border-b border-white/5">
              Systems & Products
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { label: "Heavy Duty Systems", href: "/earthhaul/products#conveyor-systems" },
                { label: "Modular Automation", href: "/earthhaul/products#automation-systems" },
                { label: "Specialized Conveyor Belts", href: "/earthhaul/products#sanitary-food-grade" },
                { label: "Custom Fabrications", href: "/earthhaul/products" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/45 hover:text-[#22A6F2] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Global Headquarters */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 mb-5 pb-2 border-b border-white/5">
              Contact & Global Headquarters
            </h4>
            <div className="space-y-3.5 text-[13px] text-white/50">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>898/8, G.I.D.C. Makarpura, Nr. Purohit Char Rasta, Vadodara - 390010, Gujarat, India.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <a href="mailto:info@earthhaul.com" className="hover:text-white transition-colors">info@earthhaul.com</a>
                  <a href="mailto:earthindia.co1008@gmail.com" className="hover:text-white transition-colors text-[12px]">earthindia.co1008@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <a href="tel:+919824994666" className="hover:text-white transition-colors">+91 9824994666</a>
                  <a href="tel:+918320576724" className="hover:text-white transition-colors">+91 8320576724</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-white/30">
            Copyright © 2026 Earthhaul (A Division of The Earth India Co.). All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/30">
            <Link href="/" className="hover:text-white transition-colors">
              Earth India Corporate
            </Link>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            <Link href="/earthflex" className="hover:text-white transition-colors">
              EarthFlex Division
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
