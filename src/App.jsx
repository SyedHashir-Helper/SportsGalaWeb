import React , { useState, useEffect } from 'react';

import Header from './Components/Header/Header'
import Hero from './Components/UI/Hero'
import Counter from './Components/UI/Counter'
import Services from './Components/UI/Services'
import About from './Components/UI/About'
import Portfolio from './Components/UI/Portfolio'
import Testimonial from './Components/UI/Testimonial'
import Footer from './Components/Footer/Footer'
import './App.css'
// import Projects from './Components/Projects/Projects';
import Affiliations from './Components/UI/Affiliations';
import Project from './Components/UI/Project';
import Experiences from './Components/UI/Experiences';
import Countdown from './Components/UI/Countdown';
import Particles from './Components/Background/Particles';

function App() {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  

  return (
    <>
      <Particles/>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Hero theme={theme} />
      <Counter/>
      {/* <Services/> */}
      {/* <Experiences/> */}
      {/* <About/> */}
      {/* <Portfolio/> */}
      <Testimonial/>
      {/* <Affiliations/> */}
      {/* <Project /> */}
      {/* <Projects theme={theme}/> */}
      <Footer/>
    </>
  )
}

export default App
