

import AsusItems from '../Item/AsusItems'
import asus_product from '../Assets/asus_product';
import asus_banner_1 from '../Assets/asus_banner_1.webp'
import asus_banner_2 from '../Assets/asus_banner_2.webp'
import asus_banner_3 from '../Assets/asus_banner_3.webp'
import asus_banner_4 from '../Assets/asus_banner_4.webp'
import Footer from '../Footer/Footer'
import './Css/Asus.css'
import DetailLogo from '../DetialLogo/DetailLogo'
import AsusMenu from './AsusMenu';
import Breadcrump from '../Breadcrump/Breadcrump';
const Asus = () => {

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='asus-container'>
      <Breadcrump/>
         <section className="container-fluid  ">
          <div className="banner d-flex justify-content-center">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={asus_banner_1} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={asus_banner_2} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={asus_banner_3} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={asus_banner_4} alt="" className="d-block w-100" />
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
    
    <div className='product-container d-flex'> 
      <div className='choose-menu'>
      <h1 className='text-center fw-bold mt-5'>ASUS PRODUCT</h1>
      <div className="container my-4">
        <AsusMenu />
    </div>

      </div>
      <div className="item-container">
        <div className="card-container d-flex flex-wrap gap-4 mx-auto align-items-center justify-content-center">
          {asus_product.map((item,i) =>{
            return <AsusItems 
            key={i}
            asus_id = {item.asus_id}
            asus_name= {item.asus_name}
            asus_image = {item.asus_image}
            window_info = {item.window_info}
            graphic_card = {item.graphic_card}
            cpu = {item.cpu}
            storage = {item.storage}
            display = {item.display}
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

export default Asus
