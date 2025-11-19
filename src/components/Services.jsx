import { Code, HeadphonesIcon as Headphones, Cpu, Globe, Workflow } from 'lucide-react'

const services = [
  {
    icon: Headphones,
    title: 'Call Center & Customer Experience',
    desc: '24/7 multilingual CX with omnichannel support, QA, workforce management and CSAT uplift.',
  },
  {
    icon: Workflow,
    title: 'Business Process Outsourcing (BPO/KPO)',
    desc: 'Scalable back-office, finance, data ops and knowledge processes with airtight SLAs.',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'High-quality engineering across web, mobile, microservices and enterprise systems.',
  },
  {
    icon: Globe,
    title: 'Website & Web Application Development',
    desc: 'Blazing-fast, SEO-first websites and PWAs with modern stacks and CI/CD.',
  },
  {
    icon: Cpu,
    title: 'AI Automation & RPA Solutions',
    desc: 'Deploy GenAI agents, chatbots and UiPath automations that reduce cost by 40%+.',
  },
]

function Services() {
  return (
    <section id="services" className="relative bg-[#0a0f1e] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(0,212,255,0.12),transparent)]"/>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-2 text-cyan-100/80 max-w-2xl">End-to-end delivery across CX, BPO and modern software with enterprise-grade governance.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <a key={title} href="#contact" className="group rounded-2xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] ring-1 ring-inset ring-[#00D4FF]/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{desc}</p>
              <div className="mt-4 text-[#00D4FF]">Learn More →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
