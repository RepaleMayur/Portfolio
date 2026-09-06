import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimosSpreadRowsCode } from './AnimosSpreadRowsCode';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#F4F4F6] text-[#0C0C0C] relative z-10 pt-28 pb-24 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Large Editorial Reveal Headline */}
        <div className="flex flex-col mb-16 sm:mb-24 select-none">
          <FadeIn delay={0.1} y={50}>
            <span className="font-black text-[13vw] sm:text-[11vw] md:text-[9vw] uppercase tracking-tighter leading-[0.9] text-[#0C0C0C]">
              I BUILD
            </span>
          </FadeIn>

          <FadeIn delay={0.25} y={50}>
            <span className="font-black text-[13vw] sm:text-[11vw] md:text-[9vw] uppercase tracking-tighter leading-[0.9] text-[#0C0C0C]/40 pl-[10vw]">
              SYSTEMS
            </span>
          </FadeIn>

          <FadeIn delay={0.4} y={50}>
            <span className="font-black text-[13vw] sm:text-[11vw] md:text-[9vw] uppercase tracking-tighter leading-[0.9] text-[#0C0C0C]">
              THAT WORK.
            </span>
          </FadeIn>
        </div>

        {/* Statement Bio Paragraph */}
        <FadeIn delay={0.5} y={30} className="max-w-3xl mb-20">
          <p className="text-base sm:text-xl md:text-2xl font-light leading-relaxed text-[#0C0C0C]/80 font-sans">
            I&apos;m a software engineer focused on architecting resilient backend microservices, AI integrations, reactive frontend applications, and solving complex production engineering challenges.
          </p>
        </FadeIn>

      </div>

      {/* Full-Bleed Edge-to-Edge 12-Skill Motion Strip (Left 0 to Right 0) */}
      <div className="w-full relative mt-8">
        <FadeIn delay={0.6} y={30} className="w-full">
          <AnimosSpreadRowsCode />
        </FadeIn>
      </div>

    </section>
  );
};
