import { useState } from 'react'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus({ type: 'success', msg: 'Thanks! Our team will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b1020] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_10%_10%,rgba(0,212,255,0.1),transparent)]"/>
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get a Custom Quote</h2>
          <p className="mt-2 text-cyan-100/80">Tell us about your goals and we’ll design an engagement that fits.</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="rounded-lg bg-[#0f152d] px-4 py-3 text-white placeholder:text-cyan-100/40 border border-white/10" />
            <input name="company" placeholder="Company" className="rounded-lg bg-[#0f152d] px-4 py-3 text-white placeholder:text-cyan-100/40 border border-white/10" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="email" name="email" required placeholder="Email" className="rounded-lg bg-[#0f152d] px-4 py-3 text-white placeholder:text-cyan-100/40 border border-white/10" />
            <input name="phone" placeholder="Phone" className="rounded-lg bg-[#0f152d] px-4 py-3 text-white placeholder:text-cyan-100/40 border border-white/10" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <select name="service" className="rounded-lg bg-[#0f152d] px-4 py-3 text-white border border-white/10">
              <option value="Call Center & CX">Call Center & Customer Experience</option>
              <option value="BPO/KPO">Business Process Outsourcing (BPO/KPO)</option>
              <option value="Software Development">Custom Software Development</option>
              <option value="Web Development">Website & Web App Development</option>
              <option value="AI & RPA">AI Automation & RPA Solutions</option>
            </select>
            <input name="origin" type="hidden" value="website" />
          </div>
          <textarea name="message" rows={5} placeholder="Project goals, timelines, budget range..." className="rounded-lg bg-[#0f152d] px-4 py-3 text-white placeholder:text-cyan-100/40 border border-white/10" />
          <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-[#00D4FF] px-6 py-3 font-semibold text-[#0b1020] disabled:opacity-60">
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {status && (
            <div className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{status.msg}</div>
          )}
        </form>
      </div>

      {/* Live chat placeholder */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50">
        <div className="rounded-2xl bg-white/10 px-4 py-2 text-cyan-100/80 backdrop-blur">
          Live chat widget coming soon
        </div>
      </div>
    </section>
  )
}

export default Contact
