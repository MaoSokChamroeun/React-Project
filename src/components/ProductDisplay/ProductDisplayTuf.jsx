import React, { useContext, useEffect } from 'react'
import tuf_product from '../Assets/tuf_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import HotProduct from '../HotProduct/HotProduct'
import { ShopContext } from '../Context/ShopContext'
const ProductDisplayTuf = () => {
  const {addToCard} = useContext(ShopContext)
  const {tufID} = useParams();
  const tufProduct = tuf_product.find((e) => e.tuf_id === Number(tufID));
    const [tufMain , setTufMain] = useState(null);
    useEffect(() =>{
      if(tufProduct){
        setTufMain(tufProduct.tuf_image);
      }
    },[tufProduct])
    if(!tufProduct){
          return (
                  <div className="not-found-container" style={{ textAlign: 'center', margin: '100px' }}>
                    <h2>Product Not Found :(</h2>
                    <Link to="/">Go Back to Home</Link>
                  </div>
                );
    }
     const tufImages = [
      tufProduct.tuf_image,
      tufProduct.tuf_detail_2,
      tufProduct.tuf_detail_3,
      tufProduct.tuf_detail_4,
     ]
     const changeImage = (src) => {
      if (src) setTufMain(src);
    };
  if(!tufProduct){
    return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
  }
  return (
    <div style={{margin: '110px'}}>
    <div className='product-display-asus'>
    <div className="container py-5">
    <div className="gallery-container mx-auto">
      <div className="main-image-container mb-3">
        <img id="mainImage" onClick={window.scrollTo(0,0)} src= {tufMain} alt="Main Display" className="img-fluid rounded" />
      </div>
      <div className="thumbnail-container d-flex gap-4 mt-5">
      {tufImages.map((image, i) => (
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
      <h1> {tufProduct.tuf_name}</h1>
      <p> {tufProduct.tuf_window}</p>
      <p> {tufProduct.tuf_graphic_card} </p>
      <p> {tufProduct.tuf_storage} </p>
      
      </div>
       
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${tufProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${tufProduct.old_price}
            </span></p> 
            </div>
            <button className='add-card' onClick={() => addToCard(tufProduct.tuf_id)}>ADD TO CARD</button>
    </div>
   
    </div>

    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayTuf
