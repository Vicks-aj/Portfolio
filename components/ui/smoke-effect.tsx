'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function SmokeEffect() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const clouds = [
    { size: '50vw', x: [0, 100, -50, 0], y: [0, -50, 50, 0], duration: 25, delay: 0, left: '5%', top: '15%' },
    { size: '60vw', x: [0, -80, 80, 0], y: [0, 60, -40, 0], duration: 35, delay: 2, left: '55%', top: '5%' },
    { size: '45vw', x: [0, 120, -100, 0], y: [0, -80, 40, 0], duration: 30, delay: 5, left: '15%', top: '55%' },
    { size: '55vw', x: [0, -100, 150, 0], y: [0, 100, -60, 0], duration: 40, delay: 1, left: '65%', top: '65%' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 select-none">
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-white/[0.08] to-transparent blur-[120px]"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: cloud.left,
            top: cloud.top,
          }}
          animate={{
            x: cloud.x,
            y: cloud.y,
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  )
}
