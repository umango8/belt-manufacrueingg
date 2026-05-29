"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center bg-black overflow-hidden py-20 lg:py-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
           src="/hero.mp4"
          className="w-full h-full object-cover opacity-50"
        >
      
        
        </video>
        {/* <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/70 to-dark/50" /> */}
      </div>

      {/* Content */}
      <div className="relative container-custom w-full z-10 pt-20 lg:pt-32 pb-24 lg:pb-36">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-accent uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted Conveyor Belt Experts
            </span>
          </motion.div>

          <h1 className="text-[1.75rem] sm:text-[3.75rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Precision-Engineered
            <span className="text-accent flex">Conveyor Belts</span>Built to Last
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm lg:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed  text-left"
          >
            High-performance industrial conveyor belts designed for mining, cement, steel, 
            and power generation plants. Engineered with certified compounds to maximize uptime.
          </motion.p>
         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4"
          >
            <Button
          
              href="#contact"
              variant="white"
              className="shadow-lg shadow-primary/10"
            >
              Get a Free Inspection
            </Button>
            <Button
              href="#products"
              variant="outline"
              className="text-white border-white/20 hover:border-white/40"
            >
              View Our Products
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator - Fades out dynamically on scroll */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

