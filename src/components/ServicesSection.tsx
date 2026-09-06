import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillItem {
  name: string;
  category: string;
  isCore?: boolean;
}

const SKILLS: SkillItem[] = [
  { name: 'PYTHON', category: 'BACKEND · AI · AUTOMATION', isCore: true },
  { name: 'FASTAPI', category: 'HIGH-THROUGHPUT API SERVICES', isCore: true },
  { name: 'REACT.JS', category: 'REACTIVE FRONTEND ARCHITECTURE', isCore: true },
  { name: 'JAVASCRIPT', category: 'SERVER-SIDE & ENTERPRISE WEB', isCore: true },
  { name: 'POSTGRESQL & MYSQL', category: 'RELATIONAL DATABASE ARCHITECTURE', isCore: true },
  { name: 'PHP', category: 'SERVER-SIDE & ENTERPRISE WEB', isCore: false },
  { name: 'CODEIGNITER', category: 'MVC-BASED FRAMEWORK FOR WEB APPLICATIONS', isCore: false },
  { name: 'WORDPRESS', category: 'CONTENT MANAGEMENT SYSTEM & E-COMMERCE', isCore: false },
  { name: 'WOOCOMMERCE', category: 'E-COMMERCE & RAZORPAY INTEGRATION', isCore: false },
  { name: 'TAILWIND CSS', category: 'EDITORIAL DESIGN SYSTEM', isCore: false },
  { name: 'GENERATIVE AI', category: 'ADVANCED AI DEVELOPMENT & INTEGRATIONS', isCore: false }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="stack"
      className="bg-[#F4F4F6] text-[#0C0C0C] relative z-10 pt-20 sm:pt-28 pb-10 sm:pb-16 px-6 sm:px-10 md:px-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <FadeIn delay={0.1} y={30} className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between border-b border-black/15 pb-6">
            <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-black/50 font-bold">
              TECHNOLOGY & CORE STACK
            </h2>
            <span className="font-mono text-xs sm:text-sm text-black/40 font-bold">
              5 CORE · 6 SUPPORTING
            </span>
          </div>
        </FadeIn>

        {/* Editorial Technology List */}
        <div className="flex flex-col border-b border-black/15">
          {SKILLS.map((skill, idx) => (
            <React.Fragment key={skill.name}>
              {idx === 0 && (
                <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B600A8] mb-3">
                  CORE ENGINEERING STACK
                </div>
              )}
              {idx === 5 && (
                <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40 mt-12 mb-3">
                  SUPPORTING SKILLS & FRAMEWORKS
                </div>
              )}
              <FadeIn delay={idx * 0.04} y={30}>
                <div
                  data-cursor="STACK"
                  className={`group py-5 sm:py-7 border-t border-black/15 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer transition-all duration-300 hover:px-4 ${
                    skill.isCore ? 'bg-black/[0.02] hover:bg-black/5' : 'hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-8 flex-wrap sm:flex-nowrap">
                    <span className="font-mono text-xs sm:text-sm text-black/40 font-bold">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className={`font-black uppercase tracking-tight group-hover:text-[#B600A8] transition-colors break-words ${
                      skill.isCore
                        ? 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#0C0C0C]'
                        : 'text-xl xs:text-2xl sm:text-4xl md:text-5xl text-[#0C0C0C]/80'
                    }`}>
                      {skill.name}
                    </h3>
                    {skill.isCore ? (
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#B600A8]/10 text-[#B600A8] border border-[#B600A8]/30 uppercase">
                        CORE STACK
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded bg-black/5 text-black/40 border border-black/10 uppercase">
                        SUPPORTING
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-black/60 font-bold group-hover:text-black transition-colors mt-2 sm:mt-0">
                    {skill.category}
                  </div>
                </div>
              </FadeIn>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
