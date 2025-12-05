import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://github.com/yourusername/ecommerce",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      link: "https://github.com/yourusername/taskmanager",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts using weather APIs.",
      technologies: ["React", "CSS3", "OpenWeather API"],
      link: "https://github.com/yourusername/weather",
      image: "🌤️"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media metrics with data visualization and reporting features.",
      technologies: ["React", "Python", "Django", "Chart.js"],
      link: "https://github.com/yourusername/analytics",
      image: "📊"
    },
    {
      title: "Recipe Finder App",
      description: "A mobile-first recipe discovery app with search, filtering, and favorite recipes functionality.",
      technologies: ["React", "Redux", "Spoonacular API", "CSS Modules"],
      link: "https://github.com/yourusername/recipes",
      image: "🍳"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and professional experience.",
      technologies: ["React", "React Router", "CSS3"],
      link: "https://github.com/yourusername/portfolio",
      image: "💼"
    }
  ]

  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A collection of projects I've worked on, showcasing my skills and experience.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

