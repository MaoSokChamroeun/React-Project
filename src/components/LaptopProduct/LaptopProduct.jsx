import React from 'react'
import laptop_product from '../Assets/laptop_product'

import LaptopItem from '../Item/LaptopItem'
import './laptopStyle.css'
const LaptopProduct = () => {
  return (
    <div className='mt-5' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <h1 className='text-center fw-bold'>LAPTOP</h1>
      <div className='w-75  mx-auto'>
        <p className='text-center fs-xs text-black'>ROG was founded to create the world’s best gaming devices. Our premium devices elevate gaming experiences with best-in-class displays, top-tier graphics, and innovative cooling solutions.</p>
      </div>
      <div className='d-flex align-items-center w-100 justify-content-between  text-center main-box'>
      {laptop_product.map((item,i)=>{
        return <LaptopItem 
            key ={i}
            laptop_id = {item.laptop_id}
            laptop_image = {item.laptop_image}
            laptop_name = {item.laptop_name}
            laptop_description = {item.laptop_description}
        />
      })}
      </div>
    </div>
  )
}

export default LaptopProduct
