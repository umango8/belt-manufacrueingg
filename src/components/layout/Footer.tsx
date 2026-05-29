"use client";

import Link from "next/link";
import { COMPANY, PRODUCTS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#050811] text-white/80 relative overflow-hidden pt-20 pb-8 border-t border-white/5">
      {/* Top glowing radial accent to give a premium glow-in-the-dark tech look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Footer Container */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 sm:gap-12 gap-10 lg:gap-8 items-start mb-16">
          
          {/* Left Column (lg:col-span-3): Socials, Large Contact Mail & Address */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            {/* Outline Circular Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={1.5} />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>

            {/* Large Typography Contact Mail */}
            <a 
              href={`mailto:${COMPANY.email}`}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-accent transition-colors duration-300 block mb-6 font-heading"
            >
              {COMPANY.email}
            </a>

            {/* Small Multi-line Address */}
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-wider font-mono">
              Industrial Area, Phase II,<br />
              Ahmedabad, Gujarat, India
            </p>
          </div>

          {/* Center Column (lg:col-span-3): Technical Connecting Circuited Dotted Grids & Button */}
          <div className="lg:col-span-3 flex items-center justify-center gap-4 h-full py-6 lg:py-12 z-10">
            {/* Left Technical Diagram */}
            <svg className="w-24 h-12 text-white/5 hidden xl:block shrink-0" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dotted Grid Background */}
              <pattern id="gridLeft" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="50" fill="url(#gridLeft)" />
              {/* Dotted lines path */}
              <path d="M 20 20 L 60 20 L 70 25 L 100 25" stroke="#F97316" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              <circle cx="60" cy="20" r="2" fill="#F97316" className="animate-pulse" />
            </svg>

            {/* Central Sleek Call To Action Button */}
            <Link
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#0E1527] border border-white/10 hover:border-accent/40 rounded-xl transition-all duration-500 shadow-xl group hover:shadow-accent/5 hover:-translate-y-0.5 shrink-0"
            >
              <span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-accent transition-colors">
                Request a Quote
              </span>
              <span className="text-[9px] font-bold font-mono tracking-widest bg-accent/20 text-accent px-2 py-0.5 rounded uppercase">
                ESTIMATE
              </span>
            </Link>

            {/* Right Technical Diagram */}
            <svg className="w-24 h-12 text-white/5 hidden xl:block shrink-0" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dotted Grid Background */}
              <pattern id="gridRight" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="50" fill="url(#gridRight)" />
              {/* Dotted lines path */}
              <path d="M 0 25 L 30 25 L 40 30 L 80 30" stroke="#F97316" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              <circle cx="30" cy="25" r="2" fill="#F97316" className="animate-pulse" />
            </svg>
          </div>

          {/* Right-Center Column (lg:col-span-3): "Our Products" List */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end w-full">
            <span className="text-[10px] font-mono tracking-widest text-accent font-bold uppercase mb-5 block">
              OUR PRODUCTS
            </span>
            <div className="flex flex-col items-start lg:items-end gap-3.5">
              {PRODUCTS.slice(0, 5).map((product) => (
                <Link 
                  key={product.id}
                  href="#products" 
                  className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
                >
                  {product.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Far-Right Column (lg:col-span-3): "Page Index" Navigation Links */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end w-full">
            <span className="text-[10px] font-mono tracking-widest text-accent font-bold uppercase mb-5 block">
              PAGE INDEX
            </span>
            <div className="flex flex-col items-start lg:items-end gap-3.5">
              <Link 
                href="#home" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Home / Main
              </Link>
              <Link 
                href="#products" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Products
              </Link>
              <Link 
                href="#industries" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Industries Served
              </Link>
              <Link 
                href="#process" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Our Process
              </Link>
              <Link 
                href="#why-us" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Why Choose Us
              </Link>
              <Link 
                href="#reviews" 
                className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-[-8px] tracking-tight font-heading"
              >
                Reviews
              </Link>
            </div>
          </div>

        </div>

        {/* Separator Bar */}
        <div className="border-t border-white/5 pt-8" />

        {/* Bottom Symmetrical Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/30 z-10 relative">
          <Link href="#" className="underline hover:text-white/70 transition-colors uppercase tracking-wider font-mono">
            Terms and conditions
          </Link>
          
          <p className="uppercase tracking-wider font-mono">
            © {currentYear} {COMPANY.name}. All Rights Reserved.
          </p>

          <Link href="#" className="underline hover:text-white/70 transition-colors uppercase tracking-wider font-mono">
            Privacy Policy
          </Link>
        </div>

        {/* Giant Watermark Text behind bottom bar */}
        <span className="block text-[14vw] font-black uppercase text-white/[0.015] select-none pointer-events-none text-center tracking-tighter leading-none mt-2 select-none z-0">
          beltforge
        </span>

      </div>
    </footer>
  );
}
