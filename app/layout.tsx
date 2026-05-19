'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import { Atmosphere } from '@/components/ui/atmosphere'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Fallback to high-end system fonts that look like Helvetica/Futura if not provided */}
        <style>{`
          :root {
            --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            --font-heading: 'futura-pt', 'Futura', 'Trebuchet MS', sans-serif;
            --color-background: #0D0D0D;
          }
          body {
            font-family: var(--font-primary);
            background-color: #0D0D0D;
            background-attachment: fixed;
            color: white;
            min-height: 100vh;
          }
          h1, h2, h3, .font-heading {
            font-family: var(--font-heading);
            letter-spacing: -0.02em;
          }
          .tracking-widest-plus {
            letter-spacing: 0.3em;
          }
        `}</style>
      </head>
      <body className={inter.className} style={{ backgroundColor: '#0D0D0D' }}>
        <Atmosphere />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
