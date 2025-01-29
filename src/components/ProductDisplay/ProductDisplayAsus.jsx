import React from 'react'
import asus_product from '../Assets/asus_product'
import { useParams } from 'react-router-dom'
import './ProductDisplayCss/ProductDisplay.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const ProductDisplayAsus = () => {
    const {asusID} = useParams();
    const asusProduct = asus_product.find((e) => e.asus_id === Number(asusID));
    if(!asusProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
        
    }
  return (
    <div>
    <div className='product-display-asus'>
    <div className='display-left-top'>
        <img onClick={window.scrollTo(0,0)} src={asusProduct.asus_image} alt='' width={500}/>
        <div className='display-left-buttom'>
        <div><img src={asusProduct.asus_detail_1} alt='' width={150}/></div>
        <div><img src={asusProduct.asus_detail_2} alt='' width={150}/></div>
        <div><img src={asusProduct.asus_detail_3} alt='' width={150}/></div>
        <div><img src={asusProduct.asus_detail_4} alt='' width={150}/></div>
    
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
    <Footer/>
    </div>
  )
}

export default ProductDisplayAsus
