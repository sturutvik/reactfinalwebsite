import React from 'react'
import Banner2 from '../Benner2/Banner2'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Contactpage = () => {
  return (
   <>
   <Navbar/>
   <Banner2 titel="Contact" pagename="Contact"/>
   <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-web-color px-3">Contact Us</h6>
                <h1 className="mb-5" data-aos="fade-up" data-aos-delay="200">Contact For Any Query</h1>
            </div>
            <div className="row g-4" data-aos="fade-up" data-aos-delay="200" >
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-web-color" style={{width:"50px", height:"50px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-web-color">Office</h5>
                            <p className="mb-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-web-color" style={{width:"50px", height:"50px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-web-color">Mobile</h5>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-web-color" style={{width:"50px", height:"50px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-web-color">Email</h5>
                            <p className="mb-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" data-aos="fade-up" data-aos-delay="250">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117542.31532729114!2d72.36545404335936!3d22.979769200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ab0ba173819%3A0xea8cbd5ee0d32659!2sMeem%20Residency!5e0!3m2!1sen!2sin!4v1714644601205!5m2!1sen!2sin"  height="323" style={{border:"0"}}  loading="lazy" ></iframe>
                </div>
                <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height:"100px"}}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary bg-web-color w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Contactpage