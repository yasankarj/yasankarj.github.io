import { useState } from 'react'
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

  return (
    <div className="courses">
      <div className="container">
        <h1 className="page-title">Courses</h1>
        
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
              <div key={index} className="course-card">
                <h2 className="course-name">{course.name}</h2>
                <p className="course-platform">
                  <strong>Platform:</strong> {course.platform}
                </p>
                <div className="course-status">
                  <span className={`status-badge status-${course.status}`}>
                    {course.status === 'completed' ? '✓ Completed' : '◆ Ongoing'}
                  </span>
                </div>
                <div className="course-card-buttons">
                  <button
                    className="details-button"
                    onClick={() => setSelectedCourse(course)}
                  >
                    View Details
                  </button>
                  {course.certificateLink && course.status === 'completed' && (
                    <a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No courses found matching "{searchTerm}"</p>
          )}
        </div>
      </div>

      {selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <h2 className="modal-title">{selectedCourse.name}</h2>
            <div className="modal-info">
              <p className="modal-field">
                <strong>Platform:</strong> {selectedCourse.platform}
              </p>
              <p className="modal-field">
                <strong>Status:</strong>
                <span className={`status-badge status-${selectedCourse.status}`}>
                  {selectedCourse.status === 'completed' ? '✓ Completed' : '◆ Ongoing'}
                </span>
              </p>
              <div className="modal-description">
                <strong>Description:</strong>
                <p className="description-intro">{selectedCourse.description[0]}</p>
                <ul className="description-list">
                  {selectedCourse.description.slice(1).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-actions">
              {selectedCourse.certificateLink && selectedCourse.status === 'completed' && (
                <a
                  href={selectedCourse.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Courses
