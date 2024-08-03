import React from 'react'
import "./Banner2.css"

const Banner2 = (props) => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div className="container-fluid bg-web-color py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white fw-semi-bold animated slideInDown" data-aos="fade-up" data-aos-delay="100">{props.titel}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item "><a href="#" className='text-web-color text-decoration-none'>Home /</a></li>
                    <li className="breadcrumb-item "><a href="#" className='text-web-color text-decoration-none'>Pages /</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page" data-aos="fade-up" data-aos-delay="150">{props.pagename}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner2