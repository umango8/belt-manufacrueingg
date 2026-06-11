"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: "mining",
    title: "Mining Industry",
    badge: "MINING & QUARRYING",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    description: "Extremely rugged, abrasion-resistant steel cord and fabric belts built to convey heavy ores, coal, and rock under severe impact conditions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9V2m0 16v-6m0 0l-3-3m3 3l3-3m-6 9a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    ),
  },
  {
    id: "food-pharma",
    title: "Food & Pharma",
    badge: "FDA-GRADE / SANITARY",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "Non-toxic, anti-bacterial PU and PVC belts that meet strict FDA, USDA, and EU sanitary standards for safe processing and packaging.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "textile-printing",
    title: "Textile & Printing",
    badge: "HIGH-PRECISION",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=800&q=80",
    description: "Custom power transmission and timing belts offering exact synchronization, low noise, and stable tension control for looms and printing presses.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 6v12M12 6v12M16 6v12" />
      </svg>
    ),
  },
  {
    id: "ceramic-glass",
    title: "Ceramic & Glass",
    badge: "HEAT & CUT RESISTANT",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Specialized heat-resistant and high-friction belts developed to handle sharp tile edges, glass panels, and extreme kiln temperatures.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" />
      </svg>
    ),
  },
  {
    id: "cement-chemical",
    title: "Cement & Chemical",
    badge: "CHEMICAL & HEAT SHIELD",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80",
    description: "High-performance heat-resistant belts up to 200°C and chemical-proof covers for acidic, alkaline, and petroleum-based materials.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547" />
      </svg>
    ),
  },
];

// Duplicate the array of 5 elements to make exactly 10 elements (3340px width marquee loop)
const DOUBLE_SERVICES = [...SERVICES, ...SERVICES];

export default function WhatWeServeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchState = useRef({ startX: 0, currentX: 0, dragging: false });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track || window.innerWidth >= 768) return;

    touchState.current.dragging = true;
    touchState.current.startX = e.touches[0].clientX;

    // Capture current animated position
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    touchState.current.currentX = matrix.m41;

    // Freeze animation at current position
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

    // Resume marquee animation after a short delay
    resumeTimer.current = setTimeout(() => {
      track.style.transform = "";
      track.style.animation = "";
    }, 1500);
  }, []);

  return (
    <section id="services" className="section-padding bg-[#111827] relative overflow-hidden">
      {/* Hardware-Accelerated Marquee Stylesheet Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-3340px, 0, 0);
          }
        }
        .animate-marquee-custom {
          animation: marquee 40s linear infinite;
        }
        .parent-hover-pause:hover .animate-marquee-custom {
          animation-play-state: paused;
        }
      `}} />

      {/* Huge Background Vector Watermark Text */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/4 tracking-[0.10em] leading-none uppercase translate-y-[28%] select-none">
          Earth Flex
        </span>
      </div>

      {/* Header */}
      <div className="container-custom relative z-10 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              INDUSTRIES WE CATER TO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-white leading-[1.3] tracking-tight text-left mt-6">
              Powering operations across <span className="text-accent font-bold">global production lines</span>
            </h2>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-6 shrink-0 lg:mb-2 text-left justify-between sm:justify-start w-full sm:w-auto">
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-white/40 border border-white/10 px-4 py-2 rounded-full bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              PAUSE ON HOVER
            </span>

            <Link
              href="/industries"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-white hover:text-accent transition-colors group"
            >
              See All Industries
              <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <svg
                  className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sliding Infinite Loop Marquee Container */}
      <div className="overflow-hidden w-full relative z-10 parent-hover-pause py-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 sm:bg-gradient-to-r from-[#111827] via-[#111827]/60 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 sm:bg-gradient-to-l from-[#111827] via-[#111827]/60 to-transparent pointer-events-none z-20" />

        <div
          ref={trackRef}
          className="flex gap-6 animate-marquee-custom w-max px-6 md:px-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {DOUBLE_SERVICES.map((service, index) => {
            const uniqueKey = `${service.id}-${index}`;
            
            return (
              <div
                key={uniqueKey}
                className="group relative overflow-hidden rounded-3xl h-[440px] w-[310px] shrink-0 p-8 flex flex-col justify-between border border-white/5 transition-shadow duration-500 cursor-pointer block"
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="310px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-[#111827]/60 to-[#111827]/20 group-hover:via-[#111827]/75 transition-all duration-500" />
                </div>

                {/* Top Row */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-[#111827] flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm group-hover:bg-accent group-hover:text-white transition-all duration-300 ease-out">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative w-full h-full flex flex-col justify-end overflow-hidden pt-12 z-10">
                  <div className="translate-y-0 md:translate-y-[160px] md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-left transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                    
                    <div className="hidden md:block h-px bg-white/20 w-full mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[50ms]" />
                    
                    <p className="hidden md:block text-[13.5px] text-white/80 leading-[1.55] text-left mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[100ms] font-medium text-justify">
                      {service.description}
                    </p>
                    
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[150ms] w-full">
                      <div className="w-full justify-center py-2.5 text-xs font-bold tracking-widest uppercase border border-accent bg-accent text-white rounded-full flex items-center justify-center transition-colors duration-300">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}