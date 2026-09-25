const projectData = {
  'centrifuge-soldering': {
    title: 'Centrifuge Soldering Experiment',
    affiliation: 'Waterloo Space Research Team',

    heroImage: 'Add centrifuge hero image',

    aboutImage: 'Add centrifuge CAD image',

    about:
      'An automated soldering experiment designed to study solder joint formation under simulated microgravity conditions. The system combines mechanical hardware, embedded firmware, motor control, and system integration into a single automated platform.',

    goal:
      'The goal was to develop and integrate the mechanical and electrical systems required to reliably position, feed, and solder PCBs while operating under a constrained power system.',

    skills: [
      'Mechanical Design',
      'Machining',
      'Embedded C',
      'STM32',
      'FreeRTOS',
      'Motor Control',
      '3D Printing',
      'Electronics',
      'System Integration',
    ],

    content: [
      {
        image: 'Add motor mount CAD / photo',
        title: 'Motor Mount Design',
        text:
          'Designed and machined the centrifuge motor mount from aluminum. The component was developed for operation under the expected 0g–3g centrifugal loading range and fabricated using machining processes including milling and turning.',
        imageLeft: true,
      },
      {
        image: 'Add wire extruder image',
        title: 'Wire Feeder Redesign',
        text:
          'Redesigned the solder wire feeder to improve its physical and electrical performance. The redesign reduced the assembly width by 25%, current draw by 34%, and thermal rise by 47% during testing.',
        imageLeft: false,
      },
      {
        image: 'Add firmware / electronics image',
        title: 'Embedded Control',
        text:
          'Developed STM32 firmware using FreeRTOS to coordinate the system actuators. The system controlled stepper, servo, and BLDC motors while coordinating the sequence required for PCB indexing, solder wire feeding, iron actuation, and centrifuge operation.',
        imageLeft: true,
      },
      {
        image: 'Add centrifuge system image',
        title: 'System Integration',
        text:
          'Integrated the mechanical, electrical, and firmware components into the automated centrifuge system, working within the available power constraints and validating the interaction between the different subsystems.',
        imageLeft: false,
      },
    ],

    results: [
      'Reduced wire feeder assembly width by 25%',
      'Reduced wire feeder current draw by 34%',
      'Reduced measured thermal rise by 47%',
      'Integrated a five-actuator control system using STM32 and FreeRTOS',
    ],

    resultImages: [
      'Add final centrifuge image',
      'Add motor mount image',
      'Add wire feeder image',
    ],
  },

  posturebot: {
    title: 'PostureBOT',
    affiliation: 'Personal Project',

    heroImage: 'Add PostureBOT hero image',
    aboutImage: 'Add PostureBOT CAD image',

    about:
      'A pan-tilt head-tracking and posture-monitoring system combining computer vision, embedded firmware, servo control, and a custom mechanical enclosure.',

    goal:
      'The goal was to build a complete electromechanical system capable of tracking a user, monitoring head position and eye closure, and providing feedback when the user moved outside the desired range.',

    skills: [
      'SolidWorks',
      'Python',
      'C++',
      'ESP32-S3',
      'FreeRTOS',
      'OpenCV',
      'MediaPipe',
      'Computer Vision',
      'Control Systems',
      '3D Printing',
    ],

    content: [
      {
        image: 'Add PostureBOT enclosure CAD',
        title: 'Mechanical Design',
        text:
          'Designed the physical enclosure and mounting system in SolidWorks. The design focused on accessibility, component placement, servo routing, and making the electronics accessible during testing and iteration.',
        imageLeft: true,
      },
      {
        image: 'Add computer vision image',
        title: 'Computer Vision',
        text:
          'Implemented face tracking using Python, OpenCV, and MediaPipe. Face position and head pose information were processed to determine how the pan and tilt axes should respond.',
        imageLeft: false,
      },
      {
        image: 'Add ESP32 electronics image',
        title: 'Embedded System',
        text:
          'Built the embedded control system around an ESP32-S3 using FreeRTOS tasks, queues, and mutexes. The system coordinated the display, servos, encoder, buzzer, and other control functions.',
        imageLeft: true,
      },
      {
        image: 'Add tracking test image',
        title: 'Control and Testing',
        text:
          'Used proportional control to drive the pan and tilt servos based on the detected face position. Testing was performed across more than 50 sessions to evaluate tracking and system behavior.',
        imageLeft: false,
      },
    ],

    results: [
      'Implemented real-time pan and tilt face tracking',
      'Achieved approximately 50 ms system response latency',
      'Maintained approximately 15 px steady-state tracking error',
      'Built session analytics across 50+ testing sessions',
    ],

    resultImages: [
      'Add final PostureBOT photo',
      'Add tracking screenshot',
      'Add enclosure photo',
    ],
  },

  'solar-car-rotor': {
    title: 'Front Rotor Design and Analysis',
    affiliation: 'Midnight Sun Solar Rayce Car',

    heroImage: 'Add rotor photo / CAD render',
    aboutImage: 'Add rotor CAD image',

    about:
      'A flat rotor component designed for the Midnight Sun Solar Rayce Car as an onboarding mechanical design project.',

    goal:
      'The goal was to develop a rotor geometry capable of handling the supplied torque loading while maintaining a suitable structural safety margin.',

    skills: [
      'SolidWorks',
      '3D CAD',
      'Finite Element Analysis',
      'FEA',
      'Mechanical Design',
      'Design Iteration',
      'Structural Analysis',
    ],

    content: [
      {
        image: 'Add rotor CAD',
        title: 'Initial Design',
        text:
          'Created the rotor geometry in SolidWorks based on the requirements provided by the design leads. The geometry was developed with manufacturability and structural performance in mind.',
        imageLeft: true,
      },
      {
        image: 'Add FEA setup screenshot',
        title: 'FEA Setup',
        text:
          'Set up a SolidWorks Simulation study using the supplied torque load. Virtual wall constraints were used to constrain the model while allowing deformation to be evaluated across the rotor surface.',
        imageLeft: false,
      },
      {
        image: 'Add FEA result',
        title: 'Design Iteration',
        text:
          'Iterated on the rotor geometry based on the simulation results, focusing on reducing areas of high stress while maintaining the overall component geometry.',
        imageLeft: true,
      },
    ],

    results: [
      'Achieved a simulated safety factor above 10',
      'Validated the rotor against the supplied torque loading',
      'Used FEA results to guide geometry iterations',
    ],

    resultImages: [
      'Add final rotor CAD',
      'Add FEA stress plot',
      'Add FEA displacement plot',
    ],
  },

  'phone-stand': {
    title: '4 DOF Universal Phone Stand',
    affiliation: 'Personal Project',

    heroImage: 'Add phone stand photo',
    aboutImage: 'Add phone stand CAD',

    about:
      'A four-degree-of-freedom adjustable phone stand designed as a personal mechanical design project.',

    goal:
      'The goal was to create a versatile phone stand with multiple adjustable axes while developing practical experience in mechanical design and CAD.',

    skills: [
      'SolidWorks',
      'Mechanical Design',
      '3D CAD',
      'Design for Manufacturing',
      '3D Printing',
      'Mechanism Design',
    ],

    content: [
      {
        image: 'Add phone stand CAD',
        title: 'Concept Development',
        text:
          'Developed the overall mechanism and degree-of-freedom layout in CAD, focusing on how the individual joints could work together to position a phone.',
        imageLeft: true,
      },
      {
        image: 'Add mechanism image',
        title: 'Mechanical Design',
        text:
          'Designed the individual components and interfaces required to assemble the stand while maintaining adjustability across the different axes.',
        imageLeft: false,
      },
      {
        image: 'Add printed prototype',
        title: 'Prototype',
        text:
          'Created physical prototypes to evaluate the mechanism and identify areas that could be improved through further design iterations.',
        imageLeft: true,
      },
    ],

    results: [
      'Developed a four-degree-of-freedom positioning mechanism',
      'Created a complete CAD assembly',
      'Built and evaluated physical prototypes',
    ],

    resultImages: [
      'Add final phone stand',
      'Add CAD assembly',
      'Add prototype',
    ],
  },

  'electric-bike-screen': {
    title: 'Electric Bike Screen',
    affiliation: 'Electrium Mobility',

    heroImage: 'Add electric bike screen photo',
    aboutImage: 'Add screen / electronics image',

    about:
      'An embedded display system developed for an electric bike platform to provide riders with real-time vehicle information.',

    goal:
      'The goal was to create a compact interface capable of displaying key vehicle information while communicating with the motor controller.',

    skills: [
      'Embedded C++',
      'ESP32',
      'UART',
      'SPI',
      'TFT Display',
      'VESC',
      'Firmware',
      'Embedded Systems',
    ],

    content: [
      {
        image: 'Add screen CAD / mounting image',
        title: 'Display System',
        text:
          'Integrated a TFT display with an ESP32-based embedded system to create the user-facing interface for the electric bike.',
        imageLeft: true,
      },
      {
        image: 'Add firmware screenshot',
        title: 'Firmware',
        text:
          'Developed firmware to receive vehicle information and update the display with relevant riding data.',
        imageLeft: false,
      },
      {
        image: 'Add final bike screen',
        title: 'System Integration',
        text:
          'Integrated the display hardware, embedded controller, and communication interface into the broader electric bike system.',
        imageLeft: true,
      },
    ],

    results: [
      'Built a functional embedded display interface',
      'Integrated an ESP32 with a TFT display',
      'Displayed real-time vehicle information',
    ],

    resultImages: [
      'Add final screen photo',
      'Add electronics photo',
      'Add mounted system photo',
    ],
  },
}

