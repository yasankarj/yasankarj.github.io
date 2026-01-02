import { useState, useEffect, useRef } from 'react'
import './ImageSlideshow.css'

function ImageSlideshow() {
  // images can be extended to include captions later
  const images = [
    { src: '/images/photo1.png', caption: 'Photo 1' },
    { src: '/images/photo2.jpg', caption: 'Photo 2' },
    { src: '/images/photo3.JPG', caption: 'Photo 3' },
    { src: '/images/photo4.jpeg', caption: 'Photo 4' },
    { src: '/images/photo5.jpeg', caption: 'Photo 5' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const i = new Image()
      i.src = img.src
    })
  }, [])

  // autoplay with pause support
  useEffect(() => {
    const start = () => {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 3500)
    }

    if (!isPaused) start()
    return () => clearInterval(intervalRef.current)
  }, [isPaused, images.length])

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length])

  const goToSlide = (index) => setCurrentIndex(index)
  const goToPrevious = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  const goToNext = () => setCurrentIndex((i) => (i + 1) % images.length)

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slideshow-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              alt={image.caption || `Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
                const next = e.target?.nextSibling
                if (next) next.style.display = 'flex'
              }}
            />

            <div className="slide-caption" aria-hidden={index !== currentIndex}>
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="slideshow-arrow slideshow-arrow-left"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        className="slideshow-arrow slideshow-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="slideshow-dots" role="tablist" aria-label="Slideshow navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentIndex}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow

