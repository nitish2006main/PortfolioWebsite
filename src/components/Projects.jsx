const projects = [
  {
    slug: 'centrifuge-soldering',
    title: 'Centrifuge Soldering Experiment',
    affiliation: 'Waterloo Space Research Team',
    imageLabel: 'Add centrifuge project image',
  },
  {
    slug: 'posturebot',
    title: 'PostureBOT',
    affiliation: 'Personal Project',
    imageLabel: 'Add PostureBOT image',
  },
  {
    slug: 'solar-car-rotor',
    title: 'Front Rotor Design and Analysis',
    affiliation: 'Midnight Sun Solar Rayce Car',
    imageLabel: 'Add rotor CAD / FEA image',
  },
  {
    slug: 'phone-stand',
    title: '4 DOF Universal Phone Stand',
    affiliation: 'Personal Project',
    imageLabel: 'Add phone stand image',
  },
  {
    slug: 'electric-bike-screen',
    title: 'Electric Bike Screen',
    affiliation: 'Electrium Mobility',
    imageLabel: 'Add e-bike screen image',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>

        <h2 style={{ fontSize: '3.2rem', marginBottom: 40 }}>
          Selected work
        </h2>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-card-image">
                <span>{project.imageLabel}</span>
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