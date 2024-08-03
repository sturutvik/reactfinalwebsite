import React from 'react'
import About from '../About-us/About'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Team from '../Team/Team'
import Banner2 from '../Benner2/Banner2'

const Aboutpage = () => {
  return (
    <>
    <Navbar/>
    <Banner2 titel="About" pagename="About"/>
    <About/>
    <Team/>
    <Footer/>
    </>
  )
}

export default Aboutpage