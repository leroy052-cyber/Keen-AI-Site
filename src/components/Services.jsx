import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'We learn your business',
    description:
      "Before we touch any tech, we sit down and figure out how things actually work. The bottlenecks, the workarounds, the stuff that eats your day.",
    color: '#BFFF00',
  },
  {
    number: '02',
    title: 'We find the pain points',
    description:
      "Not every problem needs AI. We identify the ones that do — and the ones that just need a better spreadsheet.",
    color: '#84CC16',
  },
  {
    number: '03',
    title: 'We build the fix',
    description:
      "Custom workflows, automations, integrations. Built to fit your business, not the other way around. Nothing over-engineered.",
    color: '#00FFB2',
  },
  {
    number: '04',
    title: 'We teach you to run it',
    description:
      "No vendor lock-in, no mystery black boxes. You understand what we built, and you can run it without us. That's the whole point.",
    color: '#10B981',
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
    <section id="services" className="py-32 md:py-40 section-padding section-glow">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
            <span className="text-xs text-accent tracking-widest uppercase">
              What we do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Simple process.<br />
            <span className="text-gradient">Real results.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 py-10 border-t border-border-subtle hover:bg-bg-elevated/50 transition-all duration-500 px-4 -mx-4"
            >
              <span
                className="text-sm font-bold"
                style={{ color: service.color }}
              >
                {service.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-accent">
                {service.title}
              </h3>
              <div>
                <p className="text-muted-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                {/* Accent bar that expands on hover */}
                <div
                  className="mt-4 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
