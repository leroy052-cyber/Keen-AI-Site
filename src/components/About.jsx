import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(40px)'
      contentRef.current.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-40 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          {/* Left column */}
          <div>
            <span className="text-xs text-accent tracking-widest uppercase block mb-4">
              The human behind it
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Zak Levy
            </h2>
          </div>

          {/* Right column */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg md:text-xl text-surface leading-relaxed">
              Tradesperson turned AI consultant. I spent years building things with my hands before I started building things with code.
            </p>
            <p className="text-muted-light leading-relaxed">
              Turns out the mindset is the same: figure out what needs doing, find the right tool, and get it done without overcomplicating it. I started Keen AI because I kept seeing smart business owners wasting hours on stuff that a well-placed automation could handle in seconds.
            </p>
            <p className="text-muted-light leading-relaxed">
              I make content as <span className="text-accent">Tech for Humans</span> on TikTok — breaking down AI and tech without the jargon. Because if you can't explain it simply, you don't understand it well enough.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.tiktok.com/@techforhumans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-light hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://www.linkedin.com/in/zaklevy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-light hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
