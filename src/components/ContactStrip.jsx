import { Link } from 'react-router-dom'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function ContactStrip() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="contact-strip" id="contact" ref={sectionRef}>
      <div className="section-shell">
        <div className="contact-card reveal">
          <div>
            <span className="contact-kicker">Collaborate with Dhruv.AI</span>
            <p>Talk to us about pilots, partnerships and field deployment opportunities.</p>
          </div>
          <Link to="/contact" className="contact-cta">
            Connect with us <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactStrip
