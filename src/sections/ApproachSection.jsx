import { SectionLabel } from '../components/ui/SectionLabel.jsx'
import { PROCESS_PHASES } from '../data/services.js'
import { updatePointerGlow } from '../utils/pointerGlow.js'

function ProcessMonitor() {
  return (
    <div className="process-live" aria-hidden="true">
      <div className="process-live-top"><span><i /> Flow / active</span><span>04 phases</span></div>
      <div className="process-live-bars"><span /><span /><span /><span /><span /><span /><span /></div>
      <div className="process-live-marquee"><span>DISCOVERY · ARCHITECTURE · DELIVERY · EVOLUTION · </span><span>DISCOVERY · ARCHITECTURE · DELIVERY · EVOLUTION · </span></div>
    </div>
  )
}

function ProcessCard({ phase }) {
  return (
    <article className="process-item" data-reveal>
      <span className="process-node" aria-hidden="true"><i /></span>
      <div className="process-card" data-phase={phase.id}>
        <div className="process-card-top">
          <span className="process-number">Phase / {phase.id}</span>
          <span className="process-outcome">{phase.outcome}</span>
        </div>
        <h3>{phase.title}</h3>
        <p>{phase.description}</p>
        <div className="process-activity" aria-hidden="true">
          <span>Output / in motion</span>
          <div><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    </article>
  )
}

export function ApproachSection() {
  const moveGlow = (event) => updatePointerGlow(event, '--process-x', '--process-y')

  return (
    <section className="approach section-pad" id="approach" onPointerMove={moveGlow}>
      <div className="approach-layout">
        <div className="approach-header" data-reveal>
          <SectionLabel number="05">How we work</SectionLabel>
          <h2>Clarity at<br />every turn.</h2>
          <p>One continuous delivery path, with a useful outcome at every phase. You always know what is happening, why it matters, and what comes next.</p>
          <ProcessMonitor />
        </div>
        <div className="process-list">
          <div className="process-track" aria-hidden="true"><span className="process-line-fill" /></div>
          {PROCESS_PHASES.map((phase) => <ProcessCard key={phase.id} phase={phase} />)}
        </div>
      </div>
    </section>
  )
}
