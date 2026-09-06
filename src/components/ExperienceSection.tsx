import React from 'react';
import { FadeIn } from './FadeIn';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2026 — PRESENT',
    role: 'SOFTWARE ENGINEER',
    company: 'Relation Realtech Pvt. Ltd.',
    responsibilities: [
      'Built scalable AI-driven web microservices using FastAPI, Redis, and PostgreSQL.',
      'Integrated Generative AI models into SaaS platforms to automate document parsing and workflow intelligence.',
      'Optimized API query latency and backend data pipelines for high-concurrency requests.',
      'Implemented containerized backend services using Docker in Agile production environments.'
    ]
  },
  {
    period: '2025 — 2026',
    role: 'SOFTWARE ENGINEER',
    company: 'KnovaOne (IN) LLP',
    responsibilities: [
      'Designed and implemented RESTful microservices and backend APIs, reducing endpoint latency by 20%.',
      'Integrated third-party APIs and services, improving operational data flow efficiency by 15%.',
      'Migrated legacy backend architectures to modern frameworks, cutting technical debt by 30%.'
    ]
  },
  {
    period: '2022 — 2024',
    role: 'SOFTWARE ENGINEER',
    company: 'Mulika Infotech Pvt. Ltd',
    responsibilities: [
      'Engineered responsive web applications using React.js and CodeIgniter PHP, improving user responsiveness by 25%.',
      'Built RESTful database APIs and optimized SQL queries, improving data retrieval efficiency by 30%.',
      'Developed mobile-first e-commerce platforms achieving 95% mobile-friendliness.'
    ]
  },
  {
    period: '2025 (JAN — FEB)',
    role: 'FREELANCE WEB DEVELOPER',
    company: 'Client Production',
    responsibilities: [
      'Deployed production e-commerce sites featuring WordPress, CDN caching, and 99.9% uptime SLA.',
      'Developed custom plugins for search ranking and site speed optimization (+40% performance gain).',
      'Integrated Razorpay payment gateways and automated order confirmation workflows.'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#F4F4F6] text-[#0C0C0C] relative z-10 pt-10 sm:pt-16 pb-28 sm:pb-36 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <FadeIn delay={0.1} y={30} className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between border-b border-black/15 pb-6">
            <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-black/50 font-bold">
              EXPERIENCE & TRACK RECORD
            </h2>
            <span className="font-mono text-xs sm:text-sm text-black/40 font-bold">
              2022 — {new Date().getFullYear()}
            </span>
          </div>
        </FadeIn>

        {/* Editorial Borderless Timeline */}
        <div className="space-y-10 sm:space-y-16 mb-8 sm:mb-16">
          {EXPERIENCES.map((exp, idx) => (
            <FadeIn key={exp.company} delay={idx * 0.15} y={40}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-black/15 pb-8 sm:pb-12">

                {/* WHEN — Timeline Badge */}
                <div className="md:col-span-4 flex flex-col items-start gap-1">
                  <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest font-bold">
                    WHEN
                  </span>
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-black/10 border border-black/10 font-mono text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
                    {exp.period}
                  </div>
                </div>

                {/* ROLE, COMPANY, WHAT I DID */}
                <div className="md:col-span-8">
                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest font-bold block mb-0.5">
                      ROLE & COMPANY
                    </span>
                    <h3 className="font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0C0C0C] leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#B600A8] font-bold block mt-1">
                      @ {exp.company}
                    </span>
                  </div>

                  {/* WHAT I DID */}
                  <div className="mt-5 pt-4 border-t border-black/10">
                    <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest font-bold block mb-2">
                      WHAT I DID
                    </span>
                    <div className="space-y-2.5 max-w-2xl">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="font-mono text-xs sm:text-sm uppercase tracking-wider text-black/80 flex items-start gap-2.5">
                          <span className="text-[#B600A8] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Accurate Impact Statistics Section */}
        <FadeIn delay={0.3} y={40}>
          <div className="pt-6 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
            <div>
              <span className="font-black text-4xl sm:text-6xl md:text-7xl text-[#0C0C0C] tracking-tighter block leading-none">
                04+
              </span>
              <span className="font-mono text-xs text-black/60 uppercase tracking-widest block mt-2 font-bold">
                YEARS EXPERIENCE
              </span>
            </div>

            <div>
              <span className="font-black text-4xl sm:text-6xl md:text-7xl text-[#0C0C0C] tracking-tighter block leading-none">
                13
              </span>
              <span className="font-mono text-xs text-black/60 uppercase tracking-widest block mt-2 font-bold">
                PROJECTS SHIPPED
              </span>
            </div>

            <div>
              <span className="font-black text-4xl sm:text-6xl md:text-7xl text-[#0C0C0C] tracking-tighter block leading-none">
                30%
              </span>
              <span className="font-mono text-xs text-black/60 uppercase tracking-widest block mt-2 font-bold">
                TECH DEBT CUT
              </span>
            </div>

            <div>
              <span className="font-black text-4xl sm:text-6xl md:text-7xl text-[#0C0C0C] tracking-tighter block leading-none">
                20%
              </span>
              <span className="font-mono text-xs text-black/60 uppercase tracking-widest block mt-2 font-bold">
                LATENCY REDUCED
              </span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
