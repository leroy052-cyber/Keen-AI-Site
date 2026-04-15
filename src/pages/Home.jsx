import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import StickyText from '../components/StickyText'

const serviceHighlights = [
  {
    title: 'Automation & Workflows',
    desc: 'The repetitive stuff that eats your week — invoicing, scheduling, data entry — made to run itself.',
    accent: '#BFFF00',
  },
  {
    title: 'AI Chatbots & Assistants',
    desc: 'Customer support bots, internal knowledge bots, voice agents — your new team member that never sleeps.',
    accent: '#84CC16',
  },
  {
    title: 'Data & Insights',
    desc: "Dashboards, predictions, and analytics that show you what's actually happening in your business.",
    accent: '#00FFB2',
  },
  {
    title: 'AI Agents & Strategy',
    desc: 'From readiness assessments to autonomous digital workers — the frontier stuff and the foundations.',
    accent: '#10B981',
  },
]

const audiences = [
  {
    label: 'Small business owners',
    text: "You've got 47 browser tabs open and at least three of them are the same form. You've thought about automating things roughly a hundred times but you're too busy actually running the business to figure out where to start.",
    accent: '#BFFF00',
  },
  {
    label: 'Tradies & service businesses',
    text: "Brilliant at what you do, less thrilled about the quoting and invoicing and chasing and scheduling that surrounds what you do. There's a version of your week where all that stuff just... happens.",
    accent: '#00FFB2',
  },
  {
    label: 'Agencies & small teams',
    text: "You know AI could plug into what you're doing but you don't need a full-time person for it — you need someone who turns up, builds the thing properly, explains it in plain English, and then gets out of the way.",
    accent: '#10B981',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const cardRefs = useRef([])
  const audienceRefs = useRef([])

  useEffect(() => {
    // Hero animation
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

    // Scroll reveal for cards and audience
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

    ;[...cardRefs.current, ...audienceRefs.current].forEach((el, i) => {
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
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
          <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-mint/[0.04] to-transparent" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
        </div>

        {/* Large background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold whitespace-nowrap leading-none tracking-tighter text-gradient opacity-[0.04]">
            WE FIND WHERE AI FITS
          </span>
        </div>

        {/* Floating glow orbs */}
        <div
          className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-mint/[0.03] blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Main content */}
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
            Most businesses don't need a giant AI strategy — they need someone
            to walk in, look at the mess, and quietly make half of it disappear.
          </p>

          <div data-animate className="flex items-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
              style={{
                background:
                  'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
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
            </Link>
            <Link
              to="/services"
              className="text-sm text-muted-light hover:text-mint transition-colors duration-300 underline underline-offset-4 decoration-border-subtle hover:decoration-mint cursor-none"
            >
              See what we do
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-accent to-mint animate-bounce opacity-50" />
          </div>
        </div>
      </section>

      {/* Sticky Text Marquee */}
      <StickyText />

      {/* Services Preview */}
      <section className="py-32 md:py-40 section-padding section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
              <span className="text-xs text-accent tracking-widest uppercase">
                What we do
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              We listen, find the problem,
              <br />
              <span className="text-gradient">and build the fix.</span>
            </h2>
            <p className="text-muted-light max-w-2xl leading-relaxed">
              Not everything needs AI, and we'll tell you that to your face.
              But when it does — workflows, automations, integrations — we
              build it to fit the way you already work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {serviceHighlights.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="card-glow group relative p-6"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                  }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{
                      backgroundColor: service.accent,
                      boxShadow: `0 0 10px ${service.accent}40`,
                    }}
                  />
                  <div>
                    <h3
                      className="text-sm font-bold mb-2 transition-colors duration-300"
                      style={{ color: service.accent }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-light text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-sm text-accent hover:text-accent-glow transition-colors duration-300 cursor-none"
          >
            See everything we can build
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Audience */}
      <section className="py-32 md:py-40 section-padding section-elevated">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-mint to-emerald" />
              <span className="text-xs text-mint tracking-widest uppercase">
                Who this is for
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              If any of this sounds
              <br />
              familiar, we should talk.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {audiences.map((audience, i) => (
              <div
                key={audience.label}
                ref={(el) => (audienceRefs.current[i] = el)}
                className="card-glow group relative p-6 md:p-8"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${audience.accent}, transparent)`,
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full mb-6"
                  style={{
                    backgroundColor: audience.accent,
                    boxShadow: `0 0 10px ${audience.accent}40`,
                  }}
                />
                <span
                  className="text-xs tracking-widest uppercase block mb-4 font-bold"
                  style={{ color: audience.accent }}
                >
                  {audience.label}
                </span>
                <p className="text-muted-light leading-relaxed text-sm">
                  {audience.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 md:py-32 section-padding section-glow relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Alright, let's{' '}
            <span className="text-gradient">do this.</span>
          </h2>
          <p className="text-muted-light max-w-lg mx-auto leading-relaxed mb-10">
            Tell me what's chewing up your time, and we'll figure out whether
            AI is the right fix or if you just need a better spreadsheet.
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
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
