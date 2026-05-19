'use client'

import { motion } from 'framer-motion'
import DeviceMockup from './device-mockup'

export default function PillTimeFeature() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Featured Project</p>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight">PillTime App</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              A healthcare solution designed to simplify medication management. With intuitive reminders and a focus on high-accessibility UI, PillTime ensures users never miss a dose.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-1">Role</h4>
                <p className="text-slate-500 text-sm">Lead UI/UX Designer</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Timeline</h4>
                <p className="text-slate-500 text-sm">Design & Research • 4 Weeks</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              View Full Case Study
            </button>
          </motion.div>

          <div className="relative flex justify-center items-center py-20">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-indigo-600/10 blur-[120px] rounded-full"></div>

            {/* Main Phone (Login Screen) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <DeviceMockup imageSrc="/mockups/pilltime-login.png" />
            </motion.div>
            
            {/* Secondary Phone (Onboarding) - Offset */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 80, rotate: 12 }}
              whileInView={{ opacity: 1, scale: 0.9, x: 80, rotate: 12 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute z-10 opacity-40 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-700 cursor-pointer hidden md:block"
            >
              <DeviceMockup imageSrc="/mockups/pilltime-onboarding-1.png" />
            </motion.div>

             {/* Third Phone (Splash) - Offset Left */}
             <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -80, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 0.9, x: -80, rotate: -12 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute z-10 opacity-40 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-700 cursor-pointer hidden md:block"
            >
              <DeviceMockup imageSrc="/mockups/pilltime-splash.png" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
