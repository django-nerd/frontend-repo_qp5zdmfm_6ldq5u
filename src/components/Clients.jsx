const logos = ['Amazon','Microsoft','Deloitte','Accenture','Siemens','Salesforce','Uber','Stripe']

function Clients() {
  return (
    <section className="relative bg-[#0a0f1e] py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="sr-only">Clients</h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-12 whitespace-nowrap text-cyan-100/60">
            {logos.concat(logos).map((l, i) => (
              <div key={i} className="text-sm tracking-widest">{l}</div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {logos.map((l) => (
            <div key={l} className="rounded-xl border border-cyan-500/10 bg-white/5 p-4 text-center text-cyan-100/70">{l}</div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  )
}

export default Clients
