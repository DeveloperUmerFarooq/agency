import { SITE_CONFIG } from '../../config/site.js'
import { Brand } from '../ui/Brand.jsx'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer>
      <Brand footer />
      <p>Engineering confidence into every release.</p>
      <div><span>© {CURRENT_YEAR} {SITE_CONFIG.name}</span><a href="#top">Back to top ↑</a></div>
    </footer>
  )
}
