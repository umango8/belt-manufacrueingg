"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // We guarantee a minimum duration of 1800ms to show the premium animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 bg-[#050811] z-[99999] flex flex-col items-center justify-center select-none"
        >
          {/* Grid Overlay for Industrial Tech look */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Animated Glow Accent */}
          <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Core Animation Container */}
          <div className="relative flex flex-col items-center gap-3">
            
            {/* Belt Schematic SVG */}
            <div className="w-60 h-24 relative">
              <svg viewBox="0 18 160 64" className="w-full h-full text-white">
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes spinPulley {
                    to { transform: rotate(360deg); }
                  }
                  @keyframes moveBelt {
                    to { stroke-dashoffset: -28; }
                  }
                  .spin-left {
                    transform-origin: 40px 50px;
                    animation: spinPulley 4s linear infinite;
                  }
                  .spin-right {
                    transform-origin: 120px 50px;
                    animation: spinPulley 4s linear infinite;
                  }
                  .moving-belt-track {
                    stroke-dasharray: 8 6;
                    animation: moveBelt 1.2s linear infinite;
                  }
                `}} />

                {/* Left Pulley (Spoke System) */}
                <g className="spin-left">
                  <circle cx="40" cy="50" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <circle cx="40" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="40" y1="30" x2="40" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <line x1="20" y1="50" x2="60" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="40" cy="50" r="4.5" fill="#c87533" />
                </g>

                {/* Right Pulley (Spoke System) */}
                <g className="spin-right">
                  <circle cx="120" cy="50" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <circle cx="120" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="120" y1="30" x2="120" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <line x1="100" y1="50" x2="140" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="120" cy="50" r="4.5" fill="#c87533" />
                </g>

                {/* Outer Connecting Belt (Background Track) */}
                <path
                  d="M 40,30 L 120,30 A 20,20 0 0,1 120,70 L 40,70 A 20,20 0 0,1 40,30 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Outer Connecting Belt (Animated moving dash segments) */}
                <path
                  d="M 40,30 L 120,30 A 20,20 0 0,1 120,70 L 40,70 A 20,20 0 0,1 40,30 Z"
                  fill="none"
                  stroke="#c87533"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="moving-belt-track"
                />

                {/* --- PRODUCTS & INDUSTRIES MOVING ON THE BELT --- */}
                {/* 1. Conveyor Belt (Product) */}
                <g>
                  <circle cx="0" cy="0" r="7" fill="#0c1a2e" stroke="#c87533" strokeWidth="1" />
                  <g transform="scale(0.42) translate(-11.5, -11.5)">
                    <circle cx="6" cy="18" r="2" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="18" cy="18" r="2" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <line x1="6" y1="16" x2="6" y2="15" stroke="#ffffff" strokeWidth="2" />
                    <line x1="18" y1="16" x2="18" y2="15" stroke="#ffffff" strokeWidth="2" />
                    <path d="M 6,14 L 18,14" stroke="#ffffff" strokeWidth="2" />
                  </g>
                  <animateMotion
                    path="M 40,25 L 120,25 A 25,25 0 0,1 120,75 L 40,75 A 25,25 0 0,1 40,25 Z"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto"
                    begin="0s"
                  />
                </g>

                {/* 2. Timing Belt (Product) */}
                <g>
                  <circle cx="0" cy="0" r="7" fill="#0c1a2e" stroke="#c87533" strokeWidth="1" />
                  <g transform="scale(0.42) translate(-11.5, -11.5)">
                    <circle cx="12" cy="12" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <animateMotion
                    path="M 40,25 L 120,25 A 25,25 0 0,1 120,75 L 40,75 A 25,25 0 0,1 40,25 Z"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto"
                    begin="-1.5s"
                  />
                </g>

                {/* 3. Packaging Box (Industry) */}
                <g>
                  <circle cx="0" cy="0" r="7" fill="#0c1a2e" stroke="#c87533" strokeWidth="1" />
                  <g transform="scale(0.42) translate(-11.5, -11.5)">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                  </g>
                  <animateMotion
                    path="M 40,25 L 120,25 A 25,25 0 0,1 120,75 L 40,75 A 25,25 0 0,1 40,25 Z"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto"
                    begin="-3.0s"
                  />
                </g>

                {/* 4. Logistics Arrows (Industry) */}
                <g>
                  <circle cx="0" cy="0" r="7" fill="#0c1a2e" stroke="#c87533" strokeWidth="1" />
                  <g transform="scale(0.42) translate(-11.5, -11.5)">
                    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                  </g>
                  <animateMotion
                    path="M 40,25 L 120,25 A 25,25 0 0,1 120,75 L 40,75 A 25,25 0 0,1 40,25 Z"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto"
                    begin="-4.5s"
                  />
                </g>
              </svg>
            </div>

            {/* Typography / Branding */}
            <div className="text-center space-y-2.5 mt-2">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white text-2xl md:text-3xl font-black uppercase tracking-[0.25em] pl-[0.25em] font-sans"
              >
                <span className="text-accent">EARTH</span>INDIA
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-[10px] font-mono font-bold tracking-[0.35em] text-accent uppercase pl-[0.35em]"
              >
                Industries
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ 
                  delay: 0.5, 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-[9px] font-mono font-medium tracking-[0.2em] text-white/50 uppercase pl-[0.2em] max-w-xs mx-auto leading-normal"
              >
                Premium Industrial Belt Solutions
              </motion.div>
            </div>

          </div>

          {/* Bottom Branding Tag */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[9px] font-mono tracking-widest text-white/20 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse" />
            ISO 9001:2015 CERTIFIED SYSTEM
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
