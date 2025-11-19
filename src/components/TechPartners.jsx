const tech = ['AWS','Microsoft Azure','Google Cloud','OpenAI','UiPath','React','Node.js','MongoDB']

function TechPartners() {
  return (
    <section className="relative bg-[#0a0f1e] py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technology Partners</h2>
          <p className="mt-2 text-cyan-100/80 max-w-2xl">Cloud, AI and automation stack we implement at scale.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {tech.map((l) => (
            <div key={l} className="rounded-xl border border-cyan-500/10 bg-white/5 p-4 text-center text-cyan-100/70">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechPartners
