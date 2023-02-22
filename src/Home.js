import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import Trusted from './components/Trusted';
import Contact from './Contact';
function Home() {
  return (
    <>
      <HeroSection name={'E-commrece'} />
      <Services />
      <Trusted />
      <Contact />
    </>
  )
}



export default Home;