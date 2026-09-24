function About() {
  return (
    <section id="about" className="section">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 50,
        alignItems: 'center',
      }}>
        <div>
          <p className="eyebrow">About</p>
          <h2 style={{ fontSize: '2.1rem' }}>Grounded in mechanical design, drawn to embedded systems.</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            I'm a Mechatronics Engineering student at the University of Waterloo, currently on
            co-op at the Waterloo Space Research Team building a centrifuge soldering experiment
            tied to the Canadian Space Agency's CAN-RGX program. My background spans mechanical
            design and fabrication, embedded firmware, and robotics software — I like projects
            that force all three to work together.
          </p>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 18 }}>Quick facts</h3>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--color-text-muted)' }}>
            <li>Mechatronics Engineering, University of Waterloo</li>
            <li>Mechatronics Integration Co-op, WSRT (May–Aug 2026)</li>
            <li>SolidWorks, GD&T, machining, composites/vacuum infusion</li>
            <li>ESP32-S3, STM32, FreeRTOS, C++, Python</li>
            <li>ROS2, MediaPipe/OpenCV, A*, Pure Pursuit</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
