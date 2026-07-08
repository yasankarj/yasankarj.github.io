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
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              Technical Lead · Sri Lanka
            </span>
            <h1 className="hero-title">
              Yasanka Jayawardane<span className="accent-dot">.</span>
            </h1>
            <p className="hero-tagline">
              I lead engineering teams and build full-stack products — more than
              nine years of turning complex problems into clean, reliable
              software.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get in touch</Link>
              <button onClick={scrollToAbout} className="btn btn-ghost">
                More about me <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/images/photo1.png"
              alt="Yasanka Jayawardane"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="about" ref={aboutSectionRef} className="about-section">
        <div className="container section-grid">
          <div className="section-label">
            <span className="section-index">01</span>
            <h2>About</h2>
          </div>
          <div className="about-content">
            <p className="lead">
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
        <div className="container section-grid">
          <div className="section-label">
            <span className="section-index">02</span>
            <h2>Skills &amp; Technologies</h2>
          </div>
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

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <h2>Have a project or a role in mind?</h2>
              <p>I'm always happy to talk about engineering, leadership, or ideas worth building.</p>
            </div>
            <Link to="/contact" className="btn btn-light">Get in touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
