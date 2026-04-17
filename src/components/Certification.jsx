import { useEffect, useRef } from 'react'

const pillars = [
  {
    tag: 'For the people paying',
    accent: '#2D5A3D',
    title: "You're not taking a punt.",
    body:
      "Every builder on Keen has passed a technical assessment and shipped at least one vetted automation before they can bid on a paid brief. Their profile carries category badges showing exactly what they've delivered — n8n flows, agentic systems, custom GPTs, integrations, scrapers, whatever. You see the receipts before you pick them.",
    points: [
      'Technical assessment before going live',
      'Category badges tied to real shipped work',
      'Review from the wider builder network on every delivery',
    ],
  },
  {
    tag: 'For the people building',
    accent: '#3A7A52',
    title: 'The marketplace is also the classroom.',
    body:
      "Keen is how you actually level up. Assessments unlock new category badges. Your first few builds get a once-over from senior builders in the network so you're not guessing in the dark. Monthly sessions cover new frameworks, real-world playbooks, and the patterns that are actually getting paid for right now — not the ones in last year's YouTube tutorials.",
    points: [
      'Learn by doing paid work, not free tutorials',
      'Feedback from senior builders on your first builds',
      'Monthly training on frameworks that clients are hiring for',
    ],
  },
]

export default function Certification() {
  const itemRefs = useRef([])
  const headingRef = useRef(null)

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

    const all = [headingRef.current, ...itemRefs.current].filter(Boolean)
    all.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certification" className="py-32 md:py-40 section-padding section-warm relative">
      <div className="absolute top-1/3 right-[10%] w-[400px] h-[300px] bg-forest-muted/15 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative">
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
            <span className="text-xs text-forest tracking-widest uppercase font-medium">
              Vetted builders, honest training
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            Builders with the receipts.<br />
            <span className="italic text-forest">Training that gives them the receipts.</span>
          </h2>
          <p className="text-ink-light text-lg max-w-2xl mt-8 leading-relaxed">
            Every builder on Keen has shipped something real before they can take a paid brief. And every brief they take is how they keep getting better — the marketplace and the training are the same thing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.tag}
              ref={(el) => (itemRefs.current[i] = el)}
              className="card-glow group relative p-6 md:p-10 flex flex-col"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${pillar.accent}, transparent)` }}
              />

              <span
                className="text-[10px] tracking-widest uppercase font-semibold mb-4"
                style={{ color: pillar.accent }}
              >
                {pillar.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif text-ink mb-5 leading-tight">
                {pillar.title}
              </h3>

              <p className="text-ink-light leading-relaxed text-sm md:text-base mb-6">
                {pillar.body}
              </p>

              <ul className="space-y-2 mt-auto pt-4 border-t border-border">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink-light">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[0.5rem] shrink-0"
                      style={{ backgroundColor: pillar.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
