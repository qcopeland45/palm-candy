import React from 'react'
import './LegalSections.css'

const TermsOfService = () => {
  return (
    <section id="terms" className="section legal-section">
      <div className="container">
        <div className="legal-content">
          <h2>Terms of Service</h2>
          <div className="legal-text">

            <div className="legal-item">
              <h3>Waitlist Terms</h3>
              <p>
                Joining our waitlist does not guarantee product availability or create any obligation to purchase. 
                Waitlist members will receive priority notification when products become available.
              </p>
            </div>

            <div className="legal-item">
              <h3>Product Information</h3>
              <p>
                All product descriptions, images, and specifications are subject to change. We strive to provide 
                accurate and as up to date informationas possible.
              </p>
            </div>

            <div className="legal-item">
              <h3>Intellectual Property</h3>
              <p>
                The Palm Candy name, logo, and all original content, features, and functionality are owned by 
                Palm Candy and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>


            <div className="legal-item">
              <h3>Communications</h3>
              <p>
                By joining our waitlist, you consent to receive communications from Palm Candy about product updates, 
                releases, and company news. You may unsubscribe at any time.
              </p>
            </div>

            <div className="legal-item">
              <h3>Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to this website. Your continued use constitutes acceptance of the modified terms.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService
