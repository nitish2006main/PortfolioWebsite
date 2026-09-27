const projectData = {
  'centrifuge-soldering': {
    title: 'Centrifuge Soldering Experiment',
    affiliation: 'Waterloo Space Research Team',

    aboutImage: {
  label: 'Centrifuge soldering system',
  image: '/Images/Centrifuge/Centrifuge_CAD_System_Overview.png',
},

about:
  'Solder joints produced in microgravity can develop increased porosity, which can reduce joint quality and reliability. This project develops an automated system for performing functional component-level soldering on PCBs while applying controlled centrifugal acceleration. The system integrates mechanical hardware, embedded firmware, motor control, PCB handling, and soldering hardware to investigate whether simulated gravity can improve solder joint formation.',

goal:
  'The goal is to develop and integrate the mechanical and electrical systems required to perform repeatable PCB soldering while controlling both the heating process and applied acceleration. By producing and comparing solder joints under microgravity, controlled centrifugal acceleration, and normal Earth gravity, the experiment aims to determine whether applied acceleration can reduce porosity and improve solder joint quality.',
    skills: [
      'Mechanical Design',
      'Machining',
      'Assembly',
      'Hardware Testing/Debugging',
      'C',
      'STM32',
      'FreeRTOS',
      'Motor Control',
      '3D Printing',
      'Electronics',
      'System Integration',
      'Python'
    ],

    systemOverview: [
  {
    title: 'Soldering System',
    image: '/Images/Centrifuge/Centrifuge_CAD_SolderingSystem.png',
    components: [
      {
        name: '1- Dual Iron Rack/Pinion Actuation',
        description:
          'Positions and actuates the two soldering irons during the soldering process, driven by Miuzei 20kg servo',
      },
      {
        name: '2- PCB Carrier Rotation',
        description:
          'Rotates and positions the PCBs (8x Dark Green Coloured) during the soldering process using ring/spur gear mechanism driven by NEMA17 stepper motor',
      },
      {
        name: '3- Wire Feeder',
        description:
          'Feeds solder wire to the soldering irons during the automated soldering sequence driven by NEMA11 stepper motors',
      },
    ],
  },

  {
    title: 'Centrifuge & Structure',
    components: [
      {
        name: '4- Centrifuge',
        description:
          'Contains the soldering system and provides the rotating environment for applying controlled centrifugal acceleration',
      },
      {
        name: '5- Centrifuge Lids',
        description:
          'Close the centrifuge from above while incorporating integrated fans and filters',
      },
      {
        name: '6- Exostructure',
        description:
        'Supports the centrifuge and maintains its upright orientation while incorporating the slip ring used for all motor power and control, and one thermocouple',
      },
      {
        name: '7- Motor Mount',
        description:
        'Supports the centrifuge drive motor and interfaces with the rotating assembly, including the slip ring used for soldering iron power and control, fans and one thermocouple',
      },
    ],
  },

  {
    title: 'Electrical & Control',
    image: '/Images/Centrifuge/Centrifuge_Electrical_System.png',
    components: [
      {
        name: '8- Power Supply',
        description:
          'Provides power to the motors, electronics, and soldering system',
      },
      {
        name: '9- Motor Drivers',
        description:
          'Control the stepper motors used throughout the system',
      },
      {
        name: '10- Electronics Enclosure',
        description:
          'Houses and protects the system’s control electronics',
      },
      {
        name: 'STM32 + FreeRTOS',
        description:
          'Coordinates the motors and actuators and manages the automated soldering sequence',
      },
      {
        name: 'Python GUI',
        description:
          'Provides operator controls and displays command history, centrifuge speed, and thermocouple data',
      },
    ],
  },
],

    content: [
      {
        image: '/Images/Centrifuge/Centrifuge_CAD_MotorMount.png',
        title: 'Motor Mount Design',
        text: (
  <>Designed, detailed, machined, and assembled the centrifuge motor mount from aluminum for operation under the expected 0g–3g centrifugal loading range. 
  <br /><br />
  Created SolidWorks manufacturing drawings and applied Design for Manufacturing and Assembly (DFMA) principles by reducing the number of components, simplifying geometry, maintaining consistent material thicknesses, and designing features for faster and easier machining. Used milling, turning, and an arbor press during fabrication and assembly, including press-fitting the bearing and shaft while maintaining proper shaft alignment.
<br /><br />
Integrated the slip ring into the rotating assembly by designing wire-routing slots along the motor mount and through the shaft. This allowed the slip-ring wiring to pass through the assembly while maintaining a compact design and supporting continuous rotation.
</>),
        imageLeft: true,
      },
      {
        images: [
          '/Images/Centrifuge/Centrifuge_CAD_WireFeederBefore.png',
          '/Images/Centrifuge/Centrifuge_CAD_WireFeederAfter.png',
        ],
        title: 'Wire Feeder Redesign',
        text: (
  <>
    Redesigned the solder wire feeder with a more compact form factor inspired by 3D-printer filament extruders. Developed a spring-tensioning mechanism where an adjustable screw moves a block against the PTFE tube, positioning the tube closer to the drive gear.

    <br /><br />

    The PTFE tube includes an opening that exposes the solder wire to the drive gear, allowing the mechanism to adjust the contact force on the wire for reliable feeding.

    <br /><br />

    Reduced the size of the drive gear and incorporated two heat sinks to improve the overall design and thermal management.
  </>
),
        imageLeft: false,
      },
      
      {
        image: '/Images/Centrifuge/Centrifuge_FreeRTOS_QuarterMove.png',
        title: 'Embedded Control',
        text: (
          <>
            Developed STM32 firmware using FreeRTOS to coordinate the system actuators.

            Implemented the automated Quarter Move sequence with a dedicated stepper control task that sequences PCB carrier and wire feeder motion, using a message queue and thread flag to synchronize with a separate servo task for solder/retract positioning.

          </>
        ),
        imageLeft: true,
      },
      {
        image: '/Images/Centrifuge/Centrifuge_IRL_SystemIntegration.JPG',
        title: 'System Integration',
        text:
          'Integrated the mechanical, electrical, and firmware components into the automated centrifuge system, working within the available power constraints and validating the interaction between the different subsystems.',
        imageLeft: false,
      },
    ],

    results: [
      'Best observed result of 14 of 16 joints soldered, during microgravity testing, at 0–3G operating conditions',

'Validated 0–3G structural integrity under centrifugal loading, with the system tested up to 7.5G',

'Reduced wire feeder width by 25%, current draw by 34%, and measured thermal rise by 47%',

'Automated a 4-actuator soldering sequence using STM32 and FreeRTOS, with a separately controlled centrifuge motor',
    ],

    resultImages: [
  {
    type: 'image',
    title: 'Final System',
    src: '/Images/Centrifuge/Centrifuge_IRL_Assembly.JPG',
    alt: 'Completed centrifuge soldering system',
  },
  {
    type: 'before-after',
    title: 'Wire Feeder Redesign',
    before: '/Images/Centrifuge/Centrifuge_IRL_WireFeederBefore.JPG',
    after: '/Images/Centrifuge/Centrifuge_IRL_WireFeederAfter.png',
  },
  {
    type: 'image',
    title: 'Soldered Results',
    src: '/Images/Centrifuge/Centrifuge_IRL_Results.JPG',
    alt: 'Soldered PCB joints from centrifuge experiment',
  },
  {
    type: 'youtube',
    title: 'Automated Quarter Move',
    videoId: 'UaQYpE5VfCM',
  },
],
  },

  posturebot: {
    title: 'PostureBOT',
    affiliation: 'Personal Project',

    aboutImage: {
      label: 'PostureBOT',
      image: '/Images/PostureBot/PostureBot1.png',
    },

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

    aboutImage: {
      label: 'My image',
      image: '/Images/Centrifuge/my-image.png',
    },

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

    aboutImage: {
      label: 'My image',
      image: '/Images/PhoneStand/PhoneStand1.png',
    },

    about:
      'A four-degree-of-freedom adjustable phone stand designed as a personal mechanical design project.',

    goal:
      'The goal was to create a versatile phone stand with multiple adjustable axes while developing practical experience in mechanical design and CAD.',

    skills: [
      'SolidWorks',
      '3D CAD',
      '3D Printing',
      'Mechanism Design',
    ],

    content: [
      {
        image: '/Images/PhoneStand/PhoneStand2.png',
        title: 'Worm-gear Mechanism + Ball-Socket Joint',
        text:
          'Developed the overall mechanism and degree-of-freedom layout in CAD, which includes a worm-gear mechanism and a ball-socket joint, focusing on how the individual joints could work together to position a phone.',
        imageLeft: true,
      },
      {
        image: '/Images/PhoneStand/PhoneStand3.png',
        title: 'Adjustable phone clamping mechanism',
        text:
          'Designed the phone clamping mechanism (in purple), which includes a circular wheel with slots (turn to open/close), along with elastic band holders (hooks on each purple arm to hold elastic bands) to hold the phone as tightly as possible (shown in the demo video)',
        imageLeft: false,
      },
      {
        image: '/Images/PhoneStand/PhoneStand_Result.png',
        title: 'Prototype',
        text:
          '3D printed (PETG, PLA and TPU) using Bambu P1S and assembled prototype, which incorporates non 3D printed components such as brass inserts, screws, washers and bearings',
        imageLeft: true,
      },
    ],

    results: [
      'Developed a four-degree-of-freedom positioning mechanism',
      'Created a complete CAD assembly with limit mating constraints',
      'Self-locking vertical adjustment using worm gear mechanism to prevent slippage',
      'Fits phones of widths minimum 55mm',
    ],

    resultVideos: [
  {
    title: 'CAD Motion Demo',
    videoId: 'w6wwd66D2p0',
  },
  {
    title: 'Real-Life Demo',
    videoId: '4O0SFIOMTH0',
  },
],
  },

  'undertray-diffuser': {
    title: 'Undertray Diffuser',
    affiliation: 'Waterloo Formula Electric',

    aboutImage: {
      label: 'Undertray diffuser',
      image: '/Images/UD/UD_Diffuser.png',
    },

    about:
      'Manufactured a carbon-fibre undertray diffuser for Waterloo Formula Electric’s 2026 Formula SAE car. My work focused on designing 3D-printed layup moulds for aerodynamic components, supporting the aero subteam, and contributing to the wet-layup process used to attach the diffuser to the existing undertray.',

    goal:
      'Develop moulds that supported accurate and practical composite layup, accounting for variation in the carbon-fibre and resin application while allowing the diffuser components to be integrated with the existing undertray.',

    skills: [
      'SolidWorks',
      '3D Mould Design',
      'Composite Fabrication',
      'Wet Layup',
      'DFM',
      'PDM/SVN CAD collaboration',
    ],

    content: [
      {
        images: [
          '/Images/UD/UD_Mold1.png',
          '/Images/UD/UD_Mold2.png',
        ],
        videoId: 'tA8FooIQ7hQ',
        title: 'Aerodynamic Mould Design',
        text:
          'Designed 3D-printed layup moulds in SolidWorks for aerodynamic components, including the diffuser side walls and gurney flap. Incorporated a ±0.5 mm resin allowance into the mould design to account for variation during carbon-fibre layup. Shared CAD files with the design team through SVN, the team’s PDM system.',
        imageLeft: true,
      },
      {
        image: '/Images/UD/UD_Result.png',
        title: 'Composite Fabrication and Integration',
        text:
          'Contributed to manufacturing the undertray diffuser using a wet-layup process, applying carbon fibre and resin to the moulds and attaching the resulting components to the existing undertray. The work supported integration of the aerodynamic parts into the 2026 Formula SAE car.',
        imageLeft: false,
      },
    ],

    results: [
      'Assisted 20+ team members with aerodynamic layup mould designs',
      'Incorporated a ±0.5 mm resin allowance to account for layup variation',
      'Contributed to the wet-layup fabrication and integration of the 2026 car’s undertray diffuser',
      'Created a custom tutorial video for the aerodynamics subteam',
    ],

    resultImages: [],
  },
}

