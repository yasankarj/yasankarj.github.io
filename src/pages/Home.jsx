import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './Home.css'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['PHP', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'React Native', 'Angular']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Git']
  },
  {
    title: 'Ways of Working',
    skills: ['Scrum', 'Kanban']
  }
]

function Home() {
  const aboutSectionRef = useRef(null)

  const scrollToAbout = (e) => {
    e.preventDefault()
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-photo">
            <img
              src="/images/photo1.png"
              alt="Yasanka Jayawardane"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Yasanka Jayawardane</span>
          </h1>
          <p className="hero-subtitle">
            Technical Lead | Full Stack Developer | Software Engineer | Problem Solver
          </p>
          <p className="hero-description">
            Hello, it's me YasankaRJ. I am a Sri Lankan technical lead with a passion for creating innovative solutions and building amazing user experiences. Explore my work, experience, and projects to learn more about what I do.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToAbout} className="btn btn-primary">Learn More</button>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutSectionRef} className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a technical lead with more than nine years of experience in the industry (excluding my internship). I have worked with a variety of technologies and frameworks, and I am always looking to learn new things.
            </p>
            <p>
              With my experience on both service based and product based companies, I have a good understanding of the different approaches to software development.
            </p>
            <p>
              I proudly call myself a family man. I am married to a wonderful wife and we have a little boy. My free time is mostly spent with my family, and I love to play some guitar and watch Netflix whenever I get the chance.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3 className="skill-group-title">{group.title}</h3>
                <ul className="skill-tags">
                  {group.skills.map((skill) => (
                    <li key={skill} className="skill-tag">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

