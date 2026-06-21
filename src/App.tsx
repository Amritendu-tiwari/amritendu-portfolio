import MathCanvas from './components/ui/MathCanvas'
import FloatingMascot from './components/ui/FloatingMascot'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import BeyondCode from './components/sections/BeyondCode'
import AiChat from './components/sections/AiChat'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream" style={{ position: 'relative' }}>

      {/* Fixed background canvas — behind everything, full page */}
      <MathCanvas />

      {/* Floating draggable mascot */}
      <FloatingMascot />

      {/* All content sits above canvas via z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <BeyondCode />
          <AiChat />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
