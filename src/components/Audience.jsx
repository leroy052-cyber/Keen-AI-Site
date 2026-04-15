import { useEffect, useRef } from 'react'

const audiences = [
  {
    label: 'Small business owners',
    text: "You've got 47 browser tabs open and at least three of them are the same form. You've thought about automating things roughly a hundred times but you're too busy actually running the business to sit down and figure out where to start, which is sort of the whole problem.",
    accent: '#BFFF00',
    icon: '→',
  },
  {
    label: 'Tradies & service businesses',
    text: "Brilliant at what you do, less thrilled about the quoting and invoicing and chasing and scheduling that surrounds what you do. There's a version of your week where all that stuff just... happens, and it's not as far off as you think.",
    accent: '#00FFB2',
    icon: '→',
  },
  {
    label: 'Agencies & small teams',
    text: "You know AI could plug into what you're doing but you don't need a full-time person for it, you need someone who turns up, builds the thing properly, explains it in plain English, and then gets out of the way.",
    accent: '#10B981',
    icon: '→',
  },
]

export default function Audience() {
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
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="audience" className="py-32 md:py-40 section-padding section-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-mint to-emerald" />
            <span className="text-xs text-mint tracking-widest uppercase">
              Who this is for
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            If any of this sounds<br />familiar, we should talk.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, i) => (
            <div
              key={audience.label}
              ref={(el) => (itemRefs.current[i] = el)}
              className="card-glow group relative p-6 md:p-8"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${audience.accent}, transparent)` }}
              />

              {/* Number dot */}
              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{
                  backgroundColor: audience.accent,
                  boxShadow: `0 0 10px ${audience.accent}40`,
                }}
              />

              <h3
                className="text-xs tracking-widest uppercase block mb-4 font-bold"
                style={{ color: audience.accent }}
              >
                {audience.label}
              </h3>

              <p className="text-muted-light leading-relaxed text-sm">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
