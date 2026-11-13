import type { Project } from '../profile.ts'
import Section from './Section.tsx'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="프로젝트">
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.name} className="project-card">
            <h3 className="project-name">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-description">{project.description}</p>
            <ul className="tags">
              {project.tech.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
