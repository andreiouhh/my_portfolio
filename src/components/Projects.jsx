import { useState } from 'react'
import { projects } from '../data/portfolioData'
import ProjectCarousel from './ProjectCarousel'
import ProjectModal from './ProjectModal'

function ProjectCard({ project, index, onSelect }) {
  return (
    <article className="project-card">
      <ProjectCarousel media={project.media} variant="card" />
      <div className="project-card-top">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        {project.subtitle && (
          <span className="project-type">{project.subtitle}</span>
        )}
      </div>

      <h3>{project.title}</h3>
      <p className="project-impact">{project.impact}</p>

      <div className="project-badges">
        {project.tech.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="link-btn link-btn--sm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="link-btn link-btn--sm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            GitHub
          </a>
        )}
        <button
          type="button"
          className="link-btn link-btn--sm link-btn--ghost"
          onClick={() => onSelect(project)}
        >
          Case Study →
        </button>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="section-intro">
        <span className="section-label">02 — Projects</span>
        <h2>Featured Work</h2>
        <p>High-impact projects with measurable business outcomes.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
