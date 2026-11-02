import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.35,
  x = 0,
  y = 20,
  className = '',
  style = {}
}) => {
  // Detect mobile / touch devices synchronously
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024));
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile: immediately render full visible elements without opacity: 0 to eliminate 2-3s blank screen lag
  if (isMobile) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // On desktop: keep the sleek reveal animation
  const effectiveDelay = Math.min(delay, 0.15);
  const effectiveDuration = Math.min(duration, 0.4);
  const effectiveY = Math.min(y, 20);

  return (
    <motion.div
      initial={{ opacity: 0, x, y: effectiveY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '400px 0px 100px 0px', amount: 0 }}
      transition={{
        duration: effectiveDuration,
        delay: effectiveDelay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
      style={{ willChange: 'opacity, transform', ...style }}
    >
      {children}
    </motion.div>
  );
};
