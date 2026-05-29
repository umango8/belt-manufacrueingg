import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "../components/layout/ScrollRevealProvider";
import SmoothScrollProvider from "../components/layout/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeltForge Industries | Premium Industrial Conveyor Belt Manufacturer",
  description:
    "Leading manufacturer of premium industrial rubber conveyor belts. Heat resistant, chevron, oil resistant, and custom conveyor solutions for mining, cement, steel, and power industries. ISO 9001:2015 certified.",
  keywords: [
    "conveyor belt manufacturer",
    "industrial conveyor belts",
    "rubber conveyor belt",
    "heat resistant conveyor belt",
    "mining conveyor belt",
    "belt manufacturer India",
    "chevron conveyor belt",
    "oil resistant belt",
    "conveyor belt supplier",
  ],
  authors: [{ name: "BeltForge Industries" }],
  openGraph: {
    title: "BeltForge Industries | Premium Industrial Conveyor Belt Manufacturer",
    description:
      "Leading manufacturer of premium industrial rubber conveyor belts for mining, cement, steel, and power industries.",
    type: "website",
    locale: "en_IN",
    siteName: "BeltForge Industries",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BeltForge Industries",
              description:
                "Leading manufacturer of premium industrial rubber conveyor belts.",
              url: "https://beltforge.com",
              telephone: "+91-8200223669",
              email: "info@beltforge.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industrial Area, Phase II",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollRevealProvider />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
