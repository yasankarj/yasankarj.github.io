import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          YasankaRJ
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/work-experience" 
              className={isActive('/work-experience') ? 'active' : ''}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className={isActive('/education') ? 'active' : ''}
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="/courses" 
              className={isActive('/courses') ? 'active' : ''}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

