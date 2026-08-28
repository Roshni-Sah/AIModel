import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/dhruvLogo.png'
import './ContactPage.css'

function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      location: event.target.location.value,
      message: event.target.message.value
    }

    try {
      await fetch(
        `https://script.google.com/macros/s/${import.meta.env.VITE_GOOGLE_SCRIPT_ID}/exec`,
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      )
      setShowSuccess(true)
      event.target.reset()
    } catch (error) {
      alert("Something went wrong!")
    }
  }

  return (
    <div className="contact-page-container">
      <nav className="contact-nav">
        <Link className="brand" to="/" aria-label="Dhruv.AI home">
          <img src={logoImg} alt="DHRUV.AI logo" />
          <span><span>dhruv</span><span>.ai</span></span>
        </Link>
        <Link className="back-home" to="/">
          <i className="fas fa-arrow-left" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <main className="page-shell">
        <header className="contact-hero">
          <span className="eyebrow"><i className="fas fa-paper-plane" aria-hidden="true" /> Contact Team Dhruv.AI</span>
          <h1>Let’s connect and discuss AI, drones, and the future of smarter agriculture.</h1>
        </header>

        <section className="contact-grid" aria-label="Contact form and contact details">
          <div className="form-panel">
            <h2 className="section-title">Start a conversation</h2>
            <p className="section-copy">Share a few details and the Dhruv.AI team will get back to you shortly.</p>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91..." required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="location">Location</label>
                  <input id="location" name="location" type="text" placeholder="City, State" />
                </div>
                <div className="field full">
                  <label htmlFor="message">Enquiry</label>
                  <textarea id="message" name="message" placeholder="Tell us about your enquiry and our team will get back to you soon..." />
                </div>
              </div>
              <div className="submit-row">
                <button className="submit-btn" type="submit">
                  <i className="fas fa-paper-plane" aria-hidden="true" /> Submit Details
                </button>
                <Link className="back-btn" to="/">
                  <i className="fas fa-home" aria-hidden="true" /> Homepage
                </Link>
              </div>
            </form>
            {showSuccess && (
              <div className="success-banner visible" id="successBanner">
                Thanks. Your details are ready to be shared with the Dhruv.AI team.
              </div>
            )}
          </div>

          <aside className="info-panel">
            <h2 className="section-title">Quick connect</h2>
            <p className="section-copy">We’d love to hear your enquiries, ideas, or feedback.</p>
            <div className="quick-stack">
              <div className="quick-card">
                <i className="fas fa-envelope" />
                <h3>Email</h3>
                <a href="mailto:kundanrajsingh398@gmail.com">kundanrajsingh398@gmail.com</a>
              </div>
              <div className="quick-card">
                <i className="fas fa-location-dot" />
                <h3>Office</h3>
                <p>iCreate Campus, Devdholera, Opp. Kensville Golf Club, Rajkot-Bavla Highway, Ahmedabad, Gujarat – 382240 , India</p>
              </div>
              <div className="quick-card">
                <i className="fas fa-seedling" />
                <h3>What we can discuss</h3>
                <p>Crop disease detection, precision spraying, startup collaborations, and smart agriculture deployment.</p>
              </div>
              <div className="quick-card">
                <h3>Social</h3>
                <div className="social-row">
                  <a href="https://www.linkedin.com/company/dhruv-ai/posts/?feedView=all" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                  <a href="https://www.instagram.com/_dhruv.ai_?igsi=MTQwM291eGc2NGI2OQ==" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                  <a href="https://x.com/dhruv_ai_" aria-label="X"><i className="fab fa-twitter" /></a>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default ContactPage
