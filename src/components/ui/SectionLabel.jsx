export function SectionLabel({ number, children, className = '' }) {
  return (
    <div className={`section-label${className ? ` ${className}` : ''}`}>
      <span>{number}</span> {children}
    </div>
  )
}
