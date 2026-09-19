import { useRef } from 'react'
import { Footer } from '../components/layout/Footer.jsx'
import { Header } from '../components/layout/Header.jsx'
import { usePageAnimations } from '../hooks/usePageAnimations.js'
import { ApproachSection } from '../sections/ApproachSection.jsx'
import { ConfidentialitySection } from '../sections/ConfidentialitySection.jsx'
import { ContactSection } from '../sections/ContactSection.jsx'
import { ExpertiseSection } from '../sections/ExpertiseSection.jsx'
import { HeroSection } from '../sections/HeroSection.jsx'
import { IntroSection } from '../sections/IntroSection.jsx'
import { SecurityServicesSection } from '../sections/SecurityServicesSection.jsx'

export function App() {
  const rootRef = useRef(null)

  usePageAnimations(rootRef)

  return (
    <div ref={rootRef} className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <ExpertiseSection />
        <SecurityServicesSection />
        <ConfidentialitySection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
