"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_COMPANY, EH_STATS, EH_WHY_CHOOSE, EH_FAQ, EH_PROCESS } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const WHY_ICONS = [
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
];

export default function AboutPageClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <PageHero
        badge="ABOUT EARTHHAUL"
        title="Engineering Industrial"
        highlight="Excellence Since 2009"
        subtitle="A premium industrial engineering company built on precision, reliability, and unwavering commitment to industrial performance."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "About Us" },
        ]}
        ctaLabel="Get a Free Consultation"
        ctaHref="/earthhaul/contact"
      />

      {/* Who We Are */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-5" style={{ color: CHARCOAL }}>
                Your Trusted Partner in <span style={{ color: BLUE }}>Industrial Engineering</span>
              </h2>
              <p className="text-[15px] text-[#57585C] leading-relaxed mb-5">
                EarthHaul is a division of the Earth India Group, specializing in engineering, manufacturing, and installing premium conveyor systems and intelligent automation solutions across India&apos;s most demanding industrial sectors.
              </p>
              <p className="text-[14px] text-[#818487] leading-relaxed mb-8">
                Founded in {EH_COMPANY.established}, we have grown from a regional conveyor supplier to a full-service industrial automation partner — serving mining operations, steel plants, pharmaceutical manufacturers, and modern warehousing and logistics businesses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {EH_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[#E2E8F0] p-4 text-center">
                    <div className="text-2xl font-black mb-1" style={{ color: BLUE }}>{stat.value}</div>
                    <div className="text-[11px] font-semibold text-[#818487] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden h-[480px]"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>OUR PURPOSE</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              Driven by a Clear <span style={{ color: BLUE }}>Purpose</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Our Mission", icon: "🎯", text: EH_COMPANY.mission, color: BLUE },
              { label: "Our Vision", icon: "🔭", text: EH_COMPANY.vision, color: ORANGE },
            ].map((card, i) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: card.color }} />
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-[20px] font-extrabold mb-4" style={{ color: CHARCOAL }}>{card.label}</h3>
                <p className="text-[15px] text-[#57585C] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>WHY CHOOSE US</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              What Makes EarthHaul <span style={{ color: BLUE }}>Different</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EH_WHY_CHOOSE.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-[#F5F5F5] border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${BLUE}10`, color: BLUE }}>
                  {WHY_ICONS[i]}
                </div>
                <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#1565C0] transition-colors" style={{ color: CHARCOAL }}>{item.title}</h3>
                <p className="text-[13px] text-[#57585C] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — abbreviated */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>OUR PROCESS</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              How We <span style={{ color: BLUE }}>Work</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EH_PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="bg-white border border-[#E2E8F0] rounded-xl p-6 relative overflow-hidden">
                <div className="text-[42px] font-black text-[#E2E8F0] leading-none absolute top-4 right-4">{step.step}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3" style={{ backgroundColor: `${ORANGE}12`, color: ORANGE }}>{step.duration}</div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: CHARCOAL }}>{step.title}</h3>
                <p className="text-[13px] text-[#57585C] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>FAQ</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>Common <span style={{ color: BLUE }}>Questions</span></h2>
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
                  <div className="px-6 pb-5">
                    <p className="text-[13.5px] text-[#57585C] leading-relaxed">{item.answer}</p>
                  </div>
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
          <h2 className="text-3xl font-extrabold text-white mb-5">Ready to Work with EarthHaul?</h2>
          <p className="text-[15px] text-white/50 mb-8">Let our engineering team design a conveyor or automation solution that transforms your operation.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Request Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
