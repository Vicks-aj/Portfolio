'use client'

import { motion } from 'framer-motion'

export function TechnicalGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated Light Beams */}
      <div className="absolute inset-0 opacity-20">
        {/* Horizontal Beams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${20 + i * 30}%` }}
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              duration: 8 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
        
        {/* Vertical Beams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ left: `${15 + i * 35}%` }}
            initial={{ top: '-100%' }}
            animate={{ top: '100%' }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          />
        ))}
      </div>

      {/* Radial fade to prevent harsh edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050505] opacity-80" />
    </div>
  )
}
