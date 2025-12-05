import './WorkExperience.css'

function WorkExperience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Improved application performance by 40% through optimization"
      ]
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: [
        "Developed and maintained full-stack applications",
        "Implemented RESTful APIs and database schemas",
        "Participated in agile development processes",
        "Contributed to product planning and technical decisions"
      ]
    },
    {
      title: "Junior Developer",
      company: "Digital Solutions",
      period: "2018 - 2020",
      location: "New York, NY",
      description: [
        "Built responsive web interfaces using modern JavaScript frameworks",
        "Fixed bugs and implemented new features",
        "Worked closely with designers to implement UI/UX designs",
        "Learned best practices in software development"
      ]
    }
  ]

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
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
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

export default WorkExperience

