"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumbs,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#0F172A] pt-[130px] pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/98 via-[#0F172A]/85 to-[#0F172A]/70" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: `${BLUE}10` }}
      />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[11px] text-white/40 mb-8"
        >
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white/70 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/60">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
              style={{ backgroundColor: `${BLUE}15`, color: "#22A6F2", border: `1px solid ${BLUE}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: ORANGE }} />
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold text-white leading-tight tracking-tight max-w-3xl"
        >
          {title}{" "}
          {highlight && <span style={{ color: "#22A6F2" }}>{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[15px] text-white/50 mt-5 leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA */}
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-7 py-3.5 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
            >
              {ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
