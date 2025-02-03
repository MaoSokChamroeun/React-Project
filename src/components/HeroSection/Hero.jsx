import React from 'react'
import banner_1 from '../Assets/banner-1.jpg'
import banner_2 from '../Assets/banner-2.jpg'
import banner_3 from '../Assets/banner-3.webp'
import './Hero.css'
const Hero = () => {
  return (
    <div className='container-fluid main-hero' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
        <section class="container-fluid">
          <div class="banner d-flex justify-content-center ">
              <div id="demo" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>        
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={banner_1} alt="" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={banner_2} alt="" class="d-block w-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={banner_3} alt="" class="d-block w-100" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
        </div>
    </section>


    </div>

    
  )
}

export default Hero
