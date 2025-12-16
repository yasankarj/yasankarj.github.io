import { Link } from 'react-router-dom'
import './Home.css'
import ImageSlideshow from '../components/ImageSlideshow'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-slideshow">
            <ImageSlideshow />
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
            <a href="#about" className="btn btn-primary">Learn More</a>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a technical lead with closer to nine years of experience in the industry (excluding my internship). I have worked with a variety of technologies and frameworks, and I am always looking to learn new things.
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
            <div className="skill-card">PHP</div>
            <div className="skill-card">Go</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">CSS/HTML</div>
            <div className="skill-card">Angular</div>
            <div className="skill-card">React</div>
            <div className="skill-card">React Native</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">AWS</div>
            <div className="skill-card">Docker</div>
            <div className="skill-card">Kubernetes</div>
            <div className="skill-card">Scrum</div>
            <div className="skill-card">Kanban</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

