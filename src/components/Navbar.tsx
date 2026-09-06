import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-10 md:px-14 ${scrolled
          ? 'py-4 bg-[#09090B]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left: Brand Identity with live status dot */}
        <a
          href="#"
          data-cursor="HOME"
          className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-white hover:opacity-80 transition-opacity"
        >
          <span>MAYUR REPALE</span>
        </a>

        {/* Right: Studio Links with Pixel-Perfect Vertical Roll Hover Effect */}
        <div className="flex items-center gap-3 sm:gap-8 md:gap-10 font-mono text-[11px] sm:text-xs uppercase tracking-widest">
          <a
            href="#projects"
            data-cursor="WORK"
            className="group relative h-6 overflow-hidden hidden sm:inline-block align-middle"
          >
            <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span className="h-6 flex items-center leading-none text-white/70 group-hover:text-white transition-colors">
                WORK
              </span>
              <span className="h-6 flex items-center leading-none text-white font-bold whitespace-nowrap">
                VIEW WORK ↗
              </span>
            </div>
          </a>

          <a
            href="#about"
            data-cursor="ABOUT"
            className="group relative h-6 overflow-hidden hidden sm:inline-block align-middle"
          >
            <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span className="h-6 flex items-center leading-none text-white/70 group-hover:text-white transition-colors">
                ABOUT
              </span>
              <span className="h-6 flex items-center leading-none text-white font-bold whitespace-nowrap">
                KNOW ME ↗
              </span>
            </div>
          </a>

          <a
            href="#experience"
            data-cursor="CAREER"
            className="group relative h-6 overflow-hidden hidden md:inline-block align-middle"
          >
            <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span className="h-6 flex items-center leading-none text-white/70 group-hover:text-white transition-colors">
                EXPERIENCE
              </span>
              <span className="h-6 flex items-center leading-none text-white font-bold whitespace-nowrap">
                TIMELINE ↗
              </span>
            </div>
          </a>

          <a
            href="#contact"
            data-cursor="HIRE"
            className="group relative h-6 overflow-hidden inline-block align-middle"
          >
            <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span className="h-6 flex items-center leading-none text-white/70 group-hover:text-white transition-colors">
                CONTACT
              </span>
              <span className="h-6 flex items-center leading-none text-white font-bold whitespace-nowrap">
                LET&apos;S TALK ↗
              </span>
            </div>
          </a>

          {/* Command Palette Trigger Button (Visible on Mobile & Desktop) */}
          <button
            onClick={() => {
              if (onOpenCommandPalette) {
                onOpenCommandPalette();
              } else {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
              }
            }}
            data-cursor="SEARCH"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/15 text-white/70 hover:text-white text-[10px] font-mono transition-all cursor-pointer"
            title="Search projects & actions (Ctrl+K)"
          >
            <Search className="w-3 h-3 text-purple-400" />
            <span>⌘K</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

