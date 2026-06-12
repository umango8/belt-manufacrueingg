"use client";

import React from "react";
import Link from "next/link";
import { EH_COMPANY } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#F28C28";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/earthhaul/about" },
    { label: "Case Studies", href: "/earthhaul#case-studies" },
    { label: "Certifications", href: "/earthhaul#trust" },
    { label: "Careers", href: "/earthhaul#contact" },
  ],
  Products: [
    { label: "Heavy Duty Conveyors", href: "/earthhaul" },
    { label: "Steel Cord Systems", href: "/earthhaul" },
    { label: "Modular Conveyors", href: "/earthhaul" },
    { label: "Haul-Off Systems", href: "/earthhaul" },
  ],
  Industries: [
    { label: "Mining & Minerals", href: "/earthhaul" },
    { label: "Iron & Steel", href: "/earthhaul" },
    { label: "Food Processing", href: "/earthhaul" },
    { label: "Warehousing", href: "/earthhaul" },
  ],
  "Quick Links": [
    { label: "Earth India Group", href: "/" },
    { label: "EarthFlex Division", href: "/earthflex" },
    { label: "Request Quote", href: "/earthhaul#contact" },
    { label: "Contact Us", href: "/earthhaul#contact" },
  ],
};

export default function EarthHaulFooter() {
  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/earthhaul" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${BLUE}20`, border: `1.5px solid ${BLUE}40` }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
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
            <p className="text-[13px] text-white/50 leading-relaxed max-w-xs mb-6">
              {EH_COMPANY.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-[12px] text-white/50">
              <a href={`tel:${EH_COMPANY.phone}`} className="flex items-center gap-2.5 hover:text-white/80 transition-colors">
                <svg className="w-4 h-4 shrink-0" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {EH_COMPANY.phone}
              </a>
              <a href={`mailto:${EH_COMPANY.email}`} className="flex items-center gap-2.5 hover:text-white/80 transition-colors">
                <svg className="w-4 h-4 shrink-0" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EH_COMPANY.email}
              </a>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{EH_COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{EH_COMPANY.hours}</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 mb-4 pb-2 border-b border-white/5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12.5px] text-white/45 hover:text-white/90 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} {EH_COMPANY.fullName}. A division of {EH_COMPANY.parent}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/30">
            <span>ISO 9001:2015 Certified</span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span style={{ color: `${ORANGE}90` }}>Engineering Industrial Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
