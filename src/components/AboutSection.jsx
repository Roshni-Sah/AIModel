import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import iCreateLogo from '../assets/iCreate.png'

function AboutSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="section-shell about-layout">
        <div className="glass-panel incubation-badge reveal">
          <img src={iCreateLogo} alt="iCreate logo" />
          <span className="section-kicker">Incubated at iCreate</span>
          <strong>International Centre for Entrepreneurship and Technology</strong>
          <p>iCreate, Ahmedabad.</p>
        </div>

        <div className="about-copy reveal">
          <h2>AI drone systems for the future of sustainable farming.</h2>
          <p>
            Dhruv.AI is building intelligent drone systems for precision agriculture, helping
            farmers detect crop diseases early, monitor fields efficiently, and reduce unnecessary
            chemical usage through targeted spraying and real-time aerial insights.
          </p>
          <div className="about-proof">
            <span>Computer vision</span>
            <span>Drone automation</span>
            <span>Precision spraying</span>
            <span>Sustainable farming</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
