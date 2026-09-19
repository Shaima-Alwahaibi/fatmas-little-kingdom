import { kingdom, navLinks } from '../data/content'

function KingdomNav() {
  return (
    <header className="kingdom-header">
      <div className="brand">{kingdom.title} 👑</div>
      <nav className="kingdom-nav" aria-label="Kingdom sections">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default KingdomNav
