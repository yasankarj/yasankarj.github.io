import { useState, useEffect } from 'react'
import coursesData from '../data/courses.json'
import './Courses.css'

function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const courses = coursesData.courses

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const closeModal = () => {
    setSelectedCourse(null)
  }

  // Close modal on Escape and lock page scroll while it is open
  useEffect(() => {
    if (!selectedCourse) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedCourse])

  return (
    <div className="courses">
      <div className="container">
        <header className="page-header">
          <span className="page-eyebrow">Learning</span>
          <h1 className="page-heading">Courses<span className="accent-dot">.</span></h1>
          <p className="page-intro">
            Continuous learning — courses I've completed and what I'm studying right now.
          </p>
        </header>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <article key={index} className="course-card">
                <div className="course-card-top">
                  <span className="course-platform">{course.platform}</span>
                  <span className={`status-badge status-${course.status}`}>
                    {course.status === 'completed' ? 'Completed' : 'In progress'}
                  </span>
                </div>
                <h2 className="course-name">{course.name}</h2>
                <div className="course-card-actions">
                  <button
                    className="course-link"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Details <span aria-hidden="true">→</span>
                  </button>
                  {course.certificateLink && course.status === 'completed' && (
                    <a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="course-link"
                    >
                      Certificate <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))
          ) : (
            <p className="no-results">No courses found matching "{searchTerm}"</p>
          )}
        </div>
      </div>

      {selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <span className="modal-eyebrow">
              {selectedCourse.platform} · {selectedCourse.status === 'completed' ? 'Completed' : 'In progress'}
            </span>
            <h2 className="modal-title">{selectedCourse.name}</h2>
            <p className="modal-description">{selectedCourse.description}</p>

            {selectedCourse.topics && selectedCourse.topics.length > 0 && (
              <div className="modal-section">
                <h4>Topics Covered</h4>
                <ul className="modal-list">
                  {selectedCourse.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCourse.certificateLink && selectedCourse.status === 'completed' && (
              <div className="modal-actions">
                <a
                  href={selectedCourse.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-link"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Courses
