import educationData from '../data/education.json'
import './Education.css'

function Education() {
  const education = educationData.education

  return (
    <div className="education">
      <div className="container">
        <h1 className="page-title">Education</h1>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h2 className="education-degree">{edu.degree}</h2>
                <span className="education-period">{edu.period}</span>
              </div>
              <h3 className="education-institution">{edu.institution}</h3>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
              <div className="education-achievements">
                <h4>Key Achievements:</h4>
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
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

