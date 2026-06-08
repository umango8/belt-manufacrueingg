import { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Get a Free Quote | EarthIndia Industries",
  description:
    "Configure your industrial conveyor or transmission belt requirements online. Input your custom width, thickness, carcass specifications, and get a professional engineering estimate within 24 hours.",
  keywords: [
    "request conveyor belt quote",
    "industrial belt price estimate",
    "custom belt calculator",
    "timing belt quote",
    "EarthIndia quote builder",
  ],
};

export default function QuotePage() {
  return <QuoteClient />;
}
