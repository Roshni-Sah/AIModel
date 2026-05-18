import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const panels = [
  {
    icon: 'fas fa-camera-retro',
    title: 'Computer Vision AI',
    desc: 'Crop imagery is processed through vision models designed to identify health patterns, disease cues, and field-level anomalies.',
    className: 'tech-panel tech-panel-hero',
    hasSignal: true,
  },
  {
    icon: 'fas fa-helicopter',
    title: 'Autonomous Drone Systems',
    desc: 'Flight hardware captures farm data and supports precision spraying with repeatable mission logic.',
    className: 'tech-panel',
  },
  {
    icon: 'fas fa-satellite-dish',
    title: 'Smart Imaging & Sensors',
    desc: 'Camera and sensor inputs create a reliable view of crop condition and measurable field intelligence.',
    className: 'tech-panel tech-panel-tall',
    hasSensors: true,
  },
  {
    icon: 'fas fa-microchip',
    title: 'Real-Time Data Intelligence',
    desc: 'Collected data becomes practical recommendations for faster, more confident farm decisions.',
    className: 'tech-panel',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Precision Mapping & Agricultural Analytics',
    desc: 'Disease zones, spraying targets, and monitoring insights are organized into a decision layer farmers can act on immediately.',
    className: 'tech-panel tech-panel-wide',
    hasMapPulse: true,
  },
]

function TechnologySection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section
      className="tech-ecosystem-section"
      id="technology"
      aria-labelledby="techHeading"
      ref={sectionRef}
    >
      <div className="tech-shell">
        <div className="tech-intro reveal">
          <span className="tech-badge">Technology stack</span>
          <h2 id="techHeading">The intelligence layer behind Dhruv.AI.</h2>
          <p>
            A connected AI, drone, sensor, and analytics ecosystem built for precision farming at
            field scale.
          </p>
        </div>

        <div className="tech-bento">
          {panels.map((panel, i) => (
            <article className={`${panel.className} reveal`} key={i}>
              <div className="tech-panel-icon">
                <i className={panel.icon} aria-hidden="true" />
              </div>
              <h3>{panel.title}</h3>
              <p>{panel.desc}</p>
              {panel.hasSignal && (
                <div className="tech-signal" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {panel.hasSensors && (
                <div className="sensor-stack" aria-hidden="true">
                  <span>RGB</span>
                  <span>Field scan</span>
                  <span>Crop stress</span>
                </div>
              )}
              {panel.hasMapPulse && <div className="map-pulse" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
