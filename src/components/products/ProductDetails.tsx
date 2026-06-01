"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATALOG } from "@/lib/constants";
import Button from "@/components/ui/Button";



const industryColors = [
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-orange-50 text-orange-700 border-orange-100",
  "bg-green-50 text-green-700 border-green-100",
  "bg-purple-50 text-purple-700 border-purple-100",
  "bg-red-50 text-red-700 border-red-100",
  "bg-teal-50 text-teal-700 border-teal-100",
];

/* ── Feature icon ────────────────────────────────────────────────────────── */
function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
    <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
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

interface ProductDetailsProps {
  slug: string;
}

export default function ProductDetails({ slug }: ProductDetailsProps) {
  const product = PRODUCT_CATALOG.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-2xl font-bold text-[#0f172a] mb-4">Product Not Found</p>
        <p className="text-[#334155]/60 mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/products/conveyor-belt" className="btn-pill btn-primary">View All Products</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCT_CATALOG.filter((p) => product.related.includes(p.slug)).slice(0, 3);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        {/* ── Back to Products Navigation ── */}
        <div className="mb-4 flex">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#334155]/70 hover:text-[#f97316] transition-colors uppercase tracking-widest bg-white px-5 py-2.5 rounded-full border border-[#e2e8f0] shadow-3xs"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>

        {/* ── 1. Product Hero ─────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-[0_8px_48px_rgba(15,23,42,0.1)] mb-8 relative group">
          <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/30 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                {product.category}
              </span>
            </div>

            {/* Hero title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white mb-2 leading-tight tracking-tight">
                {product.title}
              </h1>
              <p className="text-sm text-white/70 font-medium max-w-xl leading-relaxed">{product.overview}</p>
            </div>
          </div>

          {/* CTA strip below hero */}
          <div className="bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#f1f5f9]">
            <div className="flex items-center gap-2 text-xs text-[#334155]/60 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              In Stock - Fast Delivery - Custom Sizing Available
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-3">
              <Button href="/quote" variant="primary" size="lg" className="text-xs py-2.5 px-6" id={`hero-quote-${slug}`}>
                Request Quote
              </Button>
              <Button href="/quote" variant="outline" size="lg" className="text-xs py-2.5 px-6 !text-[#0f172a] !border-[#e2e8f0] hover:!bg-[#f8fafc]" id={`hero-contact-${slug}`}>
                Contact Expert
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Product Description ──────────────────────────────────────── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-1 h-6 bg-[#f97316] rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Product Overview</h2>
          </div>
          <p className="text-[15px] text-[#334155] leading-relaxed font-medium">{product.description}</p>
          <div className="md:mt-5 pt-5 border-t border-[#f1f5f9]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#334155]/40 mb-2">Primary Material</p>
            <p className="text-sm font-semibold text-[#0f172a]">{product.material}</p>
          </div>
        </motion.section>

        {/* ── 3. Specifications Table ─────────────────────────────────────── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 mb-6 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-[#f97316] rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Technical Specifications</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f172a] text-white">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl w-[40%]">Parameter</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-tr-xl">Specification</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specifications).map(([key, value], i) => {
                  const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
                  return (
                    <tr key={key} className={`border-b border-[#f1f5f9] transition-colors hover:bg-[#f8fafc] ${i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"}`}>
                      <td className="px-5 py-3.5 text-[13px] font-semibold text-[#334155]/70 align-top">{label}</td>
                      <td className="px-5 py-3.5 text-[13px] font-medium text-[#0f172a] align-top">{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ── 4. Applications ─────────────────────────────────────────────── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-[#f97316] rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Industry Applications</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {product.applications.map((app, i) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-[13px] font-semibold ${industryColors[i % industryColors.length]}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="leading-tight">{app}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 5. Features & Benefits ──────────────────────────────────────── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1 h-6 bg-[#f97316] rounded-full" />
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group flex gap-4 p-4 rounded-xl border border-[#e2e8f0] hover:border-[#f97316]/30 hover:shadow-[0_4px_24px_rgba(249,115,22,0.08)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0f172a]/5 text-[#0f172a] group-hover:bg-[#f97316] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm">
                  <FeatureIcon index={i} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0f172a] mb-1">{feat.title}</p>
                  <p className="text-[12px] text-[#334155]/60 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 6. Related Products ─────────────────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-1 h-6 bg-[#f97316] rounded-full" />
              <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Related Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/products/${rel.slug}`}
                    id={`related-${rel.slug}`}
                    className="group block rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#f97316]/30 hover:shadow-[0_8px_32px_rgba(249,115,22,0.1)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-[140px] overflow-hidden">
                      <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-[13px] font-bold text-[#0f172a] group-hover:text-[#f97316] transition-colors mb-1">{rel.title}</p>
                      <p className="text-[11px] text-[#334155]/50 line-clamp-1">{rel.shortDesc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
