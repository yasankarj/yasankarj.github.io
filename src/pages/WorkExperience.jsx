import { useState } from 'react'
import './WorkExperience.css'

function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      shortDescription: "Leading development of scalable web applications and mentoring junior developers.",
      longDescription: [
        "Led development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Improved application performance by 40% through optimization",
        "Architected microservices infrastructure for better scalability",
        "Implemented CI/CD pipelines reducing deployment time by 50%"
      ],
      techStack: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      shortDescription: "Developed and maintained full-stack applications with focus on performance and user experience.",
      longDescription: [
        "Developed and maintained full-stack applications",
        "Implemented RESTful APIs and database schemas",
        "Participated in agile development processes",
        "Contributed to product planning and technical decisions",
        "Optimized database queries improving response times by 35%",
        "Built real-time features using WebSockets"
      ],
      techStack: ["JavaScript", "Python", "Django", "React", "PostgreSQL", "Redis", "Git"]
    },
    {
      title: "Junior Developer",
      company: "Digital Solutions",
      period: "2018 - 2020",
      location: "New York, NY",
      shortDescription: "Built responsive web interfaces and implemented new features using modern JavaScript frameworks.",
      longDescription: [
        "Built responsive web interfaces using modern JavaScript frameworks",
        "Fixed bugs and implemented new features",
        "Worked closely with designers to implement UI/UX designs",
        "Learned best practices in software development",
        "Participated in code reviews and team meetings",
        "Contributed to improving code quality and documentation"
      ],
      techStack: ["JavaScript", "React", "HTML", "CSS", "Git", "REST APIs"]
    }
  ]

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
            
            <div className="modal-section">
              <h4>Description</h4>
              <ul className="modal-description">
                {selectedExperience.longDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Tech Stack</h4>
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

