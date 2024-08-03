import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";
import logoicon from '../../img/travel-logo.gif'


const Navbar = () => {
    return (
        <>
            <div className="container-fluid position-sticky p-0 z-2">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0  sticky-top" data-aos="fade-down">
                    <a href="" className="navbar-brand p-0  ">
                        {/* <h1 className="text-web-color m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1> */}
                        <h1 className="text-web-color flex items-center justify-center "> <img className="logo mt-2" src={logoicon} alt=""/>Tourist</h1>
                        
                        {/* <img src="img/logo.png" alt="Logo">  */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/services" className="nav-item nav-link">Services</Link>
                            <Link to="/packages" className="nav-item nav-link">Packages</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0">
                                    <Link to="" className="dropdown-item">Booking</Link>
                                    <Link to="" className="dropdown-item">Destination</Link>
                                    <Link to="" className="dropdown-item">Travel Guides</Link>
                                    <Link to="" className="dropdown-item">Testimonial</Link>
                                    <Link to="" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <a href="" className="btn btn-primary bg-web-color rounded-pill py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                    </div>
                    <div className="modal" id="exampleModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" >Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </nav>
            </div>
            <Outlet />
        </>

    )
}

export default Navbar