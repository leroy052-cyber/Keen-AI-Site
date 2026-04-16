import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const values = [
  {
    title: "We'll tell you if you don't need AI",
    desc: "Not everything needs a fancy solution. Sometimes it's a spreadsheet, sometimes it's a better process. We'll be straight with you.",
    accent: '#BFFF00',
  },
  {
    title: 'We build for handoff, not dependency',
    desc: "If you need us hovering forever, we haven't done our job. Everything we build, you own and run yourself.",
    accent: '#00FFB2',
  },
  {
    title: 'Plain English, always',
    desc: "No jargon, no acronyms dropped to sound clever, no 47-slide decks. If we can't explain it simply, we don't understand it well enough.",
    accent: '#10B981',
  },
  {
    title: 'Your business, your tools',
    desc: "We work around what you've already got. The best automation fits into your existing workflow — not the other way around.",
    accent: '#84CC16',
  },
]

export default function AboutPage() {
  const headerRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const tiktokRef = useRef(null)

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

    ;[storyRef, valuesRef, tiktokRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.transform = 'translateY(40px)'
        ref.current.style.transition =
          'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative" ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-emerald tracking-widest uppercase">
              The human behind it
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
            Zak Levy
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-muted">Builder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint" />
              <span className="text-xs text-muted">AI Consultant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald" />
              <span className="text-xs text-muted">Content Creator</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="pb-32 md:pb-40 section-padding section-warm relative">
        <div className="max-w-5xl mx-auto relative">
          <div ref={storyRef} className="max-w-2xl space-y-6">
            <p className="text-lg md:text-xl text-surface leading-relaxed">
              I used to be a tradesperson, which is a strange thing to lead
              with on an AI consulting website, but it&rsquo;s actually the most
              relevant thing about me.
            </p>
            <p className="text-muted-light leading-relaxed">
              Years of building things with my hands taught me something that
              carries over surprisingly well: you show up, you look at the
              problem, you figure out the right tool for the job, and you
              don&rsquo;t overcomplicate it. I started Keen AI because I kept
              meeting smart business owners burning hours on things that a
              well-placed bit of automation could handle before their morning
              coffee went cold — and nobody was helping them in a way that
              actually made sense.
            </p>
            <p className="text-muted-light leading-relaxed">
              Most AI consultants talk to enterprises with six-figure budgets.
              I talk to the plumber who&rsquo;s quoting jobs at 10pm, the agency
              owner toggling between 14 browser tabs, and the clinic manager
              who spends half their week on things a well-built bot could handle
              in seconds. That&rsquo;s the gap I fill.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 md:py-40 section-padding section-glow">
        <div className="max-w-5xl mx-auto" ref={valuesRef}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
              <span className="text-xs text-accent tracking-widest uppercase">
                How we roll
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              A few things we <span className="text-gradient">actually believe.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="card-glow group relative p-6 md:p-8">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${value.accent}, transparent)` }}
                />
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: value.accent, boxShadow: `0 0 10px ${value.accent}40` }}
                />
                <h3 className="text-sm font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech for Humans */}
      <section className="py-32 md:py-40 section-padding section-elevated">
        <div className="max-w-5xl mx-auto" ref={tiktokRef}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-mint to-emerald" />
                <span className="text-xs text-mint tracking-widest uppercase">
                  Content
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
                <span className="text-mint">Tech for Humans</span>
              </h2>
              <p className="text-muted-light leading-relaxed mb-6">
                I make content on TikTok where I try to talk about AI and tech
                the way you&rsquo;d explain it to a mate at the pub — because
                honestly, if you can&rsquo;t do that, you probably don&rsquo;t
                understand it as well as you think you do.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.tiktok.com/@techforhumans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 font-bold text-sm uppercase tracking-wider border border-mint/40 text-mint hover:bg-mint hover:text-bg hover:border-mint transition-all duration-300 cursor-none"
                >
                  Watch on TikTok
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="square" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/zak-levy-63560a200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-light hover:text-accent transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="card-glow p-8 md:p-10">
              <p className="text-muted tracking-widest uppercase text-[10px] mb-6">
                What you&rsquo;ll find
              </p>
              <ul className="space-y-4">
                {[
                  'AI explained without the jargon — like, actually without it',
                  'Tool reviews and comparisons from someone who builds with them daily',
                  'Automation ideas for real businesses, not tech demos',
                  'Honest takes on what AI can and can\u2019t do (spoiler: it can\u2019t do everything)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0" />
                    <span className="text-muted-light text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 section-padding section-glow relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Want to <span className="text-gradient">work together?</span>
          </h2>
          <p className="text-muted-light max-w-lg mx-auto leading-relaxed mb-10">
            I&rsquo;m always up for a chat — especially if you&rsquo;ve got a
            problem that&rsquo;s been bugging you and you&rsquo;re not sure
            if AI is the answer.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
            style={{ background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)', color: '#0a0a0a' }}
          >
            Get in touch
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
