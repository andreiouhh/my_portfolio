import { useEffect } from 'react'
import ProjectCarousel from './ProjectCarousel'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  const { caseStudy } = project

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <ProjectCarousel media={project.media} variant="modal" />

        <h2 id="modal-title">{project.title}</h2>
        {project.subtitle && (
          <p className="modal-subtitle">{project.subtitle}</p>
        )}
        <p className="modal-impact">{project.impact}</p>

        <div className="modal-badges">
          {project.tech.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>

        <div className="star-grid">
          <div className="star-block">
            <h3>Situation</h3>
            <p>{caseStudy.situation}</p>
          </div>
          <div className="star-block">
            <h3>Task</h3>
            <p>{caseStudy.task}</p>
          </div>
          <div className="star-block">
            <h3>Action</h3>
            <p>{caseStudy.action}</p>
          </div>
          <div className="star-block">
            <h3>Result</h3>
            <p>{caseStudy.result}</p>
          </div>
        </div>

        <div className="modal-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="link-btn link-btn--accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Dashboard
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
