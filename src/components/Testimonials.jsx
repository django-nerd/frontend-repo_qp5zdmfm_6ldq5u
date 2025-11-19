const testimonials = [
  { name: 'Sarah Jenkins', role: 'VP Customer Ops, Retail Co.', quote: 'They operate like an extension of our team. World-class delivery and unmatched agility.' },
  { name: 'Tom Alvarez', role: 'CTO, FinTech', quote: 'Their AI automation cut our back-office cycle time by half without compromising quality.' },
  { name: 'Alicia Wong', role: 'Director Support, HealthNet', quote: 'Reliable 24/7 coverage with strong compliance. Our CSAT and NPS have never been better.' },
]

function Testimonials() {
  return (
    <section className="relative bg-[#0b1020] py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Leaders Say</h2>
          <p className="mt-2 text-cyan-100/80 max-w-2xl">Trust built on outcomes, transparency and partnership.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-cyan-100/90">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
              <div className="text-xs text-cyan-100/60">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
