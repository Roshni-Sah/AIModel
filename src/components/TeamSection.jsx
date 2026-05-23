import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const members = [
  {
    initials: 'KS',
    name: 'Kundan Raj Singh',
    role: 'Founder & CEO',
    bio: 'Leads Dhruv.AI\'s product vision, AI strategy, and drone system development, bringing together crop intelligence, autonomous flight, and precision spraying into one practical platform.',
    focus: ['AI strategy', 'Drone systems', 'Product vision'],
    email: 'kundanrajsingh398@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kundan-raj-singh-714015283/',
  },
  {
    initials: 'RK',
    name: 'Roshni Kumari',
    role: 'Co-Founder & CTO',
    bio: 'Drives Dhruv.AI\'s technical execution across AI models, drone architecture, and intelligent automation, turning field data into reliable crop-health insights.',
    focus: ['AI models', 'Drone architecture', 'Automation'],
    email: 'roshnikujuu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/roshni-sah-6336bb2a7/',
  },
]

const getMailLink = (member) => {
  const subject = encodeURIComponent(`Dhruv.AI inquiry for ${member.name}`)
  const body = encodeURIComponent(
    `Hi ${member.name},\n\nI would like to connect with you regarding Dhruv.AI.\n\n`
  )

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=${subject}&body=${body}`
}

function TeamSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section className="team-section" id="team" aria-labelledby="teamHeading" ref={sectionRef}>
      <div className="team-shell">
        <div className="team-header reveal">
          <span className="team-badge">Our team</span>
          <h2 id="teamHeading">The minds building Dhruv.AI for smarter farming.</h2>
          <p>
            A founder-led team combining artificial intelligence, drone technology, and field
            insight to build practical precision agriculture systems for Indian farms.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <article className="team-card reveal" key={member.name}>
              <div className="team-card-top">
                <div className="team-avatar" aria-hidden="true">
                  <span>{member.initials}</span>
                </div>
                <div className="team-socials" aria-label={`${member.name} links`}>
                  <a
                    href={getMailLink(member)}
                    aria-label={`Email ${member.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope" aria-hidden="true" />
                  </a>
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="team-copy">
                <span>{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
              </div>

              <div className="team-focus">
                {member.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* <div className="team-note reveal">
          <i className="fas fa-seedling" aria-hidden="true" />
          <p>
            Together, Kundan and Roshni are building the AI and drone foundation of Dhruv.AI,
            focused on early crop disease detection, autonomous field monitoring, and targeted
            spraying that helps farmers act with confidence.
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default TeamSection
