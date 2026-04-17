import { useEffect, useRef, useState } from 'react'

// --- Google Form Configuration ---
// One form, two paths. The 'type' field distinguishes business briefs from
// builder applications. Entry IDs are placeholders — swap for real ones when
// the form is created.
const GOOGLE_FORM_ACTION_URL = 'GOOGLE_FORM_URL_PLACEHOLDER'
const ENTRY_IDS = {
  type: 'entry.PLACEHOLDER_TYPE',
  name: 'entry.PLACEHOLDER_NAME',
  email: 'entry.PLACEHOLDER_EMAIL',
  detail: 'entry.PLACEHOLDER_DETAIL',
  stack: 'entry.PLACEHOLDER_STACK',
  budget: 'entry.PLACEHOLDER_BUDGET',
}

const inputClasses =
  'w-full px-4 py-3 bg-cream-warm border border-border text-ink text-sm focus:outline-none focus:border-forest transition-colors duration-200 placeholder:text-ink-muted/60'
const selectClasses =
  'w-full px-4 py-3 bg-cream-warm border border-border text-ink text-sm focus:outline-none focus:border-forest transition-colors duration-200 appearance-none'
const labelClasses = 'block text-xs font-medium text-ink-muted tracking-wide uppercase mb-2'

function submitToForm(iframeRef, data) {
  const params = new URLSearchParams()
  Object.keys(ENTRY_IDS).forEach((key) => {
    if (data[key]) params.append(ENTRY_IDS[key], data[key])
  })
  const url = `${GOOGLE_FORM_ACTION_URL}?${params.toString()}`
  if (iframeRef?.current) iframeRef.current.src = url
}

