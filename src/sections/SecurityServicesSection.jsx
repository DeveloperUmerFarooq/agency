import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel.jsx'
import { SECURITY_SERVICES } from '../data/services.js'
import { updatePointerGlow } from '../utils/pointerGlow.js'

function SecurityCommand() {
  return (
    <div className="security-command" aria-hidden="true">
      <div className="command-bar">
        <span><i /> SYSTEM / ASSESSING</span>
        <span>03:21:48</span>
      </div>
      <div className="security-emblem">
        <span className="radar-sweep" />
        <span className="emblem-orbit orbit-one" />
        <span className="emblem-orbit orbit-two" />
        <span className="signal-node node-one" />
        <span className="signal-node node-two" />
        <span className="signal-node node-three" />
        <ShieldCheck size={48} strokeWidth={1.2} />
      </div>
      <div className="command-signals">
        <span><b>01</b> Risk mapped</span>
        <span><b>02</b> Surface tested</span>
        <span><b>03</b> Controls hardened</span>
      </div>
    </div>
  )
}

export function SecurityServicesSection() {
  const moveGlow = (event) => updatePointerGlow(event, '--security-x', '--security-y')

  return (
    <section className="security-services section-pad" id="security-services" onPointerMove={moveGlow}>
      <div className="security-services-header" data-reveal>
        <SectionLabel number="03" className="security-label">Cyber security</SectionLabel>
        <div>
          <h2>Build with confidence.<br /><em>Defend with intent.</em></h2>
          <p>Security is its own engineering discipline. We assess real risk, strengthen the systems that matter, and give teams a practical path from findings to fixes.</p>
        </div>
        <SecurityCommand />
      </div>
      <div className="security-service-grid">
        {SECURITY_SERVICES.map((service) => (
          <article className="security-service-card" key={service.id} data-reveal>
            <span className="security-service-number">{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </article>
        ))}
      </div>
    </section>
  )
}
