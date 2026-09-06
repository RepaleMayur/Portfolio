import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ProjectCoverVisual } from './ProjectCoverVisual';

interface ProjectsSectionProps {
  onViewAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewAllProjects }) => {
  // Filter exactly 4 featured projects
  const featuredProjects = CASE_STUDIES.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="bg-[#09090B] text-[#D7E2EA] relative z-10 pt-24 pb-28 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <FadeIn delay={0.1} y={30} className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white/50 font-bold">
              SELECTED WORK
            </h2>
            <span className="font-mono text-xs sm:text-sm text-white/40">
              04 FEATURED PROJECTS
            </span>
          </div>
        </FadeIn>

        {/* Editorial Asymmetrical Featured Case Studies List */}
        <div className="space-y-28 sm:space-y-36 md:space-y-40">
          {featuredProjects.map((proj, idx) => (
            <FadeIn key={proj.id} delay={idx * 0.1} y={40}>
              <div
                data-cursor="VIEW ↗"
                className="group relative cursor-pointer"
              >
                {/* Project Metadata Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm text-white/40 font-bold">
                        {proj.number}
                      </span>
                      <h3 className="font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:translate-x-1.5 transition-transform duration-300">
                        {proj.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest block mt-1">
                      {proj.subtitle}
                    </span>
                  </div>

                  <a
                    href={proj.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW ↗"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Compact Landscape Abstract Visual Cover Showcase */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/15 bg-[#09090B] shadow-2xl transition-all duration-500 group-hover:border-purple-500/40 ${proj.layout === 'full'
                      ? 'w-full h-[250px] sm:h-[340px] md:h-[380px]'
                      : proj.layout === 'right'
                        ? 'w-full md:w-[82%] ml-auto h-[220px] sm:h-[300px] md:h-[340px]'
                        : 'w-full md:w-[88%] h-[220px] sm:h-[300px] md:h-[340px]'
                    }`}
                >
                  <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700">
                    <ProjectCoverVisual
                      projectId={proj.id}
                      projectNumber={proj.number}
                      projectTitle={proj.title}
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#09090B]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
                    <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">
                      {proj.category}
                    </span>
                    <p className="font-mono text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Description & Structured Metadata Details */}
                <div className="mt-5 space-y-2 font-mono text-xs sm:text-sm text-white/80">
                  <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl font-light">
                    {proj.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-xs pt-1">
                    <span className="text-purple-400 font-bold uppercase tracking-widest min-w-[55px]">BUILT:</span>
                    <span className="text-white/70 uppercase tracking-wider">{proj.built?.join(' · ')}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-xs">
                    <span className="text-purple-400 font-bold uppercase tracking-widest min-w-[55px]">STACK:</span>
                    <span className="text-white/70 uppercase tracking-wider">{proj.techStack.join(' · ')}</span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* VIEW ALL PROJECTS CTA */}
        <FadeIn delay={0.3} y={30} className="mt-24 pt-16 border-t border-white/10 text-center">
          <button
            onClick={() => {
              if (onViewAllProjects) {
                onViewAllProjects();
              } else {
                window.location.hash = '#all-projects';
              }
            }}
            data-cursor="ALL PROJECTS"
            className="group relative inline-flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-white hover:text-purple-300 px-8 sm:px-12 py-5 rounded-full border border-white/20 hover:border-purple-500/50 bg-white/5 hover:bg-purple-950/30 transition-all duration-300 shadow-2xl hover:scale-[1.02] cursor-pointer"
          >
            <span className="font-bold">VIEW ALL PROJECTS ↗</span>
          </button>
        </FadeIn>

      </div>
    </section>
  );
};

