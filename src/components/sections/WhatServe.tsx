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
    id: "textile",
    title: "Textile Industry",
    badge: "TEXTILE",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=800&auto=format&fit=crop",
    description: "High-performance belts for spinning, weaving, and garment production lines requiring precise tension control and smooth material handling.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 6v12M12 6v12M16 6v12" />
      </svg>
    ),
  },
  {
    id: "food-processing",
    title: "Food Processing Industry",
    badge: "FOOD-GRADE",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop",
    description: "FDA-compliant, food-grade conveyor belts for hygienic processing, packaging, and transportation of consumable goods.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "packaging",
    title: "Packaging Industry",
    badge: "PACKAGING",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    description: "Durable, low-friction belts for high-speed packaging lines, carton sealing, and automated sorting systems with superior grip.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "automotive",
    title: "Automotive Industry",
    badge: "AUTOMOTIVE",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    description: "Precision-engineered belts for automotive assembly lines, component manufacturing, and power transmission in vehicle systems.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Industry",
    badge: "PHARMA",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    description: "Anti-static, anti-bacterial conveyor belts meeting stringent pharmaceutical GMP standards for clean-room environments.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "logistics",
    title: "Logistics & Warehousing",
    badge: "LOGISTICS",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=800&q=80",
    description: "High-capacity sorting and distribution belts for warehousing, e-commerce fulfillment, and automated logistics centers.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "printing",
    title: "Printing Industry",
    badge: "PRINTING",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop",
    description: "Precision flat and timing belts for offset, digital, and flexographic printing machines with exact registration control.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    id: "ceramic",
    title: "Ceramic Industry",
    badge: "CERAMIC",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "Heat-resistant and abrasion-proof belts for kiln loading, glazing lines, and ceramic tile production facilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "paper",
    title: "Paper Industry",
    badge: "PAPER",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
    description: "Chemical-resistant and moisture-proof belts for pulp handling, paper converting, and corrugation production lines.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "agriculture",
    title: "Agriculture Industry",
    badge: "AGRICULTURE",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
    description: "Rugged, weather-resistant belts for grain handling, seed processing, and agricultural machinery power transmission.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Duplicate the array of 10 elements to allow seamless infinite loops
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
    <section id="services" className="section-padding bg-[#0B1628] relative overflow-hidden">
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
          animation: marquee 50s linear infinite;
        }
        .parent-hover-pause:hover .animate-marquee-custom {
          animation-play-state: paused;
        }
      `}} />

      {/* Huge Background Vector Watermark Text (Double Watermark) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/4 tracking-[0.10em] leading-none uppercase translate-y-[28%] select-none">
          EarthIndia
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center overflow-visible pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-white/4 tracking-[0.10em] leading-none uppercase translate-y-[-25%] select-none">
          EarthIndia
        </span>
      </div>

      {/* Header - Stays inside container-custom for perfect page alignment */}
      <div className="container-custom relative z-10 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-white leading-[1.3] tracking-tight text-left mt-6">
              Powering operations across <span className="text-white/60 font-normal">global production lines</span>
            </h2>
          </div>

          {/* Right Header Controls - Auto Play Pause Info Indicator & See All Link */}
          <div className="flex items-center gap-6 shrink-0 lg:mb-2 text-left justify-between sm:justify-start w-full sm:w-auto">
            {/* Soft indicator pill showing hover control */}
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

      {/* Sliding Infinite Loop Marquee Container - OUTSIDE container-custom for full-width viewport bleed */}
      <div className="overflow-hidden w-full relative z-10 parent-hover-pause py-4">
        {/* Left Side Atmospheric Dark Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 sm:bg-gradient-to-r from-[#0B1628] via-[#0B1628]/60 to-transparent pointer-events-none z-20" />
        
        {/* Right Side Atmospheric Dark Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 sm:bg-gradient-to-l from-[#0B1628] via-[#0B1628]/60 to-transparent pointer-events-none z-20" />

        <div
          ref={trackRef}
          className="flex gap-6 animate-marquee-custom w-max px-6 md:px-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {DOUBLE_SERVICES.map((service, index) => {
            // Unique key to prevent duplicates matching keys in DOM
            const uniqueKey = `${service.id}-${index}`;
            
            return (
              <Link
                key={uniqueKey}
                href={`/industries/${service.id}`}
                className="group relative overflow-hidden rounded-3xl h-[440px] w-[310px] shrink-0 p-8 flex flex-col justify-between border border-white/5 transition-shadow duration-500 cursor-pointer block"
              >
                {/* Background Image & Premium Dark Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="310px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/40 via-[#0B1628]/60 to-[#0B1628]/20 group-hover:via-[#0B1628]/75 transition-all duration-500" />
                </div>

                {/* Top Row - STATIC LIGHT BACKGROUND CIRCLE with SVG Icon */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-[#0B1628] flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm group-hover:bg-accent group-hover:text-white transition-all duration-300 ease-out">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Bottom Content Area with Slide Up Reveal Panel */}
                <div className="relative w-full h-full flex flex-col justify-end overflow-hidden pt-12 z-10">
                  {/* Comfortable slightly-bottom position achieved using translate-y-[194px] on desktop, fully open on mobile/tablet */}
                  <div className="translate-y-0 md:translate-y-[160px] md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                    
                    {/* Title (White -> Industrial Orange on hover) */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-left transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                    
                    {/* Divider Line */}
                    <div className="hidden md:block h-px bg-white/20 w-full mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[50ms]" />
                    
                    {/* Short Description Paragraph */}
                    <p className="hidden md:block text-[13.5px] text-white/80 leading-[1.55] text-left mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[100ms] font-medium text-justify">
                      {service.description}
                    </p>
                    
                    {/* Full Read More Option Button */}
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-[150ms] w-full">
                      <div className="w-full justify-center py-2.5 text-xs font-bold tracking-widest uppercase border border-accent bg-accent text-white rounded-full flex items-center justify-center transition-colors duration-300">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}