import React from 'react';
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
  // Cap delay and duration so fast scrolling never leaves content blank/lagging
  const effectiveDelay = Math.min(delay, 0.15);
  const effectiveDuration = Math.min(duration, 0.4);
  const effectiveY = Math.min(y, 20);

  return (
    <motion.div
      initial={{ opacity: 0, x, y: effectiveY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '350px 0px 100px 0px', amount: 0 }}
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
