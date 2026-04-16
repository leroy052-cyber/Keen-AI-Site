import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'

function Nav() {
  const location = useLocation()

  const linkClass = (path) =>
    `transition-colors duration-300 ${
      location.pathname === path ? 'text-accent' : 'hover:text-accent'
    }`

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-6 section-padding z-[100] bg-bg/80 backdrop-blur-md border-b border-border-subtle/50">
      <Link
        to="/"
        className="font-bold text-xl tracking-tight"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-gradient">K</span>EEN
        <span className="text-gradient">_</span>AI
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-light">
        <Link to="/services" className={linkClass('/services')}>
          Services
        </Link>
        <Link to="/case-studies" className={linkClass('/case-studies')}>
          Case Studies
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link to="/blog" className={linkClass('/blog')}>
          Blog
        </Link>
        <Link
          to="/contact"
          className="magnetic-btn inline-block px-4 py-2 border border-accent/40 text-accent text-sm hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 cursor-none"
        >
          Let's talk
        </Link>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="section-padding py-12 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link
            to="/"
            className="font-bold text-xl tracking-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-gradient">K</span>EEN
            <span className="text-gradient">_</span>AI
          </Link>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-light">
            <Link to="/services" className="hover:text-accent transition-colors duration-300">
              Services
            </Link>
            <Link to="/case-studies" className="hover:text-accent transition-colors duration-300">
              Case Studies
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors duration-300">
              About
            </Link>
            <Link to="/blog" className="hover:text-accent transition-colors duration-300">
              Blog
            </Link>
            <Link to="/faq" className="hover:text-accent transition-colors duration-300">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors duration-300">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {[
              {
                name: 'TikTok',
                href: 'https://www.tiktok.com/@techforhumans',
                color: 'hover:text-mint',
              },
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/zak-levy-63560a200/',
                color: 'hover:text-accent',
              },
              {
                name: 'GitHub',
                href: 'https://github.com/leroy052-cyber',
                color: 'hover:text-emerald',
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm text-muted ${link.color} transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-subtle/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Keen AI. Built by a human, with AI, for humans.
          </p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout({ children }) {
  return (
    <div className="noise-overlay">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
