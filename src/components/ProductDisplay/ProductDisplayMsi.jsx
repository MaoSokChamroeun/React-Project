import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import msi_product from "../Assets/msi_product";
import Footer from "../Footer/Footer";
import HotProduct from "../HotProduct/HotProduct";
import ErrorBounddary from "../ErrorBoundary/ErrorBounddary";

const ProductDisplayMsi = () => {
    const {msiID} = useParams()
    const { addToCard} = useContext(ShopContext)
    const msiProduct = msi_product.find((e) => e.msi_id === Number(msiID));
    const [msiMain , setMsiMain] = useState(null);
    useEffect(() =>{
      if(msiProduct){
        setMsiMain(msiProduct.msi_image);
        window.scrollTo(0,0);
      }
    },[msiProduct])
    if(!msiProduct){
          return (
            <div className="not-found-container" style={{ textAlign: 'center', margin: '100px' }}>
             <ErrorBounddary />
            </div>
          );
        
    }
    const msiImages = [
    msiProduct.msi_image,
    msiProduct.msi_detail_2,
    msiProduct.msi_detail_3,
    msiProduct.msi_detail_4,
    ]
    const changeImage = (src) => {
    if (src) setMsiMain(src);
  };
    if(!msiProduct){
    return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div style={{margin: '110px'}}>
    <div className='product-display-asus'>
    <div className="container py-5">
    <div className="gallery-container mx-auto">
      <div className="main-image-container mb-3">
        <img id="mainImage" onClick={window.scrollTo(0,0)} src= {msiMain} alt="Main Display" className="img-fluid rounded" />
      </div>
      <div className="thumbnail-container d-flex gap-4 mt-5">
      {msiImages.map((image, i) => (
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
      <h1> {msiProduct.msi_name}</h1>
      <p> {msiProduct.msi_description}</p>
            <p> {msiProduct.msi_display} </p>
            
      </div>
            <div className='about-price'>
            <p className='new-price'> 
              <span>
              ${msiProduct.new_price}
              </span> </p>
            <p className='old-price'>
            <span>
            ${msiProduct.old_price}
            </span></p> 
            </div>
            <button className='add-card' onClick={() => addToCard(msiProduct.msi_id)}>ADD TO CARD</button>
    </div>
    </div>

    <HotProduct />
    <Footer/>
    </div>
  )
}

export default ProductDisplayMsi
