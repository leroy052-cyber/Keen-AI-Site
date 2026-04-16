import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Audience from './components/Audience'
import WhatWeBuild from './components/WhatWeBuild'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div>
      <Analytics />
      <ScrollProgress />
      <Hero />
      <main id="main-content">
        <Audience />
        <WhatWeBuild />
        <Services />
        <WhyUs />
        <About />
      </main>
      <Contact />
    </div>
  )
}
