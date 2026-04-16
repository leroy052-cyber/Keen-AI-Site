import { useEffect, useRef, useState } from 'react'

// --- Google Form Configuration ---
// To wire up: create the Google Form, then inspect the live form HTML
// to find the form action URL and entry.XXXXXXX field IDs.
const GOOGLE_FORM_ACTION_URL = 'GOOGLE_FORM_URL_PLACEHOLDER'
const ENTRY_IDS = {
  practiceType: 'entry.PLACEHOLDER_1',
  practitionerCount: 'entry.PLACEHOLDER_2',
  pms: 'entry.PLACEHOLDER_3',
  biggestTask: 'entry.PLACEHOLDER_4',
  valuePerMonth: 'entry.PLACEHOLDER_5',
  role: 'entry.PLACEHOLDER_6',
  name: 'entry.PLACEHOLDER_7',
  email: 'entry.PLACEHOLDER_8',
  phone: 'entry.PLACEHOLDER_9',
  openToCall: 'entry.PLACEHOLDER_10',
}

const selectClasses =
  'w-full px-4 py-3 bg-cream-warm border border-border text-ink text-sm focus:outline-none focus:border-forest transition-colors duration-200 appearance-none'
const inputClasses =
  'w-full px-4 py-3 bg-cream-warm border border-border text-ink text-sm focus:outline-none focus:border-forest transition-colors duration-200 placeholder:text-ink-muted/60'
const labelClasses = 'block text-xs font-medium text-ink-muted tracking-wide uppercase mb-2'

export default function Contact() {
  const contentRef = useRef(null)
  const iframeRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    practiceType: '',
    practitionerCount: '',
    pms: '',
    biggestTask: '',
    valuePerMonth: '',
    role: '',
    name: '',
    email: '',
    phone: '',
    openToCall: '',
  })

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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build Google Form URL with query params
    const params = new URLSearchParams()
    Object.keys(ENTRY_IDS).forEach((key) => {
      if (formData[key]) {
        params.append(ENTRY_IDS[key], formData[key])
      }
    })

    // Submit via hidden iframe to avoid CORS issues
    const url = `${GOOGLE_FORM_ACTION_URL}?${params.toString()}`
    if (iframeRef.current) {
      iframeRef.current.src = url
    }

    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-40 section-padding relative section-glow">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-forest-muted/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* Hidden iframe for Google Form submission */}
      <iframe
        ref={iframeRef}
        name="hidden-form-iframe"
        className="hidden"
        title="Form submission target"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative" ref={contentRef}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
          <span className="text-xs text-forest tracking-widest uppercase font-medium">
            Free clinic audit
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight mb-6 text-ink">
          Fifteen minutes to find out<br />
          <span className="italic text-forest">if it's worth building.</span>
        </h2>

        <p className="text-ink-light text-lg max-w-lg mb-12 leading-relaxed">
          Tell us about your clinic and the admin that's eating your week. If
          there's a fit, we'll book a 15-minute call to map where AI could save
          you the most time. No pitch, no obligation.
        </p>

        {submitted ? (
          <div className="py-16 text-center">
            <div className="w-3 h-3 rounded-full bg-forest mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-ink mb-4">Thanks — we'll be in touch within 24 hours.</h3>
            <p className="text-ink-muted text-sm">
              If you'd rather not wait, email{' '}
              <a href="mailto:zak@keenai.com.au" className="text-forest underline underline-offset-2">
                zak@keenai.com.au
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Practice type + Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="practiceType" className={labelClasses}>Practice type</label>
                <select
                  id="practiceType"
                  name="practiceType"
                  required
                  value={formData.practiceType}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>Physiotherapy</option>
                  <option>Psychology</option>
                  <option>Occupational Therapy</option>
                  <option>Speech Pathology</option>
                  <option>Podiatry</option>
                  <option>Other Allied Health</option>
                  <option>Not Allied Health</option>
                </select>
              </div>
              <div>
                <label htmlFor="practitionerCount" className={labelClasses}>Practitioners</label>
                <select
                  id="practitionerCount"
                  name="practitionerCount"
                  required
                  value={formData.practitionerCount}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>1</option>
                  <option>2–5</option>
                  <option>6–10</option>
                  <option>11–20</option>
                  <option>20+</option>
                </select>
              </div>
            </div>

            {/* Row 2: PMS + Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pms" className={labelClasses}>Practice management software</label>
                <select
                  id="pms"
                  name="pms"
                  required
                  value={formData.pms}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>Cliniko</option>
                  <option>Halaxy</option>
                  <option>Nookal</option>
                  <option>Power Diary</option>
                  <option>Other</option>
                  <option>None</option>
                </select>
              </div>
              <div>
                <label htmlFor="role" className={labelClasses}>Your role</label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>Clinic Owner / Principal</option>
                  <option>Practice Manager</option>
                  <option>Practitioner</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* The gold question */}
            <div>
              <label htmlFor="biggestTask" className={labelClasses}>
                What's the single biggest repetitive task eating time in your clinic right now?
              </label>
              <textarea
                id="biggestTask"
                name="biggestTask"
                required
                rows={3}
                value={formData.biggestTask}
                onChange={handleChange}
                placeholder="e.g. Writing SOAP notes after hours, chasing up patient recalls manually..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Value + Call willingness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="valuePerMonth" className={labelClasses}>
                  If we saved you 5+ hrs/week, what's that worth per month?
                </label>
                <select
                  id="valuePerMonth"
                  name="valuePerMonth"
                  required
                  value={formData.valuePerMonth}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>Less than $250</option>
                  <option>$250–$500</option>
                  <option>$500–$1,000</option>
                  <option>$1,000–$2,500</option>
                  <option>$2,500+</option>
                </select>
              </div>
              <div>
                <label htmlFor="openToCall" className={labelClasses}>
                  Open to a 15-min call this or next week?
                </label>
                <select
                  id="openToCall"
                  name="openToCall"
                  required
                  value={formData.openToCall}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Select...</option>
                  <option>Yes</option>
                  <option>Maybe</option>
                  <option>Not right now</option>
                </select>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-forest text-cream hover:bg-forest-deep"
              >
                Book a free 15-min audit
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
              </button>
            </div>

            <p className="text-xs text-ink-muted pt-2">
              Or just email{' '}
              <a href="mailto:zak@keenai.com.au" className="text-forest underline underline-offset-2 hover:text-forest-deep transition-colors">
                zak@keenai.com.au
              </a>
            </p>
          </form>
        )}

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
            &copy; {new Date().getFullYear()} Keen AI. Built by a human.
          </p>
        </footer>
      </div>
    </section>
  )
}
