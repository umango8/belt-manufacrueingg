import Link from "next/link";
import { NAV_LINKS, COMPANY, PRODUCTS, CERTIFICATIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                  B
                </span>
              </div>
              <div className="leading-tight">
                <span
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  BeltForge
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-white/50 font-medium">
                  Industries
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              {COMPANY.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] px-3 py-1 border border-white/15 text-white/50 uppercase tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    id={`footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Products
            </h3>
            <ul className="space-y-3">
              {PRODUCTS.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link
                    href="#products"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/60">{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between py-5 gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
