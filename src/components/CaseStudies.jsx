import { useState } from 'react'

const cases = [
  { title: 'Fortune 100 Retailer', impact: '35% AHT reduction, +22% CSAT', desc: 'Deployed multilingual omnichannel CX with AI-assisted agents across voice, chat and email.' },
  { title: 'Global FinTech', impact: '40% Ops cost savings', desc: 'Built robotic process automations for KYC and dispute processing using UiPath + custom APIs.' },
  { title: 'Healthcare Network', impact: '+18% NPS, HIPAA-compliant', desc: 'Launched secure patient support center with real-time QA and analytics.' },
]

function CaseStudies() {
  const [active, setActive] = useState(0)
  return (
    <section id="cases" className="relative bg-[#0b1020] py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Success Stories</h2>
            <p className="mt-2 text-cyan-100/80 max-w-2xl">Proof of outcomes across retail, finance and healthcare.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {cases.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-2 w-8 rounded-full ${active === i ? 'bg-[#00D4FF]' : 'bg-white/20'}`}></button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div key={c.title} className={`rounded-2xl border ${active === i ? 'border-[#00D4FF]/50' : 'border-cyan-500/10'} bg-white/5 p-6 backdrop-blur transition`}
              onMouseEnter={() => setActive(i)}>
              <div className="text-sm text-[#00D4FF]">{c.impact}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-cyan-100/80 text-sm">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-[#00D4FF]">Read the full case →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
