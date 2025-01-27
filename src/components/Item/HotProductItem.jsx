import React from 'react'
import './ItemsCss/HotProduct.css'
import {  NavLink } from 'react-router-dom'
const HotProductItem = (props) => {
  return (
    <div className='hotproduct-item d-flex flex-column align-items-center '>
        <img src={props.hot_product_image} alt=''/>
        <h1 className='fw-bold text-center fs-4'>{props.hot_product_name}</h1>
        <p className=' max-w-xs fs-6 text-center mt-4'>{props.hot_product_description}
        <div>
            <NavLink to='/asus'><button className='p-3 bg-danger text-white hotproduct-btn fs-sm'>Learn More</button></NavLink>
        </div></p>
       
    </div>
  )
}

export default HotProductItem
