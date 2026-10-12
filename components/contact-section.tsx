'use client'

import { useState } from 'react'
import { Mail, ArrowUpRight, Linkedin, X, Check, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-awojobi', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'X', href: 'https://x.com/Vicks_AJ', icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ) },
    { name: 'Behance', href: 'https://www.behance.net/awojobivictor', icon: (
      <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
      </svg>
    ) },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    // Configure Formspree ID: update 'mykvzlad' or use .env
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'mykvzlad'

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.errors?.[0]?.message || data.error || 'Something went wrong. Please try again.')
      }
    } catch (error: any) {
      console.error(error)
      setStatus('error')
      setErrorMessage(error.message || 'Failed to send message.')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-20"
        >
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tighter leading-none font-heading text-white">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-white/30 font-light leading-relaxed max-w-xl mx-auto">
            I’m always open to discussing new projects, design systems, or how we can improve user experiences at scale.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <button
            onClick={() => setIsOpen(true)}
            className="group inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(37,99,235,0.35)] cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Get in touch
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Social Row */}
        <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex items-center justify-center group hover:scale-105"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Premium Dark Theme Contact Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-[#0D0D0D] border border-white/10 rounded-[2rem] p-8 md:p-10 max-w-lg w-full shadow-[0_0_100px_rgba(255,255,255,0.03)] z-10 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white uppercase text-[12px] tracking-[0.3em]">
                      Message Sent
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm leading-relaxed font-light">
                      Thank you! Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle')
                      setIsOpen(false)
                    }}
                    className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase text-[9px] tracking-[0.2em] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">
                      Contact Form
                    </p>
                    <h3 className="text-3xl font-bold tracking-tighter text-white font-heading">
                      Get in Touch
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.04] transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.04] transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] block">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.04] transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs tracking-wide">
                        {errorMessage || 'Something went wrong. Please check your setup.'}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 rounded-full font-bold transition-all duration-300 uppercase text-[10px] tracking-[0.3em] shadow-[0_0_25px_rgba(37,99,235,0.35)] cursor-pointer"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
