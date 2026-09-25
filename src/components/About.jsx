function About() {
  return (
    <section
      id="about"
      className="section"
      style={{
        paddingTop: 110,
        paddingBottom: 100,
      }}
    >
      <div
        className="container about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.7fr',
          gap: 70,
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '2.8rem',
              lineHeight: 1.1,
              margin: '0 0 24px',
              color: 'var(--color-secondary)',
              letterSpacing: 'normal',
            }}
          >
            About Me
          </h2>

          <h1
            style={{
              fontSize: '1.8rem',
              lineHeight: 1.15,
              maxWidth: 720,
              margin: '0 0 24px',
            }}
          >
            Mechatronics Engineering student at the University of Waterloo
          </h1>

          <p
            style={{
              maxWidth: 620,
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: 'var(--color-text-muted)',
              margin: '0 0 28px',
            }}
          >
            I recently finished a co-op at the Waterloo Space Research Team,
            working on a centrifuge soldering experiment tied to the Canadian
            Space Agency's CAN-RGX 9 competition. My background spans mechanical
            design and fabrication, embedded firmware, and robotics software.
            I enjoy working on projects that bring these areas together.
          </p>

          <div style={{ display: 'flex', gap: 14 }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/linkedin-photo.jpg"
              alt="Nitish Reddy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About