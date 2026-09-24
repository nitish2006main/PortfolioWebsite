function Footer() {
  return (
    <footer style={{ padding: '28px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: 'var(--color-text-muted)',
        fontSize: '0.85rem',
      }}>
        <span>© {new Date().getFullYear()} Nitish</span>
        <span>Built with React</span>
      </div>
    </footer>
  )
}

export default Footer
