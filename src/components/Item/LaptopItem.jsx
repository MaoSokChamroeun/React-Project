import React from 'react'
import './ItemsCss/LaptopProduct.css'
const LaptopItem = (props) => {
  return (
    <div className='box-laptop'>
      <img  src = {props.laptop_image} alt='' width={492}/>
      <h1 className='fw-bold mt-2'>{props.laptop_name}</h1>
      <p className='mt-4'>{props.laptop_description}</p>
      <p><a href='/asus' className='text-decoration-none text-danger'>Learn More</a></p>
      </div>
  )
}

export default LaptopItem
