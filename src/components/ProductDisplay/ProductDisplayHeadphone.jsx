import React, { useContext, useEffect } from 'react'
import headphone_product from '../Assets/headphone_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Footer from '../Footer/Footer'
import HotProduct from '../HotProduct/HotProduct'

import ErrorBounddary from '../ErrorBoundary/ErrorBounddary'
const ProductDisplayHeadphone = () => {
  const { addToCard} = useContext(ShopContext)
    const {headphoneID} = useParams();
    const headphoneProduct = headphone_product.find((e) => e.headphone_id === Number(headphoneID));
     const [mainImage , setMainImage] = useState(null);
     useEffect(() =>{
      if(headphoneProduct){
        setMainImage(headphoneProduct.headphone_image);
        window.scrollTo(0,0);
      }
     },[headphoneProduct])
       if (!headphoneProduct) {
         return (
           <div className="not-found-container" style={{ textAlign: 'center', margin: '100px' }}>
             <ErrorBounddary />
           </div>
         );
       }
      const images = [
                headphoneProduct.headphone_image,
                headphoneProduct.headphone_image,
                headphoneProduct.headphone_image,
                headphoneProduct.headphone_image,
              ];
              const changeImage = (src) => {
                if (src) setMainImage(src);
              };
    if(!headphoneProduct){
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
      <h1> {headphoneProduct.headphone_name}</h1>
            <p> {headphoneProduct.headphone_description} </p>
         

      </div>
       
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${headphoneProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${headphoneProduct.old_price}
            </span></p> 
            </div>
            <button className="add-card" onClick={() => addToCard(headphoneProduct.headphone_id)}>
            ADD TO CART
          </button>

    </div>
   
    </div>
    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayHeadphone
