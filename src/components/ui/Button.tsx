"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "white" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  id?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  type = "button",
  id,
}: ButtonProps) {
  // Base pill class with premium editorial styling
  const baseStyles =
    "group relative inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded-full overflow-hidden transition-all duration-300 ease-out cursor-pointer select-none border-1.5";

  // Base background and text colors
  const variants = {
    primary: "bg-primary text-white border-[2px] border-primary",
    outline: "bg-transparent text-white border-[2px] border-white",
    dark: "bg-dark text-white border-dark",
    white: "bg-[#FFFFFF] text-dark border-[2px] border-white",
    accent: "bg-accent text-white border-[2px] border-accent",
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-4.5 text-sm",
  };

  // Hover panel background colors for the center-split animation
  const hoverBgColors = {
    primary: "bg-accent",   // fills with Industrial Orange on hover
    accent: "bg-primary",   // fills with Deep Navy on hover
    outline: "bg-white",    // fills with white on hover
    white: "bg-accent",    // fills with Industrial Orange on hover
    dark: "bg-accent",      // fills with Industrial Orange on hover
  };

  // Text color on hover transitions
  const hoverTextStyles = {
    primary: "group-hover:text-white",
    accent: "group-hover:text-white",
    outline: "group-hover:text-primary",
    white: "group-hover:text-white",
    dark: "group-hover:text-white",
  };

  const contentMarkup = (
    <>
      {/* Left panel of the center-split hover animation */}
      <span
        className={`absolute top-0 right-1/2 bottom-0 left-0 ${hoverBgColors[variant]} origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0`}
      />
      {/* Right panel of the center-split hover animation */}
      <span
        className={`absolute top-0 left-1/2 bottom-0 right-0 ${hoverBgColors[variant]} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0`}
      />
      {/* Visual center split indicator line (subtle detail) */}
      <span className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 z-0" />
      
      {/* Text label with transition */}
      <span className={`relative z-10 flex items-center gap-2 ${hoverTextStyles[variant]} transition-colors duration-300`}>
        {children}
      </span>
    </>
  );

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // If external/hash anchor link
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <motion.a
          href={href}
          className={combinedStyles}
          id={id}
          
          whileTap={{ scale: 0.98 }}
        >
          {contentMarkup}
        </motion.a>
      );
    }

    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-block">
        <Link href={href} className={combinedStyles} id={id}>
          {contentMarkup}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={combinedStyles}
      onClick={onClick}
      type={type}
      id={id}
    >
      {contentMarkup}
    </motion.button>
  );
}
