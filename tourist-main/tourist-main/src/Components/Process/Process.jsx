import React from 'react';
import Processdeta from './Processdeta';
import useMobile from '../UseMobile'; // Import the custom hook

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Process = () => {
    const isMobile = useMobile();

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Process</h6>
                        <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center" data-aos-delay="200">
                        {isMobile ? (
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
                                modules={[Navigation, Autoplay]}
                                loop={true}
                                speed={1500}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {Processdeta.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="col-lg-4 col-sm-6 text-center pt-5 " data-wow-delay="0.1s">
                                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                                <div className="d-inline-flex align-items-center justify-content-center bg-web-color rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                                    <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                </div>
                                                <h5 className="mt-4">{item.titel}</h5>
                                                <hr className="w-25 mx-auto bg-web-color mb-1" />
                                                <hr className="w-50 mx-auto bg-web-color mt-0" />
                                                <p className="mb-0">{item.dtl}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* Navigation buttons */}
                                <div className="array-prev">Prev</div>
                                <div className="array-next">Next</div>
                            </Swiper>
                        ) : (
                            Processdeta.map((item, i) => (
                                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-web-color rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                        </div>
                                        <h5 className="mt-4">{item.titel}</h5>
                                        <hr className="w-25 mx-auto bg-web-color mb-1" />
                                        <hr className="w-50 mx-auto bg-web-color mt-0" />
                                        <p className="mb-0">{item.dtl}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Process;
