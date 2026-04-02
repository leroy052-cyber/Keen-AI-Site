import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const [hoveredLink, setHoveredLink] = useState(null)

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
    <section id="contact" ref={sectionRef} className="py-32 md:py-40 section-padding relative">
      <div className="max-w-5xl mx-auto" ref={contentRef}>
        <span className="text-xs text-accent tracking-widest uppercase block mb-4">
          Get in touch
        </span>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-12">
          Ready to get
          <br />
          <span className="text-accent">keen?</span>
        </h2>

        <p className="text-muted-light text-lg max-w-lg mb-16 leading-relaxed">
          No pitch decks. No discovery calls that could've been an email. Just reach out and tell me what's eating your time.
        </p>

        {/* Contact links */}
        <div className="space-y-4 mb-20">
          <a
            href="mailto:zak@keenai.com.au"
            className="group block text-2xl md:text-4xl font-bold hover:text-accent transition-colors duration-300"
            onMouseEnter={() => setHoveredLink('email')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="inline-flex items-center gap-4">
              zak@keenai.com.au
              <svg
                className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${hoveredLink === 'email' ? 'translate-x-2 -translate-y-2' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="square" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-bold text-lg tracking-tight">
            KEEN<span className="text-accent">_</span>AI
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.tiktok.com/@techforhumans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              TikTok
            </a>
            <a
              href="https://www.linkedin.com/in/zaklevy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/leroy052-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Keen AI. Built by a human.
          </p>
        </div>
      </div>
    </section>
  )
}
