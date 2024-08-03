import React from 'react'
import Navbar from '../Navbar/Navbar'
import Services from '../Our-Services/Services'
import Footer from '../Footer/Footer'
import Testimonial from '../Testimonial/Testimonial'
import Banner2 from '../Benner2/Banner2'

const Servicespage = () => {
  return (
    <>
    <Navbar/>
    <Banner2 titel="Services" pagename="services"/>
    <Services/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Servicespage