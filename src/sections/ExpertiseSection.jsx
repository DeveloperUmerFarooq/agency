import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel.jsx'
import { CAPABILITIES } from '../data/services.js'

function CapabilityCard({ capability, index }) {
  const StackIcon = capability.icon

  return (
    <article className={`capability-card stack-${index + 1}`}>
      <div className="capability-top">
        <span><b>{capability.id}</b> / {capability.eyebrow}</span>
        <ArrowUpRight size={22} strokeWidth={1.5} />
      </div>
      <div className="stack-body">
        <div className="stack-copy">
          <h3>{capability.name}</h3>
          <p className="cap-description">{capability.description}</p>
        </div>
        <div className="stack-console" aria-hidden="true">
          <span className="console-status">SYSTEM / READY</span>
          <StackIcon size={38} strokeWidth={1.35} />
          <span className="console-line line-a" />
          <span className="console-line line-b" />
          <span className="console-signal">{capability.signal}</span>
        </div>
      </div>
      <div className="tag-list">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  )
}

export function ExpertiseSection() {
  return (
    <section className="expertise section-pad" id="expertise">
      <div className="section-heading" data-reveal>
        <SectionLabel number="02">Core expertise</SectionLabel>
        <h2>Three stacks.<br />One standard.</h2>
        <p>Purpose-built technology choices, backed by consistent engineering discipline.</p>
      </div>
      <div className="capability-list">
        {CAPABILITIES.map((capability, index) => (
          <CapabilityCard key={capability.id} capability={capability} index={index} />
        ))}
      </div>
    </section>
  )
}
