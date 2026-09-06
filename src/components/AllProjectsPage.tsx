import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { ProjectCoverVisual } from './ProjectCoverVisual';

interface AllProjectsPageProps {
  onBackToHome: () => void;
}

type FilterCategory = 'ALL' | 'FULL-STACK / BACKEND' | 'AI & AUTOMATION' | 'WORDPRESS & WEB' | 'FRONTEND';

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onBackToHome }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProjects = activeFilter === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.filterCategory === activeFilter);

  const filters: FilterCategory[] = [
    'ALL',
    'FULL-STACK / BACKEND',
    'AI & AUTOMATION',
    'WORDPRESS & WEB',
    'FRONTEND'
  ];

  return (
    <div className="bg-[#09090B] min-h-screen text-[#D7E2EA] font-sans selection:bg-purple-600 selection:text-white pb-32">
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-10 md:px-14 bg-[#09090B]/90 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-white hover:opacity-80 transition-opacity"
          >
            <span>MAYUR REPALE</span>
          </button>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOMEPAGE</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-32 sm:pt-40 px-6 sm:px-10 md:px-16 max-w-6xl mx-auto">
        {/* Title Header */}
        <FadeIn delay={0.1} y={30} className="mb-12 sm:mb-16">
          <div className="border-b border-white/10 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold block mb-2">
                  PROJECT ARCHIVE
                </span>
                <h1 className="font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                  ALL PROJECTS
                </h1>
              </div>
              <span className="font-mono text-xs sm:text-sm text-white/50">
                {CASE_STUDIES.length} CASE STUDIES & ARCHIVES
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-white/5">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all ${activeFilter === filter
                      ? 'bg-white text-black font-bold shadow-lg'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Case Studies List */}
        <div className="space-y-20 sm:space-y-28">
          {filteredProjects.map((proj, idx) => (
            <FadeIn key={proj.id} delay={idx * 0.05} y={40}>
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
                      <h2 className="font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:translate-x-1.5 transition-transform duration-300">
                        {proj.title}
                      </h2>
                      {proj.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-widest bg-purple-900/60 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-bold ml-2">
                          FEATURED
                        </span>
                      )}
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

                {/* Landscape Abstract Visual Showcase Container */}
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

        {/* Bottom Back Button Banner */}
        <div className="mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1">
              END OF PROJECT ARCHIVE
            </span>
            <p className="font-mono text-sm text-white/80">
              Looking for tailored full-stack solutions or systems architecture?
            </p>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-black bg-white hover:bg-white/90 font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </button>
        </div>
      </main>
    </div>
  );
};
