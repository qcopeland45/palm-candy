import React from 'react'
import './Features.css'

const Features = ({ scrollY }) => {
  const features = [
    {
      icon: '', // TODO - add different image
      title: 'Interchangeable Overgrips',
      description: 'Transform your paddle\'s feel and style in seconds with our revolutionary overgrip system. Express your personality without compromising performance.',
      color: 'var(--primary)'
    },
    {
      icon: '', // TODO - add different image
      title: 'Artist Collaborations',
      description: 'Exclusive partnerships with talented artists, content creators, and pop culture icons. Each collaboration brings unique designs that turn your paddle into a statement piece.',
      color: 'var(--secondary)'
    },
    {
      icon: '', // TODO - add different image
      title: 'Limited Edition Drops',
      description: 'Coveted designs inspired by streetwear culture, iconic colorways, and trending aesthetics. When they\'re gone, they\'re gone – secure yours before everyone else catches on.',
      color: 'var(--accent)'
    },
    {
      icon: '', // TODO - add different image
      title: 'Performance First',
      description: 'Engineered with premium materials including sustainable bamboo for superior grip, natural antimicrobial properties, and unmatched durability. Style that performs, performance that lasts.',
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
