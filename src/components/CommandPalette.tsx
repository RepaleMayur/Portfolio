import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Code, Briefcase, Terminal, X, Copy, Check } from 'lucide-react';
import { CASE_STUDIES, PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Only auto-focus on desktop devices with physical keyboards
      // On mobile devices, auto-focus summons the virtual keyboard, hides quick actions,
      // and causes viewport resizing / render freeze.
      const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
      if (!isMobile) {
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      // Lock background scrolling and pause Lenis while modal is open
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    }

    return () => {
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (targetId: string) => {
    // Dismiss mobile keyboard if active to prevent mobile viewport scroll lock
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    inputRef.current?.blur();

    onClose();

    // Give browser time to dismiss keyboard and restore body overflow before scrolling
    setTimeout(() => {
      const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
      const duration = isMobile ? 0.6 : 0.9;
      const offset = isMobile ? -60 : -70;

      const lenis = (window as unknown as { lenis?: { scrollTo: (target: unknown, opts?: unknown) => void } }).lenis;

      if (targetId === 'hero') {
        if (lenis) {
          lenis.scrollTo(0, { duration });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const el = document.getElementById(targetId);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { duration, offset });
        } else {
          const targetY = el.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }, 60);
  };

  const handleCopyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const navActions = [
    { label: 'Jump to Hero Section', icon: <ArrowRight className="w-4 h-4 text-indigo-400" />, action: () => scrollToSection('hero') },
    { label: 'View Tech Stack & Architecture', icon: <Code className="w-4 h-4 text-cyan-400" />, action: () => scrollToSection('stack') },
    { label: 'Browse Featured Projects', icon: <Briefcase className="w-4 h-4 text-emerald-400" />, action: () => scrollToSection('projects') },
    { label: 'Career Experience Timeline', icon: <Briefcase className="w-4 h-4 text-amber-400" />, action: () => scrollToSection('experience') },
    { label: 'Launch MayurOS CLI Terminal', icon: <Terminal className="w-4 h-4 text-purple-400" />, action: () => { onOpenTerminal(); onClose(); } },
    { label: 'Copy Email to Clipboard', icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />, action: handleCopyEmail },
  ];

  const filteredActions = navActions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = CASE_STUDIES.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.subtitle.toLowerCase().includes(query.toLowerCase()) || p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase())));

  return (
    <div
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[999999] flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 sm:bg-black/85 sm:backdrop-blur-md transition-opacity"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0c0d12] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 font-sans shadow-indigo-950/50">
        
        {/* Search Bar */}
        <div className="p-3.5 sm:p-4 border-b border-white/10 flex items-center space-x-3 bg-[#06070a]">
          <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="Type a command or search projects, skills, contact..."
            className="w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-slate-500 focus:ring-0"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="p-3 max-h-[75vh] sm:max-h-96 overflow-y-auto space-y-4 custom-scrollbar text-xs bg-[#0c0d12]"
        >
          
          {/* Quick Actions */}
          <div>
            <span className="px-3 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Quick Actions</span>
            <div className="mt-1 space-y-1">
              {filteredActions.map((act, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    act.action();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-indigo-600/20 hover:border-indigo-500/30 border border-transparent text-slate-200 hover:text-white transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    {act.icon}
                    <span className="font-medium text-sm text-slate-200 group-hover:text-white">{act.label}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-indigo-300 transition-colors">Select →</span>
                </button>
              ))}
            </div>
          </div>

          {/* Matching Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="px-3 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Matching Projects</span>
              <div className="mt-1 space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      try { soundFX.playClick(); } catch {}
                      scrollToSection('projects');
                    }}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-indigo-600/20 hover:border-indigo-500/30 border border-transparent text-slate-200 transition-all cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-sm text-white">{p.title}</p>
                      <p className="text-slate-400 text-[11px]">{p.subtitle}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px]">{p.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#06070a] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Tap to Select / ⌘K</span>
          <span>Mayur Repale Portfolio</span>
        </div>

      </div>
    </div>
  );
};
