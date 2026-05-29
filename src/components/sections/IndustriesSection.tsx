"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Industries We Serve"
          title="Powering Critical Industries"
          description="Our conveyor belt solutions serve diverse industrial sectors, each demanding precision engineering and unwavering reliability."
          highlightWords={["Critical", "Industries"]}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {INDUSTRIES.map((industry) => (
            <motion.article
              key={industry.id}
              variants={fadeInUp}
              className="group relative overflow-hidden aspect-4/3"
              id={`industry-${industry.id}`}
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/65 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-2 mb-4">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-white uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
