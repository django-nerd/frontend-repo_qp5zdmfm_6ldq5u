function Footer() {
  return (
    <footer className="relative bg-[#090e1b] py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-cyan-100/80">
          <div>
            <div className="text-white text-xl font-extrabold">Global IT Vision</div>
            <p className="mt-2 text-sm">Leading IT & BPO partner delivering CX, automation and engineering at scale.</p>
            <div className="mt-4 flex gap-3 text-cyan-100/60">
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Call Center & CX</li>
              <li>BPO / KPO</li>
              <li>Custom Software</li>
              <li>Web & Web Apps</li>
              <li>AI Automation & RPA</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Global Offices</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>USA • 🇺🇸</li>
              <li>Pakistan • 🇵🇰</li>
              <li>India • 🇮🇳</li>
              <li>Philippines • 🇵🇭</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-cyan-100/60">
          © {new Date().getFullYear()} Global IT Vision (Pvt) Ltd • ISO 27001 | GDPR Ready
        </div>
      </div>
    </footer>
  )
}

export default Footer
