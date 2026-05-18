import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import VisionSection from '../components/VisionSection'
import ProcessSection from '../components/ProcessSection'
import TechnologySection from '../components/TechnologySection'
import JourneySection from '../components/JourneySection'
import ContactStrip from '../components/ContactStrip'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ProcessSection />
        <TechnologySection />
        <JourneySection />
        <ContactStrip />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
