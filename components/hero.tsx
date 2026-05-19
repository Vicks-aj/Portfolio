'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { DiagonalStars } from '@/components/ui/diagonal-stars'

export default function Hero() {
  const quotes = [
    { text: "Design is not just about making things look good. It's about making things work for people.", author: "Don Norman" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "You've got to start with the customer experience and work backwards to the technology.", author: "Steve Jobs" },
    { text: "The details are not the details. They make the design.", author: "Charles Eames" },
    { text: "Design is thinking made visual.", author: "Saul Bass" },
    { text: "Design is a solution to a problem. Art is a question to a problem.", author: "John Maeda" }
  ]

  // Enhanced particle movement and visibility
  const particles = [
    { left: "15%", top: "25%", duration: 12, size: "w-2 h-2" },
    { left: "75%", top: "20%", duration: 10, size: "w-3 h-3" },
    { left: "25%", top: "65%", duration: 15, size: "w-2 h-2" },
    { left: "55%", top: "75%", duration: 14, size: "w-4 h-4" },
    { left: "85%", top: "45%", duration: 13, size: "w-3 h-3" },
    { left: "40%", top: "35%", duration: 16, size: "w-2 h-2" },
  ]

  return (
    <section className="relative min-h-[70vh] pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex flex-col items-center justify-center gap-12">
      {/* Falling Diagonal Stars */}
      <DiagonalStars />

      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute ${p.size} bg-white/40 rounded-full blur-[1px]`}
            style={{ left: p.left, top: p.top }}
            animate={{ 
              y: [0, -300, 0], 
              x: [0, 50, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main Content - MORE PRONOUNCED ENTRANCE */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Name - Slide + Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] font-heading whitespace-nowrap">
            Victor Awojobi
          </h1>
        </motion.div>

        {/* Subtext - Longer Slide */}
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-white/40 font-light leading-relaxed max-w-3xl mb-12"
        >
          Every great product starts with one question: <span className="text-white font-medium italic">does this actually help someone?</span> And that question drives everything I design.
        </motion.p>

        {/* Buttons - Staggered Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="/projects"
            className="px-12 py-5 bg-white/5 border border-white/5 text-white/70 rounded-full font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em] shadow-2xl"
          >
            See All Projects
          </Link>
          <a
            href="/Victor.A- Resume (3).pdf"
            download
            className="px-12 py-5 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all duration-500 flex items-center gap-3 uppercase text-[10px] tracking-[0.3em] shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Download CV
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Single Moving Marquee */}
      <div className="relative w-full py-8 overflow-hidden z-10 hidden md:block">
        <div className="flex w-max animate-marquee gap-8 px-8">
          {[...quotes, ...quotes].map((quote, i) => (
             <div 
               key={i} 
               className="group/pill flex items-center gap-4 px-10 py-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-default"
             >
               <span className="text-sm font-bold text-white italic whitespace-nowrap">"{quote.text}"</span>
               <div className="w-0 overflow-hidden group-hover/pill:w-max transition-all duration-500 flex items-center">
                 <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap opacity-0 group-hover/pill:opacity-100 transition-opacity duration-500 ml-6">
                   — {quote.author}
                 </span>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