function ImagePlaceholder({ label, image, className = '' }) {
  return (
    <div className={`detail-image-placeholder ${className}`}>
      {image ? (
        <img
          src={image}
          alt={label}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  )
}

function VideoThumbnail({ videoId, title }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-thumbnail"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
      />

      <div className="video-play-button">
        ▶
      </div>
    </a>
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

            <h1 style={{ marginTop: 40 }}>
              Project not found
            </h1>
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

          <p
            className="eyebrow"
            style={{ marginTop: 40 }}
          >
            {project.affiliation}
          </p>

          <h1 className="project-detail-title">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="about-project-grid">
            {project.aboutImage && (
              <ImagePlaceholder
                label={project.aboutImage.label}
                image={project.aboutImage.image}
                className={slug === 'centrifuge-soldering' ? 'wsrt-about-image' : ''}
              />
            )}

            <div>
              <h2
                className="project-section-title"
                style={{
                  fontSize: '2.8rem',
                  marginBottom: 28,
                  color: 'var(--color-secondary)',
                }}
              >
                About the Project
              </h2>

              <p>{project.about}</p>

              <p>{project.goal}</p>
            </div>
          </div>

        </div>
      </section>
      {project.systemOverview && (
  <section className="section system-overview">
    <div className="container">

      <h2 className="system-overview-title">
        System Overview
      </h2>

      <div className="system-overview-groups">
        {project.systemOverview.map((group, index) => (
  <div
    className="system-overview-group"
    key={group.title}
  >
    {index === 0 && (
      <p className="system-overview-note">
        Numbers shown below correspond to the numbered components in the CAD image in the About section above.
      </p>
    )}

    <h3>{group.title}</h3>

            {group.image && (
            <ImagePlaceholder
                  label={group.title}
                  image={group.image}
                  className="system-overview-group-image"
                />
              )}

            <div className="system-overview-components">
              {group.components.map((component) => (
                <div
                  className="system-overview-component"
                  key={component.name}
                >
                  <h4>{component.name}</h4>
                  <p>{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
)}
      <section
        className="section"
        style={{
          background: 'var(--color-surface)',
        }}
      >
        <div className="container">

          <h2
            className="project-section-title"
            style={{
              fontSize: '2.8rem',
              marginBottom: 28,
              color: 'var(--color-secondary)',
            }}
          >
            Skills Learned
          </h2>

          <div className="skill-pill-grid">
            {project.skills.map((skill) => (
              <div
                key={skill}
                className="skill-pill"
              >
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
            style={{
              fontSize: '2.8rem',
              marginBottom: 28,
              color: 'var(--color-secondary)',
            }}
          >
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

                {item.images ? (
                  <div className="content-images">
                  {item.images.map((image, index) => (
                    <div className="content-image-item" key={`${image}-${index}`}>
                      <ImagePlaceholder
                        label={item.title}
                        image={image}
                      />
                      <p className="content-image-caption">
                        {index === 0 ? 'Before' : 'After'}
                      </p>
                    </div>
                  ))}
                </div>
                ) : (
                  <div className="content-single-image">
                    <ImagePlaceholder
                      label={item.title}
                      image={item.image}
                    />

                    {item.title === 'Embedded Control' && (
                      <p className="content-image-caption">
                        FreeRTOS implementation of the automated Quarter Move sequence, showing the stepper and servo control tasks synchronized through a message queue and thread flag.
                      </p>
                    )}
                  </div>
                )}

                <div className="project-content-text">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  {item.videoId && (
                    <div className="content-video">
                      <h4>
                        Mould Design Walkthrough
                      </h4>

                      <VideoThumbnail
                        videoId={item.videoId}
                        title="Mould Design Walkthrough"
                      />
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        className="section"
        style={{
          background: 'var(--color-surface)',
        }}
      >
        <div className="container">

          <h2
            className="project-section-title"
            style={{
              fontSize: '2.8rem',
              marginBottom: 28,
              color: 'var(--color-secondary)',
            }}
          >
            Results
          </h2>

          <ul className="results-list">
            {project.results.map((result) => (
              <li key={result}>
                {result}
              </li>
            ))}
          </ul>

          <div className="results-image-grid">
            {project.resultImages?.map((result, index) => (
              <div
                key={`${result.title}-${index}`}
                className="result-card"
              >
                {result.type === 'image' && (
                  <>
                    <ImagePlaceholder
                      label={result.alt}
                      image={result.src}
                    />

                    <h3>{result.title}</h3>
                  </>
                )}

                {result.type === 'before-after' && (
                  <>
                    <div className="result-before-after">
                      <div>
                        <ImagePlaceholder
                          label={`${result.title} before`}
                          image={result.before}
                        />
                        <p>Before</p>
                      </div>

                      <div>
                        <ImagePlaceholder
                          label={`${result.title} after`}
                          image={result.after}
                        />
                        <p>After</p>
                      </div>
                    </div>

                    <h3>{result.title}</h3>
                  </>
                )}

                {result.type === 'youtube' && (
                  <>
                    <VideoThumbnail
                      videoId={result.videoId}
                      title={result.title}
                    />

                    <h3>{result.title}</h3>
                  </>
                )}
              </div>
            ))}
          </div>

          {project.resultVideos?.length > 0 && (
  <div className="results-video-grid">
    {project.resultVideos.map((video) => (
      <div key={video.videoId} className="results-video">
        <h3>{video.title}</h3>

        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-thumbnail"
        >
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
            alt={`${video.title} thumbnail`}
          />
          <div className="video-play-button">▶</div>
        </a>
      </div>
    ))}
  </div>
)}

        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{ textAlign: 'center' }}
        >
          <a
            href="/#projects"
            className="btn btn-primary"
          >
            ← Back to Projects
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage