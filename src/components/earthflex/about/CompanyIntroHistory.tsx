"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { COMPANY } from "@/lib/constants";

const TIMELINE = [
  {
    year: "2008",
    title: "Founded in Ahmedabad",
    description:
      "Earth Flex Industries was established with a vision to manufacture world-class industrial conveyor belts, starting with a single production line in Gujarat.",
  },
  {
    year: "2012",
    title: "Manufacturing Expansion",
    description:
      "Expanded production capacity with new automated vulcanizing presses and multi-ply belt manufacturing lines, tripling our annual output.",
  },
  {
    year: "2016",
    title: "Technology Adoption",
    description:
      "Invested in advanced rubber compounding technology, CAD engineering, and quality testing laboratories to achieve international standards.",
  },
  {
    year: "2020",
    title: "Major Production Growth",
    description:
      "Achieved ISO 9001:2015 certification and expanded to serve 50+ industries across India and international markets with custom belt solutions.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "Recognized as a leading conveyor belt manufacturer with 500+ successful projects, continuous R&D investment, and pan-India distribution network.",
  },
];

export default function CompanyIntroHistory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateXVal, setTranslateXVal] = useState("-40%");

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    const calculateTranslation = () => {
      const isMobile = window.innerWidth < 640;
      // Cards dimensions
      const cardWidth = isMobile ? 280 : 320;
      const gap = isMobile ? 24 : 32;
      const totalCards = TIMELINE.length;
      
      // Total scrollable track width
      const trackWidth = totalCards * cardWidth + (totalCards - 1) * gap;
      
      // Screen container width (matching container-custom responsive layout)
      let containerWidth = window.innerWidth;
      if (window.innerWidth >= 1280) {
        containerWidth = 1280 - 64; // Max container size minus padding
      } else {
        containerWidth = window.innerWidth - 32; // Normal margin/padding
      }

      const overflow = trackWidth - containerWidth;
      if (overflow > 0) {
        // Express overflow as percentage of trackWidth to translate precisely
        const percentage = (overflow / trackWidth) * 100;
        setTranslateXVal(`-${percentage}%`);
      } else {
        setTranslateXVal("0%");
      }
    };

    calculateTranslation();
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, []);

  // Animate the horizontal position of the timeline cards
  // We translate to the left based on scroll progress
  const xTranslate = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["0%", translateXVal]
  );

  // Animate progress line scale
  const progressScaleX = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    [0, 1]
  );

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#F9FAFB]">
      <div className="sticky top-0 md:h-screen  overflow-hidden flex flex-col justify-between py-12 sm:py-16">
        {/* Subtle industrial texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 60px, #0c1a2e 60px, #0c1a2e 61px), repeating-linear-gradient(0deg, transparent, transparent 60px, #0c1a2e 60px, #0c1a2e 61px)",
          }}
        />

        {/* Top Content: Split-screen Header & Info */}
        <div className="container-custom relative z-10 w-full mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 gap-6 items-end">
            <div className="lg:col-span-7">
              {/* Section Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  WHO WE ARE
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-title leading-[1.15] tracking-tight"
              >
                Building India&apos;s Most{" "}
                <span className="text-accent">Trusted</span> Conveyor Belt Legacy
              </motion.h2>
            </div>

            <div className="lg:col-span-5">
              {/* Introduction paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-subtitle leading-relaxed font-medium"
              >
                Established in {COMPANY.established}, {COMPANY.name} has grown
                from a single-line manufacturing unit into one of India&apos;s most
                respected conveyor belt manufacturers, engineering premium
                conveyor solutions for global industries.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Middle/Bottom Content: Scroll-controlled Horizontal Timeline */}
        <div className="relative z-10 w-full overflow-hidden flex-1 flex flex-col justify-center">
          <div className="relative lg:pt-16 md:pt-12 sm:pt-10 pt-8 pb-4 w-full pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1216px)/2)]">
            {/* Left overlay mask block to hide cards as they slide left */}
            <div className="absolute left-0 top-0 bottom-0 z-20 w-4 sm:w-6 lg:w-8 xl:w-[calc((100vw-1216px)/2)] bg-[#F9FAFB] pointer-events-none" />
              {/* Horizontal Track Line */}
              {/* <div className="absolute top-[44px] left-0 right-0 h-[2px] bg-border" /> */}
              
              {/* Animated progress line that fills as you scroll */}
              {/* <motion.div
                className="absolute top-[44px] left-0 h-[2px] bg-accent origin-left"
                style={{
                  scaleX: progressScaleX,
                  width: "100%",
                }}
              /> */}

                {/* Timeline Cards Track */}
              <motion.div
                className="flex items-stretch gap-6 sm:gap-8 min-w-max pb-8"
                style={{ x: xTranslate }}
              >
                {TIMELINE.map((item, index) => (
                  <div
                    key={item.year}
                    className="relative w-[280px] sm:w-[320px] shrink-0 group flex"
                  >
                    {/* Timeline Dot */}
                    {/* <div className="absolute -top-[30px] left-6 w-5 h-5 rounded-full border-2 border-accent bg-white flex items-center justify-center z-10 shadow-[0_0_12px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div> */}

                    {/* Card */}
                    <div className="bg-white border border-border/60 rounded-2xl p-6 sm:p-8 w-full group-hover:border-accent/30 group-hover:shadow-[0_12px_40px_rgba(249,115,22,0.06)] group-hover:-translate-y-1 transition-all duration-500 flex flex-col">
                      <span className="inline-block text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded mb-4 w-max font-mono">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-title mb-3 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-subtitle leading-relaxed font-medium mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
}
