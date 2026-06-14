"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_PRODUCTS, EH_FAQ } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  conveyor: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  automation: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
  handling: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  belting: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  custom: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
};

export default function ProductsPageClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <PageHero
        badge="PRODUCT RANGE"
        title="Industrial Conveyor &"
        highlight="Automation Systems"
        subtitle="From heavy-duty mining conveyors to intelligent factory automation — engineered for every industrial challenge."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Products" },
        ]}
        ctaLabel="Request Product Quote"
        ctaHref="/earthhaul/contact"
      />

      {/* Products Detail Section */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="container-custom space-y-16">
          {EH_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              id={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`relative rounded-2xl overflow-hidden h-[380px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url('${product.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md" style={{ backgroundColor: `${ORANGE}20`, color: ORANGE, border: `1px solid ${ORANGE}40` }}>{product.category}</span>
                </div>
                {/* Floating specs */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
                    <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider mb-2">Key Specs</div>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec) => (
                        <span key={spec} className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${BLUE}10`, color: BLUE }}>
                    {PRODUCT_ICONS[product.icon]}
                  </div>
                  <h2 className="text-2xl font-extrabold" style={{ color: CHARCOAL }}>{product.title}</h2>
                </div>

                <p className="text-[15px] text-[#57585C] leading-relaxed mb-6">{product.shortDesc}</p>

                <div className="space-y-4 mb-6">
                  {[
                    { label: "What it is", text: product.whatItIs, color: BLUE },
                    { label: "How it works", text: product.howItWorks, color: "#215794" },
                    { label: "Why it helps", text: product.whyItHelps, color: "#16A34A" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2" style={{ backgroundColor: `${item.color}10`, color: item.color }}>{item.label}</span>
                      <p className="text-[13px] text-[#57585C] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.applications.map((app) => (
                    <span key={app} className="text-[11px] font-semibold px-3 py-1 rounded-full border" style={{ borderColor: `${BLUE}20`, color: BLUE, backgroundColor: `${BLUE}05` }}>{app}</span>
                  ))}
                </div>

                <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-6 py-3 text-[12px] rounded-lg text-white transition-all duration-300" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
                  Get Product Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 border-t border-[#E2E8F0]">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>PRODUCT FAQ</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>Common Product <span style={{ color: BLUE }}>Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {EH_FAQ.slice(0, 5).map((item, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-all duration-300" style={{ borderColor: openFaq === i ? `${BLUE}30` : "#E2E8F0", backgroundColor: openFaq === i ? `${BLUE}03` : "white" }}>
                <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-[14px] font-semibold" style={{ color: openFaq === i ? BLUE : CHARCOAL }}>{item.question}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300" style={{ backgroundColor: openFaq === i ? BLUE : `${BLUE}10`, color: openFaq === i ? "white" : BLUE }}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5"><p className="text-[13.5px] text-[#57585C] leading-relaxed">{item.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: `${BLUE}10` }} />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-5">Need a Conveyor or Automation Solution?</h2>
          <p className="text-[15px] text-white/50 mb-8">Talk to our engineering team and get a customized product recommendation and quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
              Request Consultation
            </Link>
            <Link href="/earthhaul/projects" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white/70 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-300">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
