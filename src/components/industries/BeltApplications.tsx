"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const APPLICATIONS = [
  {
    id: "material-handling",
    title: "Material Handling",
    description: "Robust conveyor belts for efficient transportation of raw materials, finished goods, and bulk commodities across production floors.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "conveyor-systems",
    title: "Conveyor Systems",
    description: "Complete conveyor belt solutions for linear, curved, and inclined systems — engineered for continuous high-volume operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "power-transmission",
    title: "Power Transmission",
    description: "V-belts, timing belts, and multi-ribbed belts delivering reliable power transfer in engines, motors, and industrial drive systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "precision-machinery",
    title: "Precision Machinery",
    description: "Ultra-precise timing and flat belts for CNC machines, robotic arms, and automated systems requiring exact positioning.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "heavy-duty",
    title: "Heavy-Duty Manufacturing",
    description: "Abrasion and heat resistant belts for steel mills, cement plants, and mining operations handling extreme loads and temperatures.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "high-speed",
    title: "High-Speed Operations",
    description: "Lightweight, balanced belts for high-RPM printing presses, packaging machines, and sorting systems requiring zero vibration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function BeltApplications() {
  return (
    <section
      id="belt-applications"
      className="section-padding bg-[#050811] relative overflow-hidden"
    >
      {/* Styles for glowing, flowing animated conveyor connectors */}
      <style jsx global>{`
        .conveyor-line-h {
          background-image: linear-gradient(90deg, #f97316 60%, transparent 40%);
          background-size: 8px 2px;
          animation: conveyor-flow-h 0.6s linear infinite;
        }
        .conveyor-line-h-rev {
          background-image: linear-gradient(-90deg, #f97316 60%, transparent 40%);
          background-size: 8px 2px;
          animation: conveyor-flow-h-rev 0.6s linear infinite;
        }
        .conveyor-line-v {
          background-image: linear-gradient(180deg, #f97316 60%, transparent 40%);
          background-size: 2px 8px;
          animation: conveyor-flow-v 0.6s linear infinite;
        }
        @keyframes conveyor-flow-h {
          from { background-position: 0 0; }
          to { background-position: 8px 0; }
        }
        @keyframes conveyor-flow-h-rev {
          from { background-position: 0 0; }
          to { background-position: -8px 0; }
        }
        @keyframes conveyor-flow-v {
          from { background-position: 0 0; }
          to { background-position: 0 8px; }
        }
      `}</style>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Giant watermark vector background */}
      <div className="absolute inset-x-0 top-12 lg:top-[-70px] flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.04] w-full">
        <span className="text-[14vw] font-black tracking-[0.15em] uppercase text-white font-sans leading-none select-none">
          BELTFORGE
        </span>
      </div>
        <div className="absolute  bottom-12 lg:bottom-[-70px] flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.04] w-full">
        <span className="text-[14vw] font-black tracking-[0.15em] uppercase text-accent font-sans leading-none select-none">
          BELTFORGE
        </span>
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Spinning gear background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-[0.04] z-0">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="w-full h-full text-white animate-[spin_120s_linear_infinite]">
          <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="45" strokeDasharray="4 2" />
          {[...Array(18)].map((_, i) => (
            <line key={i} x1="50" y1="2" x2="50" y2="10" transform={`rotate(${i * 20} 50 50)`} />
          ))}
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left mb-14 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6 border border-accent/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              BELTFORGE APPLICATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-6"
          >
            Industrial Belt <span className="text-accent">Applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-white/50 leading-relaxed font-medium"
          >
            Our industrial belts are engineered for six core application categories — from
            lightweight precision systems to extreme heavy-duty operations.
          </motion.p>
        </div>

        {/* Application Cards Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {APPLICATIONS.map((app, index) => {
            // Determine active connector classes based on responsive rules for perfect flow
            let showRight = false;
            let showLeft = false;
            let showDown = false;

            let rightClasses = "";
            let leftClasses = "";
            let downClasses = "";

            if (index === 0) {
              showRight = true;
              showDown = true;
              rightClasses = "hidden sm:block top-1/2 -translate-y-1/2 -right-[20px] lg:-right-[24px] w-[20px] lg:w-[24px] h-[2px] conveyor-line-h absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
              downClasses = "block sm:hidden left-1/2 -translate-x-1/2 -bottom-[20px] w-[2px] h-[20px] conveyor-line-v absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            } else if (index === 1) {
              showRight = true;
              showDown = true;
              rightClasses = "hidden lg:block top-1/2 -translate-y-1/2 lg:-right-[24px] lg:w-[24px] h-[2px] conveyor-line-h absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
              downClasses = "block lg:hidden left-1/2 -translate-x-1/2 -bottom-[20px] w-[2px] h-[20px] conveyor-line-v absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            } else if (index === 2) {
              showDown = true;
              downClasses = "block left-1/2 -translate-x-1/2 -bottom-[20px] lg:-bottom-[24px] w-[2px] h-[20px] lg:h-[24px] conveyor-line-v absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            } else if (index === 3) {
              showLeft = true;
              showDown = true;
              leftClasses = "hidden sm:block lg:hidden top-1/2 -translate-y-1/2 -left-[20px] w-[20px] h-[2px] conveyor-line-h-rev absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
              downClasses = "block lg:hidden left-1/2 -translate-x-1/2 -bottom-[20px] w-[2px] h-[20px] conveyor-line-v absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            } else if (index === 4) {
              showRight = true;
              showLeft = true;
              showDown = true;
              rightClasses = "hidden sm:block lg:hidden top-1/2 -translate-y-1/2 -right-[20px] w-[20px] h-[2px] conveyor-line-h absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
              leftClasses = "hidden lg:block top-1/2 -translate-y-1/2 lg:-left-[24px] lg:w-[24px] h-[2px] conveyor-line-h-rev absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
              downClasses = "block sm:hidden left-1/2 -translate-x-1/2 -bottom-[20px] w-[2px] h-[20px] conveyor-line-v absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            } else if (index === 5) {
              showLeft = true;
              leftClasses = "hidden lg:block top-1/2 -translate-y-1/2 lg:-left-[24px] lg:w-[24px] h-[2px] conveyor-line-h-rev absolute z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300";
            }

            return (
              <div key={app.id} className="relative group">
                {/* Visual Interconnecting Conveyor Track Lines */}
                {showRight && <div className={rightClasses} />}
                {showLeft && <div className={leftClasses} />}
                {showDown && <div className={downClasses} />}

                {/* Card element */}
                <motion.div
                  variants={fadeInUp}
                  className="relative bg-white/3 border border-white/6 rounded-xl p-6 sm:p-7 hover:border-accent/30 hover:bg-white/6 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden backdrop-blur-sm z-10"
                  id={`application-${app.id}`}
                >
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/10 group-hover:border-accent/60 transition-all duration-500 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/10 group-hover:border-accent/60 transition-all duration-500 pointer-events-none" />

                  {/* Index */}
                  <span className="absolute right-6 top-6 text-xs font-mono font-bold text-white/10 group-hover:text-accent/40 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Glow */}
                  <div className="absolute top-0 left-0 w-28 h-28 bg-accent/5 rounded-full blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-5 rounded-full group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:text-accent transition-all duration-500 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {app.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-accent transition-colors duration-300 relative z-10">
                    {app.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed font-medium relative z-10">
                    {app.description}
                  </p>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-700" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
