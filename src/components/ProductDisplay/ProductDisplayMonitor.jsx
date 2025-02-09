import React from 'react'
import monitor_product from '../Assets/monitor_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import HotProduct from '../HotProduct/HotProduct'
import Footer from '../Footer/Footer'
import { useContext } from 'react'

import { ShopContext } from '../Context/ShopContext'
const ProductDisplayMonitor = () => {
  const { addToCard } = useContext(ShopContext);  // Destructure addToCard from ShopContext
    const { monitorID} = useParams();
    const monitorProduct = monitor_product.find((e) => e.monitor_id === Number(monitorID));
      const [mainImage , setMainImage] = useState(monitorProduct.monitor_image);
      const imagesMonitor = [
                monitorProduct.monitor_image,
                monitorProduct.monitor_detail_2,
                monitorProduct.monitor_detail_3,
                monitorProduct.monitor_detail_4,
              ];
              const changeImage = (src) => {
                if (src) setMainImage(src);
              };
    if(!monitorProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{margin: '110px'}}>
    <div className='product-display-asus' >
    <div class="container py-5">
    <div class="gallery-container mx-auto">
      <div class="main-image-container mb-3">
        <img id="mainImage" onClick={window.scrollTo(0,0)} src= {mainImage} alt="Main Display" class="img-fluid rounded" />
      </div>
      <div class="thumbnail-container d-flex gap-4 mt-5">
      {imagesMonitor.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Thumbnail ${i + 1}`}
                  className="img-thumbnail"
                  onClick={() => changeImage(image)}
                 
                />
              ))}
         
      </div>
    </div>
  </div>
      <div className='display-right'>
      <div className='asus-infor'>
      <h1> {monitorProduct.monitor_name}</h1>
     

      </div>
       
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${monitorProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${monitorProduct.old_price}
            </span></p> 
            </div>
            <button className="add-card" onClick={() => addToCard(monitorProduct.monitor_id)}>
            ADD TO CART
          </button>

    </div>
   
    </div>
    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayMonitor
