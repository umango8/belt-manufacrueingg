"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  highlightWords?: string[];
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  children,
  highlightWords = [],
}: SectionHeadingProps) {
  // Keep all text strictly left-aligned as requested
  const alignClass = "text-left";

  // Pure static helper to highlight words in accent color without any animation
  const renderStaticHighlightedText = (text: string, hWords: string[]) => {
    if (!hWords || hWords.length === 0) return text;
    const words = text.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
      const isMatch = hWords.some(hw => {
        const cleanHw = hw.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        return cleanWord === cleanHw;
      });

      return (
        <span key={index} className={isMatch ? "text-accent" : ""}>
          {word}{index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-3xl mb-12 ${alignClass}`}
    >
      {subtitle && (
        <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-title leading-tight mb-8">
        {renderStaticHighlightedText(title, highlightWords)}
      </h2>
      {description && (
        <p className="text-subtitle text-base md:text-lg leading-relaxed max-w-2xl text-justify sm:text-left">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}

