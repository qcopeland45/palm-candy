import React, { useState, useEffect } from 'react'
import './Header.css'
import headerImage from '../assets/palmcandy-header-optimized.webp'
import headerImageFallback from '../assets/palmcandy-header-optimized.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Essential Navigation - Positioned above the designer's header */}
      <div className="nav-top">
        <div className="container">
          <nav className="nav-essential">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#prelaunch" className="nav-link btn btn-primary">Join Waitlist</a>
          </nav>
        </div>
      </div>

      {/* Designer's Full-Width Header Space */}
      <div className="designer-header-full">
        <picture>
          <source srcSet={headerImage} type="image/webp" />
          <img 
            src={headerImageFallback}
            alt="Palm Candy Header"
            className="header-image"
            loading="eager"
          />
        </picture>
      </div>

      {/* Mobile Menu Button - Positioned absolutely for overlay */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
        <a href="#prelaunch" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Join Waitlist</a>
      </nav>
    </header>
  )
}

export default Header
