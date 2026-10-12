'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from './project-card'
import { motion } from 'framer-motion'

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Apps', value: 'app' },
  { label: 'Web', value: 'landing-page' },
]

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.type === activeFilter
  )

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/5">
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
                Selected Work
              </p>
              <h2 className="text-6xl sm:text-7xl font-bold tracking-tighter leading-none font-heading text-white">
                Projects
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`rounded-full px-8 py-3 font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeFilter === option.value
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.35)]'
                      : 'bg-white/5 text-white/40 border border-white/10 hover:border-indigo-500/30 hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid - 3 Per Row (New Request) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
