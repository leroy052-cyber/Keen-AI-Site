import { useEffect, useRef } from 'react'

const painPoints = [
  {
    label: 'Clinical documentation',
    text: "You finished your last patient at 5:30 and you're still writing SOAP notes at 8pm. Progress notes, treatment summaries, discharge letters — the clinical work expands to fill every evening you were hoping to spend somewhere else.",
    accent: '#2D5A3D',
  },
  {
    label: 'Patient recall & retention',
    text: "Patients drop off after three sessions and nobody notices until the revenue dip shows up months later. Your PMS has a recall feature somewhere in a menu you've never opened, and the patients who need rebooking are quietly disappearing.",
    accent: '#3A7A52',
  },
  {
    label: 'Intake & admin overhead',
    text: "New patient paperwork, Medicare claims, invoice chasing, referral letters — your front desk is spending half their day on tasks that feel like they should just happen automatically. Cliniko or Halaxy handles some of it, but the gaps between tools are where the hours go.",
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
              Sound familiar?
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            The work you trained for keeps getting<br />
            <span className="italic text-forest">buried under the work you didn't.</span>
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
