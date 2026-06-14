"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_SOLUTIONS, EH_PROCESS, EH_FAQ } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  bulk: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  factory: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
  warehouse: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>,
  retrofit: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  turnkey: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  predictive: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
};

export default function SolutionsPageClient() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="SOLUTIONS"
        title="End-to-End Industrial"
        highlight="Engineering Solutions"
        subtitle="From bulk material handling to predictive maintenance — we deliver complete solutions that solve your most complex industrial challenges."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Solutions" },
        ]}
        ctaLabel="Get a Solution Quote"
        ctaHref="/earthhaul/contact"
      />

      {/* Solutions Grid */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>WHAT WE DELIVER</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              Comprehensive <span style={{ color: BLUE }}>Industrial Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EH_SOLUTIONS.map((solution, i) => (
              <motion.div key={solution.slug} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="group bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-[0_8px_32px_rgba(21,101,192,0.10)] hover:border-[#1565C0]/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE, opacity: 0.15 }} />
                  <div className="group-hover:opacity-100 absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300" style={{ backgroundColor: BLUE }} />

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ backgroundColor: `${BLUE}08`, color: BLUE }}>
                    {SOLUTION_ICONS[solution.icon]}
                  </div>
                  <h3 className="text-[17px] font-extrabold mb-3 group-hover:text-[#1565C0] transition-colors" style={{ color: CHARCOAL }}>{solution.title}</h3>
                  <p className="text-[13.5px] text-[#57585C] leading-relaxed mb-5 flex-1">{solution.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {solution.applications.map((app) => (
                      <span key={app} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ORANGE}10`, color: ORANGE }}>{app}</span>
                    ))}
                  </div>

                  <Link href="/earthhaul/contact" className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide mt-auto transition-colors duration-200" style={{ color: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.color = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.color = BLUE; }}>
                    Get Solution Quote
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <motion.div className="text-center max-w-2xl mx-auto mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>DELIVERY PROCESS</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight" style={{ color: CHARCOAL }}>
              How We <span style={{ color: BLUE }}>Deliver Your Solution</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EH_PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="bg-[#F5F5F5] border border-[#E2E8F0] rounded-xl p-6 relative overflow-hidden">
                <div className="text-[48px] font-black leading-none absolute top-3 right-4 text-[#E2E8F0]">{step.step}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3" style={{ backgroundColor: `${ORANGE}12`, color: ORANGE }}>{step.duration}</div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: CHARCOAL }}>{step.title}</h3>
                <p className="text-[13px] text-[#57585C] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold" style={{ color: CHARCOAL }}>Solutions <span style={{ color: BLUE }}>FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {EH_FAQ.slice(3, 8).map((item, i) => (
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
          <h2 className="text-3xl font-extrabold text-white mb-5">Ready to Transform Your Operations?</h2>
          <p className="text-[15px] text-white/50 mb-8">Get a custom solution designed for your facility, material, and production requirements.</p>
          <Link href="/earthhaul/contact" className="inline-flex items-center gap-2 font-bold tracking-wide uppercase px-8 py-4 text-[12px] rounded-lg text-white transition-all duration-300 shadow-lg" style={{ backgroundColor: BLUE }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}>
            Request Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
