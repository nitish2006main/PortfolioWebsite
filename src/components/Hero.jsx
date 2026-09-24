function Hero() {
  return (
    <section className="section" style={{ paddingTop: 130, paddingBottom: 100 }}>
      <div className="container">
        <p className="eyebrow">Mechatronics Engineering · University of Waterloo</p>
        <h1 style={{ fontSize: '3.2rem', maxWidth: 720, lineHeight: 1.15 }}>
          Hi, I'm Nitish — I design, build, and debug the systems where hardware meets software.
        </h1>
        <p style={{
          maxWidth: 580,
          fontSize: '1.1rem',
          color: 'var(--color-text-muted)',
          margin: '20px 0 36px',
        }}>
          Mechatronics Integration Co-op at the Waterloo Space Research Team, working across
          embedded firmware, mechanical design, and robotics software.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
