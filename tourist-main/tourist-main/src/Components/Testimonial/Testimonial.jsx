import React from 'react'
import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonialimg1 from '../../img/testimonial-1.jpg';
import testimonialimg2 from '../../img/testimonial-2.jpg';
import testimonialimg3 from '../../img/testimonial-3.jpg';
import testimonialimg4 from '../../img/testimonial-4.jpg';



const Testimonial = () => {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Testimonial</h6>
                        <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">Our Clients Say!!!</h1>
                    </div>
                </div>
            </div>


            <OwlCarousel
                className="owl-theme"
                
                margin={0}
                loop={true}
                autoplay={true}
                autoplayTimeout={1400}
                autoplayHoverPause={true}
                // nav={true}
                // dots={true}
                responsive={{
                    0: { items: 1 },
                    700: { items: 2 },
                    900: { items: 3 },
                    1000: { items: 4 }
                }}
            >
                {/* Your carousel items go here */}


                {/* {Testimonialdeta.map((item, i) => {
                    return (
                        <div className="item" key={i}>
                            <div className="owl-carousel testimonial-carousel position-relative">
                                <div className="testimonial-item bg-white text-center border p-4">
                                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={item.img} style={{ width: "80px", height: "80px" }} />
                                    <h5 className="mb-0">{item.pname}</h5>
                                    <p>{item.dtl}</p>
                                    <p className="mb-0">{item.dtl}</p>
                                </div>
                            </div>
                        </div >
                    )
                })} */}




                <div className="item mx-3" data-aos="fade-up" data-aos-delay="150">
                    <div className="testimonial-item bg-white text-center border p-4 ">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonialimg1} style={{ width: "80px", height: "80px" }} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>

                <div className="item mx-3" data-aos="fade-up" data-aos-delay="200">
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonialimg2} style={{ width: "80px", height: "80px" }} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="item mx-3" data-aos="fade-up" data-aos-delay="250">
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonialimg3} style={{ width: "80px", height: "80px" }} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="item mx-3" data-aos="fade-up" data-aos-delay="300">
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={testimonialimg4} style={{ width: "80px", height: "80px" }} />
                        <h5 className="mb-0">John Doe</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>



            </OwlCarousel>

        </>


    )
}

export default Testimonial