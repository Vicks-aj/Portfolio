'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4" ref={navRef}>
      <div className="relative">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-2xl flex items-center gap-3 sm:gap-6 md:gap-10"
          style={{ backgroundColor: 'rgba(13, 13, 13, 0.75)' }}
        >
          {/* Logo - Monogram only */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center group" aria-label="Home">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-[9px] transition-transform group-hover:scale-105">
              VA
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-blue-400 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Action Button - Standout Cobalt Blue */}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 sm:px-6 py-2.5 rounded-full font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 md:hidden min-w-[200px]"
            >
              <div 
                className="backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl flex flex-col gap-4"
                style={{ backgroundColor: 'rgba(13, 13, 13, 0.95)' }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
