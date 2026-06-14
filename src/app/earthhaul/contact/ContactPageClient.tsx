"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/earthhaul/layout/PageHero";
import { EH_COMPANY, EH_FAQ } from "@/lib/earthhaul-constants";

const BLUE = "#1565C0";
const ORANGE = "#E58A33";
const CHARCOAL = "#232A39";

const INQUIRY_TYPES = [
  "New Conveyor System",
  "Automation System",
  "Material Handling",
  "System Retrofit / Upgrade",
  "Maintenance Contract",
  "Spare Parts",
  "Turnkey Project",
  "General Inquiry",
];

export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="CONTACT US"
        title="Get a Free Project"
        highlight="Consultation"
        subtitle="Talk to our engineering team. Tell us your production challenge and we'll design a solution that works."
        breadcrumbs={[
          { label: "EarthHaul", href: "/earthhaul" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Section */}
      <section className="bg-[#F5F5F5] py-24 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>GET IN TOUCH</span>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: CHARCOAL }}>
                  Let&apos;s Engineer Your <span style={{ color: BLUE }}>Solution</span>
                </h2>
                <p className="text-[14px] text-[#57585C] leading-relaxed">
                  Whether you need a standard conveyor system or a fully custom automation solution — our engineers are ready to help.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                    label: "Phone",
                    value: EH_COMPANY.phone,
                    href: `tel:${EH_COMPANY.phone}`,
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    label: "Email",
                    value: EH_COMPANY.email,
                    href: `mailto:${EH_COMPANY.email}`,
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                    label: "Address",
                    value: EH_COMPANY.address,
                    href: undefined,
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    label: "Working Hours",
                    value: EH_COMPANY.hours,
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white border border-[#E2E8F0] rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${BLUE}08`, color: BLUE }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#818487] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[14px] font-semibold transition-colors duration-200" style={{ color: CHARCOAL }} onMouseEnter={(e) => { e.currentTarget.style.color = BLUE; }} onMouseLeave={(e) => { e.currentTarget.style.color = CHARCOAL; }}>{item.value}</a>
                      ) : (
                        <span className="text-[14px] font-semibold" style={{ color: CHARCOAL }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick response */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: `${ORANGE}05`, borderColor: `${ORANGE}20` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-green-700">Quick Response Guaranteed</span>
                </div>
                <p className="text-[12px] text-[#57585C]">We respond to all project inquiries within 4 working hours. For urgent requirements, call us directly.</p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${BLUE}10` }}>
                    <svg className="w-10 h-10" style={{ color: BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[24px] font-extrabold mb-3" style={{ color: CHARCOAL }}>Inquiry Submitted!</h3>
                  <p className="text-[14px] text-[#57585C] mb-6">Our engineering team will contact you within 4 working hours with a detailed response.</p>
                  <button onClick={() => setSubmitted(false)} className="font-bold text-[13px] uppercase tracking-wide transition-colors duration-200" style={{ color: BLUE }}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
                  <h3 className="text-[18px] font-extrabold mb-6" style={{ color: CHARCOAL }}>Request a Free Consultation</h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: "name", label: "Your Name *", placeholder: "e.g. Rajesh Kumar", required: true },
                      { name: "company", label: "Company Name *", placeholder: "e.g. Tata Steel Ltd.", required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-[#818487]">{field.label}</label>
                        <input
                          type="text"
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none transition-all duration-200"
                          style={{ borderColor: "#E2E8F0", color: CHARCOAL }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: "email", label: "Email Address *", placeholder: "your@company.com", type: "email", required: true },
                      { name: "phone", label: "Phone / WhatsApp *", placeholder: "+91 XXXXX XXXXX", type: "tel", required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-[#818487]">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none transition-all duration-200"
                          style={{ borderColor: "#E2E8F0", color: CHARCOAL }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-[#818487]">Industry</label>
                      <select name="industry" value={form.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none transition-all duration-200 bg-white" style={{ borderColor: "#E2E8F0", color: CHARCOAL }} onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; }} onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                        <option value="">Select Industry</option>
                        {["Mining", "Cement", "Iron & Steel", "Automotive", "Food Processing", "Pharmaceutical", "Warehousing", "Logistics", "Packaging", "FMCG", "Textile", "Power Generation", "Other"].map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-[#818487]">Inquiry Type</label>
                      <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none transition-all duration-200 bg-white" style={{ borderColor: "#E2E8F0", color: CHARCOAL }} onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; }} onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                        <option value="">Select Type</option>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-[#818487]">Project Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project: what materials you handle, throughput requirements, facility constraints, current challenges..."
                      className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none transition-all duration-200 resize-none"
                      style={{ borderColor: "#E2E8F0", color: CHARCOAL }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold tracking-wide uppercase text-[13px] text-white transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: BLUE }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
                  >
                    Submit Project Inquiry →
                  </button>

                  <p className="text-center text-[11px] text-[#B1B4B6] mt-4">
                    By submitting, you agree to be contacted by EarthHaul&apos;s engineering team. No spam, guaranteed.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 border-b border-[#E2E8F0]">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md mb-5" style={{ backgroundColor: `${BLUE}08`, color: BLUE, border: `1px solid ${BLUE}15` }}>FAQ</span>
            <h2 className="text-3xl font-extrabold" style={{ color: CHARCOAL }}>Before You <span style={{ color: BLUE }}>Reach Out</span></h2>
          </motion.div>
          <div className="space-y-3">
            {EH_FAQ.map((item, i) => (
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
    </>
  );
}
