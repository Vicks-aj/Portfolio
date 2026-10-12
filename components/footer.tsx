import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Navigation</h4>
              <nav className="space-y-3">
                <Link href="/" className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                  Home
                </Link>
                <Link href="/#projects" className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                  Projects
                </Link>
                <Link href="/#about" className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                  About
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Contact</h4>
              <nav className="space-y-3">
                <a href="mailto:awojobivic@gmail.com" className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/victor-awojobi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/40">
            <p>&copy; {currentYear} Victor Awojobi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
