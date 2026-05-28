"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We analyze your operational requirements, material type, conveying distance, and environmental conditions.",
  },
  {
    step: "02",
    title: "Engineering",
    description:
      "Our technical team designs the optimal belt specification including compound selection, ply construction, and cover thickness.",
  },
  {
    step: "03",
    title: "Manufacturing",
    description:
      "Precision manufacturing under strict quality control with multi-stage testing at every production phase.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Fast dispatch from our ready-stock inventory or custom manufacturing with guaranteed delivery timelines.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 40, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

// Mathematically calibrated targets: height (130px) + gap (16px)
const STICKY_TOPS = [
  "lg:top-[100px]",
  "lg:top-[246px]",
  "lg:top-[392px]",
  "lg:top-[538px]",
];

const Z_INDICES = [
  "z-10",
  "z-20",
  "z-30",
  "z-40",
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-[#0A0E1A] relative overflow-visible border-t border-white/5">
      {/* Background dot pattern to blend with the industrial theme */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Vertically Sticky Centered Heading Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-[28vh] h-fit self-start text-left mb-12 lg:mb-0">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              OUR PROCESS
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
              How we <span className="text-accent">deliver</span> <br />
              excellence <span className="text-white/60 font-normal">at scale</span>
            </h2>
            
            <p className="text-white/50 text-base md:text-[17px] leading-relaxed max-w-md">
              Our structured, engineering-led workflow guarantees precision, premium quality control, and zero downtime implementation from drafting board to commissioning.
            </p>
          </div>

          {/* Right Column - Vertical Timeline Journey cards (Sticky Pinning overlap stacking deck) */}
          <div className="lg:col-span-7 relative pl-12 md:pl-16 pb-[50vh]">
            
            {/* Timeline Vertical Path Line Background */}
            <div className="absolute left-[23px] top-8 bottom-[55vh] w-[2px] bg-white/10 z-0" />

            {/* Scrolling Steps */}
            <div className="flex flex-col">
              {PROCESS_STEPS.map((item, index) => {
                const stickyClass = STICKY_TOPS[index];
                const zIndexClass = Z_INDICES[index];
                const isLast = index === PROCESS_STEPS.length - 1;
                
                return (
                  <div
                    key={item.step}
                    className={`lg:sticky ${stickyClass} ${zIndexClass} w-full ${isLast ? "mb-0" : "mb-[45vh] lg:mb-[55vh]"}`}
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-120px" }}
                      variants={cardVariants}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                      className="group relative flex flex-col items-start bg-[#0A0E1A]/90 hover:bg-[#0A0E1A]/95 border border-white/5 hover:border-accent/30 rounded-2xl p-5 lg:p-6 lg:h-[130px] transition-all duration-500 ease-out cursor-pointer shadow-xl backdrop-blur-md hover:shadow-accent/5 hover:translate-x-2 w-full"
                    >
                      {/* Timeline Node Dot Anchor */}
                      <div className="absolute left-[-49px] md:left-[-53px] top-8 w-6 h-6 rounded-full border-2 border-white/20 bg-[#0A0E1A] flex items-center justify-center z-10 group-hover:border-accent transition-all duration-300 group-hover:scale-110">
                        <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-accent transition-colors duration-300 group-hover:animate-ping absolute" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-accent transition-colors duration-300 z-20" />
                      </div>

                      {/* Step Numeric Label */}
                      <span className="inline-block text-[9px] font-bold tracking-widest text-accent uppercase bg-accent/10 px-2.5 py-0.5 rounded mb-2">
                        STAGE {item.step}
                      </span>

                      {/* Title */}
                      <h3 className="text-base lg:text-lg font-bold text-white mb-1.5 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-white/60 leading-[1.5] group-hover:text-white/80 transition-colors duration-300 line-clamp-2 font-medium">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
