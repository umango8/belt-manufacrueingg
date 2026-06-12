"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/earthflex/layout/Header";
import Footer from "@/components/earthflex/layout/Footer";
import Button from "@/components/shared/ui/Button";

// Category definitions
const CATEGORIES = [
  {
    id: "conveyor",
    title: "Conveyor Belting",
    desc: "Heavy-duty bulk material transport solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="9" width="20" height="6" rx="3" strokeWidth={1.8} />
        <circle cx="6" cy="18" r="2" strokeWidth={1.8} />
        <circle cx="18" cy="18" r="2" strokeWidth={1.8} />
        <line x1="6" y1="16" x2="6" y2="15" strokeWidth={1.8} />
        <line x1="18" y1="16" x2="18" y2="15" strokeWidth={1.8} />
      </svg>
    ),
    types: [
      { id: "general", label: "General Duty Conveyor", desc: "For sand, gravel, and general aggregates" },
      { id: "heat", label: "Heat Resistant Conveyor", desc: "For cement clinker, sinter, and hot materials (up to 200°C)" },
      { id: "chevron", label: "Chevron / Cleated Belt", desc: "For high incline angles (up to 40°)" },
      { id: "oil", label: "Oil Resistant Conveyor", desc: "For grain, fertilizers, and oily products" },
      { id: "abrasion", label: "Super Abrasion Resistant", desc: "For sharp ores, granite, and high wear materials" },
      { id: "fire", label: "Fire Resistant (Underground)", desc: "Self-extinguishing belts for coal mines" },
    ],
  },
  {
    id: "drive",
    title: "Drive & Transmission",
    desc: "V-belts, wedge belts, and power transmission",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="5" strokeWidth={1.8} />
        <circle cx="17" cy="12" r="4" strokeWidth={1.8} />
        <line x1="7" y1="7" x2="17" y2="8" strokeWidth={1.8} />
        <line x1="7" y1="17" x2="17" y2="16" strokeWidth={1.8} />
      </svg>
    ),
    types: [
      { id: "classic-v", label: "Classical V-Belt (A, B, C, D, E)", desc: "Standard heavy industrial machine drives" },
      { id: "wedge-v", label: "Wedge V-Belt (SPA, SPB, SPC, SPZ)", desc: "High-capacity power transmission" },
      { id: "banded", label: "Banded/Joined V-Belt", desc: "For pulsating loads and heavy machinery" },
      { id: "flat-drive", label: "Flat Transmission Belt", desc: "High-speed, vibration-free operations" },
    ],
  },
  {
    id: "precision",
    title: "Timing & Synchronous",
    desc: "Toothed belts for exact synchronization",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
        <path d="M12 6v6l4 2" strokeWidth={1.8} strokeLinecap="round" />
        <path d="M8 3l1 2M16 3l-1 2M21 8l-2 1M21 16l-2-1M16 21l-1-2M8 21l1-2M3 16l2-1M3 8l2 1" strokeWidth={1.8} strokeLinecap="round" />
      </svg>
    ),
    types: [
      { id: "timing", label: "Rubber Timing Belt (HTD, T, AT)", desc: "Synchronous zero-slip machine timing" },
      { id: "pu-food", label: "Food-Grade PU Belt", desc: "FDA approved, blue/white hygienic processing" },
      { id: "pvc-light", label: "PVC Light Conveyor", desc: "For packaging, parcel sorting, and logistics" },
      { id: "modular", label: "Modular Plastic Belt", desc: "Interlocking grid belt for food/beverages" },
    ],
  },
  {
    id: "custom",
    title: "Custom Engineering",
    desc: "Bespoke specifications built from blueprints",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    types: [
      { id: "bespoke", label: "Completely Bespoke Solution", desc: "Custom width, compounds, and reinforcements" },
      { id: "extreme-temp", label: "Specialty Temperature Belting", desc: "Extreme hot or cryogenic environments" },
      { id: "chemical", label: "Chemical & Acid Resistant Belt", desc: "For harsh chemical process lines" },
      { id: "steel-cord", label: "High-Tensile Steel Cord Belt", desc: "For long distance overland mining transport" },
    ],
  },
];

