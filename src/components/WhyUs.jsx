import { ShieldCheck, Clock, UserCheck, FileCheck2, Sparkles } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'ISO 27001 & GDPR Compliant', desc: 'Enterprise-grade security, privacy-by-design and rigorous governance.' },
  { icon: Clock, title: '24/7/365 Follow-the-Sun Delivery', desc: 'Always-on operations spanning time zones for uninterrupted coverage.' },
  { icon: UserCheck, title: 'Dedicated Account Managers', desc: 'Single throat to choke, proactive communication and quarterly business reviews.' },
  { icon: FileCheck2, title: 'Transparent Pricing & SLA', desc: 'Crystal clear contracts, KPIs and real-time performance dashboards.' },
  { icon: Sparkles, title: 'Cutting-Edge AI & Tech Stack', desc: 'GenAI, RPA and cloud-native tooling embedded in every engagement.' },
]

function WhyUs() {
  return (
    <section className="relative bg-[#0a0f1e] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_50%,rgba(0,212,255,0.12),transparent)]"/>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-2 text-cyan-100/80 max-w-2xl">Risk-free execution with security, uptime and ROI guarantees baked in.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] ring-1 ring-inset ring-[#00D4FF]/30">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-cyan-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
