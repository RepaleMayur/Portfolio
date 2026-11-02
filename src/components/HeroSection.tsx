import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-0 sm:min-h-screen bg-[#09090B] text-[#D7E2EA] z-10 flex flex-col justify-start sm:justify-between px-4 sm:px-10 md:px-14 pt-20 pb-12 sm:py-10 md:py-14 overflow-x-hidden gap-6 sm:gap-0"
    >
      {/* Background Subtle Ambient Lighting (Hardware Radial Gradient - 0ms filter cost) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.16) 0%, rgba(192, 38, 211, 0.08) 45%, transparent 70%)'
        }}
      />

      {/* Top Editorial Row */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="relative z-10 w-full flex justify-between items-start pt-0 sm:pt-20"
      >
        <div className="font-mono text-[10px] sm:text-sm uppercase tracking-widest text-white/70 font-bold">
          FULL STACK ENGINEER · AI · AUTOMATION
        </div>
        <div className="font-mono text-[10px] sm:text-sm uppercase tracking-widest text-white/50">
          EST. 2026
        </div>
      </motion.div>

      {/* Center Editorial Headline Typography */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="relative z-10 my-14 sm:my-auto w-full flex flex-col justify-center select-none"
      >
        <h1 className="font-black uppercase tracking-tighter leading-[0.82] text-[14.5vw] sm:text-[16vw] md:text-[15.5vw] text-white">
          Software
        </h1>
        <h1 className="font-black uppercase tracking-tighter leading-[0.82] text-[14.5vw] sm:text-[16vw] md:text-[15.5vw] text-white/40 pl-[6vw] sm:pl-[12vw]">
          Engineer
        </h1>
      </motion.div>

      {/* Bottom Editorial Copy & Scroll Indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 pb-0"
      >
        {/* Supporting Copy Statement */}
        <p className="font-mono text-[11px] sm:text-sm text-white/80 max-w-md leading-relaxed uppercase tracking-wider">
          I build production-ready web systems, AI-powered applications, and automation workflows.
        </p>

        {/* Minimal Scroll Indicator */}
        <button
          onClick={() => {
            const lenis = (window as unknown as { lenis?: { scrollTo: (target: unknown, opts?: unknown) => void } }).lenis;
            const target = document.getElementById('about');
            if (lenis && target) {
              lenis.scrollTo(target, { duration: 1.2, offset: -20 });
            } else {
              target?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-0"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce">↓</span>
        </button>
      </motion.div>

    </section>
  );
};
