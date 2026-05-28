"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[#F9FAFB]">
      <div className="container-custom">
        {/* Top Header - Text & Tagline Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              ABOUT BELTFORGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-title leading-[1.3] tracking-tight max-w-4xl text-left lg:ml-16"
          >
            BeltForge manufactures and supplies <span className="text-accent font-bold">heavy-duty conveyor solutions</span> for industries like mining, cement, steel, and power.
          </motion.h2>
        </div>

        {/* Modern 3-Column Grid Layout matching the Image Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-4 items-stretch">
          {/* Column 1: Left - Vertical Image & Primary Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-between"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl bg-background-soft shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                // src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&h=800&q=80"
                src="https://media.istockphoto.com/id/519664519/photo/manufacturing-equipment.jpg?s=2048x2048&w=is&k=20&c=sh3M1VPTOhweK5LEPJMl7tgrieCz0OPUpJzq3DL834U="
                alt="Heavy industrial machinery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
            </div>
            <div className="mt-6 w-full">
              <Button
                href="#contact"
                variant="primary"
                id="about-learn-more"
                className="w-full justify-center text-center font-bold tracking-wider"
              >
                LEARN MORE
              </Button>
            </div>
          </motion.div>

          {/* Column 2: Center - Wide Robotic Assembly Conveyor Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[300px] lg:min-h-none aspect-auto lg:aspect-4/3 overflow-hidden rounded-xl bg-background-soft shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&h=900&q=80"
                alt="Automated high-tech robotic conveyor system"
                fill
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Column 3: Right - Small Horizontal Image & Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 flex flex-col justify-between gap-8"
          >
            <div className="relative w-full aspect-3/2 overflow-hidden rounded-xl bg-background-soft shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Packages moving on parcel conveyor belt"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            
            <p className="text-[15px] text-subtitle leading-[1.6] text-left mt-auto font-medium">
              Every BeltForge solution is engineered to handle extreme loads, harsh conditions, and continuous operation, helping businesses increase productivity while reducing operational risks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
