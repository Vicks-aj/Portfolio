'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function DiagonalStars() {
  const [stars, setStars] = useState<any[]>([])

  useEffect(() => {
    // Generate stars on mount to avoid hydration mismatch
    const generatedStars = [...Array(12)].map((_, i) => ({
      width: Math.random() * 1.5 + 0.5,
      height: Math.random() * 200 + 100,
      left: `${Math.random() * 150 - 20}%`,
      top: `${Math.random() * -60}%`,
      duration: Math.random() * 8 + 6, // Elegant duration (6s to 14s)
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-white/60 via-white/10 to-transparent rounded-full"
          style={{
            width: star.width,
            height: star.height,
            left: star.left,
            top: star.top,
            rotate: '45deg',
            transformOrigin: 'top',
            opacity: star.opacity,
          }}
          animate={{
            top: '160%',
            left: `${parseFloat(star.left) - 120}%`,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