function BriefForm({ iframeRef }) {
  const [data, setData] = useState({ name: '', email: '', detail: '', stack: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    submitToForm(iframeRef, { ...data, type: 'brief' })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-3 h-3 rounded-full bg-forest mx-auto mb-5" />
        <h4 className="text-xl font-serif text-ink mb-2">You're on the list.</h4>
        <p className="text-ink-muted text-sm">
          We'll be in touch as soon as the first wave of briefs gets hand-matched to builders — usually within a week.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="brief-detail" className={labelClasses}>What do you want automated?</label>
        <textarea
          id="brief-detail"
          name="detail"
          required
          rows={3}
          value={data.detail}
          onChange={onChange}
          placeholder="e.g. A bot that answers customer questions from our help docs, or a weekly report that pulls from HubSpot and Stripe..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div>
        <label htmlFor="brief-stack" className={labelClasses}>Tools you already use</label>
        <input
          id="brief-stack"
          name="stack"
          type="text"
          value={data.stack}
          onChange={onChange}
          placeholder="e.g. Xero, HubSpot, Slack, Google Workspace"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="brief-budget" className={labelClasses}>Rough budget</label>
        <select
          id="brief-budget"
          name="budget"
          required
          value={data.budget}
          onChange={onChange}
          className={selectClasses}
        >
          <option value="" disabled>Select...</option>
          <option>Under $500</option>
          <option>$500–$2,000</option>
          <option>$2,000–$5,000</option>
          <option>$5,000–$15,000</option>
          <option>$15,000+</option>
          <option>Not sure — want a quote</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="brief-name" className={labelClasses}>Name</label>
          <input id="brief-name" name="name" type="text" required value={data.name} onChange={onChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="brief-email" className={labelClasses}>Email</label>
          <input id="brief-email" name="email" type="email" required value={data.email} onChange={onChange} className={inputClasses} />
        </div>
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-forest text-cream hover:bg-forest-deep"
      >
        Register my interest
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  )
}

function BuilderForm({ iframeRef }) {
  const [data, setData] = useState({ name: '', email: '', detail: '', stack: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    submitToForm(iframeRef, { ...data, type: 'builder' })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-3 h-3 rounded-full bg-forest mx-auto mb-5" />
        <h4 className="text-xl font-serif text-ink mb-2">You're on the founding-builder list.</h4>
        <p className="text-ink-muted text-sm">
          We'll walk you through the assessment, the badge categories, and the zero-commission early-builder terms before we open the platform.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="builder-detail" className={labelClasses}>What do you build?</label>
        <textarea
          id="builder-detail"
          name="detail"
          required
          rows={3}
          value={data.detail}
          onChange={onChange}
          placeholder="e.g. I build agentic workflows in n8n, custom GPTs for support teams, scrapers that feed CRMs..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div>
        <label htmlFor="builder-stack" className={labelClasses}>Links to work (optional)</label>
        <input
          id="builder-stack"
          name="stack"
          type="text"
          value={data.stack}
          onChange={onChange}
          placeholder="GitHub, portfolio, LinkedIn, a case study you're proud of"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="builder-budget" className={labelClasses}>Typical project size</label>
        <select
          id="builder-budget"
          name="budget"
          required
          value={data.budget}
          onChange={onChange}
          className={selectClasses}
        >
          <option value="" disabled>Select...</option>
          <option>Quick fixes ($200–$1,000)</option>
          <option>Single automations ($1,000–$5,000)</option>
          <option>Multi-step builds ($5,000–$15,000)</option>
          <option>Full systems ($15,000+)</option>
          <option>Happy to take anything</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="builder-name" className={labelClasses}>Name</label>
          <input id="builder-name" name="name" type="text" required value={data.name} onChange={onChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="builder-email" className={labelClasses}>Email</label>
          <input id="builder-email" name="email" type="email" required value={data.email} onChange={onChange} className={inputClasses} />
        </div>
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 border border-forest text-forest hover:bg-forest hover:text-cream"
      >
        Register as a builder
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  )
}

export default function Contact() {
  const contentRef = useRef(null)
  const iframeRef = useRef(null)

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
      { threshold: 0.1 }
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
    <section id="contact" className="py-32 md:py-40 section-padding relative section-glow">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-forest-muted/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <iframe
        ref={iframeRef}
        name="hidden-form-iframe"
        className="hidden"
        title="Form submission target"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative" ref={contentRef}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
          <span className="text-xs text-forest tracking-widest uppercase font-medium">
            Expressions of interest
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight mb-6 text-ink">
          Two ways in.<br />
          <span className="italic text-forest">Same front door.</span>
        </h2>

        <p className="text-ink-light text-lg max-w-2xl mb-6 leading-relaxed">
          A heads up: we're not live yet. Keen is still being built, and we're
          only taking expressions of interest at the moment — no money changes
          hands, no briefs go out to a public board, nothing auto-matches.
        </p>

        <p className="text-ink-light text-base max-w-2xl mb-12 leading-relaxed">
          What you're signing up to is the founding round — the first wave of
          businesses and builders we'll hand-match ourselves before the
          platform opens properly. Either form takes about three minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="card-glow p-6 md:p-8">
            <div className="mb-6">
              <div className="w-2 h-2 rounded-full bg-forest mb-3" />
              <h3 className="text-xl md:text-2xl font-serif text-ink mb-2">Register a brief</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                You've got something that should be automated. Tell us what,
                and when we go live we'll match it to a vetted builder first.
              </p>
            </div>
            <BriefForm iframeRef={iframeRef} />
          </div>

          <div className="card-glow p-6 md:p-8">
            <div className="mb-6">
              <div className="w-2 h-2 rounded-full bg-forest-light mb-3" />
              <h3 className="text-xl md:text-2xl font-serif text-ink mb-2">Register as a builder</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                You build AI automations and want founding-builder terms —
                zero commission on your first three, early access to briefs,
                a badge that stays.
              </p>
            </div>
            <BuilderForm iframeRef={iframeRef} />
          </div>
        </div>

        <p className="text-xs text-ink-muted pt-10 text-center">
          Or just email{' '}
          <a href="mailto:zak@keenai.com.au" className="text-forest underline underline-offset-2 hover:text-forest-deep transition-colors">
            zak@keenai.com.au
          </a>
        </p>

        {/* Divider */}
        <div className="w-full h-px mt-20 mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, #E0DAD0 20%, #E0DAD0 80%, transparent)' }}
        />

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-semibold text-xl tracking-tight" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
            <span className="text-gradient">K</span>EEN<span className="text-gradient">_</span>AI
          </div>

          <div className="flex items-center gap-6">
            {[
              { name: 'TikTok', href: 'https://www.tiktok.com/@techforhumans' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zak-levy-63560a200/' },
              { name: 'GitHub', href: 'https://github.com/leroy052-cyber' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-forest transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Keen AI. An experiment, in public.
          </p>
        </footer>
      </div>
    </section>
  )
}
