import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | Software Engineer | Problem Solver
          </p>
          <p className="hero-description">
            Welcome to my portfolio! I'm passionate about creating innovative 
            solutions and building amazing user experiences. Explore my work, 
            experience, and projects to learn more about what I do.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Learn More</a>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a dedicated software developer with a passion for creating 
              elegant solutions to complex problems. With expertise in modern 
              web technologies, I bring ideas to life through clean code and 
              thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">CSS/HTML</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">SQL</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

