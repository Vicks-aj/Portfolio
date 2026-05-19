import Hero from '@/components/hero'
import ProjectsShowcase from '@/components/projects-showcase'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
