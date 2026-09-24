const groups = [
  {
    title: 'Mechanical Design',
    items: ['SolidWorks', 'GD&T', 'Machining (mill, lathe)', 'Composites / vacuum infusion', 'DFMA'],
  },
  {
    title: 'Embedded Firmware',
    items: ['STM32', 'ESP32-S3', 'FreeRTOS', 'C++', 'Motor drivers (stepper/servo/BLDC)'],
  },
  {
    title: 'Robotics Software',
    items: ['ROS2', 'Python', 'MediaPipe / OpenCV', 'A* pathfinding', 'Pure Pursuit'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 style={{ fontSize: '2.1rem', marginBottom: 40 }}>What I work with</h2>
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
