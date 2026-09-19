import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '../config/site.js'

const inquiryLink = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(SITE_CONFIG.inquirySubject)}`

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner" data-reveal>
        <p className="eyebrow"><span /> Now booking select engagements</p>
        <h2>Bring us the problem<br />you cannot solve alone.</h2>
        <p>Tell us what you are building, where it is stuck, and what success looks like. We will reply with clear next steps.</p>
        <a className="button contact-button" href={inquiryLink}>{SITE_CONFIG.email} <ArrowUpRight size={20} /></a>
      </div>
    </section>
  )
}
