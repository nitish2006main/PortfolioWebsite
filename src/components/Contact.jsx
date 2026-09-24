function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
        <p className="eyebrow">Contact</p>
        <h2 style={{ fontSize: '2.1rem' }}>Let's talk</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 28 }}>
          Open to co-op opportunities in mechatronics and robotics. Feel Free to reach out by email or connect on LinkedIn.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <a href="mailto:n4reddy@uwaterloo.ca" className="btn btn-primary">Email Me</a>
          <a href="https://www.linkedin.com/in/nitish-t-reddy-60bb18242/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
