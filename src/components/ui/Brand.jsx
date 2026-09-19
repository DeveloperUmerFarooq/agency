export function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#top" aria-label="Northnode home">
      <span className="brand-mark" aria-hidden="true">N<span>°</span></span>
      <span>NORTHNODE</span>
    </a>
  )
}
