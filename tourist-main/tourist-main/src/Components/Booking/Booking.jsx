import React from 'react'
import './Booking.css'

const Booking = () => {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase" data-aos="fade-up">Booking</h6>
                                <h1 className="text-white mb-4" data-aos="fade-up">Online Booking</h1>
                                <p className="mb-4" data-aos="fade-up" data-aos-delay="100">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <p className="mb-4" data-aos="fade-up" data-aos-delay="150">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-outline-light text-web-color py-3 px-5 mt-2" href="">Read More</a>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4" data-aos="fade-up" data-aos-delay="200">Book A Tour</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name" className='text-web-color'>Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                                <label htmlFor="email" className='text-web-color'>Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime" className='text-web-color'>Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" id="select1">
                                                    <option value="1">Destination 1</option>
                                                    <option value="2">Destination 2</option>
                                                    <option value="3">Destination 3</option>
                                                </select>
                                                <label htmlFor="select1" className='text-web-color'>Destination</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                                <label htmlFor="message" className='text-web-color'>Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light text-web-color w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking