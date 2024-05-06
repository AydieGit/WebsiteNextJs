import AboutMe from '@/componenets/AboutMe'
import Routes from '@/componenets/Routes'
import Welcome from '@/componenets/Welcome'
import React from 'react'
import ParticlesComponent from '@/componenets/parti'

const page = () => {
  return (
    <div className='main-container'>
      <ParticlesComponent id='Particles'/>
      <Welcome/>
      <Routes/>
      <AboutMe/>


    </div>
  )
}

export default page