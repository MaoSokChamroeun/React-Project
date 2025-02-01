import React, { useContext } from 'react'
import asus_product from '../Assets/asus_product'
import { useParams } from 'react-router-dom'
import './ProductDisplayCss/ProductDisplay.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import HotProduct from '../HotProduct/HotProduct'
import { useState } from 'react'
const ProductDisplayAsus = () => {
    const {asusID} = useParams();
    const asusProduct = asus_product.find((e) => e.asus_id === Number(asusID));

     const [mainImage , setMainImage] = useState(asusProduct.asus_image);
        const images = [
            asusProduct.asus_image,
            asusProduct.asus_detail_2,
            asusProduct.asus_detail_3,
            asusProduct.asus_detail_4,
          ];
          const changeImage = (src) => {
            if (src) setMainImage(src);
          };
    if(!asusProduct){
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
      {images.map((image, i) => (
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
      <h1> {asusProduct.asus_name}</h1>
            <p> {asusProduct.window_info} </p>
            <p> {asusProduct.graphic_card}</p>
            <p> {asusProduct.cpu}</p>
            <p> {asusProduct.storage}</p>   
            <p> {asusProduct.display}</p>   

      </div>
       
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${asusProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${asusProduct.old_price}
            </span></p> 
            </div>
            <button className='add-card'>ADD TO CARD</button>
    </div>
   
    </div>
    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayAsus
