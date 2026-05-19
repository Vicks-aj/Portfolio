'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DeviceMockupProps {
  imageSrc: string
  priority?: boolean
}

export default function DeviceMockup({ imageSrc, priority = false }: DeviceMockupProps) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      {/* Volume Buttons */}
      <div className="w-[3px] h-[32px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="w-[3px] h-[46px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="w-[3px] h-[46px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      
      {/* Power Button */}
      <div className="w-[3px] h-[64px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20 mt-2"></div>
        
        {/* User Image */}
        <div className="relative w-full h-full">
           {/* Fallback color if image not found */}
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs text-center p-4">
             Image: {imageSrc}
          </div>
          <Image
            src={imageSrc}
            alt="App Screenshot"
            fill
            className="object-cover z-10"
            priority={priority}
          />
        </div>

        {/* Screen Reflection Overlay */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/5 to-white/20"></div>
      </div>
    </div>
  )
}
