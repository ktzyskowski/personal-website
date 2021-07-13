import projects from '../../data/projects'

function Projects() {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => ((
          <Card key={index} project={project} />
        )))}
      </div>
    </div>
  )
}

function Card({ project }) {
  return (
    <a href={project.githubUrl}>
      <div className="rounded shadow-sm px-6 py-4 border border-gray-200 hover:bg-gray-50">
        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
    </a>
  )
}

export default Projects
