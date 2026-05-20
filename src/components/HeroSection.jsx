import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function HeroSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section
      className="hero-section"
      id="home"
      ref={sectionRef}
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
