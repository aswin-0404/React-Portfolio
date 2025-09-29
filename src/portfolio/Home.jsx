import React from 'react'
import About from './About'
import Navbar from './Nav'
import Skills from './Skill'
import Projects from './project/project'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home
