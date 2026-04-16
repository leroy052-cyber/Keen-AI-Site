import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import SkillsServices from '../components/SkillsServices'

const industries = [
  {
    name: 'Trades & Construction',
    desc: 'Quoting, invoicing, scheduling, job management — the admin that surrounds the actual work.',
    accent: '#BFFF00',
  },
  {
    name: 'Professional Services',
    desc: 'Accounting, legal, consulting — document-heavy, process-heavy, and ripe for automation.',
    accent: '#84CC16',
  },
  {
    name: 'Agencies & Creative',
    desc: 'Content pipelines, client reporting, project management — the ops behind the creative work.',
    accent: '#00FFB2',
  },
  {
    name: 'Healthcare & Clinics',
    desc: 'Appointment booking, patient comms, admin overload — without touching clinical decisions.',
    accent: '#10B981',
  },
  {
    name: 'Real Estate & Property',
    desc: 'Listings, tenant comms, document processing — lots of repetitive processes that stack up.',
    accent: '#00cc8e',
  },
  {
    name: 'Hospitality & Events',
    desc: 'Bookings, reviews, rostering, supplier management — the behind-the-scenes grind.',
    accent: '#d4ff4d',
  },
]

const tools = [
  'OpenAI', 'Anthropic', 'Make', 'Zapier', 'n8n', 'Power Automate',
  'Python', 'LangChain', 'React', 'Node.js', 'Google Cloud', 'AWS',
  'Airtable', 'Notion', 'Slack', 'HubSpot',
]

export default function ServicesPage() {
  const headerRef = useRef(null)
  const industryRefs = useRef([])

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

    industryRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(25px)'
        el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding relative overflow-hidden">
        <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative" ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-accent/80 tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            How we work, and
            <br />
            <span className="text-gradient">what we build.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed">
            Every engagement starts the same way — we listen. What happens
            after that depends entirely on what your business actually needs.
          </p>
        </div>
      </section>

      {/* 4-Step Process */}
      <Services />

      {/* Full Skills & Services */}
      <SkillsServices />

      {/* Industries */}
      <section className="py-32 md:py-40 section-padding section-elevated">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-emerald to-mint" />
              <span className="text-xs text-emerald tracking-widest uppercase">
                Industries
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Every business runs
              <br />
              <span className="text-gradient">a bit weird.</span>
            </h2>
            <p className="text-muted-light max-w-2xl leading-relaxed">
              That&rsquo;s where the good stuff hides. We work across industries,
              but these are the ones where we keep finding problems worth solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                ref={(el) => (industryRefs.current[i] = el)}
                className="card-glow group relative p-6"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${industry.accent}, transparent)` }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full mb-4"
                  style={{ backgroundColor: industry.accent, boxShadow: `0 0 8px ${industry.accent}40` }}
                />
                <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-24 md:py-32 section-padding section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
              <span className="text-xs text-accent tracking-widest uppercase">
                Tools &amp; tech
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              We use whatever <span className="text-gradient">actually works.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs tracking-wider uppercase border border-border-subtle text-muted-light hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 section-padding relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Got something in mind?
          </h2>
          <p className="text-muted-light max-w-lg mx-auto leading-relaxed mb-10">
            Tell us what&rsquo;s chewing up your time and we&rsquo;ll figure out
            if AI is the right fix — or if you just need a better spreadsheet.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-none"
            style={{ background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)', color: '#0a0a0a' }}
          >
            Let&rsquo;s talk
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
