'use client'

import React, { useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function Spotlight() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the movement
  const springConfig = { damping: 50, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Set initial position to center
    mouseX.set(window.innerWidth / 2)
    mouseY.set(window.innerHeight / 2)

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[60rem] h-[60rem] rounded-full bg-white/[0.04] blur-[140px] -translate-x-1/2 -translate-y-1/2"
        style={{ 
          left: x, 
          top: y,
        }}
      />
    </div>
  )
}
