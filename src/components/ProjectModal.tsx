import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { X, ExternalLink, CheckCircle2, Code2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          soundFX.playClick();
          onClose();
        }}
        className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Image Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-obsidian-950 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-obsidian-950/80 border border-white/20 text-slate-300 hover:text-white hover:bg-white/20 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Badge on Image */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-mono mb-2 inline-block">
              {project.category}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
          
          {/* Performance Metrics Bar */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-obsidian-950 border border-white/10 text-center">
                <p className="text-lg sm:text-2xl font-display font-bold text-emerald-400">{m.value}</p>
                <p className="text-[11px] font-mono text-slate-400">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-2 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Accomplishments */}
          <div>
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineering Highlights</span>
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Snippet */}
          {project.architectureSnippet && (
            <div>
              <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
                <Code2 className="w-4 h-4" />
                <span>Architecture Code Pattern</span>
              </h3>
              <div className="rounded-2xl bg-obsidian-950 p-4 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>
                  <code>{project.architectureSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="px-5 py-2.5 rounded-xl bg-obsidian-950 border border-white/15 text-slate-200 hover:text-white hover:border-indigo-500 text-xs font-mono flex items-center space-x-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-indigo-400" />
              <span>Source Repository</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium text-xs shadow-lg flex items-center space-x-2 hover:opacity-95 transition-opacity"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
