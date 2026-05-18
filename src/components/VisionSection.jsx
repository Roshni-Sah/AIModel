import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const cards = [
  {
    icon: 'fas fa-seedling',
    label: 'Precision',
    title: 'AI-Powered Precision Farming',
    desc: 'Convert field imagery into clear, actionable insights for healthier crops and smarter farm decisions.',
    highlight: 'Faster crop response',
  },
  {
    icon: 'fas fa-brain',
    label: 'Intelligence',
    title: 'Real-Time Crop Intelligence',
    desc: 'Monitor crop stress, disease signals, and field variation with AI models built for ground-level impact.',
    highlight: 'Live field awareness',
  },
  {
    icon: 'fas fa-helicopter',
    label: 'Automation',
    title: 'Drone Automation for Bharat',
    desc: 'Enable targeted spraying and sustainable crop protection that reduces waste, cost, and manual exposure.',
    highlight: 'Smarter, cleaner spraying',
  },
]

function VisionSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="vision-section" id="vision" aria-labelledby="visionHeading" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-header reveal">
          <span className="vision-badge">Why Dhruv.AI</span>
          <h2 id="visionHeading">A smarter operating system for crop protection.</h2>
          <p>
            We combine autonomous drones, computer vision, and crop intelligence to help farmers
            detect risk early, spray precisely, and grow with more confidence.
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
          <p>Building smarter farming systems for the future of Indian agriculture.</p>
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
