"use client";

import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CertificationsHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-[#050811] overflow-hidden select-none">
      {/* Background Industrial Image (matching the industries page hero style) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/hero-industrial.png"
          alt="Precision Industrial Engineering Facility"
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

      {/* Content Container */}
      <div className="relative container-custom w-full z-10 pt-32 lg:pt-40 pb-24 lg:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              GLOBAL STANDARD CERTIFICATION
            </span>
          </motion.div>

          {/* Page Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Certifications & Quality <span className="text-accent">Standards</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering high-performance industrial belt solutions backed by strict quality standards, precision manufacturing, and trusted certifications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              href="#standards-grid"
              variant="accent"
              className="w-full sm:w-auto shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300 px-6 py-3"
              id="hero-view-certs"
            >
              View Certifications
            </Button>
            <Button
              href="/quote"
              variant="outline"
              className="w-full sm:w-auto text-white border-white/10 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm px-6 py-3"
              id="hero-contact-experts"
            >
              Contact Our Experts
            </Button>
          </motion.div>

          {/* Scroll Down Mouse Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              onClick={() => {
                const nextSection = document.getElementById("standards-grid");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 cursor-pointer hover:border-accent/40 transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
