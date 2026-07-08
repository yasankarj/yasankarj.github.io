import educationData from '../data/education.json'
import './Education.css'

function Education() {
  const education = educationData.education

  return (
    <div className="education">
      <div className="container">
        <header className="page-header">
          <span className="page-eyebrow">Academics</span>
          <h1 className="page-heading">Education<span className="accent-dot">.</span></h1>
          <p className="page-intro">
            From school in Bandarawela to postgraduate study at the University of Moratuwa.
          </p>
        </header>

        <div className="education-list">
          {education.map((edu, index) => (
            <article key={index} className="education-item">
              <div className="education-meta">
                <span className="education-period">{edu.period}</span>
                <span className="education-location">{edu.location}</span>
              </div>
              <div className="education-body">
                <h2 className="education-degree">{edu.degree}</h2>
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-description">{edu.description}</p>
                <div className="education-achievements">
                  <h4>Highlights</h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                {edu.links && edu.links.length > 0 && (
                  <div className="education-links">
                    {edu.links.map((link, i) => (
                      <a key={i} href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.title} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
