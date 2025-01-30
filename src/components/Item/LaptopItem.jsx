import React from 'react'
import './ItemsCss/LaptopProduct.css'
import { NavLink } from 'react-router-dom'
const LaptopItem = (props) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div className='box-laptop'>
      <img  src = {props.laptop_image} alt='' width={492}/>
      <h1 className='fw-bold mt-2'>{props.laptop_name}</h1>
      <p className='mt-4'>{props.laptop_description}</p>
      <p><NavLink to='/asus' className='text-decoration-none text-danger'>LEARN MORE</NavLink></p>
      </div>
      </div>
  )
}

export default LaptopItem
