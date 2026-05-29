"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

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
    id: "heavy-mining",
    title: "Heavy Mining",
    badge: "HEAVY-DUTY",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&h=800&q=80",
    description: "High-tensile steel cord and textile reinforced belts engineered for severe impact, rugged abrasion, and high tonnage output.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "extreme-heat",
    title: "Extreme Heat",
    badge: "HIGH-TEMP",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Heat-resistant compound sheets that withstand glowing clinker, hot coke, and casting sands up to 400°C without cracking.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    id: "rapid-logistics",
    title: "Rapid Logistics",
    badge: "HIGH-SPEED",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Low-friction tracking belts optimized for high acceleration sorting, warehouse distribution lines, and rapid packaging.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "steep-incline",
    title: "Steep Incline",
    badge: "CUSTOM-FIT",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Custom corrugated sidewalls, chevron profiles, and bucket elevators custom-molded for steep vertical material transport.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "incline-chevron",
    title: "Incline Chevron",
    badge: "PROFILED",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=800&q=80",
    description: "High-integrity molded chevron cleated profiles preventing cargo slip-back during steep incline transport up to 45 degrees.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    ),
  },
  {
    id: "food-grade",
    title: "Food Grade",
    badge: "HYGIENIC",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=800&q=80",
    description: "FDA-approved hygienic rubber and PU belts engineered for food packaging, pharmaceutical processing, and non-toxic transport.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Duplicate the array of 6 elements to allow seamless infinite loops
const DOUBLE_SERVICES = [...SERVICES, ...SERVICES];

export default function WhatWeServeSection() {
  return (
    <section id="services" className="section-padding bg-[#0A0E1A] relative overflow-hidden">
      {/* Hardware-Accelerated Continuous Linear Easing Override */}
      <style dangerouslySetInnerHTML={{ __html: `
        .serve-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />

      {/* Huge Background Vector Watermark Text (Double Watermark) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-accent/4 tracking-widest leading-none uppercase lg:translate-y-[28%] md:translate-y-[15%] translate-y-[10%] select-none">
          BELTFORGE
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center overflow-visible pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-white/4 tracking-widest leading-none uppercase lg:translate-y-[-25%] md:translate-y-[-15%] translate-y-[-10%] select-none">
          BELTFORGE
        </span>
      </div>

      {/* Header - Stays inside container-custom for perfect page alignment */}
      <div className="container-custom relative z-10 lg:mb-16 md:mb-12 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WHAT WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-3xl mt-6">
              High-performance belts regardless of your <span className="text-accent">operational challenges</span>
            </h2>
          </div>

          {/* Right Header Controls - Auto Play Pause Info Indicator & See All Link */}
          <div className="flex items-center gap-6 shrink-0 lg:mb-2 text-left justify-between sm:justify-start w-full sm:w-auto">
            {/* Soft indicator pill showing hover control */}
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-white/40 border border-white/10 px-4 py-2 rounded-full bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              PAUSE ON HOVER
            </span>

            <a
              href="#products"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-white hover:text-accent transition-colors group"
            >
              See All Products
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
            </a>
          </div>
        </div>
      </div>

      {/* Premium Infinite Autoplay & Draggable Swiper Carousel for ALL Viewports */}
      <div className="overflow-hidden w-full relative z-10 py-4" data-lenis-prevent>
        {/* Left Side Atmospheric Dark Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 sm:bg-linear-to-r from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent pointer-events-none z-20" />
        
        {/* Right Side Atmospheric Dark Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 sm:bg-linear-to-l from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent pointer-events-none z-20" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          freeMode={true}
          grabCursor={true}
          allowTouchMove={true}
          touchEventsTarget="container"
          threshold={1}
          watchSlidesProgress={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4500}
          breakpoints={{
            1024: {
              allowTouchMove: false,
              grabCursor: false,
              simulateTouch: false,
            }
          }}
          className="w-full px-6! md:px-12! serve-swiper"
        >
          {SERVICES.map((service) => {
            return (
              <SwiperSlide key={service.id} style={{ width: "310px" }} className="py-2">
                <div className="group relative overflow-hidden lg:rounded-3xl md:rounded-xl rounded-lg h-[440px] w-[310px] shrink-0 p-8 flex flex-col justify-between border border-white/5 transition-shadow duration-500 shadow-lg shadow-black/30 cursor-pointer lg:cursor-pointer md:cursor-grab md:active:cursor-grabbing">
                  {/* Background Image & Premium Dark Overlay */}
                  <div className="absolute inset-0 z-0 transition-transform duration-600 ease-in-out">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover  transition-transform duration-600 ease-in-out"
                      sizes="310px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A0E1A]/40 via-[#0A0E1A]/60 to-[#0A0E1A]/20 group-hover:via-[#0A0E1A]/75 transition-all duration-700 ease-in-out" />
                  </div>

                  {/* Top Row - STATIC LIGHT BACKGROUND CIRCLE with SVG Icon */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#0A0E1A] flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm group-hover:bg-accent group-hover:text-white transition-all duration-400 ease-in-out">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Bottom Content Area with Slide Up Reveal Panel */}
                  <div className="relative w-full h-full flex flex-col justify-end overflow-hidden pt-6 md:pt-10 lg:pt-12 z-10">
                    <div className="translate-y-0 lg:translate-y-[194px] lg:group-hover:translate-y-0 transition-transform duration-650 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end">
                      
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-left transition-colors duration-300 group-hover:text-accent">
                        {service.title}
                      </h3>
                      
                      {/* Divider Line (Desktop Only) */}
                      <div className="h-px bg-white/20 w-full mb-4 hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-50 ease-out" />
                      
                      {/* Short Description Paragraph (Desktop Only) */}
                      <p className="text-[13.5px] text-white/80 leading-[1.55] text-left mb-6 hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-100 ease-out font-medium font-body">
                        {service.description}
                      </p>
                      
                      {/* Full Read More Option Button (Visible on all viewports) */}
                      <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-150 ease-out w-full">
                        <Button
                          href="#contact"
                          variant="primary"
                          className="w-full justify-center py-2.5 text-xs font-bold tracking-widest uppercase"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
