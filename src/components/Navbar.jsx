import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/12.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navLinksRef = useRef(null)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#vision', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#technology', label: 'Technology' },
    { href: '#journey', label: 'Journey' },
  ]

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.classList.remove('menu-open')
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev
      document.body.classList.toggle('menu-open', next)
      return next
    })
  }, [])

  const handleNavClick = useCallback(
    (e, href) => {
      if (!href.startsWith('#')) return
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      closeMenu()
    },
    [closeMenu]
  )

  // Scroll progress + scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      // Update progress bar
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progressEl = document.getElementById('siteProgress')
      if (progressEl && max > 0) {
        progressEl.style.width = `${(window.scrollY / max) * 100}%`
      }

      // Hero parallax
      const hero = document.querySelector('.hero-section')
      if (hero && window.innerWidth > 720) {
        hero.style.setProperty(
          '--hero-shift',
          `${Math.min(window.scrollY * 0.035, 18)}px`
        )
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    if (location.pathname !== '/') return

    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [location.pathname])

  // Only show hash navigation on home page
  const isHomePage = location.pathname === '/'

  return (
    <>
      <div className="site-progress" id="siteProgress" aria-hidden="true" />
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Primary navigation">
        <div className="nav-container">
          {isHomePage ? (
            <a
              href="#home"
              className="nav-logo logo-home"
              aria-label="Dhruv.AI home"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <img src={logoImg} alt="DHRUV.AI logo" />
              <span className="logo-text">
                <span className="dhruv">Dhruv</span>
                <span className="ai">.ai</span>
              </span>
            </a>
          ) : (
            <Link to="/" className="nav-logo logo-home" aria-label="Dhruv.AI home">
              <img src={logoImg} alt="DHRUV.AI logo" />
              <span className="logo-text">
                <span className="dhruv">dhruv</span>
                <span className="ai">.ai</span>
              </span>
            </Link>
          )}

          <button
            className="menu-btn"
            id="menuBtn"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
          </button>

          <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks" ref={navLinksRef}>
            {isHomePage &&
              navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-item${activeSection === item.href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            <Link
              to="/contact"
              className="nav-btn-demo"
              onClick={closeMenu}
            >
              Contact Us <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
