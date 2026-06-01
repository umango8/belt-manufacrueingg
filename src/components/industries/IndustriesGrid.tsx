"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const INDUSTRIES = [
  {
    id: "textile",
    title: "Textile Industry",
    description:
      "High-performance belts for spinning, weaving, and garment production lines requiring precise tension control and smooth material handling.",
    application: "Flat belts, timing belts, and spindle tapes for looms and spinning frames.",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6v12M12 6v12M16 6v12" />
      </svg>
    ),
  },
  {
    id: "food-processing",
    title: "Food Processing Industry",
    description:
      "FDA-compliant, food-grade conveyor belts for hygienic processing, packaging, and transportation of consumable goods.",
    application: "PU/PVC food-grade belts, modular belts, and anti-bacterial surface belts.",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "packaging",
    title: "Packaging Industry",
    description:
      "Durable, low-friction belts for high-speed packaging lines, carton sealing, and automated sorting systems with superior grip.",
    application: "Flat belts, timing belts, and friction-top conveyor belts for sealing and sorting.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "automotive",
    title: "Automotive Industry",
    description:
      "Precision-engineered belts for automotive assembly lines, component manufacturing, and power transmission in vehicle systems.",
    application: "V-belts, timing belts, and multi-ribbed belts for engines and assembly conveyors.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Industry",
    description:
      "Anti-static, anti-bacterial conveyor belts meeting stringent pharmaceutical GMP standards for clean-room environments.",
    application: "White PU belts, anti-static belts, and sealed-edge belts for tablet and capsule lines.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbab4?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "logistics",
    title: "Logistics & Warehousing",
    description:
      "High-capacity sorting and distribution belts for warehousing, e-commerce fulfillment, and automated logistics centers.",
    application: "Heavy-duty conveyor belts, roller belt systems, and incline conveyor belts.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "printing",
    title: "Printing Industry",
    description:
      "Precision flat and timing belts for offset, digital, and flexographic printing machines with exact registration control.",
    application: "Flat drive belts, suction belts, and timing belts for presses and bindery equipment.",
    image: "https://images.unsplash.com/photo-1616400619175-5ebd3009007f?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    id: "ceramic",
    title: "Ceramic Industry",
    description:
      "Heat-resistant and abrasion-proof belts for kiln loading, glazing lines, and ceramic tile production facilities.",
    application: "Heat-resistant belts, mesh belts, and abrasion-resistant conveyor belts.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "paper",
    title: "Paper Industry",
    description:
      "Chemical-resistant and moisture-proof belts for pulp handling, paper converting, and corrugation production lines.",
    application: "Corrugator belts, felt guide belts, and chemical-resistant conveyor belts.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "agriculture",
    title: "Agriculture Industry",
    description:
      "Rugged, weather-resistant belts for grain handling, seed processing, and agricultural machinery power transmission.",
    application: "Chevron belts, rough-top belts, and rubber lagging for harvest conveyors.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function IndustryCard({ industry, index }: { industry: typeof INDUSTRIES[0]; index: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={`/industries/${industry.id}`} className="block h-full w-full">
      <motion.div
        variants={fadeInUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-full aspect-4/3 sm:aspect-3/4 lg:aspect-4/5 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 select-none border border-border/10"
        id={`industry-card-${industry.id}`}
      >
      {/* Background Image */}
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover  transition-transform duration-[1.2s] ease-out z-0"
        loading="lazy"
      />

      {/* Dark premium overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#050811] via-[#050811]/50 to-[#050811]/10 group-hover:via-[#050811]/60 transition-all duration-500 z-10" />

      {/* Content wrapper */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 z-20">
        {/* Technical index */}
        <span className="absolute right-6 top-6 text-xs font-mono font-bold text-white/20 group-hover:text-accent/60 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon in top-left */}
        <div className="absolute left-6 top-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-sm">
          <div className="group-hover:scale-110 transition-transform duration-500">
            {industry.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
          {industry.title}
        </h3>

        {/* Description - Desktop Only */}
        <p className="text-sm text-white/70 leading-relaxed font-medium mb-4 group-hover:text-white transition-colors duration-300 hidden lg:block">
          {industry.description}
        </p>

        {/* Application tag - Desktop Only */}
        <div className="mb-2 hidden lg:block">
          <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">Belt Application:</span>
          <p className="text-xs text-white/50 leading-relaxed max-w-xs group-hover:text-white/70 transition-colors duration-300 font-medium">
            {industry.application}
          </p>
        </div>

        {/* "Read More" Action - Mobile & Tablet Only (< 1024px) */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between lg:hidden w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Read More
          </span>
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom magnetic "More Details" button that follows cursor inside card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute z-30 w-24 h-24 rounded-full bg-accent text-white flex flex-col items-center justify-center text-center font-bold text-[10px] uppercase tracking-wider shadow-[0_0_25px_rgba(249,115,22,0.5)] border border-white/20"
            style={{
              left: 0,
              top: 0,
              x: coords.x - 48,
              y: coords.y - 48,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          >
            <span>View</span>
            <span>Details</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </Link>
  );
}

export default function IndustriesGrid() {
  return (
    <section
      id="industries-grid"
      className="section-padding bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="about-conveyor-line about-conveyor-line-1" />
        <div className="about-conveyor-line about-conveyor-line-2" />
        <div className="about-conveyor-line about-conveyor-line-3" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #0f172a 80px, #0f172a 81px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left mb-14 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              INDUSTRIES WE SERVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6"
          >
            Trusted Across <span className="text-accent">10+ Industries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-subtitle leading-relaxed font-medium text-justify sm:text-left"
          >
            From textile mills to pharmaceutical clean rooms — our precision-engineered industrial
            belts power critical operations across every major industry vertical.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-7"
        >
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
