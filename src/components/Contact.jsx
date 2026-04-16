import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const contentRef = useRef(null)
  const mountTime = useRef(Date.now())

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = "We need a name. Even a fake one."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "That doesn't look like a real email."
    if (!form.company.trim() || form.company.trim().length < 2)
      errs.company = "What's the business called?"
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = "Give us a bit more to work with."
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (honeypot) return
    if (Date.now() - mountTime.current < 2000) return

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
    setStatus('idle')
    setErrors({})
    mountTime.current = Date.now()
  }

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
      contentRef.current.style.transition =
        'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const inputClasses =
    'w-full bg-[#161616] border border-[#1a1a1a] px-4 py-3 text-surface placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors duration-300 font-mono'
  const labelClasses = 'text-xs text-accent tracking-widest uppercase mb-2 block'
  const errorClasses = 'text-red-400 text-xs mt-1'

  return (
    <section id="contact" className="py-32 md:py-40 section-padding relative section-glow">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-[10%] w-[300px] h-[200px] bg-mint/[0.02] blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto relative" ref={contentRef}>
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="text-xs text-accent tracking-widest uppercase">
            Get in touch
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          Tell us what's
          <br />
          <span className="text-gradient">eating your time.</span>
        </h2>

        <p className="text-muted-light text-lg max-w-xl mb-16 leading-relaxed">
          No sales pitch. No jargon. Just a proper chat about whether AI can
          actually help — or whether you just need a better spreadsheet.
        </p>

        {/* Form / Success */}
        {status === 'success' ? (
          <div className="card-glow p-8 md:p-12 mb-20">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Sorted.</span>
            </h3>
            <p className="text-muted-light leading-relaxed mb-4">
              Your message landed. I'll get back to you within 24 hours —
              usually quicker unless I'm elbow-deep in someone's Zapier setup.
            </p>
            <p className="text-muted text-sm mb-8">
              In the meantime, go have a coffee. You've earned it.
            </p>
            <button
              onClick={resetForm}
              className="text-sm text-accent hover:text-accent-glow underline underline-offset-4 transition-colors duration-300"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mb-20">
            {/* Error banner */}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 p-4 mb-8">
                <p className="text-red-400 text-sm">
                  Something went sideways. Try again, or just email me
                  directly at{' '}
                  <a
                    href="mailto:zak@keenai.com.au"
                    className="text-accent hover:text-accent-glow underline underline-offset-2"
                  >
                    zak@keenai.com.au
                  </a>
                </p>
              </div>
            )}

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-name" className={labelClasses}>Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What should we call you?"
                  className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.name && <p className={errorClasses} role="alert">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClasses}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Where can we reach you?"
                  className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.email && <p className={errorClasses} role="alert">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-phone" className={labelClasses}>
                  Phone <span className="text-muted">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="If you'd rather we call"
                  className={inputClasses}
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label htmlFor="contact-company" className={labelClasses}>Business name</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Who are we helping?"
                  className={`${inputClasses} ${errors.company ? 'border-red-500/50' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.company && <p className={errorClasses} role="alert">{errors.company}</p>}
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="contact-message" className={labelClasses}>
                What's eating your time?
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about the bottleneck, the headache, the thing that makes you think 'there has to be a better way'..."
                className={`${inputClasses} resize-y min-h-[120px] ${errors.message ? 'border-red-500/50' : ''}`}
                disabled={status === 'submitting'}
              />
              {errors.message && <p className={errorClasses} role="alert">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
                color: '#0a0a0a',
              }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send it'}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${status === 'submitting' ? 'animate-spin' : 'group-hover:translate-x-1'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                {status === 'submitting' ? (
                  <path strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" />
                ) : (
                  <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
                )}
              </svg>
            </button>
          </form>
        )}

        {/* Email fallback */}
        {status !== 'success' && (
          <>
            <div
              className="w-full h-px mb-8"
              style={{ background: 'linear-gradient(90deg, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent)' }}
            />
            <p className="text-muted text-sm mb-3">
              Prefer email? Old school. Respect.
            </p>
            <a
              href="mailto:zak@keenai.com.au"
              className="group inline-flex items-center gap-3 text-lg font-bold text-muted-light hover:text-accent transition-colors duration-300 mb-20"
            >
              zak@keenai.com.au
              <svg
                className="w-4 h-4 text-muted group-hover:text-mint group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="square" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </>
        )}

        {/* Divider before footer */}
        <div
          className="w-full h-px mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent)' }}
        />

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-bold text-xl tracking-tight" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
            <span className="text-gradient">K</span>EEN<span className="text-gradient">_</span>AI
          </div>

          <div className="flex items-center gap-6">
            {[
              { name: 'TikTok', href: 'https://www.tiktok.com/@techforhumans', color: 'hover:text-mint' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zak-levy-63560a200/', color: 'hover:text-accent' },
              { name: 'GitHub', href: 'https://github.com/leroy052-cyber', color: 'hover:text-emerald' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm text-muted ${link.color} transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Keen AI. Built by a human.
          </p>
        </div>
      </div>
    </section>
  )
}
