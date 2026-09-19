import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS } from '../../config/site.js'
import { useMobileNavigation } from '../../hooks/useMobileNavigation.js'
import { Brand } from '../ui/Brand.jsx'

export function Header() {
  const { isOpen, close, toggle } = useMobileNavigation()

  return (
    <header className="nav-wrap">
      <Brand />
      <nav id="main-navigation" className={`nav-links${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {NAVIGATION_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={close}>Start a project <ArrowUpRight size={16} /></a>
      </nav>
      <button
        className="menu-button"
        type="button"
        onClick={toggle}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-controls="main-navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  )
}