function ImagePlaceholder({ label, className = '' }) {
  return (
    <div className={`detail-image-placeholder ${className}`}>
      <span>{label}</span>
    </div>
  )
}

function ProjectPage({ slug }) {
  const project = projectData[slug]

  if (!project) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <a href="/#projects" className="back-link">
              ← Back to Projects
            </a>

            <h1 style={{ marginTop: 40 }}>Project not found</h1>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="project-detail-hero">
        <div className="container">
          <a href="/#projects" className="back-link">
            ← Back to Projects
          </a>

          <p className="eyebrow" style={{ marginTop: 40 }}>
            {project.affiliation}
          </p>

          <h1 className="project-detail-title">
            {project.title}
          </h1>

          <ImagePlaceholder label={project.heroImage} />
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="about-project-grid">
            <ImagePlaceholder label={project.aboutImage} />

            <div>
              <h2 
              className="project-section-title" 
              style={{ fontSize: '2.8rem', marginBottom: 28, color: 'var(--color-secondary)' }}>About the Project</h2>

              <p>{project.about}</p>

              <p>{project.goal}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: 'var(--color-surface)' }}
      >
        <div className="container">

          <h2 
          className="project-section-title"
          style={{ fontSize: '2.8rem', marginBottom: 28, color: 'var(--color-secondary)' }}>
            Skills Learned
          </h2>

          <div className="skill-pill-grid">
            {project.skills.map((skill) => (
              <div key={skill} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <h2 
          className="project-section-title"
          style={{ fontSize: '2.8rem', marginBottom: 28, color: 'var(--color-secondary)' }}>
            Project Content
          </h2>

          <div className="project-content-list">
            {project.content.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`project-content-row ${
                  item.imageLeft ? '' : 'reverse'
                }`}
              >
                <ImagePlaceholder label={item.image} />

                <div className="project-content-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: 'var(--color-surface)' }}
      >
        <div className="container">

          <h2 
          className="project-section-title"
          style={{ fontSize: '2.8rem', marginBottom: 28, color: 'var(--color-secondary)' }}>
            Results
          </h2>

          <ul className="results-list">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>

          <div className="results-image-grid">
            {project.resultImages.map((image, index) => (
              <ImagePlaceholder
                key={`${image}-${index}`}
                label={image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <a href="/#projects" className="btn btn-primary">
            ← Back to Projects
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage