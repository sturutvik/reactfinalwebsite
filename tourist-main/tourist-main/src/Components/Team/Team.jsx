import React from 'react';
import './Team.css';
import Teamdeta from './Teamdeta';
import useMobile from '../UseMobile'; // Import the custom hook

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Team = () => {
    const isMobile = useMobile();

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Travel Guide</h6>
                        <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">Meet Our Guide</h1>
                    </div>
                    <div className="row g-4"  data-aos-delay="200">
                        {isMobile ? (
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                modules={[ Autoplay]}
                                loop={true}
                                speed={1500}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {Teamdeta.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="team-item">
                                            <div className="overflow-hidden">
                                                <img className="img-fluid" src={item.img} alt="" />
                                            </div>
                                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                                <a className="btn btn-square mx-1" href={item.flink}><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square mx-1" href={item.tlink}><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square mx-1" href={item.i}><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="text-center p-4">
                                                <h5 className="mb-0">{item.name}</h5>
                                                <small>{item.dtl}</small>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            Teamdeta.map((item, i) => (
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                                    <div className="team-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={item.img} alt="" />
                                        </div>
                                        <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                            <a className="btn btn-square mx-1" href={item.flink}><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href={item.tlink}><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href={item.i}><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <div className="text-center p-4">
                                            <h5 className="mb-0">{item.name}</h5>
                                            <small>{item.dtl}</small>
                                        </div>
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

export default Team;
