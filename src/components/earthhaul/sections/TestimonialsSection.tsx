"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EH_TESTIMONIALS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" style={{ color: ORANGE }} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#F5F5F5] py-24 border-b border-[#E2E8F0] overflow-hidden">
      {/* Decorative blur */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: `${BLUE}06` }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5"
            style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-[2.2rem] font-extrabold leading-tight tracking-tight mb-4" style={{ color: CHARCOAL }}>
            Trusted by India&apos;s Leading{" "}
            <span style={{ color: BLUE }}>Industries</span>
          </h2>
          <p className="text-[15px] text-[#57585C] leading-relaxed">
            From mining operations to pharmaceutical plants — industrial leaders across India rely on EarthHaul for engineering reliability.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EH_TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(21,101,192,0.08)] hover:border-[#1565C0]/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Subtle top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: BLUE }} />

                {/* Industry badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${ORANGE}12`, color: ORANGE }}
                  >
                    {testimonial.industry}
                  </span>
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <div className="mb-5 flex-1">
                  <svg className="w-8 h-8 mb-3 opacity-15" style={{ color: BLUE }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[13.5px] text-[#57585C] leading-relaxed italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-[#F0F0F0] pt-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
                    style={{ backgroundColor: BLUE }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: CHARCOAL }}>
                      {testimonial.name}
                    </div>
                    <div className="text-[11px] text-[#818487]">{testimonial.title}</div>
                    <div className="text-[11px] font-semibold" style={{ color: BLUE }}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-[#E2E8F0] text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#818487] mb-6">
            Trusted by India&apos;s Leading Industrial Groups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {["Tata Steel", "Ultratech Cement", "JSW Steel", "Adani Power", "Hindalco", "Dalmia Bharat"].map((name) => (
              <span key={name} className="text-[13px] font-bold text-[#B1B4B6]">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
