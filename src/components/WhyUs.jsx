import { useEffect, useRef } from 'react'

const differentiators = [
  {
    label: 'Paid briefs only',
    description:
      "Every brief on Keen has a budget attached before you see it. If someone wants a free plan written up so they can take it to their nephew, they can go back to LinkedIn. Builders here get paid for scope, not for pitching into a black hole.",
    color: '#2D5A3D',
  },
  {
    label: 'Australian-first, AUD-only',
    description:
      "The businesses posting here are Australian, the timezones are aligned, and the money moves in AUD. You know who you're talking to and when they're awake. No 2am Slack messages from a timezone you never agreed to work across.",
    color: '#3A7A52',
  },
  {
    label: 'Zero commission on your first three',
    description:
      "We're still building this thing. Early builders get the first three jobs commission-free, a founding-builder badge that stays on your profile, and first look at new briefs in your categories. Fair trade for putting up with our bug reports.",
    color: '#1E3D2A',
  },
]

export default function WhyUs() {
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
    <section id="why-us" className="py-32 md:py-40 section-padding section-glow">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
            <span className="text-xs text-forest tracking-widest uppercase font-medium">
              For builders
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            Freelancer platforms weren't built for<br />
            <span className="italic text-forest">the kind of work you do.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {differentiators.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-t border-border hover:bg-cream-warm/50 transition-all duration-500 px-4 -mx-4"
            >
              <h3
                className="text-lg md:text-xl font-serif transition-colors duration-300 group-hover:text-forest text-ink"
              >
                {item.label}
              </h3>
              <div>
                <p className="text-ink-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
                <div
                  className="mt-4 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
