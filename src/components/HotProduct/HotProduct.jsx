import React from 'react'
import HotProductItem from '../Item/HotProductItem'
import hot_product from '../Assets/hot_product'

import './HotProductMain.css'
const HotProduct = () => {
  return (
    <div>
      <h1 className='text-center fw-bold mt-5'>HOT PRODUCT</h1>
      <div className='mt-5 d-flex hotproduct-container justify-content-between align-items-center'>
       {hot_product.map((item,i)=>{
            return <HotProductItem 
            key={i}
            hot_product_image = {item.hot_product_image}
            hot_product_name = {item.hot_product_name}
            hot_product_description = {item.hot_product_description}
            />
        })}
      </div>
    </div>
  )
}

export default HotProduct
