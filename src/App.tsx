import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { AllProjectsPage } from './components/AllProjectsPage';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { TerminalCLI } from './components/TerminalCLI';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleLocation = () => {
      if (window.location.hash === '#all-projects' || window.location.pathname === '/projects') {
        setCurrentView('projects');
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();

    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('popstate', handleLocation);
    return () => {
      window.removeEventListener('hashchange', handleLocation);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  // Global Ctrl+K / Cmd+K listener to open search command palette
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K' || e.code === 'KeyK')) {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const showAllProjects = () => {
    window.location.hash = '#all-projects';
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const showHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (currentView === 'projects') {
    return (
      <div className="bg-[#09090B] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <AllProjectsPage onBackToHome={showHome} />
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="bg-[#09090B] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip selection:bg-purple-600 selection:text-white">
        {/* DESKTOP MINIMAL CUSTOM TRAILING CURSOR */}
        <CustomCursor />

        {/* COMMAND PALETTE (Ctrl+K) */}
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* MAYUROS CLI TERMINAL */}
        {isTerminalOpen && (
          <TerminalCLI onClose={() => setIsTerminalOpen(false)} />
        )}

        {/* MINIMAL CREATIVE STUDIO NAVBAR */}
        <Navbar onOpenCommandPalette={() => setIsPaletteOpen(true)} />

        {/* 1. HERO SECTION WITH SCROLL-SCRUBBED VIDEO TIMELINE */}
        <HeroSection />

        {/* 2. LIVE CODE MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION - LIGHT SECTION (#F4F4F6) WITH 12-SKILL MOTION STRIP */}
        <AboutSection />

        {/* 4. SELECTED WORKS (PROJECTS) - DARK SECTION (#09090B) CASE STUDIES */}
        <ProjectsSection onViewAllProjects={showAllProjects} />

        {/* 5. TECHNICAL SKILLS MATRIX - LIGHT SECTION (#F4F4F6) */}
        <ServicesSection />

        {/* 6. EXPERIENCE TIMELINE & STATS - LIGHT SECTION (#F4F4F6) */}
        <ExperienceSection />

        {/* 7. CONTACT SECTION & MINIMAL FOOTER - DARK SECTION (#09090B) */}
        <ContactSection />
      </div>
    </SmoothScroll>
  );
}

export default App;
