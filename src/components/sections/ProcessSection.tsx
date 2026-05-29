"use client";

import { useEffect, useRef, useState } from "react";

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

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!isDesktop) return;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalHeight = rect.height;

      // The scrolling active range: from when the top of the section enters the top of the viewport
      // to when the bottom of the section reaches the bottom of the viewport
      const start = 0;
      const end = totalHeight - viewportHeight;
      const current = -rect.top;

      // Scroll progress normalized between 0 and 1
      const progress = Math.max(0, Math.min(1, current / end));

      // Animate the vertical timeline path line progress bar
      if (lineProgressRef.current) {
        lineProgressRef.current.style.height = `${progress * 100}%`;
      }

      // Animate cards one by one based on progress thresholds
      PROCESS_STEPS.forEach((_, index) => {
        const card = cardRefs.current[index];
        const dot = dotRefs.current[index];
        if (!card) return;

        // Splitting 0 to 1 progress equally among 4 cards
        // Card 1: 0.00 -> 0.20
        // Card 2: 0.20 -> 0.45
        // Card 3: 0.45 -> 0.70
        // Card 4: 0.70 -> 0.95
        const stepRanges = [
          { start: 0.00, end: 0.20 },
          { start: 0.20, end: 0.45 },
          { start: 0.45, end: 0.70 },
          { start: 0.70, end: 0.95 },
        ];

        const range = stepRanges[index];
        let cardProgress = 0;

        if (progress > range.start) {
          cardProgress = Math.min(1, (progress - range.start) / (range.end - range.start));
        }

        // Beautiful cubic easing for elastic card entry
        const easeVal = 1 - Math.pow(1 - cardProgress, 3); // cubic ease-out

        // Dynamic style application (GPU accelerated)
        card.style.opacity = easeVal.toString();
        card.style.transform = `translate3d(0, ${(1 - easeVal) * 35}px, 0) scale(${0.96 + easeVal * 0.04})`;
        
        // Highlight active cards slightly with higher border intensity and subtle glow
        if (cardProgress > 0.01) {
          card.classList.add("border-accent/35", "bg-[#0E1528]");
          card.classList.remove("border-white/5", "bg-[#0A0E1A]/80");
        } else {
          card.classList.remove("border-accent/35", "bg-[#0E1528]");
          card.classList.add("border-white/5", "bg-[#0A0E1A]/80");
        }

        // Animate Timeline Dots
        if (dot) {
          if (cardProgress > 0.4) {
            dot.classList.add("border-accent");
            dot.classList.remove("border-white/20");
            const dotInner = dot.querySelector(".dot-inner");
            if (dotInner) {
              dotInner.classList.add("bg-accent", "scale-125");
              dotInner.classList.remove("bg-white/50");
            }
          } else {
            dot.classList.remove("border-accent");
            dot.classList.add("border-white/20");
            const dotInner = dot.querySelector(".dot-inner");
            if (dotInner) {
              dotInner.classList.remove("bg-accent", "scale-125");
              dotInner.classList.add("bg-white/50");
            }
          }
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Execute once initially to mount states
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isDesktop]);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative bg-[#0A0E1A] border-t border-white/5 overflow-visible"
      style={isDesktop ? { height: "260vh" } : undefined} // Provides scroll headroom for sticky card stacking
    >
      {/* Background dot pattern to blend with the industrial theme */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: "radial-gradient(white 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Sticky container that keeps section fixed in screen view on desktop */}
      <div className="relative lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] flex items-center lg:overflow-hidden w-full z-10 py-16 lg:py-0">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column - Locked Heading Block */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left lg:max-w-lg">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full mb-4 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                OUR PROCESS
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
                How we <span className="text-accent">deliver excellence</span> at scale
              </h2>
              
              <p className="text-white/50 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                Our structured, engineering-led workflow guarantees precision, premium quality control, and zero downtime implementation from drafting board to commissioning.
              </p>
            </div>

            {/* Right Column - Timeline Stacking Deck */}
            <div className="lg:col-span-7 flex flex-col justify-center relative pl-12 sm:pl-16">
              
              {/* Timeline Track Line (Backdrop) */}
              <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-white/10 z-0" />
              
              {/* Active Scroll Indicator Timeline Track (Glows dynamically) */}
              <div 
                ref={lineProgressRef}
                className="absolute left-[23px] sm:left-[27px] top-6 w-[2px] bg-accent shadow-[0_0_8px_#F97316] z-0 transition-all duration-100 ease-out" 
                style={isDesktop ? { height: "0%", transformOrigin: "top" } : { height: "100%" }}
              />

              {/* Vertical Stacking Container */}
              <div className="flex flex-col gap-5 sm:gap-6 w-full">
                {PROCESS_STEPS.map((item, index) => (
                  <div
                    key={item.step}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    style={isDesktop ? { opacity: 0, transform: "translate3d(0, 35px, 0)", willChange: "opacity, transform" } : { opacity: 1, transform: "none" }}
                    className="group relative flex flex-col items-start bg-[#0A0E1A]/80 border border-white/5 rounded-2xl p-5 lg:p-6 lg:h-[125px] transition-all duration-300 ease-out cursor-pointer shadow-xl backdrop-blur-md w-full"
                  >
                    {/* Timeline Node Dot Anchor */}
                    <div 
                      ref={(el) => { dotRefs.current[index] = el; }}
                      className={`absolute left-[-35px] sm:left-[-47px] top-7 w-5 h-5 rounded-full border-2 bg-[#0A0E1A] flex items-center justify-center z-10 transition-all duration-300 ${isDesktop ? "border-white/20" : "border-accent"}`}
                    >
                      <span className={`dot-inner w-1.5 h-1.5 rounded-full transition-all duration-300 ${isDesktop ? "bg-white/50" : "bg-accent scale-125"}`} />
                    </div>

                    {/* Step Numeric Label */}
                    <span className="inline-block text-[9px] font-bold tracking-widest text-accent uppercase bg-accent/10 px-2.5 py-0.5 rounded mb-2">
                      STAGE {item.step}
                    </span>

                    {/* Title */}
                    <h3 className="text-base lg:text-lg font-bold text-white mb-1.5 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description - Removed line-clamp-2 to avoid truncation on mobile */}
                    <p className="text-[13px] text-white/60 leading-normal font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
