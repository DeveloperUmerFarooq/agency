import { SectionLabel } from '../components/ui/SectionLabel.jsx'

export function IntroSection() {
  return (
    <section className="intro section-pad">
      <div data-reveal><SectionLabel number="01">What we believe</SectionLabel></div>
      <div className="intro-copy" data-reveal>
        <p className="large-copy">Good software is not just written. It is <em>understood</em>, shaped, challenged, and built around the people who depend on it.</p>
        <p className="body-copy">Northnode is a focused freelance team partnering with ambitious clients to turn demanding ideas into calm, capable products. You work directly with the people designing and building your solution.</p>
      </div>
    </section>
  )
}
