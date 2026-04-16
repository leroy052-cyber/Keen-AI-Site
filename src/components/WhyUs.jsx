import { useEffect, useRef } from 'react'

const differentiators = [
  {
    label: 'Broader than scribing',
    description:
      "Heidi and Lyrebird are excellent at what they do — in-consult transcription. But scribing is one piece of the puzzle. We automate the whole workflow: documentation, recall, intake, billing. One engagement, not five subscriptions.",
    color: '#2D5A3D',
  },
  {
    label: 'Priced for clinics, not hospitals',
    description:
      "Enterprise consultancies charge enterprise rates for a 12-week discovery phase. We ship working automation in two to three weeks, priced for a clinic with four practitioners, not a hospital group with a procurement department.",
    color: '#3A7A52',
  },
  {
    label: 'Always on, always consistent',
    description:
      "A virtual assistant goes home. These workflows run around the clock — recalling patients at 7am, processing intake forms at midnight, drafting notes while you see the next patient. Zero marginal cost, zero sick days.",
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
              Why us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            Not the only option.<br />
            <span className="italic text-forest">Just the right-shaped one.</span>
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
