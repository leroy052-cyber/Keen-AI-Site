import { useEffect, useRef } from 'react'

export default function StickyText() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const accentRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    const accentLine = accentRef.current
    if (!container || !text) return

    let rafId
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const containerTop = rect.top
        const containerHeight = rect.height

        const progress = Math.max(0, Math.min(1,
          -containerTop / (containerHeight - windowHeight)
        ))

        const translateX = -progress * 50
        text.style.transform = `translateX(${translateX}%)`

        const opacity = progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1
        text.style.opacity = opacity

        // Grow accent line with scroll
        if (accentLine) {
          accentLine.style.transform = `scaleX(${progress})`
        }
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
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Accent line that grows */}
        <div
          ref={accentRef}
          className="absolute top-0 left-0 w-full h-[2px] origin-left"
          style={{
            background: 'linear-gradient(90deg, #BFFF00, #00FFB2, #10B981)',
            transform: 'scaleX(0)',
            transition: 'none',
          }}
        />
        <div
          ref={textRef}
          className="whitespace-nowrap text-[15vw] md:text-[12vw] font-bold select-none will-change-transform"
          style={{
            transform: 'translateX(0%)',
            background: 'linear-gradient(90deg, rgba(191,255,0,0.06), rgba(0,255,178,0.04), rgba(16,185,129,0.05), rgba(191,255,0,0.06))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          KEEN AS • SHARP AS • BUILT FOR YOUR BUSINESS •
        </div>
      </div>
    </div>
  )
}
