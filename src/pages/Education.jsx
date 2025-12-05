import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      location: "Boston, MA",
      description: "Specialized in Software Engineering and Machine Learning. Thesis on distributed systems.",
      achievements: [
        "Graduated with Honors (GPA: 3.8/4.0)",
        "Published research paper on cloud computing",
        "Teaching Assistant for Data Structures course"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      location: "Chicago, IL",
      description: "Focus on software development and algorithms. Active member of the Computer Science Society.",
      achievements: [
        "Dean's List: Fall 2014, Spring 2015",
        "Won Hackathon competition in 2015",
        "President of Computer Science Club"
      ]
    }
  ]

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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

