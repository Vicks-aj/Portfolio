'use client'

import { motion } from 'framer-motion'

export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 40, left: '15%', top: '20%', duration: 25, delay: 0 },
    { type: 'square', size: 30, left: '80%', top: '15%', duration: 30, delay: 2 },
    { type: 'triangle', size: 35, left: '25%', top: '70%', duration: 28, delay: 5 },
    { type: 'circle', size: 25, left: '70%', top: '60%', duration: 22, delay: 1 },
    { type: 'square', size: 50, left: '40%', top: '40%', duration: 35, delay: 3 },
    { type: 'triangle', size: 20, left: '60%', top: '25%', duration: 32, delay: 4 },
    { type: 'circle', size: 45, left: '10%', top: '50%', duration: 27, delay: 2 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.07]">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -30, 30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border border-white/30" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full border border-white/30" />
          )}
          {shape.type === 'triangle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white/30 stroke-[2px]">
              <path d="M50 5 L95 90 L5 90 Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
