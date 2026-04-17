import { useEffect, useRef } from 'react'

const painPoints = [
  {
    label: 'The spreadsheet that shouldn\'t be one',
    text: "Someone on your team spends three hours every Friday moving numbers from one tab to another. Everyone agrees it should be automated. Nobody has the afternoon spare to work out how — and so it keeps happening, week after week, Friday after Friday.",
    accent: '#2D5A3D',
  },
  {
    label: 'The demo that never made it past demo',
    text: "You watched the YouTube video. You tried it yourself. Got halfway through setting it up, then something broke at a step the tutorial skipped, and now there's a half-built Zap sitting in your account that nobody quite knows what to do with.",
    accent: '#3A7A52',
  },
  {
    label: 'The quote that made you put it in the drawer',
    text: "An agency quoted twenty grand and a twelve-week roadmap to automate one email workflow. It's been sitting in the bottom drawer ever since, getting slightly more embarrassing every time you come across it while looking for a stapler.",
    accent: '#1E3D2A',
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
    <section id="pain-points" className="py-32 md:py-40 section-padding section-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
            <span className="text-xs text-forest tracking-widest uppercase font-medium">
              If this sounds familiar
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            You've got a list of things you'd automate —<br />
            <span className="italic text-forest">if only you had the time to figure it out.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, i) => (
            <div
              key={point.label}
              ref={(el) => (itemRefs.current[i] = el)}
              className="card-glow group relative p-6 md:p-8"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${point.accent}, transparent)` }}
              />

              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ backgroundColor: point.accent }}
              />

              <h3
                className="text-xs tracking-widest uppercase block mb-4 font-semibold"
                style={{ color: point.accent }}
              >
                {point.label}
              </h3>

              <p className="text-ink-light leading-relaxed text-sm">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
