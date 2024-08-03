import React from 'react'
import './Footer.css'
import fimg1 from '../../img/package-1.jpg'
import fimg2 from '../../img/package-2.jpg'
import fimg3 from '../../img/package-3.jpg'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" data-aos="fade-up" data-aos-duration="700">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Privacy Policy</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">FAQs & Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg1} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={fimg1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <textarea className="form-control border w-100 py-3 ps-4 pe-5" type="text" placeholder="text" />
                            </div>
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <button type="button" className="btn btn-primary bg-web-color w-100 py-2 position-absolute top-0 end-0 mt-2">send</button>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                {/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                                Designed By <a className="border-bottom" href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADge2vMByrGSfvX03cWYHOyAh2PlLNCG2K8&keywords=mariyam%20bloch&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9bd7b399-dd5a-42e1-a4eb-55629c4b1567&sid=R6Z&spellCorrectionEnabled=false">Mariyam Bloch</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer