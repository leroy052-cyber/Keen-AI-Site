import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import StickyText from './components/StickyText'
import Services from './components/Services'
import Audience from './components/Audience'
import About from './components/About'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="noise-overlay">
      <Analytics />
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <main id="main-content">
        <StickyText />
        <Services />
        <Audience />
        <About />
      </main>
      <Contact />
    </div>
  )
}
