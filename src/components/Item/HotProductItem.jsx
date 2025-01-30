import React from 'react'
import './ItemsCss/HotProduct.css'
import {  NavLink } from 'react-router-dom'
const HotProductItem = (props) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
    <div className='hotproduct-item d-flex flex-column align-items-center '>
        <img src={props.hot_product_image} alt=''/>
        <div className='hotproduct-infor'>
        <h1 className='fw-bold text-center fs-4'>{props.hot_product_name}</h1>
        <p className=' max-w-xs fs-6 text-center mt-4'>{props.hot_product_description}</p>
        </div>
        <div>
            <NavLink to='/asus'><button className='btn-hotproduct  bg-danger text-white text-center fs-sm'>LEARN MORE</button></NavLink>
        </div>
       
    </div>
    </div>
  )
}

export default HotProductItem
