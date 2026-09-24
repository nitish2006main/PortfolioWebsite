function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: 'var(--color-surface)',
      }}
    >
      <div
        className="container"
        style={{
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            fontSize: '3.2rem',
            lineHeight: 1.1,
            margin: '0 0 24px',
          }}
        >
          Contact
        </h2>

        <p
          style={{
            maxWidth: 600,
            color: 'var(--color-text-muted)',
            marginBottom: 28,
            fontSize: '1.15rem',
            lineHeight: 1.7,
          }}
        >
          Open to co-op opportunities in mechatronics and robotics. Feel free
          to reach out by email or connect on LinkedIn.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'flex-start',
          }}
        >
          <a
            href="mailto:n4reddy@uwaterloo.ca"
            className="btn btn-primary"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/nitish-t-reddy-60bb18242/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact