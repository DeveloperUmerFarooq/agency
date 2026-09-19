import { Check, ShieldCheck } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel.jsx'

const CONFIDENTIALITY_COMMITMENTS = Object.freeze([
  'Mutual NDA before discovery',
  'Least-privilege project access',
  'Private code and documentation',
  'References available when appropriate',
])

export function ConfidentialitySection() {
  return (
    <section className="confidentiality" id="confidentiality">
      <div className="security-visual" data-reveal aria-hidden="true">
        <div className="security-grid" />
        <div className="shield-lock"><ShieldCheck size={44} strokeWidth={1.2} /></div>
        <span className="security-code code-a">ENCRYPTED / 256</span>
        <span className="security-code code-b">ACCESS / CONTROLLED</span>
        <span className="security-scan" />
      </div>
      <div className="confidentiality-copy" data-reveal>
        <SectionLabel number="04" className="light">Confidential by design</SectionLabel>
        <h2>Our best work<br />is not public.</h2>
        <p>Much of our portfolio lives behind NDAs. That is not a lack of proof — it is evidence of the trust our partners place in us.</p>
        <ul>
          {CONFIDENTIALITY_COMMITMENTS.map((commitment) => (
            <li key={commitment}><Check size={17} /> {commitment}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
