import { useEffect, useRef } from 'react'

export default function StickyText() {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    let rafId
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const containerTop = rect.top
        const containerHeight = rect.height

        // Calculate progress through this section
        const progress = Math.max(0, Math.min(1,
          -containerTop / (containerHeight - windowHeight)
        ))

        // Horizontal translate based on scroll
        const translateX = -progress * 50
        text.style.transform = `translateX(${translateX}%)`

        // Fade out as we scroll past
        const opacity = progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1
        text.style.opacity = opacity
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[200vh]" aria-hidden="true">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={textRef}
          className="whitespace-nowrap text-[15vw] md:text-[12vw] font-bold text-white/[0.04] select-none will-change-transform"
          style={{ transform: 'translateX(0%)' }}
        >
          KEEN AS • SHARP AS • BUILT FOR YOUR BUSINESS •
        </div>
      </div>
    </div>
  )
}
