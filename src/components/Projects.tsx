const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project3',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-tertiary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 