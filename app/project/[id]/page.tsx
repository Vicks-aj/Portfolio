'use client'

import { useParams, useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Footer from '@/components/footer'

export default function ProjectDetail() {
  const { id } = useParams()
  const router = useRouter()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#projects" className="text-white/60 hover:text-white underline tracking-widest uppercase text-xs">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-black min-h-screen text-white">
      
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/#projects')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-16 uppercase text-[10px] font-bold tracking-[0.2em]"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 lg:-mt-2"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none">
                {project.title}
              </h1>
              <div className="w-12 h-1 bg-white rounded-full" /> {/* Subtle line under title as seen in Betabank */}
            </div>

            <p className="text-xl text-white/60 leading-relaxed max-w-xl font-light">
              {project.description}
            </p>

            <div className="space-y-6 py-6 border-t border-white/10">
               <div>
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-2">The Challenge</h4>
                  <p className="text-white/50 leading-relaxed text-sm">{project.challenge}</p>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-2">The Solution</h4>
                  <p className="text-white/50 leading-relaxed text-sm">{project.solution}</p>
               </div>
            </div>

            <div className="flex flex-wrap gap-8 py-6 border-t border-white/10">
              <div>
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Role</h4>
                <p className="text-sm font-medium">{project.role}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Platform</h4>
                <p className="text-sm font-medium">{project.type === 'app' ? 'Mobile (iOS & Android)' : 'Responsive Web'}</p>
              </div>
            </div>

            {/* CTA Button - Links to Figma as requested */}
            <a
              href={project.figmaUrl || project.behanceUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.2em] group w-max"
            >
              View Designs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Right: Mockup Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/3] lg:aspect-[4/3] w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 group"
          >
             {/* Background decoration */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none z-10" />
             
             <div className="absolute inset-0 p-4 sm:p-8 flex items-center justify-center">
               <img
                 src={project.image}
                 alt={project.title}
                 className="w-full h-auto rounded-2xl object-contain transition-transform duration-700 group-hover:scale-105"
               />
             </div>

             {/* Reflection Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
