import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transform = 'translateY(40px)'
      setTimeout(() => {
        headerRef.current.style.transition =
          'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        headerRef.current.style.opacity = '1'
        headerRef.current.style.transform = 'translateY(0)'
      }, 200)
    }
  }, [])

  return (
    <section className="pt-32 pb-32 md:pt-40 md:pb-40 section-padding relative min-h-[70vh] flex items-start">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-mint/[0.02] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative w-full" ref={headerRef}>
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="text-xs text-mint tracking-widest uppercase">
            Blog
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
          Coming
          <br />
          <span className="text-gradient">soon.</span>
        </h1>

        <p className="text-muted-light text-lg max-w-lg leading-relaxed mb-10">
          We're working on bringing you insights, guides, and the kind of
          AI talk you'd actually want to read — no jargon walls, no hype
          pieces. In the meantime, catch the good stuff on TikTok.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.tiktok.com/@techforhumans"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 font-bold text-sm uppercase tracking-wider border border-mint/40 text-mint hover:bg-mint hover:text-bg hover:border-mint transition-all duration-300 cursor-none"
          >
            Tech for Humans on TikTok
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <Link
            to="/"
            className="text-sm text-muted-light hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border-subtle hover:decoration-accent cursor-none"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  )
}
