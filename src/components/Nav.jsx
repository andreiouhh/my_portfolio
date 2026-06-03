import logo from '../assets/logo.jpg'
import { profile } from '../data/portfolioData'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="site-header">
      <a href="#hero" className="site-logo">
        <img src={logo} alt="Logo" className="site-logo-mark" />
        <span className="site-logo-text">{profile.name}</span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
