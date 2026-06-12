"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";

interface IndustryItem {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverBg: string;
  icon: React.ReactNode;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    bgColor: "rgba(70, 115, 197, 0.10)",
    textColor: "#4673C5",
    borderColor: "rgba(70, 115, 197, 0.20)",
    hoverBg: "rgba(70, 115, 197, 0.18)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "mining",
    name: "Mining",
    bgColor: "rgba(31, 41, 55, 0.06)",
    textColor: "#1F2937",
    borderColor: "rgba(31, 41, 55, 0.12)",
    hoverBg: "rgba(31, 41, 55, 0.12)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L21 3m-6.5 6.5l-5 5L3 21l1.5-6.5 5-5 5-5zM17 5l2 2" />
      </svg>
    ),
  },
  {
    id: "food-processing",
    name: "Food Processing",
    bgColor: "rgba(10, 116, 28, 0.10)",
    textColor: "#0A741C",
    borderColor: "rgba(10, 116, 28, 0.20)",
    hoverBg: "rgba(10, 116, 28, 0.18)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8l-5-5M7 8l5-5M17 14l-5 5M7 14l5 5" />
      </svg>
    ),
  },
  {
    id: "logistics",
    name: "Logistics",
    bgColor: "rgba(217, 119, 6, 0.08)",
    textColor: "#B45309",
    borderColor: "rgba(217, 119, 6, 0.16)",
    hoverBg: "rgba(217, 119, 6, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h1M18 8h-3v5h5V9a1 1 0 00-1-1z" />
      </svg>
    ),
  },
  {
    id: "packaging",
    name: "Packaging",
    bgColor: "rgba(13, 148, 136, 0.08)",
    textColor: "#0F766E",
    borderColor: "rgba(13, 148, 136, 0.16)",
    hoverBg: "rgba(13, 148, 136, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "cement",
    name: "Cement",
    bgColor: "rgba(71, 85, 105, 0.08)",
    textColor: "#475569",
    borderColor: "rgba(71, 85, 105, 0.16)",
    hoverBg: "rgba(71, 85, 105, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 12h6M9 17h4" />
      </svg>
    ),
  },
  {
    id: "steel",
    name: "Steel",
    bgColor: "rgba(79, 70, 229, 0.08)",
    textColor: "#4338CA",
    borderColor: "rgba(79, 70, 229, 0.16)",
    hoverBg: "rgba(79, 70, 229, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M5 22V4a2 2 0 012-2h10a2 2 0 012 2v18M9 2v20M15 2v20M5 8h14M5 14h14" />
      </svg>
    ),
  },
  {
    id: "warehousing",
    name: "Warehousing",
    bgColor: "rgba(124, 58, 237, 0.08)",
    textColor: "#6D28D9",
    borderColor: "rgba(124, 58, 237, 0.16)",
    hoverBg: "rgba(124, 58, 237, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
      </svg>
    ),
  },
  {
    id: "recycling",
    name: "Recycling",
    bgColor: "rgba(5, 150, 105, 0.08)",
    textColor: "#047857",
    borderColor: "rgba(5, 150, 105, 0.16)",
    hoverBg: "rgba(5, 150, 105, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3m0 0l3-3m-3 3V8" />
      </svg>
    ),
  },
  {
    id: "automotive",
    name: "Automotive",
    bgColor: "rgba(225, 29, 72, 0.08)",
    textColor: "#BE123C",
    borderColor: "rgba(225, 29, 72, 0.16)",
    hoverBg: "rgba(225, 29, 72, 0.14)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v7M12 15v7M2 12h7M15 12h7" />
      </svg>
    ),
  },
];

// Duplicate list to guarantee seamless scrolling on all screen sizes
const DOUBLE_INDUSTRIES = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

export default function WhatWeServeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchState = useRef({ startX: 0, currentX: 0, dragging: false });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track || window.innerWidth >= 768) return;

    touchState.current.dragging = true;
    touchState.current.startX = e.touches[0].clientX;

    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    touchState.current.currentX = matrix.m41;

    track.style.animation = "none";
    track.style.transform = `translate3d(${touchState.current.currentX}px, 0, 0)`;

    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track || !touchState.current.dragging) return;

    const delta = e.touches[0].clientX - touchState.current.startX;
    track.style.transform = `translate3d(${touchState.current.currentX + delta}px, 0, 0)`;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    touchState.current.dragging = false;

    resumeTimer.current = setTimeout(() => {
      track.style.transform = "";
      track.style.animation = "";
    }, 1200);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 border-b border-[#E5E7EB]">
      {/* Hardware-Accelerated Seamless Marquee Stylesheet Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-forward-slow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-forward-slow {
          animation: marquee-forward-slow 28s linear infinite;
        }
        .parent-hover-pause:hover .animate-marquee-forward-slow {
          animation-play-state: paused;
        }
      `}} />

      {/* Header Container */}
      <div className="container-custom relative z-10 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-pulse" />
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#1F2937] leading-[1.25] tracking-tight mt-4">
              Engineered to perform in <span className="text-[#4673C5]">demanding conditions</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mt-4 leading-relaxed">
              We design and manufacture heavy-duty rubber conveyor belts, high-precision timing drives, and custom process profiles tailored to satisfy the output needs of global industrial networks.
            </p>
          </div>

          {/* Right Header Navigation Link */}
          <div className="flex items-center gap-5 shrink-0 lg:mb-2 text-left justify-between sm:justify-start w-full sm:w-auto">
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold text-[#6B7280] border border-[#E5E7EB] px-3.5 py-1.5 rounded-md bg-[#F8FAFC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A741C] animate-ping" />
              PAUSE ON HOVER
            </span>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F2937] hover:text-[#4673C5] transition-colors group"
            >
              See All Industries
              <div className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-center group-hover:bg-[#4673C5] group-hover:border-[#4673C5] group-hover:text-white transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-[#1F2937] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee Container with Detailed Cards */}
      <div className="container-custom mx-auto overflow-hidden relative z-10 parent-hover-pause py-4">
        {/* Soft Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />

        <div
          ref={trackRef}
          className="flex gap-5 animate-marquee-forward-slow w-max pl-5 sm:pl-8 lg:pl-10 pr-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {DOUBLE_INDUSTRIES.map((industry, index) => {
            const uniqueKey = `${industry.id}-${index}`;
            
            return (
              <div
                key={uniqueKey}
                style={{
                  backgroundColor: industry.bgColor,
                  borderColor: industry.borderColor,
                  color: industry.textColor,
                }}
                className="flex items-center gap-4 px-7 py-4.5 rounded-xl border shrink-0 transition-all duration-300 cursor-pointer select-none hover:-translate-y-1 hover:shadow-md hover:shadow-[#1F2937]/5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = industry.hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = industry.bgColor;
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-xs flex items-center justify-center border border-white/30 shadow-xs shrink-0 transition-colors duration-300">
                  {industry.icon}
                </div>
                <span className="text-sm font-extrabold uppercase tracking-wider whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}