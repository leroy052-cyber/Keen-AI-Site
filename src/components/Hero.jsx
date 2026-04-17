import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)
  const uvpRef = useRef(null)

  useEffect(() => {
    const elements = [badgeRef.current, headlineRef.current, subRef.current, uvpRef.current, ctaRef.current]
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 300 + i * 150)
      }
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden gradient-mesh"
    >
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-forest-muted/30 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-forest-muted/20 blur-[100px] pointer-events-none" aria-hidden="true" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-cream focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <header className="absolute top-0 left-0 right-0 flex justify-between items-center py-6 section-padding z-10">
        <a href="#hero" className="font-semibold text-xl tracking-tight text-ink" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
          <span className="text-gradient">K</span>EEN<span className="text-gradient">_</span>AI
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted" aria-label="Main navigation">
          <a href="#workflows" className="hover:text-forest transition-colors duration-300">What gets built</a>
          <a href="#certification" className="hover:text-forest transition-colors duration-300">Vetted builders</a>
          <a href="#how-it-works" className="hover:text-forest transition-colors duration-300">How it works</a>
          <a href="#why-us" className="hover:text-forest transition-colors duration-300">For builders</a>
          <a
            href="#contact"
            className="magnetic-btn inline-block px-4 py-2 border border-forest/40 text-forest text-sm hover:bg-forest hover:text-cream hover:border-forest transition-all duration-300"
          >
            Register interest
          </a>
        </nav>
      </header>

      <div className="relative z-10 max-w-3xl pt-24">
        <div ref={badgeRef} className="mb-6 flex items-center gap-3">
          <div className="glow-dot" />
          <span className="text-xs text-forest tracking-widest uppercase font-medium">
            Pre-launch · Now taking expressions of interest
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight mb-8 font-sans font-semibold text-ink"
        >
          Post the thing.{' '}
          <span className="font-serif italic text-forest">Someone keen</span>
          {' '}will build it.
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-ink-light max-w-xl leading-relaxed mb-6"
        >
          Keen is an Australian marketplace where small businesses meet vetted
          AI automation builders — the ones who've actually shipped one of these
          before. No agency quote, no six-month roadmap, no punting on whether
          the person you hired knows what they're doing.
        </p>

        <p
          ref={uvpRef}
          className="text-sm text-ink-muted max-w-xl mb-10 tracking-wide"
        >
          We're not live yet. Right now we're taking expressions of interest so
          the first round of briefs and builders get hand-matched.
        </p>

        <div ref={ctaRef} className="flex items-center gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-forest text-cream hover:bg-forest-deep"
          >
            Register a brief
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#why-us"
            className="text-sm text-ink-muted hover:text-forest transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-forest"
          >
            I'm a builder →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-ink-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-forest to-forest-light animate-bounce opacity-40" />
        </div>
      </div>
    </section>
  )
}
