import React from 'react'
import HeroSection from './components/HeroSection'
import {UseProductContext} from './context/productcontext'

function About() {

  const { myName } = UseProductContext();
  
  return (
    <>
      {myName}
      <HeroSection name={ 'E-Store'} />
    </>
    
  )
}

export default About