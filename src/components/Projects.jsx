const projects = [
  {
    slug: 'centrifuge-soldering',
    title: 'Automated Centrifuge Soldering System',
    affiliation: 'Waterloo Space Research Team',
    imageLabel: 'Add centrifuge project image',
    image: '/Images/Centrifuge/Centrifuge_CAD_Assembly.png',
  },
  {
    slug: 'posturebot',
    title: 'PostureBOT',
    affiliation: 'Personal Project',
    image: '/Images/PostureBot/PostureBot1.png',
  },
  {
    slug: 'solar-car-rotor',
    title: 'Front Rotor Design and Analysis',
    affiliation: 'Midnight Sun Solar Rayce Car',
    image: 'Images/Rotor/Rotor_CAD_Rotor.png',
  },
  {
    slug: 'phone-stand',
    title: '4 DOF Universal Phone Stand',
    affiliation: 'Personal Project',
    image: '/Images/PhoneStand/PhoneStand1.png',
  },
  {
    slug: 'undertray-diffuser',
    title: 'Undertray Diffuser',
    affiliation: 'University of Waterloo Formula Electric',
    image: '/Images/UD/UD_Result.png',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 style={{ fontSize: '2.8rem', marginBottom: 40, color: 'var(--color-secondary)' }}>
          Projects
        </h2>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-card-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <span>{project.imageLabel}</span>
                )}
              </div>

              <div className="project-card-content">
                <p className="project-affiliation">
                  {project.affiliation}
                </p>

                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects