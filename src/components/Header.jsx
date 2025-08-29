import React, { useState, useEffect } from 'react'
import './Header.css'

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
      <div className="container">
        <div className="header-content">
          {/* Logo placeholder - replace with your actual logo */}
          <div className="logo">
            <div className="logo-placeholder">
              <span className="logo-text">PALM CANDY</span>
              <span className="logo-subtitle">LOGO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#prelaunch" className="nav-link">Join Waitlist</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#prelaunch" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Join Waitlist</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
