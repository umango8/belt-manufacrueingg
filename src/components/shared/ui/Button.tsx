"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "outline" | "dark" | "white" | "accent" | "secondary" | "outlinePrimary" | "outlineSecondary" | "outlineDark";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "lg" | "xl" | "md" | "sm" | "none";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: "button" | "submit";
  id?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  target,
  rel,
  variant = "primary",
  size = "lg",
  rounded = "xl",
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = "button",
  id,
  disabled = false,
}: ButtonProps) {
  // Check if a display class is provided to avoid conflicting with the default 'inline-flex'
  const hasDisplayClass = /\b(hidden|flex|inline-flex|block|inline-block|grid|inline-grid)\b/.test(className);

  const roundedStyles = {
    full: "rounded-full",
    lg: "rounded-lg",
    xl: "rounded-xl",
    md: "rounded-md",
    sm: "rounded-sm",
    none: "rounded-none",
  };

  // Base pill class with premium editorial styling
  const baseStyles =
    `group relative ${hasDisplayClass ? "" : "inline-flex"} items-center justify-center font-semibold tracking-wide uppercase ${roundedStyles[rounded]} overflow-hidden transition-all duration-300 ease-out cursor-pointer select-none border-1.5`;

  // Base background and text colors
  const variants = {
    primary: "bg-primary text-white border-[2px] border-primary",
    outline: "bg-transparent text-white border-[2px] border-white",
    dark: "bg-dark text-white border-dark",
    white: "bg-[#FFFFFF] text-dark border-[2px] border-white",
    accent: "bg-accent text-secondary border-[2px] border-accent",
    secondary: "bg-secondary text-white border-[2px] border-secondary",
    outlinePrimary: "bg-transparent text-primary border-[2px] border-primary",
    outlineSecondary: "bg-transparent text-secondary border-[2px] border-secondary",
    outlineDark: "bg-transparent text-dark border-[2px] border-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-[13px]",
    lg: "lg:px-10 lg:py-4.5 lg:text-sm md:px-8 md:py-4 md:text-sm px-6 py-3 text-xs",
  };

  // Hover panel background colors for the center-split animation
  const hoverBgColors = {
    primary: "bg-accent",   // fills with Industrial Orange on hover
    accent: "bg-primary",   // fills with Deep Navy on hover
    outline: "bg-white",    // fills with white on hover
    white: "bg-accent",    // fills with Industrial Orange on hover
    dark: "bg-accent",      // fills with Industrial Orange on hover
    secondary: "bg-accent",  // fills with Industrial Orange on hover
    outlinePrimary: "bg-primary",
    outlineSecondary: "bg-secondary",
    outlineDark: "bg-dark",
  };

  // Text color on hover transitions
  const hoverTextStyles = {
    primary: "group-hover:text-secondary",
    accent: "group-hover:text-white",
    outline: "group-hover:text-secondary",
    white: "group-hover:text-secondary",
    dark: "group-hover:text-secondary",
    secondary: "group-hover:text-secondary",
    outlinePrimary: "group-hover:text-white",
    outlineSecondary: "group-hover:text-white",
    outlineDark: "group-hover:text-white",
  };

  const contentMarkup = (
    <>
      {/* Left panel of the center-split hover animation */}
      <span
        className={`absolute top-0 right-1/2 bottom-0 left-0 ${hoverBgColors[variant]} origin-right scale-x-0 ${disabled ? "" : "group-hover:scale-x-100"} transition-transform duration-300 ease-out z-0`}
      />
      {/* Right panel of the center-split hover animation */}
      <span
        className={`absolute top-0 left-1/2 bottom-0 right-0 ${hoverBgColors[variant]} origin-left scale-x-0 ${disabled ? "" : "group-hover:scale-x-100"} transition-transform duration-300 ease-out z-0`}
      />
      
      {/* Text label with transition */}
      <span className={`relative z-10 flex items-center gap-2 ${disabled ? "" : hoverTextStyles[variant]} transition-colors duration-300`}>
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
          target={target}
          rel={rel}
          className={combinedStyles}
          id={id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {contentMarkup}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        target={target}
        rel={rel}
        className={combinedStyles}
        id={id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {contentMarkup}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${combinedStyles} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={type}
      id={id}
      disabled={disabled}
    >
      {contentMarkup}
    </motion.button>
  );
}
