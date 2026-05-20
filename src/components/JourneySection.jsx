import { useState, useEffect, useCallback, useRef } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import dhruvaiImg from '../assets/dhruvai.jpeg'
import tieuImg from '../assets/TiEU.jpeg'
import iitMadrasImg from '../assets/IITMadras.jpeg'
import firstStallImg from '../assets/firstStall.jpeg'
import fundingImg from '../assets/funding.png'
import incubatedImg from '../assets/incubated.jpeg'
import './JourneySection.css'

const slides = [
  { image: dhruvaiImg, 
    alt: 'Dhruv.AI prototype development', tag: 'Beginning', date: 'March 2025 - Sep 2025', title: 'From Prototype to Patent', desc: 'What started as a hackathon idea slowly became the foundation of Dhruv.AI. With a self-built drone, late-night testing, and a shared vision to solve real agricultural problems, we began working on AI-powered crop disease detection through aerial monitoring and smart analysis. As Dhruv.AI continued to grow, we were selected for multiple hackathons and innovation programs, including SIH Internal, where we continuously improved our technology through feedback, research, and real-world problem solving. What initially began as a disease detection system gradually evolved into an AI-powered precision spraying solution designed for smarter and more efficient farming. With every competition and milestone, the idea became stronger eventually leading us to file a patent for our precision agriculture innovation and smart spraying approach.' },
  { image: tieuImg, alt: 'Dhruv.AI at TiE University startup program', tag: 'Milestone', date: 'October 2025', title: 'Top 25 Startup Journey', desc: 'Dhruv.AI was selected among the Top 25 Startups in the TiE University Program , West Bengal Chapter 2025. Being recognized through TiE University gave us the opportunity to present our innovation among emerging student-led startups and connect with mentors, founders, and industry leaders from the startup ecosystem.' },
  { image: iitMadrasImg, alt: 'Dhruv.AI startup ecosystem journey', tag: 'Journey', date: 'February 2026', title: 'Invited by Leading Institutions', desc: 'As Dhruv.AI continued to grow, we got the opportunity to present our idea at the IIT Madras E-Summit through leading startup and innovation platforms including PedalStart, iCreate, Lemon Ideas, and NSRCEL IIM Bangalore.  Being invited by these organizations was an important moment in our journey, as it connected us with startup ecosystems that support emerging innovators and student-led ventures across India. The experience gave us the opportunity to showcase our vision for AI-driven smart agriculture, interact with mentors and founders, and learn from entrepreneurs building impactful solutions in different industries.' },
  { image: firstStallImg, alt: 'Dhruv.AI first startup stall', tag: 'Experience', date: 'April 2026', title: 'Our First Startup Stall', desc: 'Dhruv.AI was invited by Lemon Ideas to participate in the Viksit Bharat Startup Conclave, Nagpur, where we set up our very first startup stall. It was a major milestone in our journey as we got the opportunity to present our innovation to 100+ people, including CEOs, industry leaders, startup founders, and representatives from government ministries. The event gave us valuable feedback, meaningful industry connections, and opportunities to interact with companies working in the agriculture sector who showed interest in future collaborations. The encouraging response we received made this experience a memorable step forward in the journey of Dhruv.AI.' },
  { image: fundingImg, alt: 'Dhruv.AI receiving iCreate TEC support', tag: 'Support', date: 'May 2026', title: 'Funded by iCreate TEC', desc: 'A major milestone in the journey of Dhruv.AI came when we received funding support from iCreate TEC, Technology Exploration Cell by iCreate (International Centre for Entrepreneurship and Technology), Gujarat. For a team that started with a simple hackathon prototype, receiving this support felt like a strong validation of both our vision and technology. The funding helped us continue developing our AI-powered drone system for precision agriculture, improve our research and prototype development, and take our innovation a step further toward real-world implementation. This journey later continued with another important chapter as Dhruv.AI became incubated at iCreate, entering a larger ecosystem of startups, mentors, and innovators.' },
  { image: incubatedImg, alt: 'Dhruv.AI incubated at iCreate', tag: 'Incubation', date: 'May 2024', title: 'Incubated at iCreate', desc: 'After receiving support and funding through iCreate TEC, Dhruv.AI reached another important milestone by getting incubated at iCreate, International Centre for Entrepreneurship and Technology, Gujarat. For us, incubation was more than just joining a startup program, it was the beginning of a new phase where our ideas started turning into a long-term vision. Being surrounded by founders, innovators, mentors, and industry experts gave us the opportunity to learn beyond classrooms and competitions. The experience helped us refine our technology, understand the startup ecosystem more deeply, and continue building AI-driven solutions focused on the future of smart agriculture.' },
]

