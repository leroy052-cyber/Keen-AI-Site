import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import StickyText from '../components/StickyText'
import ToolLogos from '../components/ToolLogos'

const steps = [
  {
    num: '01',
    title: 'We learn your business',
    desc: "We sit with you, ask probably too many questions, and get genuinely curious about the weird way your business actually runs — because that's where the good stuff hides.",
    color: '#BFFF00',
  },
  {
    num: '02',
    title: "We find what's worth fixing",
    desc: "Not everything needs AI. Sometimes it's a spreadsheet, sometimes it's a better process. We'll tell you that to your face — and save AI for where it actually matters.",
    color: '#84CC16',
  },
  {
    num: '03',
    title: 'We build the thing',
    desc: "Workflows, automations, integrations — whatever shape the fix takes. Built to fit the way you already work, not the other way around.",
    color: '#00FFB2',
  },
  {
    num: '04',
    title: 'We hand you the keys',
    desc: "We make sure you understand what we built, why it works, and how to run it without us hovering. If you never need to call us again, we've done our job.",
    color: '#10B981',
  },
]

const audiences = [
  {
    label: 'Small business owners',
    text: "47 browser tabs open, three of them are the same form. You've thought about automating things a hundred times but you're too busy running the business.",
    accent: '#BFFF00',
    stat: '10+',
    statLabel: 'hrs/week saved on average',
  },
  {
    label: 'Tradies & service businesses',
    text: "Brilliant at what you do, less thrilled about the quoting and invoicing and chasing that surrounds it. There's a version of your week where that just... happens.",
    accent: '#00FFB2',
    stat: '80%',
    statLabel: 'less time on admin tasks',
  },
  {
    label: 'Agencies & small teams',
    text: "You know AI could plug into what you're doing but you don't need a full-time hire — you need someone who builds it properly and then gets out of the way.",
    accent: '#10B981',
    stat: '3x',
    statLabel: 'faster reporting pipelines',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const stepRefs = useRef([])
  const audienceRefs = useRef([])

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('[data-animate]')
    elements?.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition =
          'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 150)
    })

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

    ;[...stepRefs.current, ...audienceRefs.current].forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(i % 4) * 0.1}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(i % 4) * 0.1}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden gradient-mesh"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
          <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-mint/[0.04] to-transparent" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold whitespace-nowrap leading-none tracking-tighter text-gradient opacity-[0.04]">
            WE FIND WHERE AI FITS
          </span>
        </div>

        <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-mint/[0.03] blur-[80px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl pt-24">
          <div data-animate className="mb-6 flex items-center gap-3">
            <div className="glow-dot" />
            <span className="text-xs text-accent/80 tracking-widest uppercase">
              AI consulting, but for actual people
            </span>
          </div>

          <h1
            data-animate
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter mb-8"
          >
            We find where
            <br />
            <span className="text-gradient">AI fits.</span>
          </h1>

          <p
            data-animate
            className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed mb-12"
          >
            Most businesses don&rsquo;t need a giant AI strategy — they need someone
            to walk in, look at the mess, and quietly make half of it disappear.
          </p>

          <div data-animate className="flex items-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
              style={{
                background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
                color: '#0a0a0a',
              }}
            >
              Get keen
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="text-sm text-muted-light hover:text-mint transition-colors duration-300 underline underline-offset-4 decoration-border-subtle hover:decoration-mint cursor-none"
            >
              See what we do
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-accent to-mint animate-bounce opacity-50" />
          </div>
        </div>
      </section>

      {/* Sticky Text Marquee */}
      <StickyText />

      {/* Trust Bar — Tool Logos */}
      <ToolLogos />

      {/* How It Works — Expanded */}
      <section className="py-28 md:py-36 section-padding section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
              <span className="text-xs text-accent tracking-widest uppercase">
                How it works
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Four steps, one of them is
              <br />
              <span className="text-gradient">just listening.</span>
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => (stepRefs.current[i] = el)}
                className="group grid grid-cols-1 md:grid-cols-[60px_1fr_1.5fr] gap-3 md:gap-8 py-8 border-t border-border-subtle hover:bg-bg-elevated/50 transition-all duration-500 px-4 -mx-4"
              >
                <span className="text-sm font-bold" style={{ color: step.color }}>
                  {step.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-accent">
                  {step.title}
                </h3>
                <div>
                  <p className="text-muted-light leading-relaxed text-sm">
                    {step.desc}
                  </p>
                  <div
                    className="mt-4 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For — Tighter with stats */}
      <section className="py-28 md:py-36 section-padding section-elevated">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-mint to-emerald" />
              <span className="text-xs text-mint tracking-widest uppercase">
                Who this is for
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              If any of this sounds familiar,
              <br />
              <span className="text-gradient">we should talk.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audiences.map((audience, i) => (
              <div
                key={audience.label}
                ref={(el) => (audienceRefs.current[i] = el)}
                className="card-glow group relative p-5 md:p-6"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${audience.accent}, transparent)` }}
                />

                {/* Stat callout */}
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: audience.accent }}>
                    {audience.stat}
                  </span>
                  <span className="text-[10px] text-muted tracking-widest uppercase block mt-1">
                    {audience.statLabel}
                  </span>
                </div>

                <span className="text-xs tracking-widest uppercase block mb-3 font-bold" style={{ color: audience.accent }}>
                  {audience.label}
                </span>
                <p className="text-muted-light leading-relaxed text-sm">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 md:py-28 section-padding section-glow relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Book a free 30-minute
            <br />
            <span className="text-gradient">AI audit.</span>
          </h2>
          <p className="text-muted-light max-w-lg mx-auto leading-relaxed mb-10">
            No obligation. No sales pitch. Just an honest look at where AI
            might actually help your business.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
            style={{
              background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
              color: '#0a0a0a',
            }}
          >
            Get keen
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
