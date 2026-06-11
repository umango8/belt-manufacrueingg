"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function EarthHaulPage() {
  const [selectedFleet, setSelectedFleet] = useState(0);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    material: "Aggregate",
    weight: "",
  });

  const fleet = [
    {
      name: "Mega Tipper Trailer",
      capacity: "45 Metric Tons",
      engine: "480 HP Volvo FMX",
      cargo: "Coal, Iron Ore, Aggregates",
      desc: "Designed for heavy-duty mining and rough quarry terrains with advanced hydraulic tipping systems.",
      image: "/earthhaul_hero_truck.png",
      tag: "MINING & BULK"
    },
    {
      name: "Pneumatic Bulk Tanker",
      capacity: "35 Metric Tons",
      engine: "420 HP Scania G410",
      cargo: "Cement, Fly Ash, Bentonite",
      desc: "Specialized pressure-sealed tankers for zero-moisture transport of powder aggregates.",
      image: "/earthhaul_hero_truck.png",
      tag: "POWDER MATERIAL"
    },
    {
      name: "Heavy-Duty Flatbed",
      capacity: "60 Metric Tons",
      engine: "520 HP BharatBenz 5528T",
      cargo: "Steel Coils, Machineries, Rails",
      desc: "Reinforced steel chassis flatbeds designed for oversized, high-tonnage industrial cargoes.",
      image: "/earthhaul_hero_truck.png",
      tag: "OVERSIZED CARGO"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setFormData({ origin: "", destination: "", material: "Aggregate", weight: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#05070F] text-white flex flex-col relative overflow-hidden font-sans">
      {/* Background Tech Grids */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Custom Header */}
      <header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-yellow-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.317-5.11a2.25 2.25 0 0 0-1.885-2.086l-2.22-.37m-7.25 8.67h-1.5m6.75 0H13.5m3-5.625-1.5-1.5m-1.5 1.5h-1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight leading-none uppercase">
                Earth <span className="text-yellow-500">Haul</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase mt-0.5">Logistics Division</span>
            </div>
          </Link>
        </div>

        {/* Header Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-white/60">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Group Gateway</Link>
          <Link href="/earthflex" className="hover:text-orange-500 transition-colors">EarthFlex Division</Link>
          <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
          <a href="#fleet" className="hover:text-yellow-500 transition-colors">Our Fleet</a>
          <a href="#quote" className="hover:text-yellow-500 transition-colors">Get Quote</a>
        </nav>

        {/* CTA */}
        <div>
          <a 
            href="#quote" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-[#05070F] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Fleet
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-xs font-bold tracking-[0.3em] text-yellow-500 uppercase font-mono bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/10 mb-6">
            Heavy-Duty Industrial Transport
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
            Bulk Hauling <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300">
              Made Seamless.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-white/50 leading-relaxed font-medium mb-8 max-w-lg">
            EarthHaul operates a premium, tech-enabled fleet designed for transport of high-volume industrial aggregates. We deliver raw materials on-time, safely, and under strict compliance across India's largest infrastructure hubs.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#quote" className="px-6 py-3.5 bg-yellow-500 hover:bg-yellow-600 text-[#05070F] text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
              Book Cargo Hauling
            </a>
            <a href="#fleet" className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-bold rounded-xl transition-all duration-300">
              View Heavy Fleet
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-md">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-yellow-500">10M+</p>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">Tons Hauled</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-yellow-500">250+</p>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">Fleet Units</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-yellow-500">99.8%</p>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">On-Time Rate</p>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="lg:col-span-6 relative flex justify-center z-10">
          <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(234,179,8,0.05)] bg-[#0A0C16]">
            {/* Ambient Yellow Light inside the image frame */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl" />
            <img 
              src="/earthhaul_hero_truck.png" 
              alt="EarthHaul heavy duty tipper trailer truck" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Tech overlays */}
            <div className="absolute bottom-5 left-5 bg-[#05070F]/90 border border-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold uppercase text-yellow-500">LIVE TELEMATICS</span>
                <span className="text-xs text-white font-bold tracking-tight">Active GPS Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="relative z-10 bg-[#070914] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-yellow-500 tracking-[0.25em] uppercase block mb-3">Our Operations</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Industrial Hauling Services</h2>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              We specialize in bulk logistics for core infrastructure sectors, providing reliable transport loops between mining pits, production plants, and ports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aggregate & Ore Transport",
                desc: "Efficient moving of coal, iron ore, limestone, clinker, sand, and gravel using high-capacity dump tippers.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              },
              {
                title: "Dry Bulk & Powders",
                desc: "Moisture-sealed pneumatic tankers dedicated for high-integrity transport of loose dry cement, fly ash, and chemicals.",
                icon: "M19.5 8.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              },
              {
                title: "Project Cargo & Machinery",
                desc: "High-tonnage flatbed trailers and low-beds configured to haul oversized heavy industrial machinery, pipes, and structures.",
                icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zm-2-7h-8.5v8H19v-8zm-8.5 0H5v8h5.5v-8z"
              }
            ].map((svc, idx) => (
              <div key={idx} className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-yellow-500/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">{svc.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Fleet Showcase */}
      <section id="fleet" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-yellow-500 tracking-[0.25em] uppercase block mb-3">Heavy-Duty Hardware</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Our Premium Fleet</h2>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Equipped with state-of-the-art vehicles certified for maximum safety and telemetry integration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Fleet Selector */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {fleet.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFleet(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    selectedFleet === idx
                      ? "bg-yellow-500/10 border-yellow-500 text-yellow-500"
                      : "bg-white/[0.01] border-white/5 text-white/60 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{item.tag}</span>
                    <span className="text-lg font-bold uppercase tracking-tight mt-1">{item.name}</span>
                  </div>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${selectedFleet === idx ? "translate-x-1 text-yellow-500" : "text-white/20"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Fleet details */}
            <div className="lg:col-span-8 bg-[#070914] border border-white/5 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFleet}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  <div className="md:col-span-7 flex flex-col items-start">
                    <span className="text-xs font-mono font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/10 px-3 py-1 rounded-full mb-4">
                      {fleet[selectedFleet].tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                      {fleet[selectedFleet].name}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                      {fleet[selectedFleet].desc}
                    </p>

                    <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-white/5">
                      <div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">Max Capacity</span>
                        <span className="text-base font-bold text-white mt-1 block">{fleet[selectedFleet].capacity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">Power Output</span>
                        <span className="text-base font-bold text-white mt-1 block">{fleet[selectedFleet].engine}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">Primary Cargo</span>
                        <span className="text-base font-bold text-white mt-1 block">{fleet[selectedFleet].cargo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#05070F]">
                      <img
                        src={fleet[selectedFleet].image}
                        alt={fleet[selectedFleet].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator / Form */}
      <section id="quote" className="relative z-10 bg-[#070914] py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <pattern id="form-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#form-grid)" />
              </svg>
            </div>

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-yellow-500 tracking-[0.25em] uppercase block mb-3">Quick Estimate</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Request Cargo Haulage</h2>
              <p className="text-sm text-white/50 mt-3">
                Submit your shipment parameters for a real-time cargo logistics consultation.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!quoteSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">Origin (City / Site)</label>
                      <input
                        type="text"
                        name="origin"
                        required
                        value={formData.origin}
                        onChange={handleInputChange}
                        placeholder="e.g. Mundra Port, Gujarat"
                        className="w-full bg-[#05070F] border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">Destination (City / Site)</label>
                      <input
                        type="text"
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="e.g. Cement Plant, Udaipur"
                        className="w-full bg-[#05070F] border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">Cargo Material Type</label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleInputChange}
                        className="w-full bg-[#05070F] border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white transition-all outline-none"
                      >
                        <option value="Coal">Coal / Minerals</option>
                        <option value="Cement">Cement / Fly Ash</option>
                        <option value="Aggregates">Aggregates (Sand/Gravel)</option>
                        <option value="Steel">Steel Coils / Rails</option>
                        <option value="Machinery">Oversized Machinery</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">Total Weight (Metric Tons)</label>
                      <input
                        type="number"
                        name="weight"
                        required
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="e.g. 500"
                        className="w-full bg-[#05070F] border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-[#05070F] text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-yellow-500/10"
                    >
                      Request Freight Quote
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Quote Request Received</h3>
                  <p className="text-sm text-white/50 max-w-sm">
                    Our logistics coordinators are reviewing your route parameters from <strong className="text-yellow-500">{formData.origin}</strong> to <strong className="text-yellow-500">{formData.destination}</strong>. A technical proposal will be sent to your group email within 1 hour.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-white/30">
        <div className="flex flex-col items-start gap-1">
          <p>© {new Date().getFullYear()} Earth India Group · EarthHaul Logistics.</p>
          <p className="text-white/10 uppercase tracking-widest text-[9px] mt-1">Industrial Bulk Supply-Chain Logistics</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-white transition-colors">Gateway Homepage</Link>
          <Link href="/earthflex" className="hover:text-white transition-colors">EarthFlex Website</Link>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </footer>
    </div>
  );
}
