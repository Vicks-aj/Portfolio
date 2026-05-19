'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusLabel = project.status === 'completed' ? 'Completed' : 'Ongoing'
  
  const handleExternalClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.behanceUrl) {
      window.open(project.behanceUrl, '_blank')
    }
  }

  return (
    <div className="group h-full">
      <Link href={`/project/${project.id}`}>
        <div className="cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 aspect-[4/3] mb-8 hover:border-white/20 transition-all duration-500">
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

            {/* Status Pill - White/Black contrast */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white text-black rounded-full px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest shadow-xl">
                {statusLabel}
              </div>
            </div>

            {/* Visual Indicator Pill */}
            <div
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full backdrop-blur-xl border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
              style={{ backgroundColor: 'rgba(13,13,13,0.6)' }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold tracking-tight text-white group-hover:opacity-60 transition-opacity font-heading">
                {project.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-light line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Category Pills - WHITE TEXT (New Request) */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.categories.slice(0, 3).map((category) => (
                <div
                  key={category}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[9px] font-bold uppercase tracking-[0.2em] text-white"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
