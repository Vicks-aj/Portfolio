import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Victor | UI/UX Designer',
  description: 'Learn about Victor Awojobi, a UI/UX and Product Designer dedicated to creating interfaces that feel as good as they look.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation Background */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-40" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-300">
                <Image
                  src="/victor.jpg"
                  alt="Victor Awojobi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">About Me</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Every great product starts with one question:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    does this actually help someone?
                  </span>
                </h1>
              </div>

              <p className="text-lg text-white/70 leading-relaxed font-light">
                I&apos;m Victor Awojobi, and that question drives everything I design.
              </p>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <p className="text-white/80 leading-relaxed text-lg">
                  I&apos;m a UI/UX and Product Designer dedicated to creating interfaces that feel as good as they look. My approach is simple: understand the person first, then design around their needs.
                </p>

                <p className="text-white/80 leading-relaxed text-lg">
                  Every screen I put out is intentional, every flow considered, and every detail in service of a better experience. Whether I&apos;m designing a healthcare app that saves lives or a marketplace that empowers students, I bring the same rigor and empathy to every project.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/#projects"
                  className="group px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/#contact"
                  className="px-8 py-4 border border-white/20 rounded-full font-semibold flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">My Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Product Design',
                description: 'End-to-end product design from research to high-fidelity prototypes.',
              },
              {
                title: 'UX Research',
                description: 'User testing, interviews, and data-driven insights that inform design.',
              },
              {
                title: 'UI Design',
                description: 'Beautiful, functional interfaces that delight users and drive conversions.',
              },
              {
                title: 'Design Systems',
                description: 'Scalable design systems and component libraries for consistency.',
              },
              {
                title: 'Prototyping',
                description: 'Interactive prototypes and motion design to test ideas quickly.',
              },
              {
                title: 'Web Design',
                description: 'Responsive web design and landing pages that convert.',
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="p-6 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">Tools & Technologies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Motion Design', 'Web Design', 'Framer', 'Adobe XD'].map((tool) => (
              <div
                key={tool}
                className="p-4 rounded-lg border border-white/10 text-center hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 font-medium text-white/70 hover:text-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
