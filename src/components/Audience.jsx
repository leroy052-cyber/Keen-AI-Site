import { useEffect, useRef } from 'react'

const audiences = [
  {
    label: 'Small business owners',
    text: "You're drowning in admin. There are 47 tabs open and half of them are the same form. You know there's a better way — you just don't have time to Google it.",
    accent: '#BFFF00',
    icon: '→',
  },
  {
    label: 'Tradies & service businesses',
    text: "You're great at what you do. Quoting, invoicing, scheduling? Not so much. AI can handle the boring bits so you can get back to the actual work.",
    accent: '#00FFB2',
    icon: '→',
  },
  {
    label: 'Agencies & small teams',
    text: "You need AI integration but not a full-time hire. Someone who gets it, builds it, and gets out of the way.",
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
            Sound like you?
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

              <span
                className="text-xs tracking-widest uppercase block mb-4 font-bold"
                style={{ color: audience.accent }}
              >
                {audience.label}
              </span>

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
