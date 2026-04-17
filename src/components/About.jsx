import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="py-32 md:py-40 section-padding section-warm relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-forest-muted/20 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
              <span className="text-xs text-forest tracking-widest uppercase font-medium">
                The human running the experiment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6 text-ink">
              Zak Levy
            </h2>

            <div className="hidden md:flex flex-col gap-2 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-forest" />
                <span className="text-xs text-ink-muted">AI Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-forest-light" />
                <span className="text-xs text-ink-muted">Marketplace Experiments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-forest-deep" />
                <span className="text-xs text-ink-muted">Former Tradesperson</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg md:text-xl text-ink leading-relaxed">
              I used to be a tradesperson, which is a strange thing to lead with on a tech website, but it tends to explain most of the rest.
            </p>
            <p className="text-ink-light leading-relaxed">
              I've spent the last couple of years helping small businesses actually ship AI automations — inside clinics, agencies, tradie businesses, logistics outfits, anyone with a list of things they wanted automated but not quite the budget for a consultancy to get through procurement. Same pattern, over and over. The business knew what they wanted. A builder existed somewhere who could do it in a week. Getting them into the same room was harder than the build itself.
            </p>
            <p className="text-ink-light leading-relaxed">
              Keen is the experiment. A small, Australian-first marketplace for the kind of AI automation work that's genuinely happening right now — not the enterprise stuff, not the unpaid freelancer platforms, the real paid work in between. If it works, we keep building it. If it doesn't, we'll have learned something worth knowing.
            </p>
            <p className="text-ink-light leading-relaxed">
              In the meantime I still make content as{' '}
              <span className="text-forest font-semibold">Tech for Humans</span>{' '}
              on TikTok, where I try to talk about AI the way you'd explain it to a mate at the pub — because if you can't do that, you probably don't understand it as well as you think you do.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.tiktok.com/@techforhumans"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-ink-muted hover:text-forest transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://www.linkedin.com/in/zak-levy-63560a200/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-ink-muted hover:text-forest transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
