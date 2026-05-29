"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[#F9FAFB] ">
      <div className="container-custom">
        {/* Top Header - Text & Tagline Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start md:justify-between gap-4  lg:mb-16 md:mb-12 sm:mb-10 mb-8">
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

        {/* Modern Layout - Grid & Flex responsive composition */}
        <div className="w-full">
          {/* 1. Desktop Only Image & Content Grid (>= 1024px) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-stretch">
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
                  src="https://media.istockphoto.com/id/519664519/photo/manufacturing-equipment.jpg?s=2048x2048&w=is&k=20&c=sh3M1VPTOhweK5LEPJMl7tgrieCz0OPUpJzq3DL834U="
                  alt="Heavy industrial machinery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="25vw"
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
              <div className="relative w-full h-full min-h-[300px] aspect-4/3 overflow-hidden rounded-xl bg-background-soft shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&h=900&q=80"
                  alt="Automated high-tech robotic conveyor system"
                  fill
                  className="object-cover hover:scale-103 transition-transform duration-700"
                  sizes="50vw"
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
                  sizes="25vw"
                />
              </div>
              <p className="text-[15px] text-subtitle leading-[1.6] text-justify md:text-left mt-auto font-medium">
                Every BeltForge solution is engineered to handle extreme loads, harsh conditions, and continuous operation, helping businesses increase productivity while reducing operational risks.
              </p>
            </motion.div>
          </div>

          {/* 2. Mobile & Tablet Only Responsive Layout (< 1024px) */}
          <div className="lg:hidden flex flex-col w-full animate-fade-in">
            {/* Image Grid: 2 columns on tablet (md), 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              
              {/* Tablet Column 1: Stacks Image 1 and Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                {/* Image 1 (Vertical) */}
                <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl bg-background-soft shadow-sm">
                  <Image
                    src="https://media.istockphoto.com/id/519664519/photo/manufacturing-equipment.jpg?s=2048x2048&w=is&k=20&c=sh3M1VPTOhweK5LEPJMl7tgrieCz0OPUpJzq3DL834U="
                    alt="Heavy industrial machinery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Image 3 (Horizontal) */}
                <div className="relative w-full aspect-3/2 overflow-hidden rounded-xl bg-background-soft shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Packages moving on parcel conveyor belt"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Tablet Column 2: Large Wide Conveyor Image (Takes full width/height of Column 2) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative w-full h-full min-h-[350px] md:min-h-none overflow-hidden rounded-xl bg-background-soft shadow-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&h=900&q=80"
                  alt="Automated high-tech robotic conveyor system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Paragraph and Button section below images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col items-start gap-6 mt-8 w-full"
            >
              {/* Editorial text content below the images */}
              <p className="text-[15px] text-subtitle leading-[1.6] text-justify sm:text-left font-medium max-w-xl mx-0">
                Every BeltForge solution is engineered to handle extreme loads, harsh conditions, and continuous operation, helping businesses increase productivity while reducing operational risks.
              </p>

              {/* Read More button below the content paragraph */}
              <div className="w-full flex justify-start">
                <Button
                  href="#contact"
                  variant="primary"
                  id="about-learn-more-mobile"
                  className="w-full sm:w-auto justify-center px-10 py-4.5 font-bold tracking-wider"
                >
                  LEARN MORE
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
