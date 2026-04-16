import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function CaseStudiesPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

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

    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(40px)'
      contentRef.current.style.transition =
        'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding relative overflow-hidden">
        <div className="absolute top-1/3 left-[10%] w-[400px] h-[300px] bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative" ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-accent/80 tracking-widest uppercase">
              Case Studies
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            The
            <br />
            <span className="text-gradient">receipts.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed">
            Real problems, real fixes, real numbers. We&rsquo;re building this
            section out as projects wrap up — because we&rsquo;d rather show you
            actual results than make up impressive-sounding stats.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="pb-32 md:pb-40 section-padding">
        <div className="max-w-5xl mx-auto" ref={contentRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                label: 'Coming soon',
                title: 'Tradie quoting automation',
                desc: 'How we cut a plumbing business\u2019s quoting time from 45 minutes to 5.',
                accent: '#BFFF00',
              },
              {
                label: 'Coming soon',
                title: 'Agency reporting pipeline',
                desc: 'Automated client reporting that saved a digital agency 12 hours a week.',
                accent: '#00FFB2',
              },
              {
                label: 'Coming soon',
                title: 'AI knowledge bot for a clinic',
                desc: 'An internal bot that answers staff questions from 200+ pages of SOPs.',
                accent: '#10B981',
              },
            ].map((study) => (
              <div key={study.title} className="card-glow group relative p-6 md:p-8">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${study.accent}, transparent)` }}
                />
                <span className="text-[10px] text-muted tracking-widest uppercase block mb-4">
                  {study.label}
                </span>
                <div
                  className="w-1.5 h-1.5 rounded-full mb-4"
                  style={{ backgroundColor: study.accent, boxShadow: `0 0 8px ${study.accent}40` }}
                />
                <h3 className="text-sm font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-glow p-10 md:p-16 text-center">
            <p className="text-lg md:text-xl font-bold text-surface leading-relaxed max-w-2xl mx-auto mb-4">
              We&rsquo;d rather build things than write about them, but the
              write-ups are coming. Want to be one of the first case studies?
            </p>
            <p className="text-muted-light text-sm mb-8">
              (We usually offer a discount for businesses happy to share their story.)
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
        </div>
      </section>
    </>
  )
}
