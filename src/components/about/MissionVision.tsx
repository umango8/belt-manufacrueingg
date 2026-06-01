"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    id: "mission",
    label: "OUR MISSION",
    title: "Powering Industries with Reliable Conveyor Solutions",
    description:
      "To manufacture world-class conveyor belts that maximize operational efficiency, minimize downtime, and deliver exceptional value to industries worldwide. We are committed to continuous innovation, strict quality control, and customer-centric engineering that sets the benchmark in industrial belt manufacturing.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    accentPosition: "top-left",
    bgClass: "bg-accent/[0.03] border-accent/15 hover:bg-accent/[0.06] hover:border-accent/30",
    labelClass: "text-accent bg-accent/10",
    iconClass: "bg-accent/5 border-accent/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent",
    bottomLineClass: "group-hover:via-accent/40",
  },
  {
    id: "vision",
    label: "OUR VISION",
    title: "Becoming the Global Standard in Belt Manufacturing",
    description:
      "To be recognized as the most trusted and innovative conveyor belt manufacturer globally, leading the industry through advanced material science, sustainable manufacturing practices, and engineering solutions that empower industries to operate at peak performance.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    accentPosition: "bottom-right",
    bgClass: "bg-primary/[0.03] border-primary/10 hover:bg-primary/[0.06] hover:border-primary/20",
    labelClass: "text-primary bg-primary/10",
    iconClass: "bg-primary/5 border-primary/15 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary",
    bottomLineClass: "group-hover:via-primary/40",
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Subtle background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-start  md:mb-16 lg:mb-20 sm:mb-12 mb-10 ">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              PURPOSE & DIRECTION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight mb-6 max-w-3xl mx-auto"
          >
            Driven by <span className="text-accent">Purpose</span>, Built for{" "}
            <span className="text-accent">Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-subtitle leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Our mission and vision guide every belt we engineer, every
            partnership we build, and every milestone we achieve.
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative border rounded-2xl p-7 sm:p-8 lg:p-10 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${card.bgClass}`}
              id={`mv-${card.id}`}
            >
              {/* Corner bracket accents - L-shaped */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black/10 group-hover:border-black/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black/10 group-hover:border-black/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black/10 group-hover:border-black/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black/10 group-hover:border-black/30 transition-all duration-500 pointer-events-none" />

              {/* Subtle gradient accent overlay */}
              <div
                className={`absolute ${card.accentPosition === "top-left" ? "top-0 left-0" : "bottom-0 right-0"} w-40 h-40 bg-accent/3 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Card Label */}
              <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded mb-5 font-mono relative z-10 ${card.labelClass}`}>
                {card.label}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 border flex items-center justify-center mb-6 rounded-full transition-all duration-500 relative z-10 ${card.iconClass}`}>
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-title mb-4 group-hover:text-accent transition-colors duration-300 leading-tight relative z-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-subtitle leading-relaxed font-medium relative z-10">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-700 ${card.bottomLineClass}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
