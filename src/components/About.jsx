
function About() {
  return (
    <section id="about" className="section">
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.7fr',
          gap: 70,
          alignItems: 'center',
        }}
      >
        <div>
          <p className="eyebrow">About</p>

          <h2 style={{ fontSize: '2.1rem' }}>
            Building across mechanical, electrical, and software
          </h2>

          <p style={{ color: 'var(--color-text-muted)' }}>
            I'm a 2nd year Mechatronics Engineering student at the University of Waterloo,
            recently finished a co-op at the Waterloo Space Research Team building
            an automated centrifuge soldering experiment tied to the Canadian Space Agency's
            CAN-RGX 9 competition. My background spans mechanical design and
            fabrication, embedded firmware, and robotics software. I like projects
            that force all three to work together.
          </p>
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
              width: 260,
              height: 260,
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/linkedin-photo.JPG"
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