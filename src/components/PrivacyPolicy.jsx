import React from 'react'
import './LegalSections.css'

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="section legal-section">
      <div className="container">
        <div className="legal-content">
          <h2>Privacy Policy</h2>
          <div className="legal-text">
            <div className="legal-item">
              <h3>Information We Collect</h3>
              <p>
                We collect only the information necessary to provide you with updates about Palm Candy products. 
                This includes your name, email address, and optionally your phone number when you join our waitlist.
              </p>
            </div>

            <div className="legal-item">
              <h3>How We Use Your Information</h3>
              <p>
                Your information is used exclusively to send you updates about new product releases and collaborations 
                and notify you when Palm Candy overgrips become available.
              </p>
            </div>

            <div className="legal-item">
              <h3>We Never Sell Your Data</h3>
              <p>
                <strong>Your privacy is paramount to us.</strong> We will never sell, rent, or share your personal 
                information with third parties for marketing purposes. Your data stays with Palm Candy.
              </p>
            </div>

            <div className="legal-item">
              <h3>Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
