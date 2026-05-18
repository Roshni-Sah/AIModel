import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const steps = [
  {
    index: '01',
    icon: 'fas fa-location-crosshairs',
    title: 'Autonomous Field Intelligence',
    desc: 'Drones scan farms from above, capturing high-resolution visual data across crop rows and field zones.',
  },
  {
    index: '02',
    icon: 'fas fa-brain',
    title: 'AI-Powered Crop Diagnostics',
    desc: 'Computer vision models analyze crop health patterns and detect early stress, infection, and disease signals.',
  },
  {
    index: '03',
    icon: 'fas fa-map-location-dot',
    title: 'Precision Disease Mapping',
    desc: 'Affected areas are mapped into actionable zones, helping farmers understand where intervention is needed.',
  },
  {
    index: '04',
    icon: 'fas fa-spray-can',
    title: 'Smart Targeted Spraying',
    desc: 'The drone applies treatment only where required, reducing chemical waste and improving crop protection.',
  },
  {
    index: '05',
    icon: 'fas fa-chart-line',
    title: 'Real-Time Agricultural Insights',
    desc: 'Farmers receive clear data intelligence for faster decisions, monitoring, and future crop planning.',
  },
]

function ProcessSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="product-flow-section" id="process" aria-labelledby="processHeading" ref={sectionRef}>
      <div className="product-flow-shell">
        <span className="section-kicker">Autonomous crop mission</span>
        <div className="system-heading reveal">
          <h2 id="processHeading">How Dhruv.AI Works</h2>
          <p>
            From aerial sensing to precision action, Dhruv.AI turns every drone flight into an
            intelligent crop-protection workflow.
          </p>
        </div>

        <ol className="mission-orbit">
          {steps.map((step, i) => (
            <li className="mission-step reveal" key={i}>
              <span className="mission-index">{step.index}</span>
              <div className="mission-node">
                <i className={step.icon} aria-hidden="true" />
              </div>
              <div className="mission-copy">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
