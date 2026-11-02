import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Avoid browser native scroll restoration fighting smooth scroll at start
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Leave touch gestures to native momentum scroll
      autoRaf: true,
      anchors: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Expose lenis globally for programmatic navigation
    (window as unknown as Record<string, unknown>).lenis = lenis;

    // Refresh scroll boundaries when images/fonts or layout updates
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Initial resize after mount to ensure accurate document height
    const timer = setTimeout(() => {
      lenis.resize();
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      delete (window as unknown as Record<string, unknown>).lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
