"use client";

import React from "react";
import { motion } from "framer-motion";

interface RollingCounterProps {
  value: string;
  isInView: boolean;
  className?: string;
}

export default function RollingCounter({ value, isInView, className = "" }: RollingCounterProps) {
  const chars = value.split("");

  return (
    <span className={`inline-flex items-baseline justify-center select-none ${className}`}>
      {chars.map((char, index) => {
        const isDigit = /\d/.test(char);
        if (!isDigit) {
          return (
            <span key={index} className="inline-block">
              {char}
            </span>
          );
        }

        const digitValue = parseInt(char, 10);
        // Alternate directions: even index digits animate up, odd index digits animate down
        const isEven = index % 2 === 0;

        // Target translation (e.g. 5 -> -50%)
        const targetY = -digitValue * 10;
        // Start position: Even digits start at 0% (animating up), Odd digits start at -90% (animating down)
        const startY = isEven ? 0 : -90;

        return (
          <span
            key={index}
            className="inline-block overflow-hidden relative"
            style={{ height: "1em", width: "0.65em", lineHeight: "1" }}
          >
            <motion.span
              className="absolute left-0 right-0 flex flex-col items-center"
              style={{ top: 0 }}
              initial={{ y: `${startY}%` }}
              animate={isInView ? { y: `${targetY}%` } : { y: `${startY}%` }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 14,
                delay: index * 0.08, // Subtle staggered delay
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <span
                  key={num}
                  className="block text-center w-full font-black"
                  style={{ height: "1em", lineHeight: "1" }}
                >
                  {num}
                </span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
