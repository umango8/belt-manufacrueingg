"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 140, suffix: "+", label: "Projects completed" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 95, suffix: "+", label: "Happy clients" },
  { value: 100, suffix: "%", label: "Quality focused" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface ScrollProgressWordProps {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
}

function ScrollProgressWord({ word, index, totalWords, progress }: ScrollProgressWordProps) {
  // Map this word's filling animation to the first 35% of the overall pinned scroll progress
  const start = (index / totalWords) * 0.35;
  const end = Math.min(0.35, ((index + 1.5) / totalWords) * 0.35);

  // Transition from Deep Navy (#0F172A) to Industrial Orange (#F97316)
  const color = useTransform(progress, [start, end], ["#9b9ea5", "#0f172a"]);

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

function ScrollProgressHeading({ text, progress }: { text: string; progress: MotionValue<number> }) {
  const words = text.split(" ");

  return (
    <h2 className="text-2xl  sm:text-3xl lg:text-[2.5rem] font-semibold leading-[1.35] tracking-tight flex flex-wrap">
      {words.map((word, index) => (
        <ScrollProgressWord
          key={index}
          word={word}
          index={index}
          totalWords={words.length}
          progress={progress}
        />
      ))}
    </h2>
  );
}

function ScrollProgressCard({
  stat,
  index,
  progress,
  isDesktop,
}: {
  stat: typeof STATS[0];
  index: number;
  progress: MotionValue<number>;
  isDesktop: boolean;
}) {
  // Staggered trigger sub-ranges that divide the 30% to 100% scroll progress track
  const startRange = 0.30 + index * 0.15;
  const endRange = Math.min(0.98, startRange + 0.23);

  // Stacked translation to align exactly on Column 3 (rightmost column) on desktop
  const stackTranslation = (3 - index) * 285;
  const startXOffset = (3 - index) * 6; // fanned offset
  const finalStartX = isDesktop ? (stackTranslation + startXOffset) : 0;
  
  // Subtle vertical stack fanning offset
  const finalStartY = isDesktop ? ((3 - index) * 6) : 0;

  // Staggered rotations and scales for depth when bunched
  const startRotate = index === 0 ? -5 : index === 1 ? 4 : index === 2 ? -3 : 2;
  const startScale = 0.92 + index * 0.025;

  // Sync horizontal, vertical, rotation, and scale transforms with scroll progress (Desktop Only)
  const x = isDesktop ? useTransform(progress, [0, startRange, endRange, 1], [finalStartX, finalStartX, 0, 0]) : 0;
  const y = isDesktop ? useTransform(progress, [0, startRange, endRange, 1], [finalStartY, finalStartY, 0, 0]) : 0;
  const rotate = isDesktop ? useTransform(progress, [0, startRange, endRange, 1], [startRotate, startRotate, 0, 0]) : 0;
  const scale = isDesktop ? useTransform(progress, [0, startRange, endRange, 1], [startScale, startScale, 1, 1]) : 1;

  // Subtle opacity fade-in
  const opacity = isDesktop ? useTransform(progress, [0, startRange, startRange + 0.08, 1], [0.75, 0.75, 1, 1]) : 1;

  // Staggered dynamic shadow depth
  const shadowStyle = isDesktop && index < 3 ? "shadow-md border-white/50" : "shadow-md border-border/50";

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: (index + 1) * 10,
      }}
      className={`bg-white border rounded-2xl p-8 flex flex-col justify-between h-[180px] hover:shadow-md transition-shadow duration-300 ${shadowStyle}`}
    >
      <div className="text-5xl lg:text-[3.75rem] font-bold text-title tracking-tight mb-2 text-left">
        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-sm font-semibold text-subtitle uppercase tracking-wider text-left mt-auto">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Track the scroll position of the entire pinned parent track
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-12 bg-[#F9FAFB] rounded-[48px] lg:h-[220vh] shadow-[0_-15px_30px_rgba(0,0,0,0.03)] overflow-visible"
    >
      {/* Sticky Child Wrapper - Pinned on desktop, standard static layout on mobile */}
      <div className="relative lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] w-full lg:flex lg:flex-col lg:justify-center lg:overflow-hidden py-16 md:py-24 lg:py-0">
        <div className="container-custom">
          {/* Top Text Block - Scroll Progress Text Fill */}
          <div className="w-full mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
                 <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-accent uppercase tracking-widest bg-accent/10 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted Conveyor Belt Experts
            </span>
         
            </motion.div>

            <ScrollProgressHeading
              text="We provide conveyor belt solutions to optimize industrial operations. Focused on engineering excellence and durable materials, every belt is manufactured with precision & care for long-lasting performance."
              progress={scrollYProgress}
            />
          </div>

          {/* Stats Row Cards - Staggered Slide one-by-one from right to left */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {STATS.map((stat, index) => (
              <ScrollProgressCard
                key={stat.label}
                stat={stat}
                index={index}
                progress={scrollYProgress}
                isDesktop={isDesktop}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

