import { projects } from '@/lib/projects'
import ProjectCard from '@/components/project-card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ProjectsPage() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen text-white">
      <Navigation />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6 mb-20 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none font-heading text-white">
            All Projects
          </h1>
          <p className="text-lg text-white/40 font-light leading-relaxed max-w-2xl mx-auto">
            A comprehensive look at my design journey, featuring mobile applications, web platforms, and brand identities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
