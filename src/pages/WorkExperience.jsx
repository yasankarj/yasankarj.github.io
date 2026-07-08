import { useState, useEffect } from 'react'
import workExperienceData from '../data/workExperience.json'
import './WorkExperience.css'

function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState(null)
  const experiences = workExperienceData.experiences

  const openModal = (exp) => {
    setSelectedExperience(exp)
  }

  const closeModal = () => {
    setSelectedExperience(null)
  }

  // Close modal on Escape and lock page scroll while it is open
  useEffect(() => {
    if (!selectedExperience) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedExperience])

  return (
    <div className="work-experience">
      <div className="container">
        <header className="page-header">
          <span className="page-eyebrow">Career</span>
          <h1 className="page-heading">Work Experience<span className="accent-dot">.</span></h1>
          <p className="page-intro">
            From intern to technical lead — nine years across product and consultancy companies.
          </p>
        </header>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article key={index} className="experience-item">
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <div className="experience-body">
                <h2 className="experience-title">{exp.title}</h2>
                <h3 className="experience-company">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                </h3>
                <p className="experience-short-description">{exp.shortDescription}</p>
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="experience-tech-stack">
                    {exp.techStack.slice(0, 5).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {exp.techStack.length > 5 && (
                      <span className="tech-tag tech-tag-more">+{exp.techStack.length - 5} more</span>
                    )}
                  </div>
                )}
                <button
                  className="view-more-btn"
                  onClick={() => openModal(exp)}
                >
                  View details <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <span className="modal-period">{selectedExperience.period}</span>
            <h2 className="modal-title">{selectedExperience.title}</h2>
            <p className="modal-company">
              <a href={selectedExperience.link} target="_blank" rel="noopener noreferrer">{selectedExperience.company}</a>
              <span className="modal-location"> · {selectedExperience.location}</span>
            </p>

            {selectedExperience.longDescription && selectedExperience.longDescription.length > 0 && (
              <div className="modal-section">
                <h4>Overview</h4>
                <ul className="modal-list">
                  {selectedExperience.longDescription.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExperience.projects && selectedExperience.projects.length > 0 && (
              <div className="modal-section">
                <h4>Projects</h4>
                {selectedExperience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-detail">
                    <h5 className="project-name">{project.name}</h5>
                    <ul className="modal-list">
                      {project.actions.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ul>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="modal-tech-stack">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="modal-section">
              <h4>Overall Tech Stack</h4>
              <div className="modal-tech-stack">
                {selectedExperience.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkExperience
