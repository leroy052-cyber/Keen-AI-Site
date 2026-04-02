import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Staggered entrance animation on mount
    const elements = [headlineRef.current, subRef.current, ctaRef.current]
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 200 + i * 150)
      }
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden"
    >
      {/* Sticky background text — large, faded, architectural */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold text-white/[0.03] whitespace-nowrap leading-none tracking-tighter">
          WE FIND WHERE AI FITS
        </span>
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center py-6 section-padding z-10">
        <div className="font-bold text-lg tracking-tight">
          KEEN<span className="text-accent">_</span>AI
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-light">
          <a href="#services" className="hover:text-accent transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
          <a href="#contact" className="magnetic-btn inline-block px-4 py-2 border border-accent text-accent text-sm hover:bg-accent hover:text-bg transition-all duration-300">
            Let's talk
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl pt-24">
        <div className="mb-4 text-sm text-muted-light tracking-widest uppercase">
          AI Consulting for Humans
        </div>

        <h1
          ref={headlineRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter mb-8"
        >
          We find where
          <br />
          <span className="text-accent">AI fits.</span>
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed mb-12"
        >
          No jargon. No robots. Just a sharp eye on your business
          and the know-how to make AI actually useful.
        </p>

        <div ref={ctaRef}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-bold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300"
          >
            Get keen
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-muted/50 relative overflow-hidden">
          <div className="w-full h-1/2 bg-accent absolute top-0 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
