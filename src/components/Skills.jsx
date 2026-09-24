const groups = [
  {
    title: 'Mechanical',
    items: ['SolidWorks', 'AutoCAD', 'Manufacturing (Machining, 3D Printing)', 'DFMA', 'Assembly'],
  },
  {
    title: 'Electrical/Embedded',
    items: ['STM32', 'ESP32-S3', 'Actuator Control', 'Sensor Integration', 'PCB/Hardware Testing Debugging'],
  },
  {
    title: 'Software',
    items: ['Python', 'C++', 'C', 'FreeRTOS', 'MediaPipe / OpenCV'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.8rem', marginBottom: 40, color: 'var(--color-secondary)' }}>Skills</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {groups.map((g) => (
            <div key={g.title} className="card" style={{ padding: 26, background: 'var(--color-bg)' }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-secondary)' }}>{g.title}</h3>
              <ul style={{ margin: '12px 0 0', paddingLeft: 18, color: 'var(--color-text-muted)' }}>
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
