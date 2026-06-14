"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_INFRASTRUCTURE } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const INFRA_ICONS: Record<string, React.ReactNode> = {
  factory: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  team: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  testing: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  machines: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
};

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", label: "Conveyor Manufacturing Bay" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", label: "Assembly & Testing Area" },
  { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80", label: "CNC Fabrication Centre" },
  { src: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80", label: "Quality Testing Lab" },
  { src: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80", label: "Belt Warehouse Storage" },
  { src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", label: "Engineering Design Studio" },
];

export default function InfrastructurePageClient() {
  return (
    <>
      <PageHero
        badge="OUR INFRASTRUCTURE"
        title="World-Class Manufacturing"
        highlight="Facility"
        subtitle="A 40,000 sq ft precision manufacturing facility equipped with state-of-the-art machinery, dedicated testing labs, and 50+ qualified engineers."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Infrastructure" },
        ]}
        ctaLabel="Visit Our Facility"
        ctaHref="/earthhaul/contact"
      />

      {/* Infra Highlights */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {EH_INFRASTRUCTURE.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#F5F5F5] border border-[#E2E8F0] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${BLUE}10`, color: BLUE }}>
                  {INFRA_ICONS[item.icon]}
                </div>
                <div className="text-[20px] font-extrabold mb-1" style={{ color: BLUE }}>{item.value}</div>
                <h3 className="text-[14px] font-bold mb-2" style={{ color: CHARCOAL }}>{item.title}</h3>
                <p className="text-[12px] text-[#57585C] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed capabilities */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>MANUFACTURING CAPABILITIES</span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-5" style={{ color: CHARCOAL }}>
                Built to Build <span style={{ color: BLUE }}>Premium Systems</span>
              </h2>
              <p className="text-[15px] text-[#57585C] leading-relaxed mb-6">
                Our Ahmedabad facility combines precision fabrication, rigorous quality testing, and experienced engineering — ensuring every system we deliver meets the highest industrial standards.
              </p>
              <div className="space-y-3">
                {[
                  "CNC Plasma & Laser Cutting Machines",
                  "Heavy Duty Welding & Fabrication Bays",
                  "Precision Belt Vulcanizing Equipment",
                  "Multi-Stage Load & Endurance Testing",
                  "Automated Paint & Surface Treatment",
                  "CAD/CAM Engineering Design Studio",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${BLUE}10` }}>
                      <svg className="w-3 h-3" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[14px] text-[#57585C]">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-2xl overflow-hidden h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold" style={{ color: CHARCOAL }}>Facility <span style={{ color: BLUE }}>Gallery</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="group relative rounded-xl overflow-hidden h-48">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${img.src}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] font-bold text-white">{img.label}</span>
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
          <h2 className="text-3xl font-extrabold text-white mb-5">Want to Visit Our Facility?</h2>
          <p className="text-[15px] text-white/50 mb-8">Schedule a plant visit or get in touch with our engineering team for a detailed consultation.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
