import React from 'react'
import Navbar from '../Navbar/Navbar'
import Packages from '../Packages/Packages'
import Footer from '../Footer/Footer'
import Booking from '../Booking/Booking'
import Process from '../Process/Process'
import Banner2 from '../Benner2/Banner2'

const Packagespage = () => {
  return (
    <>
    <Navbar/>
    <Banner2 titel="Packages" pagename="Packages"/>
    <Packages/>
    <Booking/>
    <Process/>
    <Footer/>
    </>
  )
}

export default Packagespage