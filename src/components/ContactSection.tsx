import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { SystemVisualization } from './SystemVisualization';

export const ContactSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-[#09090B] text-[#D7E2EA] relative z-10 pt-20 sm:pt-28 md:pt-36 pb-16 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main CTA & Right Side System Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-20 lg:mb-24">
          
          {/* Left Side: Editorial CTA */}
          <div className="lg:col-span-7 flex flex-col select-none">
            <FadeIn delay={0.1} y={40}>
              <span className="font-black text-[12vw] sm:text-[10vw] lg:text-[7vw] uppercase tracking-tighter leading-[0.85] text-white">
                HAVE A
              </span>
            </FadeIn>

            <FadeIn delay={0.2} y={40}>
              <span className="font-black text-[12vw] sm:text-[10vw] lg:text-[7vw] uppercase tracking-tighter leading-[0.85] text-white/40 pl-[8vw] lg:pl-[5vw]">
                PROJECT
              </span>
            </FadeIn>

            <FadeIn delay={0.3} y={40}>
              <span className="font-black text-[12vw] sm:text-[10vw] lg:text-[7vw] uppercase tracking-tighter leading-[0.85] text-white">
                IN MIND?
              </span>
            </FadeIn>

            <FadeIn delay={0.4} y={40} className="mt-6">
              <a
                href="mailto:mayurrepale55@gmail.com"
                data-cursor="OPEN ↗"
                className="inline-flex items-center gap-3 font-black text-[9vw] sm:text-[7.5vw] lg:text-[5vw] uppercase tracking-tighter leading-none text-[#B600A8] hover:text-white transition-colors"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
              </a>
            </FadeIn>
          </div>

          {/* Right Side: Interactive System Online Network Visualization (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <FadeIn delay={0.3} y={40} className="w-full max-w-sm opacity-55 hover:opacity-90 transition-opacity duration-500">
              <SystemVisualization />
            </FadeIn>
          </div>

        </div>

        {/* Direct Contact Links Grid */}
        <FadeIn delay={0.5} y={30} className="pt-10 sm:pt-12 border-t border-white/10 mb-16 sm:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 font-mono text-xs sm:text-sm uppercase tracking-widest">
            <div>
              <span className="text-white/40 block mb-2 font-bold">EMAIL</span>
              <a
                href="mailto:mayurrepale55@gmail.com"
                data-cursor="COPY"
                className="text-white hover:text-[#B600A8] transition-colors font-bold block break-all text-[11px] sm:text-sm"
              >
                mayurrepale55@gmail.com
              </a>
            </div>

            <div>
              <span className="text-white/40 block mb-2 font-bold">PHONE</span>
              <a
                href="tel:+919834486575"
                data-cursor="CALL"
                className="text-white hover:text-[#B600A8] transition-colors font-bold block"
              >
                +91 98344 86575
              </a>
            </div>

            <div>
              <span className="text-white/40 block mb-2 font-bold">LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/mayur-repale-969683225"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN ↗"
                className="text-white hover:text-[#B600A8] transition-colors font-bold inline-flex items-center gap-1"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <span className="text-white/40 block mb-2 font-bold">GITHUB</span>
              <a
                href="https://github.com/RepaleMayur"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN ↗"
                className="text-white hover:text-[#B600A8] transition-colors font-bold inline-flex items-center gap-1"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Minimal Editorial Footer */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs uppercase tracking-widest text-white/50">
          <div>
            MAYUR REPALE — FULL STACK ENGINEER — PUNE, MAHARASHTRA, INDIA
          </div>
          <div>
            © {currentYear} ALL RIGHTS RESERVED
          </div>
        </footer>

      </div>
    </section>
  );
};
