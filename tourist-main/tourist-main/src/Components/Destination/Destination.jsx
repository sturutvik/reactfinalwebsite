import React from 'react';
import './Destination.css';
import Destinationdeta from './Destinationdeta';
import useMobile from '../UseMobile'; // Import the custom hook

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Destination = () => {
    const isMobile = useMobile();

    return (
        <>
            {/* Destination Start */}
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Destination</h6>
                        <h1 className="mb-5" data-aos="fade-down">Popular Destination</h1>
                    </div>
                    <div className="row g-3" data-aos-delay="200">
                        {isMobile ? (
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                modules={[Autoplay]}
                               
                                loop={true}
                                speed={1500}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {Destinationdeta.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                            <a className="position-relative d-block overflow-hidden" href="">
                                                <img className="img-fluid" src={item.img} alt="" />
                                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">{item.off}</div>
                                                <div className="bg-white text-web-color fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{item.cityname}</div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            Destinationdeta.map((item, i) => (
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.1s" key={i}>
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src={item.img} alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">{item.off}</div>
                                        <div className="bg-white text-web-color fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{item.cityname}</div>
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* Destination End */}
        </>
    );
}

export default Destination;
