import { useState, useEffect, useCallback, useRef } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import dhruvaiImg from '../assets/dhruvai.jpeg'
import tieuImg from '../assets/TiEU.jpeg'
import iitMadrasImg from '../assets/IITMadras.jpeg'
import Startup from '../assets/100Startup.jpeg'
import firstStallImg from '../assets/firstStall.jpeg'
import fundingImg from '../assets/funding.png'
import incubatedImg from '../assets/incubated.jpeg'
import './JourneySection.css'

const slides = [
  { image: dhruvaiImg, 
    alt: 'Dhruv.AI prototype development', tag: 'Beginning', date: 'March 2025 - Sep 2025', title: 'From Prototype to Patent', desc: 'Dhruv.AI started as a hackathon idea with a self-built drone and a vision to solve real agricultural challenges. What began as an AI-based crop disease detection system evolved into a precision spraying agriculture platform combining AI, drones, and smart spraying technology. Along the way, we were selected for multiple innovation programs, refined our solution through feedback, and filed a patent for our innovation.' },
  { image: tieuImg, alt: 'Dhruv.AI at TiE University startup program', tag: 'Milestone', date: 'October 2025', title: 'Top 25 Startup Journey', desc: 'Dhruv.AI was selected among the Top 25 Startups in the TiE University Program , West Bengal Chapter 2025. Being recognized through TiE University gave us the opportunity to present our innovation among emerging student-led startups and connect with mentors, founders, and industry leaders from the startup ecosystem.' },
  { image: iitMadrasImg, alt: 'Dhruv.AI startup ecosystem journey', tag: 'Journey', date: 'February 2026', title: 'Invited by Leading Incubators', desc: 'As Dhruv.AI grew, we had the opportunity to showcase our innovation at the IIT Madras E-Summit through leading startup platforms such as PedalStart, iCreate, Lemon Ideas, and NSRCEL IIM Bangalore. These experiences connected us with founders, mentors, and innovators across India, helping us refine our vision for AI-powered smart agriculture.' },
  { image: Startup, alt: 'Dhruv.AI at 100 Startup Challenge', tag: 'Experience', date: 'April 2026', title: 'Participating in 100 Startup Challenge', desc: 'After successfully progressing through 6–7 pitching rounds, Dhruv.AI was recognized among the Top 100 Startups in India in Entrepreneurship Season Twelve by Lemon Ideas and Innopreneurs. The journey provided valuable opportunities to present our vision, receive expert feedback, and validate our innovation in AI-powered precision agriculture.' },
  { image: firstStallImg, alt: 'Dhruv.AI first startup stall', tag: 'Experience', date: 'April 2026', title: 'Our First Startup Stall', desc: 'Our first startup stall at the Viksit Bharat Startup Conclave, Nagpur marked an important step in the Dhruv.AI journey. Invited by Lemon Ideas, we showcased our innovation to 100+ attendees, including CEOs, founders, industry experts, and government representatives, gaining valuable insights and potential collaboration opportunities.' },
  { image: fundingImg, alt: 'Dhruv.AI receiving iCreate TEC support', tag: 'Support', date: 'May 2026', title: 'Funded by iCreate TEC', desc: 'A significant milestone for Dhruv.AI came when we received a grant from iCreate TEC (Technology Exploration Cell), Gujarat. This recognition validated our vision of transforming agriculture through AI and drone technology. The grant enabled us to accelerate rapid prototype development, and move closer to real-world deployment. This journey later continued with another important chapter as Dhruv.AI became incubated at iCreate, entering a larger ecosystem of startups, mentors, and innovators.' },
  { image: incubatedImg, alt: 'Dhruv.AI incubated at iCreate', tag: 'Incubation', date: 'May 2024', title: 'Incubated at iCreate', desc: 'Dhruv.AI reached another major milestone when we became incubated at iCreate, the International Centre for Entrepreneurship and Technology, Gujarat. More than just an incubation program, it marked the beginning of a new chapter in our journey. Operating from iCreate\'s innovation ecosystem, we gained access to mentors, founders, and industry experts who helped us refine our technology, strengthen our vision, and continue building AI-driven solutions for the future of agriculture.' },
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
          <p className="journey-modern-p">Severals milestones that shaped Dhruv.AI into an AI drone platform for precision farming, disease intelligence, and sustainable crop protection.</p>
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
                </div>
              </article>
            ))}
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
