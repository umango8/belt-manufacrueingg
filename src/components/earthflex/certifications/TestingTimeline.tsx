"use client";

import { useState, useEffect, useRef } from "react";
import { 
  motion, 
  Variants, 
  useScroll, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionValueEvent, 
} from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Raw Material Inspection",
    subtitle: "incoming quality gates",
    description: "Incoming polymers, fabric casings, and reinforcing chemicals are checked for viscosity and tensile limit thresholds before batch mixing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Precision Calendering",
    subtitle: "thickness control",
    description: "High-precision rollers press and fuse the rubber compounds onto the fabric plies, ensuring absolute thickness uniformity across the belt width.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Vulcanization Control",
    subtitle: "pressure & temp curing",
    description: "Curing duration, steam pressure, and heating temperatures are monitored to ensure perfect inter-ply adhesion and cover integration.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Tension & Stretch Validation",
    subtitle: "load limit checks",
    description: "Our tensile testing machines stretch rubber and carcass specimens to verify elongation thresholds and ultimate break limits.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "DIN Abrasion Analysis",
    subtitle: "volume loss audits",
    description: "Cylindrical drum abrasion tests ensure rubber cover volumetric loss stays strictly below designated ISO/DIN thresholds.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Visual & Profile Scan",
    subtitle: "dimensional sign-off",
    description: "Visual inspector scans, edge profile checking, and width measurements are performed on vulcanized rolls before warehousing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Dispatch Sign-Off",
    subtitle: "traceability codes",
    description: "Unique batch stencil codes are stamped on the belt cover, and detailed Material Test Reports (MTR) are generated and matched.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TestingTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen resize for responsive slide translation sizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track absolute scroll position within the Tall Track parent
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Fill percent smoothly from 0% -> 100%
    setDisplayPercent(Math.round(latest * 100));

    // Calculate active stage from 1 to 7 based on scroll position
    const clampedProgress = Math.min(0.999, Math.max(0, latest));
    const stage = Math.floor(clampedProgress * 7) + 1;
    setCurrentStage(stage);
  });

  // SVG Circular progress details (radius r=90, circumference = 2 * PI * 90 = 565.48)
  const circumference = 565.48;
  const strokeDashoffset = useTransform(scrollYProgress, (progress) => {
    return circumference - progress * circumference;
  });

  // Calculate slide translation offset:
  // Desktop card size is 144px height + 24px gap = 168px
  // Mobile card size is 112px height + 16px gap = 128px
  const stepSize = isMobile ? 128 : 168;
  const translateY = -(currentStage - 1) * stepSize;

  return (
    <div ref={trackRef} className="relative w-full h-[350vh] bg-[#050811]">
      {/* Sticky Frame: Pins container in place during the scroll storytelling workflow */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#050811] select-none">
        
        {/* Blueprint Grid Texture Backing */}
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(249, 115, 22, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(249, 115, 22, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Diagonal Light Accent Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 h-[85vh] lg:h-[75vh]">
          
          {/* Left Column: 7 Stages storytelling list */}
          <div className="w-full lg:w-[58%] order-2 lg:order-1 flex flex-col h-[50vh] lg:h-[65vh] justify-center relative">
            
            {/* Section Header */}
            <div className="mb-6 lg:mb-10 text-left shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full mb-3 lg:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                VULCANIZATION & TESTING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight tracking-tight">
                Quality Inspection Workflow
              </h2>
            </div>

            {/* Sliding stages list container with vertical gradient fade masking */}
            <div className="relative h-[320px] lg:h-[360px] overflow-hidden w-full px-2">
              {/* Fade gradient masks */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#050811] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#050811] to-transparent z-20 pointer-events-none" />

              {/* Translating container */}
              <motion.div
                animate={{ y: translateY }}
                transition={{ type: "spring", stiffness: 85, damping: 18 }}
                className="flex flex-col gap-4 lg:gap-6 pt-[88px] lg:pt-[108px] pb-[160px]" // Puts Stage 1 perfectly in the center at start
              >
                {STEPS.map((step, index) => {
                  const stepNum = index + 1;
                  const isActive = stepNum === currentStage;
                  const isPast = stepNum < currentStage;

                  // Define dynamic styling states
                  let cardStyle = "bg-[#0B0F19]/20 border-white/[0.02] opacity-0 scale-90 pointer-events-none";
                  if (isActive) {
                    cardStyle = "bg-[#0B0F19]/90 border-accent/40 shadow-[0_4px_30px_rgba(70,115,197,0.15)] opacity-100 scale-100";
                  } else if (isPast) {
                    cardStyle = "bg-[#0B0F19]/30 border-white/[0.04] opacity-35 scale-95";
                  }

                  return (
                    <motion.div
                      key={step.num}
                      layout="position"
                      className={`flex items-start gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl border transition-all duration-500 min-h-[112px] max-h-[112px] lg:min-h-[144px] lg:max-h-[144px] ${cardStyle}`}
                    >
                      {/* Stage Node Circle */}
                      <div 
                        className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl shrink-0 transition-colors duration-500 shadow-md ${
                          isActive 
                            ? "bg-accent text-white" 
                            : "bg-[#0F1524] border border-white/10 text-white/50"
                        }`}
                      >
                        {step.icon}
                      </div>

                      {/* Text details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between mb-0.5 lg:mb-1">
                          <span className="text-[9px] lg:text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                            {step.subtitle}
                          </span>
                          <span className={`text-[10px] lg:text-xs font-mono font-bold ${
                            isActive ? "text-accent" : "text-white/40"
                          }`}>
                            STAGE 0{step.num}
                          </span>
                        </div>
                        <h3 className={`text-sm lg:text-base font-bold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/60"
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-[11px] lg:text-xs leading-relaxed font-medium line-clamp-2 mt-0.5 lg:mt-1 transition-colors duration-300 ${
                          isActive ? "text-white/70" : "text-white/40"
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Giant Circular Scroll Progress Dial */}
          <div className="w-full lg:w-[38%] order-1 lg:order-2 flex flex-col items-center justify-center h-[28vh] lg:h-full relative shrink-0">
            
            {/* Tech Dial Gauge Wrapper */}
            <div className="relative w-[180px] h-[180px] lg:w-[260px] lg:h-[260px] flex items-center justify-center">
              
              {/* Spinning technical outline ring */}
              <div 
                className="absolute inset-0 rounded-full border border-white/[0.02] border-dashed animate-[spin_60s_linear_infinite]"
                style={{
                  backgroundImage: "radial-gradient(circle, transparent 96%, rgba(249, 115, 22, 0.03) 100%)",
                }}
              />

              {/* Progress Circle SVG */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Background track ring */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  className="stroke-white/[0.04]"
                  strokeWidth="4"
                  fill="transparent"
                />
                {/* Active progress stroke */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  stroke="#C87533"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={circumference}
                  style={{ strokeDashoffset }}
                  strokeLinecap="round"
                  className="shadow-lg"
                />
              </svg>

              {/* Absolute Center HUD Readings */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <span className="text-[9px] lg:text-[10px] font-mono font-bold text-accent tracking-[0.2em] uppercase leading-none mb-1 lg:mb-2">
                  QC PROGRESS
                </span>
                <span className="text-4xl lg:text-6xl font-mono font-extrabold text-white tracking-tight leading-none mb-1 lg:mb-2">
                  {displayPercent}%
                </span>
                <div className="flex items-center gap-1.5 text-[9px] lg:text-[10px] font-mono text-white/50 uppercase leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  STAGE 0{currentStage} / 07
                </div>
              </div>
            </div>

            {/* Micro active step tagline label below dial (Desktop only) */}
            <div className="hidden lg:block mt-6 text-center max-w-xs">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-1">
                Currently Processing:
              </span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                {STEPS[currentStage - 1].title}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
