import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.css'

const Hero = ({ scrollY }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const carouselRef = useRef(null)
  const intervalRef = useRef(null)
  
  // Sample images - replace with your actual images later
  const carouselImages = [
    '/placeholder-1.jpg',
    '/placeholder-2.jpg', 
    '/placeholder-3.jpg',
    '/placeholder-4.jpg',
    '/placeholder-5.jpg',
    '/placeholder-6.jpg'
  ]

  // Function to start the auto-advance timer
  const startTimer = useCallback(() => {
    // Clear any existing timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    // Start new timer
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds
  }, [carouselImages.length])

  // Function to reset the timer
  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    startTimer()
  }, [startTimer])

  // Auto-advance carousel
  useEffect(() => {
    startTimer()
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [startTimer])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    resetTimer() // Reset timer when manually navigating
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    resetTimer() // Reset timer when manually navigating
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
    resetTimer() // Reset timer when manually navigating
  }

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-background">
          <div 
            className="parallax-layer layer-1"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className="parallax-layer layer-2"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="parallax-layer layer-3"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Revolutionize Your
                <span className="highlight"> Pickleball Game</span>
              </h1>
              <p className="hero-subtitle">
                Experience the future of pickleball with our revolutionary interchangeable grips. 
                Monthly collaborations with top artists, anime culture, and pop culture icons.
              </p>
              <div className="hero-buttons">
                <a href="#prelaunch" className="btn btn-primary">
                  Join the Waitlist
                </a>
                <a href="#features" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="paddle-placeholder">
                <div className="paddle-image">
                  <div className="paddle-shape"></div>
                  <div className="paddle-grip"></div>
                  <div className="paddle-text">PICKLEBALL PADDLE</div>
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1">🎨</div>
                  <div className="floating-element element-2">🔥</div>
                  <div className="floating-element element-3">⚡</div>
                  <div className="floating-element element-4">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Carousel Section - Now outside the hero section */}
      <section className="hero-carousel-section">
        <div className="hero-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <div className="carousel-image-placeholder">
                    <div className="image-number">{index + 1}</div>
                    <div className="image-label">Image {index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="carousel-nav carousel-prev" onClick={prevImage}>
              <span>‹</span>
            </button>
            <button className="carousel-nav carousel-next" onClick={nextImage}>
              <span>›</span>
            </button>
            
            {/* Dots Indicator */}
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
