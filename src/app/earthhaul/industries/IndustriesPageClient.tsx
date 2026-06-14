"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_INDUSTRIES, EH_FAQ } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  mining: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L21 3m-6.5 6.5l-5 5L3 21l1.5-6.5 5-5 5-5zM17 5l2 2" /></svg>,
  steel: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M5 22V4a2 2 0 012-2h10a2 2 0 012 2v18M9 2v20M15 2v20M5 8h14M5 14h14" /></svg>,
  warehousing: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>,
  food: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 8l-5-5M7 8l5-5M17 14l-5 5M7 14l5 5" /></svg>,
  automotive: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeWidth={1.5} d="M12 3v6M12 15v6M3 12h6M15 12h6" /></svg>,
  pharmaceutical: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  logistics: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
  cement: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  packaging: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  textile: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>,
  fmcg: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
};

const INDUSTRY_IMAGES: Record<string, string> = {
  automotive: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
  food: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80",
  pharmaceutical: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  packaging: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  warehousing: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80",
  logistics: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
  cement: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  mining: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
  textile: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  fmcg: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
};

export default function IndustriesPageClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="INDUSTRIES WE SERVE"
        title="Conveyor Solutions for"
        highlight="Every Industry"
        subtitle="From mining to pharmaceutical clean rooms — our engineering solutions meet the unique demands of 10+ industrial sectors."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Industries" },
        ]}
        ctaLabel="Get Industry-Specific Quote"
        ctaHref="/earthhaul/contact"
      />

      {/* Industries Grid */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {EH_INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(21,101,192,0.10)] hover:border-[#1565C0]/20 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${INDUSTRY_IMAGES[industry.id] || INDUSTRY_IMAGES.mining}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${BLUE}25`, color: "#22A6F2" }}>
                        {INDUSTRY_ICONS[industry.icon] || INDUSTRY_ICONS.mining}
                      </div>
                      <div>
                        <h3 className="text-[18px] font-extrabold text-white">{industry.name}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: `${ORANGE}20`, color: ORANGE }}>{industry.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-[#57585C] leading-relaxed mb-4">{industry.desc}</p>
                  <Link href="/earthhaul/contact" className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide transition-colors duration-200" style={{ color: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}>
                    Get Solution
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>FAQ</span>
            <h2 className="text-3xl font-extrabold" style={{ color: CHARCOAL }}>Industry <span style={{ color: BLUE }}>Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {EH_FAQ.slice(2, 7).map((item, i) => (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: openFaq === i ? `${BLUE}30` : "#E2E8F0", backgroundColor: openFaq === i ? `${BLUE}03` : "white" }}>
                <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-[14px] font-semibold" style={{ color: openFaq === i ? BLUE : CHARCOAL }}>{item.question}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: openFaq === i ? BLUE : `${BLUE}10`, color: openFaq === i ? "white" : BLUE }}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {openFaq === i && <div className="px-6 pb-5"><p className="text-[13.5px] text-[#57585C] leading-relaxed">{item.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: `${BLUE}10` }} />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-5">Need a Conveyor Solution for Your Industry?</h2>
          <p className="text-[15px] text-white/50 mb-8">Tell us your industry and we&apos;ll design a system that fits your exact production requirements.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
