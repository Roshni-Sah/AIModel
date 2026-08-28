import logoImg from '../assets/dhruvLogo.png'

function Footer() {
  const handleScrollTo = (e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div>
          <a href="#home" className="footer-logo logo-home" aria-label="Dhruv.AI home" onClick={(e) => handleScrollTo(e, '#home')}>
            <img src={logoImg} alt="DHRUV.AI logo" />
            <span className="logo-text"><span className="dhruv">dhruv</span><span className="ai">.ai</span></span>
          </a>
          <p className="footer-tagline">AI-powered drones for precision farming, early disease detection, and sustainable crop protection.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/dhruv-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="https://www.instagram.com/_dhruv.ai_?igsi=MTQwM291eGc2NGI2OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://x.com/dhruv_ai_" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fab fa-twitter" /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home" onClick={(e) => handleScrollTo(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>Mission</a></li>
            <li><a href="#vision" onClick={(e) => handleScrollTo(e, '#vision')}>Why Dhruv.AI</a></li>
            <li><a href="#journey" onClick={(e) => handleScrollTo(e, '#journey')}>Journey</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Technology</h4>
          <ul>
            <li><a href="#technology" onClick={(e) => handleScrollTo(e, '#technology')}>Computer Vision</a></li>
            <li><a href="#process" onClick={(e) => handleScrollTo(e, '#process')}>Crop Diagnostics</a></li>
            <li><a href="#process" onClick={(e) => handleScrollTo(e, '#process')}>Precision Spraying</a></li>
            <li><a href="#technology" onClick={(e) => handleScrollTo(e, '#technology')}>Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="contact-info-footer">
            <a className="info-item" href="mailto:kundanrajsingh398@gmail.com"><i className="far fa-envelope" /><p>kundanrajsingh398@gmail.com</p></a>
            <a className="info-item" href="https://www.dhruvai.in"><i className="fas fa-globe" /><p>www.dhruvai.in</p></a>
            <a className="info-item" href="https://maps.app.goo.gl/p9vCJ4HL3P2Qemxo7"><i className="fas fa-map-marker-alt" /><p>iCreate, Ahmedabad 382240</p></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2026 DHRUV.AI. All rights reserved.</p>
        <p>International Centre for Entrepreneurship and Technology, iCreate, Ahmedabad.</p>
      </div>
    </footer>
  )
}

export default Footer
