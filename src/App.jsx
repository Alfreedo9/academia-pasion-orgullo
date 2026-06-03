import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Benefits from "./components/sections/Benefits"
import About from "./components/sections/About"
import Levels from "./components/sections/Levels"
import Teachers from "./components/sections/Teachers"
import Locations from "./components/sections/Locations"
import Gallery from "./components/sections/Gallery"
import Testimonials from "./components/sections/Testimonials"
import Achievements from "./components/sections/Achievements"
import FAQ from "./components/sections/FAQ"
import CTA from "./components/sections/CTA"
import Footer from "./components/layout/Footer"
import Schedules from "./components/sections/Schedules"

import WhatsAppButton from "./components/ui/WhatsAppButton"
import CursorGlow from "./components/ui/CursorGlow"

import { motion, useScroll } from "framer-motion"

function App() {

  const { scrollYProgress } = useScroll()

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B14] text-white">

      {/* Scroll Progress */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-1
          origin-left
          z-[999]
          bg-[#B7FF3C]
        "
        style={{
          scaleX: scrollYProgress,
        }}
      />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <Benefits />

      <About />

      <Levels />

      <Schedules />

      <Teachers />

      <Locations />

      <Gallery />

      <Testimonials />

      <Achievements />

      <FAQ />

      {/* Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

    </main>
  )
}

export default App