import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import msi_product from "../Assets/msi_product";
import Footer from "../Footer/Footer";
const ProductDisplayMsi = () => {
    const {msiID} = useParams()
   const msiProduct = msi_product.find((e) => e.msi_id === Number(msiID)); 
   if(!msiProduct){
    return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
   }
  return (
    <div>
    <div className='product-display-asus'>
    <div className='display-left-top'>
        <img onClick={window.scrollTo(0,0)} src={msiProduct.msi_image} alt='' width={500}/>
        <div className='display-left-buttom'>
        <div><img src={msiProduct.msi_detail_1} alt='' width={150}/></div>
        <div><img src={msiProduct.msi_detail_2} alt='' width={150}/></div>
        <div><img src={msiProduct.msi_detail_3} alt='' width={150}/></div>
        <div><img src={msiProduct.msi_detail_4} alt='' width={150}/></div>
    
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
            <button className='add-card'>ADD TO CARD</button>
    </div>
   
    </div>
    <Footer/>
    </div>
  )
}

export default ProductDisplayMsi
