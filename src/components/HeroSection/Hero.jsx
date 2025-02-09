import React from 'react'
import banner_1 from '../Assets/banner-1.jpg'
import banner_2 from '../Assets/banner-2.jpg'
import banner_3 from '../Assets/banner-3.webp'
import './Hero.css'
const Hero = () => {
  return (
    <div className='container-fluid main-hero' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
        <section className="container-fluid">
          <div className="banner d-flex justify-content-center ">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={banner_1} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner_2} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner_3} alt="" className="d-block w-100" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
        </div>
    </section>


    </div>

    
  )
}

export default Hero
