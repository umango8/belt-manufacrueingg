"use client";

import { motion } from "framer-motion";
import React from "react";
import { WHY_US } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  quality: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  engineering: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  delivery: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  support: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-background/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 lg:gap-16 sm:gap-10 gap-6 items-center">
          
          {/* Left Side: Title, Subtitle, Text, and technical trust metrics */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left lg:pr-4">
            {/* Structural high-tech tag */}
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WHY CHOOSE US
            </span>
            
            {/* Title with beautiful accent colors */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight max-w-3xl md:mb-6 mb-4 mt-6">
              The <span className="text-accent">BeltForge</span> Advantage
            </h2>
            
            {/* Description Text */}
            <p className="text-base text-subtitle leading-relaxed font-medium md:mb-8 mb-6 text-justify sm:text-left">
              We combine decades of manufacturing expertise with modern engineering practices to deliver premium conveyor solutions you can trust. Every belt we fabricate undergoes strict quality checkpoints to ensure unmatched resilience in heavy-duty industrial environments.
            </p>
            
            {/* Technical Trust highlight blocks */}
            <div className="grid grid-cols-2 gap-6 md:pt-6 pt-4 border-t border-border-light">
              <div>
                <span className="block text-3xl font-black text-primary font-heading">25+</span>
                <span className="text-xs font-mono font-bold text-subtitle uppercase tracking-widest leading-none block mt-1">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-accent font-heading">100%</span>
                <span className="text-xs font-mono font-bold text-subtitle uppercase tracking-widest leading-none block mt-1">
                  Inspected
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Bento-style Grid of Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {WHY_US.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white border border-slate-200/80 sm:p-6 p-4 lg:p-9 flex flex-col justify-start text-left relative group hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] hover:-translate-y-2 transition-all duration-500 rounded-md overflow-hidden "
                id={`why-us-${index}`}
              >
                {/* 4 Technical L-shaped Corner Brackets that draw on Hover, faint in normal state */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-accent/15 group-hover:border-accent/80 transition-all duration-500 pointer-events-none" />

                {/* Technical Index Indicator top-right */}
                <span className="absolute right-6 top-6 text-xs font-mono font-bold text-title/15 group-hover:text-accent/60 transition-colors">
                  BF-{index + 1}
                </span>

                {/* Glowing High-Tech Icon Container */}
                <div className="w-14 h-14 bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-[#0A0E1A] group-hover:border-accent group-hover:text-accent transition-all duration-500 rounded-full shadow-sm group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {iconMap[item.icon]}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-title mb-3 group-hover:text-accent transition-colors font-heading"
                >
                  {item.title}
                </h3>

                {/* Description (unchanged text content) */}
                <p className="text-sm text-subtitle leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
