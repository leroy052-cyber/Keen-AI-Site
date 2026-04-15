import { useEffect, useRef } from 'react'
import Services from '../components/Services'
import SkillsServices from '../components/SkillsServices'

export default function ServicesPage() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transform = 'translateY(40px)'
      setTimeout(() => {
        headerRef.current.style.transition =
          'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        headerRef.current.style.opacity = '1'
        headerRef.current.style.transform = 'translateY(0)'
      }, 200)
    }
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding relative overflow-hidden">
        <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative" ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-accent/80 tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            How we work, and
            <br />
            <span className="text-gradient">what we build.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-light max-w-xl leading-relaxed">
            Every engagement starts the same way — we listen. What happens
            after that depends entirely on what your business actually needs.
          </p>
        </div>
      </section>

      {/* 4-Step Process */}
      <Services />

      {/* Full Skills & Services */}
      <SkillsServices />
    </>
  )
}
