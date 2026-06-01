"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_CATALOG } from "@/lib/constants";
import Button from "@/components/ui/Button";

const tagColors = [
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-orange-50 text-orange-700 border-orange-100",
  "bg-green-50 text-green-700 border-green-100",
  "bg-purple-50 text-purple-700 border-purple-100",
  "bg-red-50 text-red-700 border-red-100",
  "bg-teal-50 text-teal-700 border-teal-100",
];

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
      {icons[index % icons.length]}
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

interface IndustryDetailContentProps {
  slug: string;
}

export default function IndustryDetailContent({ slug }: IndustryDetailContentProps) {
  const industry = INDUSTRY_CATALOG.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-2xl font-bold text-[#0f172a] mb-4">Industry Not Found</p>
        <p className="text-[#334155]/60 mb-8">The industry you're looking for doesn't exist.</p>
        <Link href="/industries" className="btn-pill btn-primary">View All Industries</Link>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        {/* ── Back to Industries Navigation ── */}
        <div className="mb-4 flex">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#334155]/70 hover:text-[#f97316] transition-colors uppercase tracking-widest bg-white px-5 py-2.5 rounded-full border border-[#e2e8f0] shadow-3xs"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
        </div>

        {/* ── 1. Hero Banner ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(15,23,42,0.1)] mb-8 relative group">
          <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden bg-slate-900">
            {industry.image.startsWith("http") ? (
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
              />
            ) : (
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />

            {/* Live active badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Active Industry
              </span>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white mb-2 leading-tight tracking-tight">
                {industry.title}
              </h1>
              <p className="text-sm text-white/70 font-medium max-w-xl leading-relaxed">{industry.shortDesc}</p>
            </div>
          </div>

          {/* CTA strip */}
          <div className="bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#f1f5f9]">
            <div className="flex items-center gap-2 text-xs text-[#334155]/60 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ISO 9001:2015 Quality standards
            </div>
            <div className="flex items-center gap-3">
              <Button href="/quote" variant="primary" size="lg" className="text-xs py-2.5 px-6 font-semibold" id={`industry-quote-${slug}`}>
                Get Industry Solution
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Overview, Challenge & Our Solution ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Industry Overview</h2>
            </div>
            <p className="text-[15px] text-[#334155] leading-relaxed font-medium mb-6">{industry.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-[#f1f5f9]">
              <div>
                <span className="text-[10px] font-bold text-[#0f172a]/40 uppercase tracking-widest mb-2 block">
                  THE CHALLENGE
                </span>
                <p className="text-sm text-[#334155] leading-relaxed font-medium">
                  {industry.challenge}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent/80 uppercase tracking-widest mb-2 block">
                  OUR SOLUTION
                </span>
                <p className="text-sm text-[#334155] leading-relaxed font-medium">
                  {industry.solution}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. Belt Types Used ── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Recommended Belt Types</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.beltTypes.map((belt, i) => (
              <div
                key={belt.name}
                className="group flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 hover:shadow-[0_4px_24px_rgba(249,115,22,0.08)] transition-all duration-300 bg-[#fafbfc]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0f172a]/5 text-[#0f172a] group-hover:bg-accent group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <FeatureIcon index={i} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#0f172a] mb-1">{belt.name}</p>
                  <p className="text-[12px] text-[#334155]/70 leading-relaxed">{belt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 4. Key Benefits ── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Key Operational Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {industry.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13.5px] font-semibold text-[#334155] leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 5. Specific Applications Tags ── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Processes & Applications</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industry.applications.map((app, i) => (
              <div
                key={app}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-[13px] font-semibold ${tagColors[i % tagColors.length]}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="leading-tight">{app}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 6. Metrics & Performance Stats ── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Proven Performance Metrics</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industry.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-primary/2 border border-border rounded-2xl p-5 text-center hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.06)] transition-all duration-500"
              >
                <div className="text-3xl font-extrabold text-accent mb-1.5 tracking-tight font-heading">
                  {stat.value}
                  <span className="text-xl font-bold ml-0.5">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-bold text-[#334155]/70 uppercase tracking-wider leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}