const DURATION = 5200
const TICK = 50

function JourneySection() {
  const sectionRef = useRevealOnScroll()
  const [state, setState] = useState({ current: 0, progress: 0 })
  const { current, progress } = state
  const timerRef = useRef(null)
  const hoveredRef = useRef(false)

  const showSlide = useCallback((i) => {
    setState({
      current: ((i % slides.length) + slides.length) % slides.length,
      progress: 0,
    })
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (hoveredRef.current) return
      setState((prev) => {
        const nextProgress = prev.progress + (TICK / DURATION) * 100
        if (nextProgress >= 100) {
          return {
            current: (prev.current + 1) % slides.length,
            progress: 0,
          }
        }
        return {
          ...prev,
          progress: nextProgress,
        }
      })
    }, TICK)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section className="journey-modern-section" id="journey" aria-labelledby="journeyHeading" ref={sectionRef}>
      <div className="journey-bg-glow glow-1" />
      <div className="journey-bg-glow glow-2" />

      <div className="journey-modern-shell">
        <div className="journey-modern-heading reveal">
          <span className="journey-modern-eyebrow">Startup journey</span>
          <h2 id="journeyHeading" className="journey-modern-h2">From campus prototype to funded AgriTech startup.</h2>
          <p className="journey-modern-p">Seven milestones that shaped Dhruv.AI into an AI drone platform for precision farming, disease intelligence, and sustainable crop protection.</p>
        </div>

        <div
          className="journey-modern-carousel reveal"
          onMouseEnter={() => (hoveredRef.current = true)}
          onMouseLeave={() => (hoveredRef.current = false)}
          aria-roledescription="carousel"
        >
          <div className="journey-progress-bar" aria-hidden="true">
            <div className="journey-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div
            className="journey-modern-slides"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <article
                className={`journey-modern-slide${i === current ? ' active' : ''}`}
                aria-label={`Slide ${i + 1} of ${slides.length}`}
                aria-hidden={i !== current}
                key={i}
              >
                <figure className="journey-modern-media">
                  <div className="journey-image-wrapper">
                    <img src={s.image} alt={s.alt} />
                  </div>
                </figure>
                <div className="journey-modern-content">
                  <div className="journey-modern-content-inner">
                    <div className="journey-modern-meta">
                      <span className="journey-modern-tag">{s.tag}</span>
                      <span className="journey-modern-date">{s.date}</span>
                    </div>
                    <h3 className="journey-modern-title">{s.title}</h3>
                    <p className="journey-modern-desc">{s.desc}</p>
                  </div>

                  <div className="journey-modern-controls" aria-label="Journey controls">
                    <button className="journey-nav-btn prev" aria-label="Previous slide" onClick={() => showSlide(current - 1)}>
                      <i className="fas fa-arrow-left" aria-hidden="true" />
                    </button>
                    <button className="journey-nav-btn next" aria-label="Next slide" onClick={() => showSlide(current + 1)}>
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="journey-modern-bottom-controls reveal">
          <div className="journey-dots" aria-label="Choose journey milestone">
            {slides.map((s, i) => (
              <button
                className={`journey-dot${i === current ? ' active' : ''}`}
                aria-label={`Show ${s.title}`}
                aria-current={i === current ? 'true' : 'false'}
                key={i}
                onClick={() => showSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
