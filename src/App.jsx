import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Code2, Database, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    id: '01',
    name: 'MERN',
    eyebrow: 'Product velocity',
    description: 'Fast, responsive products built across MongoDB, Express, React, and Node.js — from first release to a platform ready to scale.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: '02',
    name: 'Laravel + Vue',
    eyebrow: 'Operational clarity',
    description: 'Reliable business platforms with thoughtful interfaces, clean domain logic, and workflows that make complex operations feel simple.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
  },
  {
    id: '03',
    name: 'Spring Boot',
    eyebrow: 'Enterprise confidence',
    description: 'Secure Java systems engineered for demanding integrations, high-volume services, and long-term maintainability.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices'],
  },
]

const process = [
  ['01', 'Align', 'We define the business problem, success criteria, constraints, and the smallest valuable path forward.'],
  ['02', 'Architect', 'We turn requirements into a technical plan with clear scope, milestones, and risk decisions.'],
  ['03', 'Build', 'Senior engineers ship in focused cycles with frequent demos and direct, transparent communication.'],
  ['04', 'Evolve', 'After launch, we measure, refine, and strengthen the product as your priorities change.'],
]

function App() {
  const root = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title .line, .hero-copy, .hero-actions, .hero-proof', {
        y: 42,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.11,
        delay: 0.2,
      })

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 56,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        })
      })

      gsap.utils.toArray('.capability-card').forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', once: true },
        })
      })

      gsap.to('.orb', {
        yPercent: 18,
        rotate: 18,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div ref={root} className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Northnode home">
          <span className="brand-mark">N<span>°</span></span>
          <span>NORTHNODE</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#confidentiality" onClick={closeMenu}>Confidentiality</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orb" aria-hidden="true">
            <span className="orb-ring ring-one" />
            <span className="orb-ring ring-two" />
            <span className="orb-core" />
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-kicker"><span /> Independent software studio · Available worldwide</p>
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
          <div className="hero-index" aria-hidden="true">01 — 05</div>
        </section>

        <section className="intro section-pad">
          <div className="section-label" data-reveal><span>01</span> What we believe</div>
          <div className="intro-copy" data-reveal>
            <p className="large-copy">Good software is not just written. It is <em>understood</em>, shaped, challenged, and built around the people who depend on it.</p>
            <p className="body-copy">Northnode partners with ambitious teams to turn demanding ideas into calm, capable products. We bring engineering depth, product judgment, and a direct working relationship to every engagement.</p>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise">
          <div className="section-heading" data-reveal>
            <div className="section-label"><span>02</span> Core expertise</div>
            <h2>Three stacks.<br />One standard.</h2>
            <p>Purpose-built technology choices, backed by consistent engineering discipline.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.id}>
                <div className="capability-top"><span className="cap-number">{item.id}</span><Database size={22} strokeWidth={1.5} /></div>
                <p className="cap-eyebrow">{item.eyebrow}</p>
                <h3>{item.name}</h3>
                <p className="cap-description">{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="confidentiality" id="confidentiality">
          <div className="security-visual" data-reveal aria-hidden="true">
            <div className="security-grid" />
            <div className="shield-lock"><ShieldCheck size={44} strokeWidth={1.2} /></div>
            <span className="security-code code-a">ENCRYPTED / 256</span>
            <span className="security-code code-b">ACCESS / CONTROLLED</span>
            <span className="security-scan" />
          </div>
          <div className="confidentiality-copy" data-reveal>
            <div className="section-label light"><span>03</span> Confidential by design</div>
            <h2>Our best work<br />is not public.</h2>
            <p>Much of our portfolio lives behind NDAs. That is not a lack of proof — it is evidence of the trust our partners place in us.</p>
            <ul>
              <li><Check size={17} /> Mutual NDA before discovery</li>
              <li><Check size={17} /> Least-privilege project access</li>
              <li><Check size={17} /> Private code and documentation</li>
              <li><Check size={17} /> References available when appropriate</li>
            </ul>
          </div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="approach-header" data-reveal>
            <div className="section-label"><span>04</span> How we work</div>
            <h2>Clarity at every turn.</h2>
          </div>
          <div className="process-list">
            {process.map(([number, title, copy]) => (
              <article className="process-item" key={number} data-reveal>
                <span className="process-number">{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={22} className="process-icon" />
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner" data-reveal>
            <p className="eyebrow"><span /> Now booking select engagements</p>
            <h2>Bring us the problem<br />you cannot solve alone.</h2>
            <p>Tell us what you are building, where it is stuck, and what success looks like. We will reply with clear next steps.</p>
            <a className="button contact-button" href="mailto:hello@northnode.dev?subject=Project%20inquiry">hello@northnode.dev <ArrowUpRight size={20} /></a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">N<span>°</span></span><span>NORTHNODE</span></a>
        <p>Engineering confidence into every release.</p>
        <div><span>© {new Date().getFullYear()} Northnode</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
