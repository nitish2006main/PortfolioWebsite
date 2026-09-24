const projects = [
  {
    title: 'Centrifuge Soldering Experiment — WSRT',
    tag: 'Embedded · Mechanical · CSA CAN-RGX',
    description:
      "Mechatronics Integration Co-op at the Waterloo Space Research Team. Designed and machined the centrifuge's motor mount, built STM32/FreeRTOS firmware to drive a 5-actuator soldering system (carrier indexing, dual wire feeders, iron actuation, centrifuge spin), and commissioned it within a 2A slip-ring power constraint.",
    points: [
      'STM32 Nucleo F401RE firmware: PWM/GPIO control for stepper, servo, and BLDC motors',
      'Machined the motor mount from raw aluminum, validated under 0g–3g centrifugal loading',
      'Redesigned the solder wire feeder, cutting assembly width by 25%, current by 34% and thermal rise by 47%',
    ],
  },
  {
    title: 'PostureBOT',
    tag: 'ESP32-S3 · Computer Vision · Controls',
    description:
      'A personal pan-tilt posture-correcting face-tracking system. Combines Python/MediaPipe computer vision with FreeRTOS firmware on an ESP32-S3, using proportional servo control and monocular depth estimation fused with servo geometry.',
    points: [
      'Head pose estimation and eye-closure (EAR) detection driving P-control servo tracking',
      'CV-based monocular distance estimation fused with servo angle geometry for depth',
      'Session analytics tooling for trend view and multi-session overlay across 50+ test sessions',
    ],
  },
  {
    title: 'Solar Car Rotor Design',
    tag: 'SolidWorks · FEA',
    description:
      'Designed a flat rotor component for a university solar car team as an onboarding project, using SolidWorks FEA to validate structural performance against a torque load supplied by the design leads.',
    points: [
      'Achieved a safety factor above 10 through iterative FEA-driven geometry',
      'Applied virtual wall constraints to confine deformation to the rotor surface',
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 style={{ fontSize: '2.1rem', marginBottom: 40 }}>Selected work</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((p) => (
            <div key={p.title} className="card" style={{ padding: 32 }}>
              <p className="eyebrow" style={{ color: 'var(--color-text-muted)' }}>{p.tag}</p>
              <h3 style={{ fontSize: '1.3rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{p.description}</p>
              <ul style={{ margin: '14px 0 0', paddingLeft: 20, color: 'var(--color-text)' }}>
                {p.points.map((pt) => <li key={pt} style={{ marginBottom: 4 }}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
