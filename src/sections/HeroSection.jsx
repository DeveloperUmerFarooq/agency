import { ArrowDown, ArrowUpRight, Code2, ShieldCheck, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb" aria-hidden="true">
        <span className="orb-ring ring-one" />
        <span className="orb-ring ring-two" />
        <span className="orb-core" />
      </div>
      <div className="hero-content">
        <p className="eyebrow hero-kicker"><span /> Independent software &amp; security team · Available worldwide</p>
        <h1 className="hero-title">
          <span className="line">Complex software.</span>
          <span className="line accent-line">Clearly engineered.</span>
        </h1>
        <p className="hero-copy">We design and build dependable digital products for teams that value precision, momentum, and a technology partner who thinks beyond the ticket.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Discuss your project <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#expertise">Explore our expertise <ArrowDown size={17} /></a>
        </div>
        <div className="hero-proof">
          <span><ShieldCheck size={17} /> NDA-ready by default</span>
          <span><Code2 size={17} /> Senior-led delivery</span>
          <span><Sparkles size={17} /> Product-minded engineering</span>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">01 — 06</div>
    </section>
  )
}
