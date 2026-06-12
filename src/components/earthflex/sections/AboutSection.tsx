"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/shared/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#F8FAFC] py-24 border-b border-[#E5E7EB]">
      {/* Background structural grid layout */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#E5E7EB 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Media Collage (3 Images) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px]"
          >
            {/* 3-Image Asymmetric Grid */}
            <div className="grid grid-cols-12 gap-4 h-full w-full relative">
              
              {/* Image 1: Tall left block */}
              <div className="col-span-7 h-full relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md group">
                <Image
                  src="https://media.istockphoto.com/id/519664519/photo/manufacturing-equipment.jpg?s=2048x2048&w=is&k=20&c=sh3M1VPTOhweK5LEPJMl7tgrieCz0OPUpJzq3DL834U="
                  alt="Heavy industrial machinery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 60vw, 25vw"
                  priority
                />
              </div>

              {/* Stack of Image 2 & Image 3 on the right */}
              <div className="col-span-5 flex flex-col gap-4 h-full">
                {/* Image 2: Top Right */}
                <div className="h-[50%] relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&h=450&q=80"
                    alt="Automated conveyor system"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 40vw, 15vw"
                  />
                </div>
                
                {/* Image 3: Bottom Right */}
                <div className="h-[50%] relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Packages on conveyor belt"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 40vw, 15vw"
                  />
                </div>
              </div>

              {/* Floating Corporate Status Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-[#E5E7EB] rounded-2xl p-4 shadow-lg flex items-center justify-between gap-3 z-10 pointer-events-none">
                <div className="text-left">
                  <span className="text-[8px] font-bold text-[#4673C5] uppercase tracking-widest block">Compliance</span>
                  <span className="text-[11px] font-black text-[#1F2937] block mt-0.5">ISO 9001:2015 QC</span>
                </div>
                <div className="w-px h-6 bg-[#E5E7EB]" />
                <div className="text-left">
                  <span className="text-[8px] font-bold text-[#0A741C] uppercase tracking-widest block">Affiliation</span>
                  <span className="text-[11px] font-black text-[#1F2937] block mt-0.5">Earth India Group</span>
                </div>
              </div>

            </div>
            
            {/* Engineering technical grid corner accents */}
            <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-[#4673C5] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-[#0A741C] pointer-events-none" />
          </motion.div>

          {/* Right Column: Premium Storytelling Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#4673C5] uppercase tracking-widest bg-[#4673C5]/10 border border-[#4673C5]/20 px-3.5 py-1.5 rounded-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4673C5] animate-pulse" />
              ABOUT EARTHFLEX
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] leading-[1.2] tracking-tight mt-6">
              Powering heavy industry with <span className="text-[#4673C5]">precision conveyor systems</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#4B5563] mt-5 leading-relaxed font-semibold">
              Backed by Earth India's extensive engineering legacy, EarthFlex designs and manufactures premium conveyor systems capable of handling extreme heat, chemical wear, and heavy stress in mining, cement, steel, and power industries.
            </p>

            {/* CTA action wrapper */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex justify-start w-full">
              <Button
                href="#contact"
                variant="primary"
                className="text-xs font-bold tracking-wider py-3.5 px-8"
              >
                REQUEST CONSULTATION
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
