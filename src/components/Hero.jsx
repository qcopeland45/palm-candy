import React from 'react'
import './Hero.css'

const Hero = ({ scrollY }) => {
  return (
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
  )
}

export default Hero
