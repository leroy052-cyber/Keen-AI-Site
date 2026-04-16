import { useEffect, useRef } from 'react'

const workflows = [
  {
    number: '01',
    title: 'Documentation assist',
    description:
      "AI-assisted clinical notes that draft your SOAP entries, progress notes, and discharge summaries from session audio or structured prompts. You review, edit, sign off — but the first draft is done before you stand up from the chair.",
    color: '#2D5A3D',
  },
  {
    number: '02',
    title: 'Recall automation',
    description:
      "Automated patient recall that identifies who's overdue, sends the right message at the right time, and rebooks without your front desk lifting a finger. Integrates with Cliniko, Halaxy, Nookal, or Power Diary.",
    color: '#3A7A52',
  },
  {
    number: '03',
    title: 'Intake flow',
    description:
      "End-to-end new patient intake — from online forms and consent collection through to appointment booking and Medicare eligibility checks. The patient gets a smooth experience; your admin gets their afternoon back.",
    color: '#1E3D2A',
  },
]

export default function WhatWeBuild() {
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
    <section id="workflows" className="py-32 md:py-40 section-padding section-glow">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-forest to-forest-light" />
            <span className="text-xs text-forest tracking-widest uppercase font-medium">
              What we build
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-ink">
            Three workflows that change<br />
            <span className="italic text-forest">how your clinic runs.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {workflows.map((workflow, i) => (
            <div
              key={workflow.number}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 py-10 border-t border-border hover:bg-cream-warm/50 transition-all duration-500 px-4 -mx-4"
            >
              <span
                className="text-sm font-semibold"
                style={{ color: workflow.color }}
              >
                {workflow.number}
              </span>
              <h3 className="text-xl md:text-2xl font-serif transition-colors duration-300 group-hover:text-forest text-ink">
                {workflow.title}
              </h3>
              <div>
                <p className="text-ink-light leading-relaxed text-sm md:text-base">
                  {workflow.description}
                </p>
                <div
                  className="mt-4 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${workflow.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
