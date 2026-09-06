import React from 'react';
import { motion } from 'framer-motion';

// Import all 12 generated skill PNG images
import pythonImg from '../assets/skills/python.png';
import reactImg from '../assets/skills/react.png';
import fastapiImg from '../assets/skills/fastapi.png';
import phpImg from '../assets/skills/php.png';
import typescriptImg from '../assets/skills/typescript.png';
import javascriptImg from '../assets/skills/javascript.png';
import postgresqlImg from '../assets/skills/postgresql.png';
import dockerImg from '../assets/skills/docker.png';
import awsImg from '../assets/skills/aws.png';
import woocommerceImg from '../assets/skills/woocommerce.png';
import tailwindImg from '../assets/skills/tailwind.png';
import gitImg from '../assets/skills/git.png';

interface Skill {
  name: string;
  category: string;
  image: string;
  glowColor: string;
}

const SKILLS_ROW_1: Skill[] = [
  { name: 'Python', category: 'Backend & AI', image: pythonImg, glowColor: '#3776AB' },
  { name: 'React.js', category: 'Frontend UI', image: reactImg, glowColor: '#61DAFB' },
  { name: 'FastAPI', category: 'Microservices', image: fastapiImg, glowColor: '#10B981' },
  { name: 'PHP 8', category: 'Web Architecture', image: phpImg, glowColor: '#777BB4' },
  { name: 'TypeScript', category: 'Typed Logic', image: typescriptImg, glowColor: '#3178C6' },
  { name: 'JavaScript', category: 'Core Web', image: javascriptImg, glowColor: '#F7DF1E' }
];

const SKILLS_ROW_2: Skill[] = [
  { name: 'PostgreSQL', category: 'Database', image: postgresqlImg, glowColor: '#4169E1' },
  { name: 'Docker', category: 'Containers', image: dockerImg, glowColor: '#2496ED' },
  { name: 'AWS Cloud', category: 'Infrastructure', image: awsImg, glowColor: '#FF9900' },
  { name: 'WooCommerce', category: 'E-Commerce', image: woocommerceImg, glowColor: '#96588A' },
  { name: 'Tailwind CSS', category: 'Styling', image: tailwindImg, glowColor: '#06B6D4' },
  { name: 'Git & GitHub', category: 'Version Control', image: gitImg, glowColor: '#F05032' }
];

export const AnimosSpreadRowsCode: React.FC = () => {
  // 4 Duplicate sets for completely gapless infinite looping edge-to-edge
  const loopRow1 = [...SKILLS_ROW_1, ...SKILLS_ROW_1, ...SKILLS_ROW_1, ...SKILLS_ROW_1];
  const loopRow2 = [...SKILLS_ROW_2, ...SKILLS_ROW_2, ...SKILLS_ROW_2, ...SKILLS_ROW_2];

  const renderCard = (skill: Skill, idx: number, floatOffset: number) => (
    <motion.div
      key={`${skill.name}-${idx}`}
      animate={{
        y: [0, floatOffset, 0, -floatOffset, 0]
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: (idx % 6) * 0.2
      }}
      whileHover={{ scale: 1.1, y: -4 }}
      className="flex-shrink-0 w-[140px] sm:w-[170px] bg-[#12141d] border border-[#D7E2EA]/15 rounded-2xl p-3 flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:border-[#B600A8] hover:shadow-[0_10px_25px_rgba(182,0,168,0.35)] transition-all duration-300 group cursor-pointer"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
        <img
          src={skill.image}
          alt={`${skill.name} icon`}
          className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col text-left truncate">
        <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#B600A8] transition-colors truncate">
          {skill.name}
        </span>
        <span className="text-[10px] font-mono text-[#D7E2EA]/50 truncate">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full left-0 right-0 overflow-hidden py-4 bg-[#0C0C0C]">
      
      {/* Rows Container (True 100% Full Screen Edge to Edge) */}
      <div className="flex flex-col gap-4 overflow-hidden relative w-full">
        
        {/* Subtle Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Moves Left Continuously */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          className="flex gap-4 whitespace-nowrap w-max"
        >
          {loopRow1.map((skill, idx) => renderCard(skill, idx, 5))}
        </motion.div>

        {/* Row 2: Moves Right Continuously */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              duration: 27,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          className="flex gap-4 whitespace-nowrap w-max"
        >
          {loopRow2.map((skill, idx) => renderCard(skill, idx, -5))}
        </motion.div>

      </div>

    </div>
  );
};
