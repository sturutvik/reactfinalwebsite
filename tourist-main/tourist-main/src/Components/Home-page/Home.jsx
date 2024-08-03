import React from 'react'
import About from '../About-us/About';
import Booking from '../Booking/Booking';
import Destination from '../Destination/Destination';
import Footer from '../Footer/Footer';
import Hero from '../Herosection/Hero';
import Navbar from '../Navbar/Navbar';
import Services from '../Our-Services/Services';
import Packages from '../Packages/Packages';
import Process from '../Process/Process';
import Team from '../Team/Team'
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <>
     
      <Navbar/>
      <Hero />
      <About/>
      <Services/>
      <Destination/>
      <Packages/>
      <Booking/>
      <Process/>
      <Team/>
      <Testimonial/>
      <Footer/> 
   </>
  )
}

export default Home