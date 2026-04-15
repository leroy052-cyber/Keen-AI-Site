import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let isHovering = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      // Smooth follow for ring
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      const scale = isHovering ? 2 : 1
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${scale})`

      requestAnimationFrame(animate)
    }

    const handleMouseEnterInteractive = () => {
      isHovering = true
      ring.style.borderColor = '#BFFF00'
      ring.style.opacity = '0.6'
    }

    const handleMouseLeaveInteractive = () => {
      isHovering = false
      ring.style.borderColor = '#fafafa'
      ring.style.opacity = '0.3'
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Watch for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <div aria-hidden="true">
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-surface/30 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          willChange: 'transform',
          transition: 'border-color 0.3s, opacity 0.3s, width 0.3s, height 0.3s',
        }}
      />
    </div>
  )
}
