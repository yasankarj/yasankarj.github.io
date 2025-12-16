import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xwpgqnkg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('Thank you for your message! I\'ll get back to you soon.')
        form.reset()
        // Clear status message after 5 seconds for success
        setTimeout(() => setStatus(''), 5000)
      } else {
        const data = await response.json()
        if (data.errors) {
          // Sanitize error messages to prevent XSS
          const sanitizedErrors = data.errors
            .map(error => {
              if (error && error.message) {
                // Remove potentially dangerous characters and limit length
                return String(error.message)
                  .replace(/[<>"']/g, '')
                  .substring(0, 200);
              }
              return '';
            })
            .filter(msg => msg.length > 0);
          
          setStatus(sanitizedErrors.length > 0 
            ? 'Oops! There was an error: ' + sanitizedErrors.join(', ')
            : 'Oops! An unknown error occurred.')
        } else {
          setStatus('Oops! There was a problem submitting your form. Please try again.')
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>yasankarj.online@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Location (Work)</h3>
                <p>Piliyandala, Colombo, Sri Lanka</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Location (Permanent)</h3>
                <p>Badulla, Sri Lanka</p>
              </div>
            </div>
            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/yasankajayawardane/" target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
                <a href="https://github.com/yasankarj" target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
                <a href="https://www.tiktok.com/@yasankarj" target="_blank" rel="noopener noreferrer" className="social-link">
                  Tiktok
                </a>
              </div>
            </div>
          </div>

          <form 
            className="contact-form" 
            action="https://formspree.io/f/xwpgqnkg"
            method="POST"
            onSubmit={handleSubmit}
          >
            {status && (
              <div className={`form-status ${status.includes('Thank you') ? 'form-status-success' : 'form-status-error'}`}>
                {status}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

