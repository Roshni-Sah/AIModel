import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const cards = [
  {
    icon: 'fas fa-seedling',
    label: 'Precision',
    title: 'Early Disease Detection',
    desc: 'Identify crop diseases using AI models trained on local agricultural datasets and real-world field conditions, enabling faster and more accurate detection.',
    highlight: 'Faster crop response',
  },
  {
    icon: 'fas fa-brain',
    label: 'Intelligence',
    title: 'Real-Time Crop Intelligence',
    desc: 'Real-time sensor data helps identify early signs of plant stress, enabling farmers to protect crop health, optimize resources, and maximize productivity.',
    highlight: 'Live field awareness',
  },
  {
    icon: 'fas fa-helicopter',
    label: 'Automation',
    title: 'Drone Automation for Bharat',
    desc: 'Enable targeted spraying and sustainable crop protection that reduces waste, cost, and manual exposure.',
    highlight: 'Smarter, targeted spraying',
  },
]

function VisionSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="vision-section" id="vision" aria-labelledby="visionHeading" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-header reveal">
          <span className="vision-badge">Why Dhruv.AI</span>
          <h2 id="visionHeading">AI-Powered Drone Systems for Crop Disease Detection and Targeted Spraying.</h2>
          <p>
            From disease detection to autonomous spraying, Dhruv.AI helps farmers protect crops, reduce costs, and increase yields through AI-powered drone technology.
          </p>
        </div>

        <div className="vision-grid">
          {cards.map((card, i) => (
            <article className="vision-card reveal" key={i}>
              <div className="vision-card-top">
                <span className="vision-icon">
                  <i className={card.icon} aria-hidden="true" />
                </span>
                <span className="vision-label">{card.label}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <strong>{card.highlight}</strong>
            </article>
          ))}
        </div>

        <div className="vision-impact reveal">
          <p>Empowering Indian Farmers with AI-Driven Agriculture</p>
          <div className="vision-metrics">
            <span>
              <strong>Early</strong> disease detection
            </span>
            <span>
              <strong>Less</strong> chemical waste
            </span>
            <span>
              <strong>Reduced</strong> farmer costs
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
