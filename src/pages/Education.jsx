import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Moratuwa",
      period: "2024 - present",
      location: "Colombo, Sri Lanka",
      description: "Specialized in Software Architecture. From the Department of Computer Science and Engineering, Faculty of Engineering, University of Moratuwa.",
      achievements: [
        "Currently studying",
        "All the modules are completed, now working on the research project"
      ],
      links: []
    },
    {
      degree: "Bachelor of Science in Engineering",
      institution: "University of Moratuwa",
      period: "2013 - 2017",
      location: "Colombo, Sri Lanka",
      description: "Focus on software development and algorithms. From the Department of Computer Engineering, Faculty of Engineering, University of Moratuwa.",
      achievements: [
        "3.18 / 4.20 GPA",
        "Participated in numerous hackathons and coding competitions",
        "Participated in extracurricular activities such as Techno Exhibition, Organizing events, etc."
      ],
      links: [
        {
          title: "Academic Transcript",
          link: "https://lms.uom.lk/public/transcript.php?Key1=120268V&Key2=00824&Key3=A003106&Key4=113735"
        }
      ]
    },
    {
      degree: "G.C.E.Advanced Level in Physical Science",
      institution: "Central College, Bandarawela",
      period: "2011",
      location: "Bandarawela, Sri Lanka",
      description: "I excelled in my A/L exam in my second attempt and I obtained the merit island rank.",
      achievements: [
        "Physics - A",
        "Combined Maths - A",
        "Chemistry - B",
        "Z-score - 2.1752",
        "Island Rank - 55",
        "District Rank - 2"
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

