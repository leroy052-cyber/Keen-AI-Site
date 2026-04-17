import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'A brief gets posted',
    business:
      "You write down what you want automated, what tools you're already using, and roughly what you'd pay if someone made it work. Takes about five minutes. No login wall, no quote form that takes two business days.",
    builder:
      "Briefs land in your feed, filtered by the stack you work in — n8n, Zapier, custom GPTs, agentic frameworks, whatever. Every brief on Keen has a budget attached before you see it.",
    color: '#2D5A3D',
  },
  {
    number: '02',
    title: 'A builder picks it up',
    business:
      "A handful of builders put their hand up with a plan and a price. You read the plans, pick the one whose approach you actually understand. We verify who they are so you're not just taking a punt on a username.",
    builder:
      "You bid with a short plan and a fixed quote. Scope is agreed before anyone opens a code editor. No unpaid discovery calls, no spec-written-for-free.",
    color: '#3A7A52',
  },
  {
    number: '03',
    title: 'The thing gets built',
    business:
      "They build it. You see progress as it goes, not a big reveal at the end. When it works, you sign off and we release the payment. You keep the automation, the docs, the credentials — the lot.",
    builder:
      "Ship the build, get signed off, get paid in AUD. We hold payment in escrow so you're not chasing an invoice three weeks later. First three builds are commission-free.",
    color: '#1E3D2A',
  },
]

export default function Services() {
  const itemRefs = useRef([])

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
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    itemRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        el.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-32 md:py-40 section-padding section-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
            <span className="text-xs text-forest tracking-widest uppercase font-medium">
              How it works
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            A brief gets posted. A builder picks it up.<br />
            <span className="italic text-forest">The thing gets built.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-12 border-t border-border hover:bg-cream-warm/50 transition-all duration-500 px-4 -mx-4"
            >
              <span
                className="text-sm font-semibold"
                style={{ color: step.color }}
              >
                {step.number}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif transition-colors duration-300 group-hover:text-forest text-ink mb-6">
                  {step.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div>
                    <span
                      className="text-[10px] tracking-widest uppercase font-semibold block mb-2"
                      style={{ color: step.color }}
                    >
                      If you've got something to automate
                    </span>
                    <p className="text-ink-light leading-relaxed text-sm md:text-base">
                      {step.business}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-[10px] tracking-widest uppercase font-semibold block mb-2 text-ink-muted"
                    >
                      If you're a builder
                    </span>
                    <p className="text-ink-light leading-relaxed text-sm md:text-base">
                      {step.builder}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-6 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