export default function QuoteClient() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("conveyor");
  const [subType, setSubType] = useState("general");
  
  // Specs state
  const [width, setWidth] = useState(800); // mm
  const [thickness, setThickness] = useState(12); // mm
  const [length, setLength] = useState(150); // meters
  const [reinforcement, setReinforcement] = useState("EP Fabric (Polyester/Polyamide)");
  const [carcassPlies, setCarcassPlies] = useState(3);
  const [coverGrade, setCoverGrade] = useState("Grade M24 (Heavy Duty)");
  const [isAntistatic, setIsAntistatic] = useState(false);
  const [isFoodGrade, setIsFoodGrade] = useState(false);

  // Operations state
  const [materialCarried, setMaterialCarried] = useState("aggregates");
  const [temperature, setTemperature] = useState(30); // °C
  const [environment, setEnvironment] = useState("outdoor");
  const [estimatedTph, setEstimatedTph] = useState("500");

  // Quantity & Contact state
  const [quantity, setQuantity] = useState(1);
  const [timeline, setTimeline] = useState("standard");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  // Auto-fill sub-types when category changes
  useEffect(() => {
    const catData = CATEGORIES.find((c) => c.id === category);
    if (catData && catData.types.length > 0) {
      setSubType(catData.types[0].id);
      
      // Adapt default specs for category
      if (category === "conveyor" || category === "custom") {
        setWidth(800);
        setThickness(12);
        setLength(150);
        setReinforcement("EP Fabric (Polyester/Polyamide)");
      } else if (category === "drive") {
        setWidth(50);
        setThickness(8);
        setLength(5);
        setReinforcement("Polyester Tension Cord");
      } else if (category === "precision") {
        setWidth(25);
        setThickness(4);
        setLength(3);
        setReinforcement("High-Tensile Fiberglass Cord");
      }
    }
  }, [category]);

  const generateQuoteId = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `BFQ-2026-${rand}`;
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) {
      alert("Please fill in the required fields (Name, Email, Company).");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setQuoteId(generateQuoteId());
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  // Calculations for Readout Panel
  const areaM2 = ((width / 1000) * length).toFixed(1);
  // Estimate weight in Kg: volume (m3) * density (~1300 kg/m3)
  const estWeightKg = Math.round((width / 1000) * (thickness / 1000) * length * 1300);
  const estWeightTons = (estWeightKg / 1000).toFixed(2);

  // Selected details labels
  const selectedCategoryLabel = CATEGORIES.find((c) => c.id === category)?.title || "";
  const selectedTypeLabel = CATEGORIES.find((c) => c.id === category)?.types.find((t) => t.id === subType)?.label || "";

  return (
    <>
      <Header theme="light" />

      <main className="min-h-screen bg-linear-to-b from-[#f7f8fa] via-white to-[#f7f8fa] py-12 md:py-20">
        <div className="container-custom">
          {/* Header Hero Banner */}
          <div className="max-w-4xl lg:mb-12 mb-6">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Online Configurator
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-title tracking-tight mb-4 font-heading">
              Request a Free <span className="text-accent">Engineering Quote</span>
            </h1>
            <p className="text-subtitle text-lg max-w-2xl">
              Configure your specific industrial belt requirements. Our engineering team will review the parameters and provide a comprehensive proposal within 24 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Form Wizard (7 cols) */}
                <div className="lg:col-span-7 bg-white rounded-3xl border border-border/80 shadow-[0_10px_40px_rgba(15,23,42,0.04)] overflow-hidden">
                  
                  {/* Step indicators */}
                  <div className="bg-primary text-white/50 px-6 py-5 border-b border-primary-light flex items-center justify-between select-none">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono">
                      <span className="text-accent text-sm">Step {step}/4</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white">
                        {step === 1 && "Belt Selection"}
                        {step === 2 && "Technical Parameters"}
                        {step === 3 && "Operating Conditions"}
                        {step === 4 && "Contact & Submit"}
                      </span>
                    </div>
                    {/* Tiny visual progress bar */}
                    <div className="w-24 h-1.5 bg-primary-light rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: "25%" }}
                        animate={{ width: `${step * 25}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-8" id="quote-configurator-form">
                      
                      {/* STEP 1: CATEGORY & TYPE */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-sm font-bold text-title uppercase tracking-wider mb-4 font-mono">
                              1. Select Belt Category
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {CATEGORIES.map((cat) => (
                                <button
                                  key={cat.id}
                                  type="button"
                                  onClick={() => setCategory(cat.id)}
                                  className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer group ${
                                    category === cat.id
                                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                                      : "border-border hover:border-secondary hover:bg-background-soft"
                                  }`}
                                >
                                  <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                                    category === cat.id ? "bg-accent text-white" : "bg-[#0c1a2e]/5 text-primary group-hover:bg-primary group-hover:text-white"
                                  }`}>
                                    {cat.icon}
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-sm text-title mb-1 leading-none">{cat.title}</h3>
                                    <p className="text-xs text-subtitle/70 leading-relaxed">{cat.desc}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-bold text-title uppercase tracking-wider mb-4 font-mono">
                              2. Choose Specific Belt Type
                            </label>
                            <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-1">
                              {CATEGORIES.find((c) => c.id === category)?.types.map((type) => (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => setSubType(type.id)}
                                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                    subType === type.id
                                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                                      : "border-border hover:border-secondary hover:bg-background-soft"
                                  }`}
                                >
                                  <div className="min-w-0 pr-4">
                                    <p className="font-bold text-sm text-title mb-0.5">{type.label}</p>
                                    <p className="text-xs text-subtitle/60 truncate">{type.desc}</p>
                                  </div>
                                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                    subType === type.id ? "border-primary bg-primary text-white" : "border-border"
                                  }`}>
                                    {subType === type.id && (
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2: TECHNICAL PARAMETERS */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <h3 className="text-base font-bold text-title uppercase tracking-wider mb-6 border-b border-border pb-2 font-mono">
                            Technical Dimensions & Specifications
                          </h3>

                          {/* Dimensions Inputs */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Width Slider / Input */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Width (mm)</label>
                                <span className="text-xs font-mono font-bold bg-[#0c1a2e]/5 px-2 py-0.5 rounded text-primary">{width} mm</span>
                              </div>
                              <input 
                                type="number" 
                                value={width} 
                                onChange={(e) => setWidth(Math.max(10, Number(e.target.value)))}
                                className="w-full px-4 py-2.5 bg-white border border-border text-sm text-dark placeholder:text-subtitle/40 focus:border-primary focus:outline-none transition-colors mb-2 rounded-lg"
                              />
                              <input 
                                type="range" 
                                min={category === "conveyor" ? 300 : 10} 
                                max={category === "conveyor" ? 2400 : 500} 
                                value={width} 
                                onChange={(e) => setWidth(Number(e.target.value))}
                                className="w-full h-1.5 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary" 
                              />
                              <span className="text-[10px] text-subtitle/50">
                                {category === "conveyor" ? "Range: 300mm to 2400mm" : "Range: 10mm to 500mm"}
                              </span>
                            </div>

                            {/* Thickness Slider / Input */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Thickness (mm)</label>
                                <span className="text-xs font-mono font-bold bg-[#0c1a2e]/5 px-2 py-0.5 rounded text-primary">{thickness} mm</span>
                              </div>
                              <input 
                                type="number" 
                                value={thickness} 
                                step="0.5"
                                onChange={(e) => setThickness(Math.max(1, Number(e.target.value)))}
                                className="w-full px-4 py-2.5 bg-white border border-border text-sm text-dark placeholder:text-subtitle/40 focus:border-primary focus:outline-none transition-colors mb-2 rounded-lg"
                              />
                              <input 
                                type="range" 
                                min={category === "conveyor" ? 5 : 1} 
                                max={category === "conveyor" ? 40 : 25} 
                                step="0.5"
                                value={thickness} 
                                onChange={(e) => setThickness(Number(e.target.value))}
                                className="w-full h-1.5 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary" 
                              />
                              <span className="text-[10px] text-subtitle/50">
                                {category === "conveyor" ? "Range: 5.0mm to 40.0mm" : "Range: 1.0mm to 25.0mm"}
                              </span>
                            </div>

                            {/* Length Input */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                                  {category === "conveyor" ? "Length (m)" : "Length (mm/m)"}
                                </label>
                                <span className="text-xs font-mono font-bold bg-[#0c1a2e]/5 px-2 py-0.5 rounded text-primary">
                                  {length} {category === "conveyor" ? "meters" : "units"}
                                </span>
                              </div>
                              <input 
                                type="number" 
                                min={1} 
                                value={length} 
                                onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                                className="w-full px-4 py-2.5 bg-white border border-border text-sm text-dark placeholder:text-subtitle/40 focus:border-primary focus:outline-none transition-colors rounded-lg"
                              />
                              <span className="text-[10px] text-subtitle/50 block mt-1">Enter total loop or roll length</span>
                            </div>
                          </div>

                          {/* Technical Core Reinforcement Specs */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-light">
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                Reinforcement Carcass / Cord
                              </label>
                              <select 
                                value={reinforcement} 
                                onChange={(e) => setReinforcement(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                              >
                                {category === "conveyor" && (
                                  <>
                                    <option value="EP Fabric (Polyester/Polyamide)">EP Fabric Carcass (Standard)</option>
                                    <option value="NN Fabric (Nylon/Nylon)">NN Nylon Carcass (Impact Resistant)</option>
                                    <option value="Steel Cord Reinforcement">Steel Cord Carcass (Overland Heavy Duty)</option>
                                    <option value="Cotton / Synthetic Blend">Cotton Blend (Light Weight)</option>
                                  </>
                                )}
                                {category === "drive" && (
                                  <>
                                    <option value="Polyester Tension Cord">Polyester Tension Cord</option>
                                    <option value="Aramid / Kevlar Cord">Aramid / Kevlar Cord (High Horsepower)</option>
                                    <option value="Steel Tension Cord">Steel Cord Core</option>
                                  </>
                                )}
                                {category === "precision" && (
                                  <>
                                    <option value="High-Tensile Fiberglass Cord">High-Tensile Fiberglass Cord</option>
                                    <option value="Steel Cord Reinforcement">Steel Cord Core (Zero Elongation)</option>
                                    <option value="Kevlar Tension Member">Kevlar Tension Member</option>
                                  </>
                                )}
                                {category === "custom" && (
                                  <>
                                    <option value="EP Fabric (Polyester/Polyamide)">EP Fabric Carcass</option>
                                    <option value="Steel Cord Reinforcement">Steel Cord Reinforcement</option>
                                    <option value="Aramid / Kevlar Core">Aramid / Kevlar Core</option>
                                    <option value="Specialty Heat-Stable Carcass">Specialty Heat-Stable Carcass</option>
                                  </>
                                )}
                              </select>
                            </div>

                            {category === "conveyor" ? (
                              <div>
                                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                  Number of Fabric Plies
                                </label>
                                <select 
                                  value={carcassPlies} 
                                  onChange={(e) => setCarcassPlies(Number(e.target.value))}
                                  className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                                >
                                  <option value={2}>2 Plies (Light-Medium Duty)</option>
                                  <option value={3}>3 Plies (Medium Duty - Standard)</option>
                                  <option value={4}>4 Plies (Heavy Duty)</option>
                                  <option value={5}>5 Plies (Super Heavy Duty)</option>
                                  <option value={6}>6 Plies (Extra Reinforced)</option>
                                </select>
                              </div>
                            ) : (
                              <div>
                                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                  Profile Grade / Tension Cord Standard
                                </label>
                                <input
                                  type="text"
                                  value={coverGrade}
                                  onChange={(e) => setCoverGrade(e.target.value)}
                                  placeholder="e.g. Profile SPB, Cogged, Standard Raw Edge"
                                  className="w-full px-4 py-3 bg-white border border-border text-sm text-dark placeholder:text-subtitle/40 focus:border-primary focus:outline-none transition-colors rounded-lg"
                                />
                              </div>
                            )}
                          </div>

                          {category === "conveyor" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                  Cover Grade / Compound Style
                                </label>
                                <select
                                  value={coverGrade}
                                  onChange={(e) => setCoverGrade(e.target.value)}
                                  className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                                >
                                  <option value="Grade M24 (Heavy Duty)">Grade M24 (High Impact & Abrasion)</option>
                                  <option value="Grade N17 (Medium Duty)">Grade N17 (General Handling)</option>
                                  <option value="Heat-Resistant HR (T1 - 125°C)">Heat-Resistant HR (T1 - 125°C)</option>
                                  <option value="Super Heat-Resistant SHR (T2 - 200°C)">Super Heat-Resistant SHR (T2 - 200°C)</option>
                                  <option value="SAR (Super Abrasion Resistant)">SAR (Super Abrasion Resistant)</option>
                                  <option value="FR Grade (Flame Retardant)">FR Grade (Self-Extinguishing)</option>
                                  <option value="Food Grade (FDA White/Blue)">Food Grade (FDA White/Blue)</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {/* Extra Checkboxes */}
                          <div className="space-y-3 pt-4 border-t border-border-light">
                            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                              Special Operational Cover Demands
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                              <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-background-soft cursor-pointer flex-1 text-sm font-semibold select-none">
                                <input 
                                  type="checkbox" 
                                  checked={isAntistatic}
                                  onChange={(e) => setIsAntistatic(e.target.checked)}
                                  className="w-4 h-4 accent-primary" 
                                />
                                <div>
                                  <p className="text-title">Anti-Static Treatment</p>
                                  <p className="text-[10px] text-subtitle/50 font-normal">Prevents spark risks / ISO 284</p>
                                </div>
                              </label>

                              <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-background-soft cursor-pointer flex-1 text-sm font-semibold select-none">
                                <input 
                                  type="checkbox"
                                  checked={isFoodGrade}
                                  onChange={(e) => setIsFoodGrade(e.target.checked)}
                                  className="w-4 h-4 accent-primary" 
                                />
                                <div>
                                  <p className="text-title">Food Contact / Hygienic</p>
                                  <p className="text-[10px] text-subtitle/50 font-normal">FDA 21 CFR 177.2600 compliant</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3: OPERATING CONDITIONS */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <h3 className="text-base font-bold text-title uppercase tracking-wider mb-6 border-b border-border pb-2 font-mono">
                            Operational Environment & Load Factors
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                Primary Material Transported
                              </label>
                              <select 
                                value={materialCarried} 
                                onChange={(e) => setMaterialCarried(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                              >
                                <option value="aggregates">Sand, Gravel & Aggregates</option>
                                <option value="coal">Coal / Lignite</option>
                                <option value="ore">Metallic Ores (Iron, Copper, Gold)</option>
                                <option value="cement">Cement Clinker & Limestone</option>
                                <option value="packaged">Packaged Goods / Cartons</option>
                                <option value="food">Direct Food / Grain Products</option>
                                <option value="chemicals">Chemicals & Fertilizers</option>
                                <option value="none">Power Transfer Only (Drive Belts)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                Operating Temperature (°C)
                              </label>
                              <div className="flex gap-4 items-center">
                                <input 
                                  type="number" 
                                  value={temperature}
                                  onChange={(e) => setTemperature(Number(e.target.value))}
                                  className="w-24 px-4 py-2.5 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                                />
                                <input 
                                  type="range" 
                                  min={-40} 
                                  max={220} 
                                  value={temperature}
                                  onChange={(e) => setTemperature(Number(e.target.value))}
                                  className="flex-1 h-1.5 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary" 
                                />
                              </div>
                              <span className="text-[10px] text-subtitle/50 block mt-1">
                                Ambient or material temperature. Current: {temperature}°C
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-light">
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                Installation Environment
                              </label>
                              <div className="grid grid-cols-3 gap-2">
                                {[
                                  { id: "outdoor", label: "Outdoor" },
                                  { id: "indoor", label: "Indoor" },
                                  { id: "underground", label: "Mines" },
                                ].map((env) => (
                                  <button
                                    key={env.id}
                                    type="button"
                                    onClick={() => setEnvironment(env.id)}
                                    className={`py-2 text-xs font-bold rounded-lg border text-center transition-all duration-200 cursor-pointer ${
                                      environment === env.id
                                        ? "border-primary bg-primary text-white"
                                        : "border-border hover:border-secondary hover:bg-background-soft text-dark"
                                    }`}
                                  >
                                    {env.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                Estimated Load Capacity (TPH)
                              </label>
                              <input 
                                type="text" 
                                value={estimatedTph}
                                onChange={(e) => setEstimatedTph(e.target.value)}
                                placeholder="e.g. 500 Tons/Hour or N/A"
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark placeholder:text-subtitle/40 focus:border-primary focus:outline-none transition-colors rounded-lg"
                              />
                              <span className="text-[10px] text-subtitle/50">Tons per Hour bulk weight, or peak speed</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 4: CONTACT & SUBMIT */}
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <h3 className="text-base font-bold text-title uppercase tracking-wider mb-6 border-b border-border pb-2 font-mono">
                            Corporate Contact Details
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Full Name *</label>
                              <input 
                                type="text" 
                                required
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe" 
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Corporate Email *</label>
                              <input 
                                type="email" 
                                required
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john@company.com" 
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Phone Number *</label>
                              <input 
                                type="tel" 
                                required
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91-XXXXX-XXXXX" 
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Company Name *</label>
                              <input 
                                type="text" 
                                required
                                value={company} 
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Engineering Ltd." 
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Delivery / Shipping Location</label>
                              <input 
                                type="text" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="City, Country" 
                                className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Project Order Quantity</label>
                              <div className="flex gap-2">
                                <input 
                                  type="number" 
                                  min={1} 
                                  value={quantity} 
                                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                  className="w-20 px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg" 
                                />
                                <select 
                                  className="flex-1 px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors rounded-lg"
                                >
                                  <option value="meters">{category === "conveyor" ? "Rolls (150m standard)" : "Units"}</option>
                                  <option value="meters">Total Meters</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Timeline Requirement</label>
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                              {[
                                { id: "urgent", label: "Urgent (< 2 weeks)" },
                                { id: "standard", label: "Standard (2-4 weeks)" },
                                { id: "flexible", label: "Flexible Plan" },
                              ].map((t) => (
                                <button
                                  key={t.id}
                                  type="button"
                                  onClick={() => setTimeline(t.id)}
                                  className={`py-3 px-2 text-xs font-bold rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                                    timeline === t.id
                                      ? "border-accent bg-accent/5 text-accent ring-1 ring-accent"
                                      : "border-border hover:border-secondary hover:bg-background-soft text-dark"
                                  }`}
                                >
                                  {t.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Additional Technical Specs or Instructions</label>
                            <textarea 
                              rows={4}
                              value={additionalNotes}
                              onChange={(e) => setAdditionalNotes(e.target.value)}
                              placeholder="e.g. custom splices, particular edge profiles, dynamic tension properties, or any drawing notes..."
                              className="w-full px-4 py-3 bg-white border border-border text-sm text-dark focus:border-primary focus:outline-none transition-colors resize-none rounded-lg"
                            />
                          </div>

                          {/* Mock Drawing Upload */}
                          <div className="p-5 border-2 border-dashed border-border rounded-2xl bg-background-soft hover:bg-white hover:border-accent transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer select-none">
                            <svg className="w-10 h-10 text-subtitle/40 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                            <p className="text-xs font-bold text-title">Attach Blueprint / Spec Sheet (PDF, DWG, PNG)</p>
                            <p className="text-[10px] text-subtitle/50 mt-1">Drag and drop your engineering file here (Max 10MB)</p>
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation buttons */}
                      <div className="flex items-center justify-between pt-6 border-t border-border-light sm:flex-row flex-col">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className={`btn-pill btn-outline text-xs py-3 px-6 cursor-pointer ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                        >
                          Back
                        </button>

                        {step < 4 ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            className="btn-pill btn-primary text-xs py-3 px-8 bg-primary hover:bg-primary-dark cursor-pointer text-white rounded-full flex items-center gap-2"
                          >
                            Next Step
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-pill btn-accent text-xs py-3 px-8 cursor-pointer rounded-full text-white flex items-center gap-2 ${
                              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                Submit Quote Request
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                    </form>
                  </div>
                </div>

                {/* Right Column: Live Technical Visualizer (5 cols) */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                  
                  {/* Real-time Technical Schematic Card */}
                  <div className="bg-[#0b0f19] text-white rounded-3xl border border-white/5 shadow-2xl p-6 relative overflow-hidden">
                    {/* Background grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(70,115,197,0.06),transparent)] pointer-events-none" />
                    <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                    <div className="flex justify-between items-center mb-6 relative z-10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-accent font-bold uppercase block">
                          SYSTEM SCHEMATIC
                        </span>
                        <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                          Live Configuration
                        </h2>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono text-[10px] tracking-widest font-bold">
                        DRAFT
                      </span>
                    </div>

                    {/* Animated SVG Diagram Area */}
                    <div className="w-full h-44 bg-[#05070a]/90 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden relative z-10">
                      
                      {category === "conveyor" && (
                        <svg className="w-4/5 h-4/5" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Pulley Left */}
                          <circle cx="45" cy="50" r="16" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" className="origin-[45px_50px] animate-spin" style={{ animationDuration: "10s" }} />
                          <circle cx="45" cy="50" r="4" fill="white" />
                          <circle cx="45" cy="50" r="14" stroke="#ffffff30" strokeWidth="0.5" />
                          
                          {/* Pulley Right */}
                          <circle cx="155" cy="50" r="16" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" className="origin-[155px_50px] animate-spin" style={{ animationDuration: "10s" }} />
                          <circle cx="155" cy="50" r="4" fill="white" />
                          <circle cx="155" cy="50" r="14" stroke="#ffffff30" strokeWidth="0.5" />

                          {/* Material load cubes if general/abrasion/ore */}
                          {step >= 3 && materialCarried !== "none" && (
                            <g className="translate-y-[-4px]">
                              <path d="M 65 30 L 73 30 L 69 25 Z" fill="#c87533" className="animate-pulse" />
                              <path d="M 100 30 L 108 30 L 104 25 Z" fill="#c87533" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                              <path d="M 135 30 L 143 30 L 139 25 Z" fill="#c87533" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                            </g>
                          )}

                          {/* Conveyor Belt Loop */}
                          <path 
                            d="M 45 34 L 155 34 A 16 16 0 0 1 171 50 A 16 16 0 0 1 155 66 L 45 66 A 16 16 0 0 1 29 50 A 16 16 0 0 1 45 34 Z" 
                            stroke="#c87533" 
                            strokeWidth={Math.max(2, Math.min(6, thickness / 2.5))} // Dynamically scale stroke-width on thickness select
                            strokeDasharray="8 6"
                            className="draw-conveyor-belt"
                          />

                          {/* Dimension labels */}
                          <g className="text-[7px] fill-white/40 font-mono">
                            <text x="100" y="24" textAnchor="middle">Width (W): {width}mm</text>
                            <text x="100" y="80" textAnchor="middle">Length (L): {length}m</text>
                            <text x="2" y="52" textAnchor="start">Thickness: {thickness}mm</text>
                          </g>

                          <style>{`
                            .draw-conveyor-belt {
                              stroke-dashoffset: 0;
                              animation: scroll-belt 8s linear infinite;
                            }
                            @keyframes scroll-belt {
                              to {
                                stroke-dashoffset: -100;
                              }
                            }
                          `}</style>
                        </svg>
                      )}

                      {category === "drive" && (
                        <svg className="w-4/5 h-4/5" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Left Pulley (Big) */}
                          <circle cx="50" cy="50" r="22" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" className="origin-[50px_50px] animate-spin" style={{ animationDuration: "14s" }} />
                          <circle cx="50" cy="50" r="6" stroke="white" strokeWidth="1" />
                          <circle cx="50" cy="50" r="1.5" fill="white" />
                          
                          {/* Right Pulley (Small) */}
                          <circle cx="150" cy="50" r="12" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" className="origin-[150px_50px] animate-spin" style={{ animationDuration: "7s" }} />
                          <circle cx="150" cy="50" r="4" stroke="white" strokeWidth="1" />
                          <circle cx="150" cy="50" r="1" fill="white" />

                          {/* V-Belt */}
                          <path 
                            d="M 50 28 L 150 38 A 12 12 0 0 1 162 50 A 12 12 0 0 1 150 62 L 50 72 A 22 22 0 0 1 28 50 A 22 22 0 0 1 50 28 Z" 
                            stroke="#c87533" 
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M 50 28 L 150 38 A 12 12 0 0 1 162 50 A 12 12 0 0 1 150 62 L 50 72 A 22 22 0 0 1 28 50 A 22 22 0 0 1 50 28 Z" 
                            stroke="white" 
                            strokeWidth="0.8"
                            strokeDasharray="4 4"
                            strokeLinejoin="round"
                            className="draw-v-belt"
                          />

                          <g className="text-[7px] fill-white/40 font-mono">
                            <text x="100" y="20" textAnchor="middle">SPB Power Drive Profile</text>
                            <text x="100" y="85" textAnchor="middle">Belt Length: {length} units</text>
                          </g>

                          <style>{`
                            .draw-v-belt {
                              stroke-dashoffset: 0;
                              animation: scroll-belt-fast 5s linear infinite;
                            }
                            @keyframes scroll-belt-fast {
                              to {
                                stroke-dashoffset: -100;
                              }
                            }
                          `}</style>
                        </svg>
                      )}

                      {category === "precision" && (
                        <svg className="w-4/5 h-4/5" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Toothed gears */}
                          {/* Left Gear */}
                          <g className="origin-[50px_50px] animate-spin" style={{ animationDuration: "12s" }}>
                            <circle cx="50" cy="50" r="18" stroke="white" strokeWidth="1" />
                            {/* Teeth notches */}
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                              <line 
                                key={deg} 
                                x1={50 + 17 * Math.cos((deg * Math.PI) / 180)} 
                                y1={50 + 17 * Math.sin((deg * Math.PI) / 180)} 
                                x2={50 + 20 * Math.cos((deg * Math.PI) / 180)} 
                                y2={50 + 20 * Math.sin((deg * Math.PI) / 180)} 
                                stroke="white" 
                                strokeWidth="1.5" 
                              />
                            ))}
                          </g>
                          <circle cx="50" cy="50" r="4" fill="white" />

                          {/* Right Gear */}
                          <g className="origin-[150px_50px] animate-spin" style={{ animationDuration: "12s" }}>
                            <circle cx="150" cy="50" r="18" stroke="white" strokeWidth="1" />
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                              <line 
                                key={deg} 
                                x1={150 + 17 * Math.cos((deg * Math.PI) / 180)} 
                                y1={50 + 17 * Math.sin((deg * Math.PI) / 180)} 
                                x2={150 + 20 * Math.cos((deg * Math.PI) / 180)} 
                                y2={50 + 20 * Math.sin((deg * Math.PI) / 180)} 
                                stroke="white" 
                                strokeWidth="1.5" 
                              />
                            ))}
                          </g>
                          <circle cx="150" cy="50" r="4" fill="white" />

                          {/* Toothed timing belt line */}
                          <path 
                            d="M 50 31 L 150 31 A 19 19 0 0 1 169 50 A 19 19 0 0 1 150 69 L 50 69 A 19 19 0 0 1 31 50 A 19 19 0 0 1 50 31 Z" 
                            stroke="#c87533" 
                            strokeWidth="2.5"
                          />
                          <path 
                            d="M 50 31 L 150 31 A 19 19 0 0 1 169 50 A 19 19 0 0 1 150 69 L 50 69 A 19 19 0 0 1 31 50 A 19 19 0 0 1 50 31 Z" 
                            stroke="white" 
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="draw-timing-belt"
                          />

                          <g className="text-[7px] fill-white/40 font-mono">
                            <text x="100" y="20" textAnchor="middle">HTD 8M Synchronous Profile</text>
                            <text x="100" y="85" textAnchor="middle">Zero-Slip Core Mesh</text>
                          </g>

                          <style>{`
                            .draw-timing-belt {
                              stroke-dashoffset: 0;
                              animation: scroll-belt-fast 6s linear infinite;
                            }
                          `}</style>
                        </svg>
                      )}

                      {category === "custom" && (
                        <svg className="w-4/5 h-4/5" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Blueprint Grid */}
                          <line x1="20" y1="10" x2="20" y2="90" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="60" y1="10" x2="60" y2="90" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="100" y1="10" x2="100" y2="90" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="140" y1="10" x2="140" y2="90" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="180" y1="10" x2="180" y2="90" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="10" y1="20" x2="190" y2="20" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="10" y1="50" x2="190" y2="50" stroke="#ffffff10" strokeWidth="0.5" />
                          <line x1="10" y1="80" x2="190" y2="80" stroke="#ffffff10" strokeWidth="0.5" />

                          {/* Technical drawing profile */}
                          <path d="M 30 65 L 70 35 L 130 35 L 170 65 Z" stroke="#ffffff80" strokeWidth="1.5" strokeDasharray="2 2" />
                          <line x1="30" y1="65" x2="170" y2="65" stroke="#c87533" strokeWidth="1.5" />
                          
                          <circle cx="70" cy="35" r="3" fill="#c87533" />
                          <circle cx="130" cy="35" r="3" fill="#c87533" />
                          
                          {/* Callout dimension */}
                          <path d="M 70 30 L 70 20 M 130 30 L 130 20 M 70 22 L 130 22" stroke="white" strokeWidth="0.5" />
                          <polygon points="70,22 74,20 74,24" fill="white" />
                          <polygon points="130,22 126,20 126,24" fill="white" />

                          <g className="text-[7px] fill-white/40 font-mono">
                            <text x="100" y="17" textAnchor="middle">Bespoke Dim A</text>
                            <text x="100" y="80" textAnchor="middle">Custom Profile Blueprint</text>
                          </g>
                        </svg>
                      )}

                    </div>

                    {/* Calculated telemetries */}
                    <div className="mt-6 pt-6 border-t border-white/5 space-y-3 font-mono text-[11px]">
                      <div className="flex justify-between items-center text-white/50">
                        <span>Selected Category:</span>
                        <span className="text-white font-bold">{selectedCategoryLabel}</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50">
                        <span>Belt Profile Style:</span>
                        <span className="text-white font-bold">{selectedTypeLabel}</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50">
                        <span>Carcass Reinforcement:</span>
                        <span className="text-white font-bold truncate max-w-[200px]">{reinforcement}</span>
                      </div>
                      
                      {category === "conveyor" && (
                        <>
                          <div className="flex justify-between items-center text-white/50">
                            <span>Total Surface Area:</span>
                            <span className="text-accent font-bold">{areaM2} m²</span>
                          </div>
                          <div className="flex justify-between items-center text-white/50">
                            <span>Est. Material Weight:</span>
                            <span className="text-accent font-bold">~ {estWeightTons} Tons ({estWeightKg.toLocaleString()} kg)</span>
                          </div>
                          <div className="flex justify-between items-center text-white/50">
                            <span>ISO Plies Rating:</span>
                            <span className="text-white font-bold">{carcassPlies} Ply Construction</span>
                          </div>
                        </>
                      )}

                      <div className="flex justify-between items-center text-white/50 border-t border-white/5 pt-3">
                        <span>Anti-Static / Food Safe:</span>
                        <span className="text-white font-bold">
                          {isAntistatic ? "ISO 284" : ""} {isFoodGrade ? "FDA Approved" : ""} {!isAntistatic && !isFoodGrade ? "Standard" : ""}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-white/50">
                        <span>Estimated Lead Time:</span>
                        <span className="text-green-400 font-bold">
                          {timeline === "urgent" ? "10 - 14 Days (Expedited)" : ""}
                          {timeline === "standard" ? "18 - 24 Days (Standard)" : ""}
                          {timeline === "flexible" ? "4 - 5 Weeks (Flexible)" : ""}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Trust badges sidebar card */}
                  <div className="bg-[#f7f8fa] rounded-3xl border border-border/80 p-6 space-y-4">
                    <h4 className="text-xs font-bold text-[#0c1a2e] uppercase tracking-widest font-mono">
                      Earth Flex Guarantee
                    </h4>
                    <div className="space-y-3.5">
                      {[
                        { title: "24-Hour Review", desc: "Our chief materials engineering team reviews every parameter." },
                        { title: "ISO 9001 Standards", desc: "Manufactured strictly under certified quality management systems." },
                        { title: "Pre-Dispatch Testing", desc: "Tensile, adhesion, and cover abrasion tests run prior to delivery." },
                      ].map((badge, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-title">{badge.title}</p>
                            <p className="text-[11px] text-subtitle/70 leading-normal">{badge.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              /* SUCCESS STATE SCREEN */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-3xl mx-auto bg-white rounded-3xl border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] overflow-hidden"
              >
                {/* Visual success banner */}
                <div className="bg-primary text-white p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(70,115,197,0.4)]">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-heading">
                    Request Received Successfully!
                  </h2>
                  <p className="text-white/60 text-sm max-w-md mx-auto">
                    Your configuration parameters have been submitted. An industrial engineer will contact you shortly with an official B2B quotation.
                  </p>

                  <div className="mt-6 inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-lg font-mono text-xs">
                    QUOTE REFERENCE ID: <span className="text-accent font-bold">{quoteId}</span>
                  </div>
                </div>

                {/* Summary Technical Receipt */}
                <div className="p-6 md:p-10 space-y-6">
                  <h3 className="text-sm font-bold text-title uppercase tracking-wider border-b border-border pb-2 font-mono">
                    Configuration Readout
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Client Representative:</span>
                      <span className="font-semibold text-title">{name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Company:</span>
                      <span className="font-semibold text-title">{company}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Corporate Email:</span>
                      <span className="font-semibold text-title">{email}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Phone Contact:</span>
                      <span className="font-semibold text-title">{phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Belt Category:</span>
                      <span className="font-semibold text-title">{selectedCategoryLabel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Configuration Style:</span>
                      <span className="font-semibold text-title">{selectedTypeLabel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Dimensions:</span>
                      <span className="font-bold text-accent">
                        {width}mm x {thickness}mm x {length}{category === "conveyor" ? "m" : " units"}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Reinforcement Core:</span>
                      <span className="font-semibold text-title truncate max-w-[200px]">{reinforcement}</span>
                    </div>
                    {category === "conveyor" && (
                      <>
                        <div className="flex justify-between py-1 border-b border-border-light">
                          <span className="text-subtitle/70">Estimated Roll Weight:</span>
                          <span className="font-semibold text-title">{estWeightTons} Tons</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border-light">
                          <span className="text-subtitle/70">Total Area:</span>
                          <span className="font-semibold text-title">{areaM2} m²</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Requested Quantity:</span>
                      <span className="font-semibold text-title">{quantity} {category === "conveyor" ? "Rolls" : "Units"}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-light">
                      <span className="text-subtitle/70">Delivery Timeline:</span>
                      <span className="font-bold text-green-600 uppercase text-xs mt-0.5">
                        {timeline === "urgent" ? "Urgent Delivery" : ""}
                        {timeline === "standard" ? "Standard Delivery" : ""}
                        {timeline === "flexible" ? "Flexible Schedule" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#f7f8fa] p-5 rounded-2xl border border-border flex items-start gap-4">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-xs font-bold text-title uppercase tracking-widest font-mono mb-1">What happens next?</h4>
                      <ol className="text-xs text-subtitle/80 space-y-1.5 list-decimal pl-4">
                        <li>A materials engineer reviews the mechanical stress and load parameters.</li>
                        <li>We call or email you to confirm delivery logistics and custom requirements.</li>
                        <li>An official B2B contract proposal is emailed as a PDF within 24 hours.</li>
                      </ol>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button href="/" variant="primary" size="lg">
                      Return to Homepage
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
}
