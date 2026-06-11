import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import ProductSidebar from "@/components/earthflex/products/ProductSidebar";
import ProductDetails from "@/components/earthflex/products/ProductDetails";
import CTASection from "@/components/earthflex/sections/CTASection";
import { PRODUCT_CATALOG, COMPANY } from "@/lib/constants";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATALOG.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_CATALOG.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found | Earth Flex Industries" };

  return {
    title: `${product.title} | Earth Flex Industries — Industrial Belt Manufacturer`,
    description: `${product.overview} Manufactured by Earth Flex Industries — ${COMPANY.iso} certified. Request a quote today.`,
    keywords: [
      product.title,
      `${product.title} manufacturer`,
      `industrial ${product.title.toLowerCase()}`,
      "belt manufacturer India",
      "Earth Flex Industries",
      ...product.applications,
    ],
    openGraph: {
      title: `${product.title} | Earth Flex Industries`,
      description: product.overview,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCT_CATALOG.find((p) => p.slug === slug);
  if (!product) notFound();

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
              <Link href="/products/conveyor-belt" className="hover:text-accent transition-colors font-medium">Products</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#0c1a2e] font-semibold truncate max-w-[200px]">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Page layout: sidebar + content */}
        <div className="container-custom py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start">
            {/* Left: Sticky Sidebar */}
            <ProductSidebar />

            {/* Right: Product Details */}
            <div className="flex-1 min-w-0">
              <ProductDetails slug={slug} />
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
