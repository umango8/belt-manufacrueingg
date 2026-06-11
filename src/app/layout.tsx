import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "@/components/shared/providers/ScrollRevealProvider";
import SmoothScrollProvider from "@/components/shared/providers/SmoothScrollProvider";
import Preloader from "@/components/shared/ui/Preloader";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Earth India Group | Industrial Belting & Conveyor Automation Solutions",
  description:
    "Earth India Group is the parent industrial company powering EarthFlex (Industrial Belting Solutions) and EarthHaul (Conveyor Automation & Material Handling Systems). ISO 9001:2015 certified. Pan India service.",
  keywords: [
    "Earth India Group",
    "EarthFlex",
    "EarthHaul",
    "industrial belting solutions",
    "conveyor automation",
    "material handling systems",
    "conveyor belt manufacturer",
    "industrial conveyor belts",
    "rubber conveyor belt",
    "factory automation India",
    "belt manufacturer India",
    "conveyor belt supplier",
  ],
  authors: [{ name: "Earth India Group" }],
  openGraph: {
    title: "Earth India Group | Industrial Belting & Conveyor Automation",
    description:
      "Parent industrial company powering EarthFlex (Industrial Belting) and EarthHaul (Conveyor Automation & Material Handling). ISO 9001:2015 certified.",
    type: "website",
    locale: "en_IN",
    siteName: "Earth India Group",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Earth India Group",
              description:
                "Parent industrial company powering EarthFlex (Industrial Belting Solutions) and EarthHaul (Conveyor Automation & Material Handling Systems).",
              url: "https://earthindiagroup.com",
              telephone: "+91-8200223669",
              email: "info@earthindiagroup.com",
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
        <Preloader />
        <ScrollRevealProvider />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
