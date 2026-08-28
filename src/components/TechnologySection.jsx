import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import patentImg from '../assets/patent.jpeg'

const panels = [
  {
    number: '01',
    icon: 'fas fa-camera-retro',
    title: 'Computer Vision AI',
    desc: 'Crop images are scanned by AI to detect diseases, unhealthy plants, and unusual field conditions at an early stage.',
  },
  {
    number: '02',
    icon: 'fas fa-helicopter',
    title: 'Autonomous Drone Systems',
    desc: 'Self-built drones autonomously scan fields, collect agricultural data, and execute precision spraying missions with high accuracy and efficiency.',
  },
  {
    number: '03',
    icon: 'fas fa-satellite-dish',
    title: 'Real-Time Data Intelligence',
    desc: 'Integrated cameras and field sensors continuously monitor crop conditions, helping detect stress indicators and environmental changes in real time.',
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
            A connected AI, drone, sensor, and analytics ecosystem built for precision farming at field scale.
          </p>
        </div>

        <div className="tech-bento">
          {panels.map((panel, i) => (
            <article className="tech-panel reveal" key={i}>
              <div className="tech-panel-top">
                <span className="tech-panel-number">{panel.number}</span>
                <span className="tech-panel-icon">
                  <i className={panel.icon} aria-hidden="true" />
                </span>
              </div>
              <h3>{panel.title}</h3>
              <p>{panel.desc}</p>
            </article>
          ))}
        </div>

        <article className="tech-patent reveal">
          <div className="tech-patent-copy">
            <span className="tech-patent-badge">Patent-Filed Innovation</span>
            <h3>Built for the Future of Precision Farming.</h3>
            <p>
              Dhruv.AI's patent filing represents an integrated approach to crop disease
              detection, drone-enabled field operations, and precision spraying, bringing AI-driven
              decision-making into a practical agriculture workflow.
            </p>
          </div>
          <figure className="tech-patent-media">
            <img src={patentImg} alt="Dhruv.AI patent filing document" />
          </figure>
        </article>
      </div>
    </section>
  )
}

export default TechnologySection
