import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1020]">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(0,212,255,0.18),transparent),radial-gradient(1000px_500px_at_80%_110%,rgba(0,212,255,0.12),transparent)]" />

      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/5 px-4 py-2 text-sm text-cyan-200/90 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D4FF]"></span>
            Global IT Vision (Pvt) Ltd • Pakistan • Serving USA, UK, EU, AU
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Scale Smarter with World-Class IT & AI-Powered Outsourcing
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cyan-100/80 max-w-2xl">
            Trusted by 200+ enterprises • 50M+ customer interactions handled • 15+ years of excellence
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#00D4FF] px-6 py-3 font-semibold text-[#0b1020] shadow-[0_0_0_0_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_0_rgba(0,212,255,0.35)] transition-shadow">
              Get a Free Consultation
            </a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-xl border border-cyan-500/30 bg-white/5 px-6 py-3 font-semibold text-cyan-100 hover:bg-white/10 transition">
              View Case Studies →
            </a>
          </div>
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-cyan-300/60">Trusted by leaders</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-90">
              {['Amazon','Microsoft','Deloitte','Siemens','PayPal','Accenture'].map((c) => (
                <div key={c} className="text-cyan-100/60 text-sm tracking-widest">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />
    </section>
  )
}

export default Hero
