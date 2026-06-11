"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/ui/Button";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const HERO_STATS = [
  { value: 140, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Quality Focused" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#090d16] overflow-hidden pt-32 pb-20">
      {/* Background Grid and Radial Gradient */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#F97316 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090d16]/80 to-[#090d16]" />
      </div>

      {/* Background Accent glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative container-custom w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Headline and Left Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Earth India Brand Family
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Save Your Money With <br className="hidden sm:inline" />
              <span className="text-accent">Zero-Downtime</span> Conveyor Belts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-xl mb-4 leading-relaxed font-medium"
            >
              Engineered with certified heavy-duty compounds to maximize conveyor lifespan, eliminate unexpected structural failures, and dramatically reduce maintenance overheads.
            </motion.p>

            {/* Company Intro Requirement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="border-l-2 border-accent pl-4 mb-8 text-xs sm:text-sm text-white/60 max-w-lg italic"
            >
              EarthFlex is a specialized child brand of Earth India, inheriting decades of industrial engineering mastery to supply robust belting solutions for mining, cement, steel, and power generation sectors.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                href="#contact"
                variant="accent"
                className="px-8 py-4 text-xs font-bold tracking-widest uppercase shadow-lg shadow-accent/25 hover:shadow-accent/40"
              >
                Get a Free Inspection
              </Button>
              <Button
                href="#products"
                variant="outline"
                className="px-8 py-4 text-xs font-bold tracking-widest uppercase text-white border-white/20 hover:border-white/40"
              >
                View Our Products
              </Button>
            </motion.div>
          </div>

          {/* 4 Stats Cards Grid - Right side on desktop */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4">
              {HERO_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.4)" }}
                  className="bg-[#0f1524]/90 border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-[150px] sm:h-[170px] transition-all duration-300 shadow-xl backdrop-blur-md text-left group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider mt-auto leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

