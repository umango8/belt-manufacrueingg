"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper Core styles
import "swiper/css";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The heat-resistant belts from BeltForge have exceeded our expectations. We have seen a 40% reduction in downtime on our high-temperature clinker transport lines under severe 180°C operating conditions.",
    author: "Rajesh Mehta",
    role: "Chief Operations Officer",
    company: "Gujarat Cement Works",
    rating: 5,
    tag: "CEMENT & CONSTRUCTION"
  },
  {
    id: 2,
    quote: "Outstanding steep-incline material conveying! The custom chevron profiles have completely eliminated mineral cargo slippage issues on our 35-degree conveyors, increasing our daily tonnage significantly.",
    author: "Marcus Vance",
    role: "Logistics & Supply Director",
    company: "Vance Bulk Materials, Australia",
    rating: 5,
    tag: "MINING & LOGISTICS"
  },
  {
    id: 3,
    quote: "BeltForge fire-resistant belts are the gold standard for safety in our underground coal mining operations. Zero combustion risk, absolute safety compliance, and incredible wear-life.",
    author: "Amitabha Roy",
    role: "Head of Electrical & Mechanical Maintenance",
    company: "Deccan Thermal Power",
    rating: 5,
    tag: "POWER GENERATION"
  }
];

// Triple the testimonials list to ensure Swiper has enough physical slides for a glitch-free infinite loop
const TRIPLE_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function ReviewsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => swiper?.slideNext();
  const prevSlide = () => swiper?.slidePrev();

  return (
    <section id="reviews" className="section-padding bg-white relative overflow-hidden">
      {/* Dynamic Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: "radial-gradient(#F97316 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Swiper Custom Active & Flanking Smooth Physics Stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        .reviews-swiper .swiper-slide {
          opacity: 0.25;
          transform: scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .reviews-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
        }
      `}} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 sm:gap-10 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Swiper Center Carousel & Controllers */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col gap-8 overflow-hidden">
            
            {/* Viewport Frame with Left & Right Vignette Masks */}
            <div className="relative overflow-hidden py-4 w-full rounded-2xl">
              {/* Soft Gradient Vignette Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-r from-white via-white/40 to-transparent pointer-events-none z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-l from-white via-white/40 to-transparent pointer-events-none z-20" />

              <Swiper
                onSwiper={setSwiper}
                onSlideChange={(s) => setActiveIndex(s.realIndex % TESTIMONIALS.length)}
                loop={true}
                centeredSlides={true}
                slidesPerView={1.2}
                spaceBetween={16}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1.6,
                    spaceBetween: 24,
                  }
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                modules={[Autoplay, Navigation]}
                className="reviews-swiper"
              >
                {TRIPLE_TESTIMONIALS.map((testimonial, index) => {
                  const uniqueKey = `${testimonial.id}-${index}`;
                  const isCurrentActive = activeIndex === (index % TESTIMONIALS.length);
                  
                  return (
                    <SwiperSlide key={uniqueKey} className="py-4">
                      <div
                        className={`group relative overflow-hidden rounded-2xl p-4 sm:p-5 min-h-[210px] sm:min-h-[185px] w-full flex flex-col justify-between border select-none bg-[#F9FAFB] transition-all duration-500 ease-out cursor-pointer ${
                          isCurrentActive 
                            ? "border-accent/30 shadow-md" 
                            : "border-border/40"
                        }`}
                      >
                        {/* Atmospheric double quote watermark inside active cards */}
                        <div className={`absolute top-4 right-6 text-accent font-serif text-[120px] leading-none pointer-events-none select-none transition-opacity duration-500 ${
                          isCurrentActive ? "opacity-[0.06]" : "opacity-0"
                        }`}>
                          “
                        </div>

                        {/* Header block with tag and rating */}
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[9px] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
                            {testimonial.tag}
                          </span>
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 text-accent fill-accent" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>

                        {/* Main Quote Content */}
                        <p className="text-xs sm:text-[13px] font-medium text-title/90 leading-relaxed text-left italic z-10 mt-3 grow">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        {/* Footer block with author profile */}
                        <div className="flex items-center gap-3 mt-3 border-t border-border-light pt-3 z-10">
                          <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-xs shrink-0">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div className="text-left min-w-0">
                            <h4 className="text-xs font-bold text-title truncate">{testimonial.author}</h4>
                            <p className="text-[9px] text-subtitle font-semibold mt-0.5 truncate">
                              {testimonial.role}, <span className="text-accent">{testimonial.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Slider Navigation Controllers */}
            <div className="flex items-center w-full justify-start gap-4 self-start z-20">
               {/* <span className="text-xs font-bold tracking-widest text-subtitle/40 ml-4 uppercase">
                {String(activeIndex + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span> */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-border bg-white text-title flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 transform active:scale-95 group cursor-pointer shadow-sm"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-border bg-white text-title flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 transform active:scale-95 group cursor-pointer shadow-sm"
                aria-label="Next review"
              >
                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
             
            </div>
          </div>

          {/* Right Side - Heading & Description */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col text-left lg:pl-6 justify-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full md:mb-6 mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              CUSTOMER REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-title leading-[1.15] tracking-tight max-w-3xl">
              Trusted by <span className="text-accent">industry leaders</span> worldwide
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-subtitle/80 leading-relaxed md:mt-6 mt-4 font-medium text-justify sm:text-left">
              From heavy open-pit mining in Australia to high-temperature cement production in India, we deliver reliable conveyor belt systems that withstand the most extreme operational environments.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-6 md:mt-8 mt-4 md:pt-8 border-t border-border-light">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-accent block leading-none">99.2%</span>
                <span className="text-[11px] font-bold tracking-wider text-subtitle/60 uppercase mt-2.5 block">Client Satisfaction</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-title block leading-none">500+</span>
                <span className="text-[11px] font-bold tracking-wider text-subtitle/60 uppercase mt-2.5 block">Projects Delivered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
