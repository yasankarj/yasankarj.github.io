import { useState, useEffect } from 'react'
import './ImageSlideshow.css'

function ImageSlideshow() {
  const images = [
    '/images/photo1.png',
    '/images/photo2.jpeg',
    '/images/photo3.JPG',
    '/images/photo4.jpeg',
    '/images/photo5.jpeg'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Preload all images for caching
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="image-placeholder" style={{ display: 'none' }}>
              <span>Photo {index + 1}</span>
              <small>Replace with: {image}</small>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button className="slideshow-arrow slideshow-arrow-left" onClick={goToPrevious}>
        ‹
      </button>
      <button className="slideshow-arrow slideshow-arrow-right" onClick={goToNext}>
        ›
      </button>

      {/* Dots indicator */}
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow

