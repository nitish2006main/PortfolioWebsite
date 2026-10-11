const projectData = {
  'centrifuge-soldering': {
    title: 'Automated Centrifuge Soldering System',
    affiliation: 'Waterloo Space Research Team',

    aboutImage: {
  label: 'Automated centrifuge soldering system',
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
          'Closes the centrifuge from above while incorporating integrated fans and filters to suck up melted solder smoke',
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
  Created SolidWorks technical drawings and applied DFMA principles by optimizing component count, simplifying geometry, maintaining consistent material thicknesses, and designing features for faster and easier machining. Used milling, turning, and an arbor press during fabrication and assembly, including press-fitting the bearing and shaft while maintaining proper shaft alignment.
<br /><br />
Integrated the slip ring into the rotating assembly by designing wire-routing slots along the motor mount and through the shaft. This allowed the slip-ring wiring to pass through the assembly while maintaining a compact design and supporting continuous rotation.
</>),
        imageLeft: true,
      },
      {
        images: [
          {
            src: '/Images/Centrifuge/Centrifuge_CAD_WireFeederBefore.png',
            caption: 'Before',
          },
          {
            src: '/Images/Centrifuge/Centrifuge_CAD_WireFeederAfter.png',
            caption: 'After',
          },
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
      'Best observed result of 14 of 16 joints soldered, during microgravity testing, at 0–3G centrifugal operating conditions',

'Validated 0–3G structural integrity under centrifugal loading, with the system tested up to 7.5G',

'Reduced wire feeder width by 25%, current draw by 34%, and measured thermal rise by 47%',

'Automated a 4-actuator soldering sequence using STM32 and FreeRTOS, with a separately controlled centrifuge motor',
    ],

    resultImages: [
  {
    type: 'system-with-before-after',
    title: 'Final System',
    src: '/Images/Centrifuge/Centrifuge_IRL_Assembly.JPG',
    alt: 'Completed centrifuge soldering system',
    before: '/Images/Centrifuge/Centrifuge_IRL_WireFeederBefore.JPG',
    after: '/Images/Centrifuge/Centrifuge_IRL_WireFeederAfter.png',
  },
  {
    type: 'image',
    title: 'Soldered Results during CAN-RGX 9 microgravity experiment competition',
    src: '/Images/Centrifuge/Centrifuge_IRL_Results.JPG',
    alt: 'Soldered PCB joints from centrifuge experiment',
  },
  {
    type: 'youtube',
    title: 'Automated Quarter Move - Early Testing',
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
    'I built a real-time pan-tilt head tracking and monitoring system designed to help users maintain better head posture during computer and laptop sessions. It combines computer vision, embedded control, and servo actuation to track 3D head position and provide real-time audio and visual feedback.',
    goal:
    'The goal was to build an integrated system that tracks head position and eye closure during a work session, gives immediate feedback when head pose moves outside a set range, and records 3D head trajectories so users can review and compare sessions.',
    skills: [
      'SolidWorks',
      'Python',
      'C++',
      'ESP32-S3',
      'FreeRTOS',
      'OpenCV',
      'MediaPipe',
      'Design for Assembly',
      'Control Systems',
      '3D Printing',
      'solvePnP', 
      'PySerial',
      'Matplotlib',
    ],

    content: [
      {
        image: '/Images/PostureBot/PostureBot4.JPG',
        title: 'Mechanical Design',
        text:
        'Designed and 3D-printed a pan-tilt head and an electronics enclosure in SolidWorks using design-for-assembly (DFA) principles. Integrated the electronics and pan-tilt servo mounting system within a total bill of materials (BOM) constraint of $125, with attention to component placement, wire routing, and accessibility for testing and iteration.',
        imageLeft: true,
      },
      {
        image: '/Images/PostureBot/PostureBot2.png',
        title: 'Computer Vision and 3D Tracking',
        text:
    'Built a Python computer vision pipeline using OpenCV, MediaPipe, and solvePnP to detect facial landmarks, estimate head pose, and detect eye closure. Calibrated the system at startup to establish the pan-tilt origin position before tracking, then fused vision-based distance estimation with servo kinematics to track the user’s live 3D head position.',
        imageLeft: false,
      },
      {
        image: '/Images/PostureBot/PostureBot3.JPG',
        title: 'Embedded Control System',
        text:
        'Architected a five-task FreeRTOS system on a dual-core ESP32-S3 using C++. Separated latency-sensitive servo control and serial communication to one core and UI and feedback tasks to the second core. Implemented closed-loop proportional control at 20 Hz with PySerial communication between the Python vision pipeline and the ESP32-S3.',
        imageLeft: true,
      },
    ],

    results: [
      'Iterated across 50+ recorded test sessions from first to final prototype',
      'Ran closed-loop P-control at 20 Hz (50 ms command interval)',
      'Implemented real-time audio and visual feedback for posture monitoring',
      'Integrated the mechanical, electrical, and software systems within a $125 BOM constraint',
    ],

    resultImages: [
      {
        type: 'youtube',
        title: 'PostureBOT Demo',
        videoId: '81WSANa1Dlc'
      }
    ],
  },

  'solar-car-rotor': {
  title: 'Front Rotor and Brake Caliper Mount Design',
  affiliation: 'Midnight Sun Solar Rayce Car',

  aboutImage: 
    {
      image: '/Images/Rotor/Rotor_CAD_FullAssembly.png',
      label: 'Front Rotor Assembly CAD',
    },

  about:
    'Designed and analyzed a front rotor and brake caliper mount for the Midnight Sun Solar Rayce Car, focusing on structural performance, clearance, weight reduction, and manufacturability.',

  goal:
    'The goal was to redesign the front rotor and brake caliper mount to resolve upright interference, maintain structural performance under braking loads, reduce rotor weight, and improve manufacturability.',

  skills: [
    'SolidWorks',
    '3D CAD',
    'Finite Element Analysis',
    'FEA',
    'Mechanical Design',
    'Technical Drawings',
    'DFMA',
    'Design Iteration',
    'Structural Analysis',
  ],

  content: [
    {
      images: [
        {
          src: '/Images/Rotor/Rotor_CAD_Assembly.png',
          caption: 'Upright-to-Rotor Clearance',
        },
      ],
      title: 'Clearance Optimization',
      text:
        'Redesigned the front rotor to resolve interference with the upright, increasing the available clearance by 59% while maintaining a flat rotor geometry for improved manufacturability.',
      imageLeft: true,
    },
    {
      images: [
        {
          src: '/Images/Rotor/Rotor_FEA_Rotor.png',
          caption: 'Rotor FEA Stress',
        },
        {
          src: '/Images/Rotor/Rotor_FEA_BCM.png',
          caption: 'Brake Caliper Mount FEA Stress',
        },
      ],
      title: 'FEA and Design Validation',
      text:
        'Performed FEA in SolidWorks Simulation on both the rotor and brake caliper mount using torque and static-force loading. Evaluated stress and structural performance, achieving a simulated safety factor above 10.',
      imageLeft: false,
    },
    {
      images: [
        {
          src: '/Images/Rotor/Rotor_Drawing_Rotor.png',
          caption: 'Rotor Technical Drawing',
        },
        {
          src: '/Images/Rotor/Rotor_Drawing_BCM.png',
          caption: 'Brake Caliper Mount Technical Drawing',
        },
      ],
      title: 'Technical Drawings and Manufacturability',
      text:
        'Created fully dimensioned 2D SolidWorks manufacturing drawings for both components. Applied DFMA principles and redesigned the rotor as a flat geometry optimized for CNC waterjet fabrication.',
      imageLeft: true,
    },
  ],

  results: [
    'Increased upright-to-rotor clearance by 59%',
    'Reduced rotor weight by 51%',
    'Performed FEA on both the rotor and brake caliper mount',
    'Achieved a simulated safety factor above 10',
    'Created fully dimensioned manufacturing drawings for both components',
    'Applied DFMA principles to optimize the rotor for CNC waterjet fabrication',
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
          {
            src: '/Images/UD/UD_Mold1.png',
            caption: 'Mould Design Middle'
          },
          {
            src: '/Images/UD/UD_Mold2.png',
            caption: 'Mould Design Sides'
          }
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

      <nav className="project-nav">
        <div className="container">
          <div className="project-nav-links">
            <a href="#about-project">About</a>

            {project.systemOverview && (
              <a href="#system-overview">System Overview</a>
            )}

            <a href="#skills">Skills</a>
            <a href="#project-content">Project Content</a>
            <a href="#results">Results</a>
          </div>
        </div>
      </nav>

      <section id = "about-project" className="section">
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
  <section id = "system-overview" className="section system-overview">
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
        Numbers below shown for each component of the system correspond to the numbered components in the CAD image in the About section above.
      </p>
    )}

    <h3>{group.title}</h3>

    <div className={`system-overview-group-layout ${
    group.image ? 'has-image' : 'no-image'}`}>
      {group.image && (
        <div className="system-overview-group-image">
          <ImagePlaceholder
            label={group.title}
            image={group.image}
          />
        </div>
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
          </div>
        ))}
      </div>

    </div>
  </section>
)}
      <section
        id = "skills"
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

      <section id = "project-content" className="section">
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
                } ${
                  slug === 'posturebot'
                    ? 'posturebot-content-row'
                    : slug === 'undertray-diffuser' && index === 0
                      ? 'undertray-mould-row'
                      : slug === 'phone-stand'
                        ? 'phone-stand-content-row'
                        : slug === 'solar-car-rotor'
                        ? 'solar-car-rotor-content-row'
                        : ''
                }`}
              >

                {item.images ? (
                  <div className = {`content-images ${slug === 'undertray-diffuser' && index === 0? 'undertray-mould-images': ''}`}>
                    {item.images.map((image, index) => (
                      <div
                        className="content-image-item"
                        key={`${image.src}-${index}`}
                      >
                        <ImagePlaceholder
                          label={item.title}
                          image={image.src}
                        />

                        {image.caption && (
                          <p className="content-image-caption">
                            {image.caption}
                          </p>
                        )}
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

                </div>

                {slug === 'undertray-diffuser' && index === 0 && item.videoId && (
                  <div className="undertray-mould-video">

                    <VideoThumbnail
                      videoId={item.videoId}
                      title="Mould Design Walkthrough"
                    />
                    <h4>Mould Design Walkthrough</h4>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        id="results"
        className={`section results-section ${
          slug === 'phone-stand' ? 'phone-stand-results' : slug === 'posturebot'? 'posturebot-results': ''}`}
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

          {slug === 'centrifuge-soldering' && (
            <p className="results-note">
              <strong>Note:</strong> The wire feeder was successfully demonstrated for a partial cycle before thermal issues developed. During extended operation, heat buildup at the soldering needle caused the solder to cool and obstruct the wire path, preventing consistent feeding for the full cycle. For the final competition test, we therefore used an improvised solder-feed method in which solder wire was secured directly to the PCB joints with copper tape and melted by the soldering iron.
            </p>
          )}



          <div className="results-image-grid">
            {project.resultImages?.map((result, index) => {

              if (typeof result === 'string') {
                return (
                  <ImagePlaceholder
                    key={`${result}-${index}`}
                    label={result}
                  />
                )
              }

              return (
                <div
                  key={`${result.title}-${index}`}
                  className="result-card"
                >

                  {result.type === 'system-with-before-after' && (
                    <div className="result-system-layout">

                      <div className="result-system-main">
                        <ImagePlaceholder
                          label={result.alt}
                          image={result.src}
                        />

                        <h3>{result.title}</h3>
                      </div>

                      <div className="result-before-after">

                        <div>
                          <ImagePlaceholder
                            label="Wire feeder before"
                            image={result.before}
                          />
                          <p>Wire Feeder Redesign - Before</p>
                        </div>

                        <div>
                          <ImagePlaceholder
                            label="Wire feeder after"
                            image={result.after}
                          />
                          <p>Wire Feeder Redesign - After</p>
                        </div>

                      </div>

                    </div>
                  )}

                  {result.type === 'image' && (
                    <>
                      <ImagePlaceholder
                        label={result.alt}
                        image={result.src}
                      />

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
              )
            })}
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