import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Uptime SLA', value: 99.9, suffix: '%', decimals: 1 },
  { label: 'Customer Interactions', value: 50, suffix: 'M+', decimals: 0 },
  { label: 'Global Talent', value: 500, suffix: '+', decimals: 0 },
  { label: 'Successful Projects', value: 200, suffix: '+', decimals: 0 },
  { label: 'Avg Cost Savings', value: 40, suffix: '%', decimals: 0 },
]

function Counter({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easing = 1 - Math.pow(1 - progress, 4)
      const current = start + (target - start) * easing
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, target])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white">
      {count.toFixed(decimals)}{suffix}
    </div>
  )
}

function Stats() {
  return (
    <section className="relative bg-[#0b1020] py-16">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(0,212,255,0.08),transparent)]"/>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-cyan-500/10 bg-white/5 p-6 text-center backdrop-blur">
              <Counter target={s.value} suffix={s.suffix} decimals={s.decimals} />
              <div className="mt-2 text-sm text-cyan-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
