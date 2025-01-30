import React from 'react'
import headphone_product from '../Assets/headphone_product'
import HeadphoneItem from '../Item/HeadphoneItem'
import Footer from '../Footer/Footer'
import headphone_banner_1 from '../Assets/headphone_banner_1.webp'
import DetailLogo from '../DetialLogo/DetailLogo'
import HeadPhoneMenu from './HeadPhoneMenu'

const HeadPhone = () => {
  return (
    <div className='headphone'  data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
              <section className="container-fluid bg-dark ">
          <div className="banner d-flex justify-content-center">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={headphone_banner_1} alt="" className="d-block w-100" />
                  </div>
       
                  {/* <div className="carousel-item">
                    <img src={tuf_banner_5} alt="" className="d-block w-100" />
                  </div> */}
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
    
    <div className='product-container d-flex'> 
      <div className='choose-menu'>
      <h1 className='text-center fw-bold mt-5'>HEADPHONE PRODUCT</h1>
      <div class="container my-4">
          <HeadPhoneMenu />
  </div>

      </div>
      <div className="item-container">
        <div className="card-container d-flex flex-wrap gap-4 mx-auto align-items-center justify-content-center">
          {headphone_product.map((item,i) =>{
            return <HeadphoneItem 
            key={i}
            headphone_id = {item.headphone_id}
            headphone_image = {item.headphone_image}
            headphone_name = {item.headphone_name}
            headphone_description = {item.headphone_description}
             />
          })}
        </div>
      </div>
    </div>
    <DetailLogo />
    <Footer />
    </div>
  )
}

export default HeadPhone
