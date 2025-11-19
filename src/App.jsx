import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import CaseStudies from './components/CaseStudies'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import TechPartners from './components/TechPartners'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-white">
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <CaseStudies />
      <Clients />
      <Testimonials />
      <TechPartners />
      <CTA />
      <Contact />
    </div>
  )
}

export default App
