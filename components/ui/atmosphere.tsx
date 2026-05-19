'use client'

export function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
      {/* Primary Fixed Atmospheric Glow - centered at the top */}
      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[120rem] h-[60rem] bg-white/[0.04] rounded-full blur-[140px]" />
      
      {/* Subtle Static Background Particles - scattered across the whole site */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[70%] left-[25%] w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[30%] left-[55%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[85%] left-[75%] w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[60%] left-[92%] w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[25%] left-[85%] w-1 h-1 bg-white/30 rounded-full blur-[1px]" />
        <div className="absolute top-[50%] left-[5%] w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px]" />
      </div>

      {/* Grainy Texture Overlay for that premium feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
    </div>
  )
}
