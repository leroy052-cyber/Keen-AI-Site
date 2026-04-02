import { useEffect, useRef } from 'react'

const audiences = [
  {
    label: 'Small business owners',
    text: "You're drowning in admin. There are 47 tabs open and half of them are the same form. You know there's a better way — you just don't have time to Google it.",
  },
  {
    label: 'Tradies & service businesses',
    text: "You're great at what you do. Quoting, invoicing, scheduling? Not so much. AI can handle the boring bits so you can get back to the actual work.",
  },
  {
    label: 'Agencies & small teams',
    text: "You need AI integration but not a full-time hire. Someone who gets it, builds it, and gets out of the way.",
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
            entry.target.style.transform = 'translateX(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateX(-30px)'
        el.style.transition = `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="audience" className="py-32 md:py-40 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="text-xs text-accent tracking-widest uppercase block mb-4">
            Who this is for
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Sound like you?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {audiences.map((audience, i) => (
            <div
              key={audience.label}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 w-px h-full bg-accent/0 group-hover:bg-accent/50 transition-all duration-500" />
              <span className="text-accent text-xs tracking-widest uppercase block mb-4">
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
