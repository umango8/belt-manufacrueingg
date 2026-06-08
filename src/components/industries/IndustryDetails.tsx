"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ───── Animated Counter Component ───── */
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ───── Industry Detail Data ───── */
const DETAIL_SECTIONS = [
  {
    id: "textile-detail",
    badge: "TEXTILE INDUSTRY",
    title: "Precision Belts for",
    highlight: "Textile Manufacturing",
    challenge:
      "Textile mills demand belts with exceptional grip, minimal elongation, and consistent tension across high-speed spinning and weaving operations — any slippage leads to production defects.",
    solution:
      "Our textile-grade flat belts and timing belts are engineered with polyurethane compounds that maintain dimensional stability under continuous load, ensuring zero-slip performance on looms and spinning frames.",
    benefits: [
      "Anti-static surface",
      "Low elongation under load",
      "Precision tension control",
      "Oil and chemical resistant",
    ],
    stats: [
      { value: 99, suffix: "%", label: "Slip-Free Performance" },
      { value: 40, suffix: "%", label: "Longer Belt Life" },
      { value: 24, suffix: "/7", label: "Operation Ready" },
    ],
    image: "/industry-mining.png",
    reversed: false,
  },
  {
    id: "food-detail",
    badge: "FOOD PROCESSING",
    title: "FDA-Compliant Belts for",
    highlight: "Food Safety Standards",
    challenge:
      "Food processing environments require conveyor belts that meet strict hygiene standards, resist bacterial growth, and withstand continuous wash-down procedures without degradation.",
    solution:
      "EarthIndia food-grade belts use FDA-approved polyurethane and PVC compounds with sealed edges, anti-microbial surface treatments, and easy-clean profiles — meeting HACCP and GMP requirements.",
    benefits: [
      "FDA-approved materials",
      "Anti-microbial surface",
      "Easy wash-down design",
      "Temperature resistant",
    ],
    stats: [
      { value: 100, suffix: "%", label: "FDA Compliant" },
      { value: 50, suffix: "%", label: "Reduced Downtime" },
      { value: 200, suffix: "°C", label: "Max Temperature" },
    ],
    image: "/industry-cement.png",
    reversed: true,
  },
  {
    id: "automotive-detail",
    badge: "AUTOMOTIVE INDUSTRY",
    title: "Engineered Belts for",
    highlight: "Automotive Excellence",
    challenge:
      "Automotive assembly lines require extreme precision, high-speed operation, and zero-tolerance for belt failures that could halt multi-million dollar production lines.",
    solution:
      "Our automotive-grade V-belts and timing belts deliver exceptional power transmission with synchronized precision, engineered for continuous duty cycles in engine systems and automated assembly conveyors.",
    benefits: [
      "High-speed rated",
      "Synchronized precision",
      "Extended wear life",
      "Vibration dampening",
    ],
    stats: [
      { value: 35, suffix: "%", label: "Efficiency Increase" },
      { value: 60, suffix: "%", label: "Reduced Downtime" },
      { value: 15, suffix: "K+", label: "Hours Belt Life" },
    ],
    image: "/industry-steel.png",
    reversed: false,
  },
];

export default function IndustryDetails() {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.008] z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #0c1a2e 80px, #0c1a2e 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #0c1a2e 80px, #0c1a2e 81px)",
        }}
      />

      {DETAIL_SECTIONS.map((section, sectionIndex) => (
        <div
          key={section.id}
          id={section.id}
          className={`section-padding relative z-10 ${sectionIndex % 2 !== 0 ? "bg-[#F9FAFB]" : "bg-white"}`}
        >
          <div className="container-custom">
            <div
              className={`flex flex-col ${
                section.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: section.reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-6 right-6 sm:left-8 sm:right-auto">
                  <div className="bg-white border border-border/40 rounded-xl px-5 py-3 shadow-lg inline-flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-title uppercase tracking-wider">
                      Active in 500+ Facilities
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: section.reversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full lg:w-1/2"
              >
                <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {section.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-title leading-tight tracking-tight mb-6">
                  {section.title} <span className="text-accent">{section.highlight}</span>
                </h3>

                {/* Challenge */}
                <div className="mb-5">
                  <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-1.5 block">
                    THE CHALLENGE
                  </span>
                  <p className="text-sm text-subtitle leading-relaxed font-medium">
                    {section.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-accent/70 uppercase tracking-widest mb-1.5 block">
                    OUR SOLUTION
                  </span>
                  <p className="text-sm text-subtitle leading-relaxed font-medium">
                    {section.solution}
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {section.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-title font-medium"
                    >
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Animated Stats */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-primary/3 border border-border/40 rounded-xl px-5 py-4 text-center min-w-[100px] hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.06)] transition-all duration-500"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 tracking-tight">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] font-bold text-subtitle/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
