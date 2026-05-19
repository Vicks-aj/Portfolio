'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const skills = [
    'UI/UX Design',
    'Product Design',
    'Web Design',
    'Brand Identity',
    'Motion Design',
    'Prototyping',
    'User Research',
    'Visual Systems',
    'Interactive Media',
    'Design Strategy'
  ]

  const bioText = "My approach is simple: understand the person first, then design around their needs. Every screen I put out is intentional, every flow considered, and every detail in service of a better experience."

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">

          {/* Left: Floating Image */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                opacity: { duration: 1.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.03)]"
            >
              <Image
                src="/victor.jpg"
                alt="Victor Awojobi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Right: Content Card - INTERACTIVE & BOLD BORDER */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(255, 255, 255, 0.4)',
              boxShadow: '0 0 50px rgba(255, 255, 255, 0.05)'
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 sm:p-14 rounded-[2rem] border-2 border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 cursor-default"
          >
            <div className="space-y-10">
              <div className="space-y-8">
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.6em]">
                  ABOUT ME
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter leading-[1.5] font-subheading text-white">
                  I&apos;m a UI/UX and Product Designer dedicated to creating interfaces that feel as good as they look.
                </h2>
                <div className="w-12 h-0.5 bg-white/20" />
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
                  {bioText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dual Skills Marquee */}
        <div className="space-y-4 pt-16">
          {/* Row 1 */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-6 px-6">
              {[...skills, ...skills, ...skills].map((skill, i) => (
                <div
                  key={`row1-${skill}-${i}`}
                  className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee-reverse gap-6 px-6">
              {[...skills, ...skills, ...skills].map((skill, i) => (
                <div
                  key={`row2-${skill}-${i}`}
                  className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
