import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import heroBackgroundImg from '../assets/home1.png'

function HeroSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section 
      className="hero-section" 
      id="home" 
      ref={sectionRef}
      style={{
        background: `linear-gradient(90deg, rgba(3, 21, 18, 0.92), rgba(3, 21, 18, 0.56) 48%, rgba(3, 21, 18, 0.88)), linear-gradient(180deg, rgba(3, 21, 18, 0.1), #031512), url(${heroBackgroundImg}) center/cover no-repeat`,
      }}
    >
      <div className="hero-container">
        <div className="hero-content reveal">
          <h1>AI-Powered Crop Disease Detection And Precision Spraying</h1>
          <p className="hero-description">
            Dhruv.AI uses intelligent drone systems to detect crop diseases and perform targeted
            precision spraying — reducing chemical usage and improving farm productivity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
