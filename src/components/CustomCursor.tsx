import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover target attributes or standard interactive elements
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const linkTarget = target?.closest('a, button, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (linkTarget) {
        setCursorText('OPEN ↗');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      layout
      className="fixed top-0 left-0 pointer-events-none z-[999999] rounded-full flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-widest whitespace-nowrap -translate-x-1/2 -translate-y-1/2 shadow-2xl select-none"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        backgroundColor: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
        color: '#09090B',
        height: isHovered ? 32 : 14,
        paddingLeft: isHovered ? 16 : 0,
        paddingRight: isHovered ? 16 : 0,
        boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.5)' : '0 0 10px rgba(255,255,255,0.3)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.6,
      }}
    >
      <AnimatePresence mode="wait">
        {isHovered && cursorText && (
          <motion.span
            key={cursorText}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 leading-none text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
