import React from 'react';
import './Services.css';
import Servicesdeta from './Carddeta';
import useMobile from '../UseMobile'; // Import the custom hook

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Services = () => {
    const isMobile = useMobile();

    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Services</h6>
                        <h1 className="mb-5" data-aos-delay="50" data-aos="zoom-in-up">Our Services</h1>
                    </div>
                    <div className="row g-4" >
                        {isMobile ? (
                            <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            speed={1500}
                            autoplay={{
                                delay:1000,
                                disableOnInteraction: false,
                            }}
                            >
                                {Servicesdeta.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="service-item rounded pt-3">
                                            <div className="p-4">
                                                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                <h5>{item.titel}</h5>
                                                <p>{item.dtl}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            Servicesdeta.map((item, index) => (
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="service-item rounded pt-3">
                                        <div className="p-4">
                                            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                            <h5>{item.titel}</h5>
                                            <p>{item.dtl}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    );
}

export default Services;
