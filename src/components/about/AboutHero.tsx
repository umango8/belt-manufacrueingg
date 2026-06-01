"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-[#050811] overflow-hidden">
      {/* Background Industrial Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/about-factory-hero.png"
          alt="Industrial Manufacturing Facility"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050811] via-[#050811]/60 to-[#050811]/90" />
      </div>

      {/* Animated industrial background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative container-custom w-full z-10 pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              ABOUT BELTFORGE INDUSTRIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Engineering <span className="text-accent">Excellence</span> Since 2008
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            From a single production line to becoming one of India&apos;s most trusted conveyor belt manufacturers — 
            discover the story of precision, innovation, and industrial excellence that defines BeltForge.
          </motion.p>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
