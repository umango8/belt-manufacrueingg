import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import IndustrySidebar from "@/components/earthflex/industries/IndustrySidebar";
import IndustryDetailContent from "@/components/earthflex/industries/IndustryDetailContent";
import CTASection from "@/components/earthflex/sections/CTASection";
import { INDUSTRY_CATALOG, COMPANY } from "@/lib/constants";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRY_CATALOG.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRY_CATALOG.find((ind) => ind.slug === slug);
  if (!industry) return { title: "Industry Not Found | Earth Flex Industries" };

  return {
    title: `${industry.title} | Earth Flex Industries — Industrial Belt Solutions`,
    description: `${industry.overview.substring(0, 160)}... Designed by Earth Flex Industries — ${COMPANY.iso} certified.`,
    keywords: [
      industry.title,
      `${industry.title.toLowerCase()} conveyor belt`,
      `${industry.title.toLowerCase()} belt manufacturer`,
      "industrial belt solutions",
      "Earth Flex Industries",
      ...industry.applications,
    ],
    openGraph: {
      title: `${industry.title} | Earth Flex Industries`,
      description: industry.shortDesc,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRY_CATALOG.find((ind) => ind.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <Header theme="light" />
      <main className="bg-[#f7f8fa] min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="container-custom py-3.5">
            <nav className="flex items-center gap-2 text-[12px] text-[#3a4a5c]/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/industries" className="hover:text-accent transition-colors font-medium">Industries</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#0c1a2e] font-semibold truncate max-w-[200px]">{industry.title}</span>
            </nav>
          </div>
        </div>

        {/* Page layout: sticky sidebar + scrollable content */}
        <div className="container-custom py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start">
            {/* Left: Sticky Sidebar */}
            <IndustrySidebar />

            {/* Right: Scrollable Details */}
            <div className="flex-1 min-w-0">
              <IndustryDetailContent slug={slug} />
            </div>
          </div>
        </div>

        {/* Global CTA Section */}
        <div className="pb-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
