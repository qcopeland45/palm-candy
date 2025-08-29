import React from 'react'
import './Features.css'

const Features = ({ scrollY }) => {
  const features = [
    {
      icon: '🔄',
      title: 'Interchangeable Grips',
      description: 'Switch between different grip styles and designs in seconds. No more buying new paddles for different looks!',
      color: 'var(--primary)'
    },
    {
      icon: '🎨',
      title: 'Artist Collaborations',
      description: 'Monthly drops featuring collaborations with local artists, anime creators, and pop culture icons.',
      color: 'var(--secondary)'
    },
    {
      icon: '🔥',
      title: 'Limited Edition Drops',
      description: 'Exclusive designs inspired by Jordan colorways, music culture, and trending themes.',
      color: 'var(--accent)'
    },
    {
      icon: '⚡',
      title: 'Performance First',
      description: 'Engineered for optimal grip, comfort, and performance while maintaining style and uniqueness.',
      color: 'var(--purple)'
    }
  ]

  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Palm Candy?</h2>
          <p>Experience the perfect blend of performance, style, and exclusivity</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ 
                transform: `translateY(${scrollY * 0.05}px)`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <h3>Ready to Transform Your Game?</h3>
          <p>Join our exclusive waitlist and be the first to know about new drops and collaborations.</p>
          <a href="#prelaunch" className="btn btn-primary">Join Waitlist Now</a>
        </div>
      </div>
    </section>
  )
}

export default Features
