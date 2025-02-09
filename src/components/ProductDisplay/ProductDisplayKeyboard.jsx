import React, { useContext } from 'react'
import keyboard_product from '../Assets/keyboard_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

import Footer from '../Footer/Footer'
import HotProduct from '../HotProduct/HotProduct'
const ProductDisplayKeyboard = () => {
  const { addToCard} = useContext(ShopContext);
    const { keyboardID}  = useParams();
    const keyboardProduct = keyboard_product.find((e) => e.keyboard_id === Number(keyboardID));
      const [mainImage , setMainImage] = useState(keyboardProduct.keyboard_front_image);
      const images = [
                keyboardProduct.keyboard_front_image,
                keyboardProduct.keyboard_detail_2,
                keyboardProduct.keyboard_detail_3,
                keyboardProduct.keyboard_detail_4,
              ];
              const changeImage = (src) => {
                if (src) setMainImage(src);
              };
    if(!keyboardProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{margin: '110px'}}>
    <div className='product-display-asus' >
    <div className="container py-5">
    <div className="gallery-container mx-auto">
      <div className="main-image-container mb-3">
        <img id="mainImage" onClick={window.scrollTo(0,0)} src= {mainImage} alt="Main Display" className="img-fluid rounded" />
      </div>
      <div className="thumbnail-container d-flex gap-4 mt-5">
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
      <h1 className='fs-2'> {keyboardProduct.keyboard_name}</h1>
            <p> {keyboardProduct.keyboard_description} </p>
     

      </div>
       
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${keyboardProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${keyboardProduct.old_price}
            </span></p> 
            </div>
            <button className="add-card" onClick={() => addToCard(keyboardProduct.keyboard_id)}>
            ADD TO CART
          </button>

    </div>
   
    </div>
    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayKeyboard
