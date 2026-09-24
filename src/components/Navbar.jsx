const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(241, 235, 221, 0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        <a href="#" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '2.1rem',
          color: 'var(--color-text)',
        }}>
          Nitish Thumkunta Reddy
        </a>
        <nav style={{ display: 'flex', gap: 28 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--color-text)',
              fontWeight: 500,
              fontSize: '0.95rem',
            }}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
