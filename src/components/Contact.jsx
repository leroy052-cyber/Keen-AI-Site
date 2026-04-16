import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const contentRef = useRef(null)

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
      { threshold: 0.15 }
    )

    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(40px)'
      contentRef.current.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-32 md:py-40 section-padding relative section-glow">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-[10%] w-[300px] h-[200px] bg-mint/[0.02] blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative" ref={contentRef}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-accent to-mint" />
          <span className="text-xs text-accent tracking-widest uppercase">
            Get in touch
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-12">
          Alright, let's
          <br />
          <span className="text-gradient">do this.</span>
        </h2>

        <p className="text-muted-light text-lg max-w-lg mb-12 leading-relaxed">
          Tell us what's chewing up your time and we'll have a proper conversation about whether AI can actually help — or whether you just need a better spreadsheet.
        </p>

        {/* CTA to contact form */}
        <div className="mb-20">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #BFFF00 0%, #84CC16 100%)',
              color: '#0a0a0a',
            }}
          >
            Get in touch
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent)' }}
        />

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-bold text-xl tracking-tight">
            <span className="text-gradient">K</span>EEN<span className="text-gradient">_</span>AI
          </div>

          <div className="flex items-center gap-6">
            {[
              { name: 'TikTok', href: 'https://www.tiktok.com/@techforhumans', color: 'hover:text-mint' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zak-levy-63560a200/', color: 'hover:text-accent' },
              { name: 'GitHub', href: 'https://github.com/leroy052-cyber', color: 'hover:text-emerald' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm text-muted ${link.color} transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Keen AI. Built by a human.
          </p>
        </div>
      </div>
    </section>
  )
}
