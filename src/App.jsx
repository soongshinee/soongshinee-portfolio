import React from 'react'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Navbar from './layout/Navbar'
import './index.css'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
         <Hero />
         <Projects />
         <Experiences />
      </main>
    </div>
  )
}

export default App
