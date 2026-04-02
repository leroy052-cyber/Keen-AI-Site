import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999]">
      <div
        className="h-full bg-accent origin-left"
        style={{
          transform: `scaleX(${progress})`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  )
}
