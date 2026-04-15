import { useEffect, useRef, useState } from 'react'

export default function ContactPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const [hoveredLink, setHoveredLink] = useState(null)

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
      contentRef.current.style.transition =
        'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-32 pb-32 md:pt-40 md:pb-40 section-padding relative">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/[0.03] blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[10%] w-[300px] h-[200px] bg-mint/[0.02] blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative">
        <div ref={headerRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <span className="text-xs text-accent tracking-widest uppercase">
              Get in touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-12">
            Alright, let's
            <br />
            <span className="text-gradient">do this.</span>
          </h1>
        </div>

        <div ref={contentRef}>
          <p className="text-muted-light text-lg max-w-lg mb-16 leading-relaxed">
            Send me an email, tell me what's chewing up your time, and we'll
            have a proper conversation about whether AI is the right fix or if
            you just need someone to tell you your current system is fine and
            you should stop worrying about it.
          </p>

          {/* Contact link */}
          <div className="mb-20">
            <a
              href="mailto:zak@keenai.com.au"
              className="group block"
              onMouseEnter={() => setHoveredLink('email')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold transition-colors duration-300 hover:text-accent">
                zak@keenai.com.au
                <svg
                  className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                    hoveredLink === 'email'
                      ? 'translate-x-2 -translate-y-2 text-mint'
                      : 'text-muted'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="square"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </span>
              <div
                className="h-[2px] mt-2 w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, #BFFF00, #00FFB2)',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
