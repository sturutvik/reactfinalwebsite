import React from 'react'
import './Packages.css'
import Packagesdeta from './Packagesdeta'



const Packages = () => {
    return (
        <>

            {/* Package Start  */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Packages</h6>
                        <h1 className="mb-5" data-aos="fade-up">Awesome Packages</h1>
                    </div>

                    <div className="row g-4 justify-content-center" data-aos="fade-up">

                        {Packagesdeta.map((item, i) => {
                            return (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                                    <div className="package-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={item.img} alt="" />
                                        </div>
                                        <div className="d-flex border-bottom">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-web-color me-2"></i>{item.location}</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-web-color me-2"></i>{item.days}</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-web-color me-2"></i>{item.Person}</small>
                                        </div>
                                        <div className="text-center p-4">
                                            <h3 className="mb-0">{item.prise}</h3>
                                            <div className="mb-3">
                                                <small className="fa fa-star text-web-color"></small>
                                                <small className="fa fa-star text-web-color"></small>
                                                <small className="fa fa-star text-web-color"></small>
                                                <small className="fa fa-star text-web-color"></small>
                                                <small className="fa fa-star text-web-color"></small>
                                            </div>
                                            <p>{item.dtl}</p>
                                            <div className="d-flex justify-content-center mb-2">
                                                <a href="#" className="btn btn-sm bg-web-color  px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>{item.readbtn}</a>
                                                <a href="#" className="btn btn-sm bg-web-color  px-3" style={{ borderRadius: "0 30px 30px 0" }} >{item.bookingbtn}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> )
                        })}


                    </div>
                </div>
            </div>
            {/* Package End  */}
        </>
    )
}

export default Packages