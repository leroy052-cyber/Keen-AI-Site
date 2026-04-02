import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const elements = [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current]
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
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-mint/[0.04] to-transparent" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold whitespace-nowrap leading-none tracking-tighter text-gradient opacity-[0.04]">
          WE FIND WHERE AI FITS
        </span>
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-mint/[0.03] blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center py-6 section-padding z-10">
        <div className="font-bold text-lg tracking-tight">
          KEEN<span className="text-accent">_</span>AI
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-light">
          <a href="#services" className="hover:text-accent transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
          <a
            href="#contact"
            className="magnetic-btn inline-block px-4 py-2 border border-accent/40 text-accent text-sm hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl pt-24">
        <div ref={badgeRef} className="mb-6 flex items-center gap-3">
          <div className="glow-dot" />
          <span className="text-xs text-accent/80 tracking-widest uppercase">
            AI consulting, but for actual people
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter mb-8"
        >
          We find where
          <br />
          <span className="text-gradient">AI fits.</span>
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed mb-12"
        >
          Most businesses don't need a giant AI strategy — they need someone
          to walk in, look at the mess, and quietly make half of it disappear.
        </p>

        <div ref={ctaRef} className="flex items-center gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
              color: '#0a0a0a',
            }}
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
          <a
            href="#services"
            className="text-sm text-muted-light hover:text-mint transition-colors duration-300 underline underline-offset-4 decoration-border-subtle hover:decoration-mint"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-accent to-mint animate-bounce opacity-50" />
        </div>
      </div>
    </section>
  )
}
