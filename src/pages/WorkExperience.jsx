import { useState } from 'react'
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

  return (
    <div className="work-experience">
      <div className="container">
        <h1 className="page-title">Work Experience</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h2 className="experience-title">{exp.title}</h2>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-short-description">{exp.shortDescription}</p>
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="experience-tech-stack">
                    {exp.techStack.slice(0, 5).map((tech, i) => (
                      <span key={i} className="tech-tag-small">{tech}</span>
                    ))}
                    {exp.techStack.length > 5 && (
                      <span className="tech-tag-more">+{exp.techStack.length - 5} more</span>
                    )}
                  </div>
                )}
                <button 
                  className="view-more-btn"
                  onClick={() => openModal(exp)}
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2 className="modal-title">{selectedExperience.title}</h2>
              <span className="modal-period">{selectedExperience.period}</span>
            </div>
            <h3 className="modal-company">{selectedExperience.company}</h3>
            <p className="modal-location">{selectedExperience.location}</p>
            
            {selectedExperience.longDescription && selectedExperience.longDescription.length > 0 && (
              <div className="modal-section">
                <h4>Overview</h4>
                <ul className="modal-description">
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
                    <ul className="project-actions">
                      {project.actions.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ul>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="project-tech-stack">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-item-small">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="modal-section">
              <h4>Overall Tech Stack</h4>
              <div className="tech-stack">
                {selectedExperience.techStack.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
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

