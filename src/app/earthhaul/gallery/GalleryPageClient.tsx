"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const GALLERY_ITEMS = [
  { id: 1, category: "Projects", src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", title: "Heavy Duty Mining Conveyor" },
  { id: 2, category: "Projects", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", title: "Warehouse Sortation System" },
  { id: 3, category: "Facility", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", title: "Manufacturing Assembly Bay" },
  { id: 4, category: "Projects", src: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80", title: "Steel Plant Conveyor Network" },
  { id: 5, category: "Facility", src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80", title: "CNC Fabrication Centre" },
  { id: 6, category: "Projects", src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", title: "Cement Plant Conveyor" },
  { id: 7, category: "Facility", src: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80", title: "Testing & QC Lab" },
  { id: 8, category: "Projects", src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80", title: "Food Processing Line" },
  { id: 9, category: "Team", src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", title: "Engineering Design Team" },
  { id: 10, category: "Projects", src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", title: "Automation Installation" },
  { id: 11, category: "Facility", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", title: "Warehouse Storage & Dispatch" },
  { id: 12, category: "Team", src: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80", title: "Site Installation Team" },
];

const CATEGORIES = ["All", "Projects", "Facility", "Team"];

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        badge="GALLERY"
        title="Projects, Facility &"
        highlight="Installation Gallery"
        subtitle="A visual showcase of EarthHaul's completed projects, manufacturing facility, and installation teams across India."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Gallery" },
        ]}
      />

      {/* Gallery */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          {/* Filter tabs */}
          <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-lg text-[12.5px] font-bold uppercase tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: activeCategory === cat ? BLUE : "white",
                  color: activeCategory === cat ? "white" : CHARCOAL,
                  border: `1.5px solid ${activeCategory === cat ? BLUE : "#E2E8F0"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative rounded-xl overflow-hidden h-52 cursor-pointer"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${item.src}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: ORANGE }}>{item.category}</div>
                  <div className="text-[12px] font-bold text-white">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: `${BLUE}10` }} />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-5">Impressed by Our Work?</h2>
          <p className="text-[15px] text-white/50 mb-8">Let&apos;s discuss your project and engineer a conveyor or automation solution for your facility.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
