import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SystemVisualization: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle subtle mouse parallax movement over network container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.05; // 2-5px shift
    const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Node Positions (Center at 160, 130)
  const center = { x: 160, y: 130 };
  const topNode = { x: 160, y: 45, label: 'WEB' };
  const rightNode = { x: 255, y: 130, label: 'API' };
  const bottomNode = { x: 160, y: 215, label: 'DATABASE' };
  const leftNode = { x: 65, y: 130, label: 'AI' };

  return (
    <div
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center justify-center p-6 select-none"
    >
      <motion.div
        animate={{ x: mouseOffset.x, y: mouseOffset.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative flex flex-col items-center"
      >
        <svg
          width="320"
          height="260"
          viewBox="0 0 320 260"
          className="overflow-visible"
        >
          {/* Connection Lines */}
          <motion.line
            x1={center.x}
            y1={center.y}
            x2={topNode.x}
            y2={topNode.y}
            stroke={isHovered ? 'rgba(182, 0, 168, 0.4)' : 'rgba(255, 255, 255, 0.15)'}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.line
            x1={center.x}
            y1={center.y}
            x2={rightNode.x}
            y2={rightNode.y}
            stroke={isHovered ? 'rgba(182, 0, 168, 0.4)' : 'rgba(255, 255, 255, 0.15)'}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.line
            x1={center.x}
            y1={center.y}
            x2={bottomNode.x}
            y2={bottomNode.y}
            stroke={isHovered ? 'rgba(182, 0, 168, 0.4)' : 'rgba(255, 255, 255, 0.15)'}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.line
            x1={center.x}
            y1={center.y}
            x2={leftNode.x}
            y2={leftNode.y}
            stroke={isHovered ? 'rgba(182, 0, 168, 0.4)' : 'rgba(255, 255, 255, 0.15)'}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Sequential Signal Pulse travelling along lines */}
          <motion.circle
            cx={0}
            cy={0}
            r="3"
            fill="#B600A8"
            animate={{
              x: [center.x, topNode.x, center.x, rightNode.x, center.x, bottomNode.x, center.x, leftNode.x, center.x],
              y: [center.y, topNode.y, center.y, rightNode.y, center.y, bottomNode.y, center.y, leftNode.y, center.y],
              opacity: [0, 0.9, 0, 0.9, 0, 0.9, 0, 0.9, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Outer Node: TOP (WEB) */}
          <g>
            <motion.circle
              cx={topNode.x}
              cy={topNode.y}
              r="5.5"
              fill="#09090B"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <text
              x={topNode.x}
              y={topNode.y - 12}
              textAnchor="middle"
              className="font-mono text-[10px] fill-white/40 uppercase tracking-widest"
            >
              {topNode.label}
            </text>
          </g>

          {/* Outer Node: RIGHT (API) */}
          <g>
            <motion.circle
              cx={rightNode.x}
              cy={rightNode.y}
              r="5.5"
              fill="#09090B"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <text
              x={rightNode.x + 14}
              y={rightNode.y + 3.5}
              textAnchor="start"
              className="font-mono text-[10px] fill-white/40 uppercase tracking-widest"
            >
              {rightNode.label}
            </text>
          </g>

          {/* Outer Node: BOTTOM (DATABASE) */}
          <g>
            <motion.circle
              cx={bottomNode.x}
              cy={bottomNode.y}
              r="5.5"
              fill="#09090B"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <text
              x={bottomNode.x}
              y={bottomNode.y + 18}
              textAnchor="middle"
              className="font-mono text-[10px] fill-white/40 uppercase tracking-widest"
            >
              {bottomNode.label}
            </text>
          </g>

          {/* Outer Node: LEFT (AI) */}
          <g>
            <motion.circle
              cx={leftNode.x}
              cy={leftNode.y}
              r="5.5"
              fill="#09090B"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <text
              x={leftNode.x - 14}
              y={leftNode.y + 3.5}
              textAnchor="end"
              className="font-mono text-[10px] fill-white/40 uppercase tracking-widest"
            >
              {leftNode.label}
            </text>
          </g>

          {/* Center Primary Core Node */}
          <g
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
          >
            {/* Subtle Outer Purple Ring */}
            <motion.circle
              cx={center.x}
              cy={center.y}
              r="16"
              fill="none"
              stroke="#B600A8"
              strokeWidth="1"
              animate={{
                opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: isHovered ? 1.5 : 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Main Center Node */}
            <motion.circle
              cx={center.x}
              cy={center.y}
              r="8"
              fill="#FFFFFF"
              stroke="#B600A8"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover Tooltip Label: CORE SYSTEM */}
            {isHovered && (
              <text
                x={center.x}
                y={center.y - 24}
                textAnchor="middle"
                className="font-mono text-[10px] font-bold fill-[#B600A8] uppercase tracking-widest"
              >
                CORE SYSTEM
              </text>
            )}
          </g>
        </svg>

        {/* Status Indicator Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 mt-2"
        >
          {/* <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse"></span> */}
          <span className="font-bold text-white/80">SYSTEM ONLINE</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
