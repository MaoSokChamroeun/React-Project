import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'
import ChooseMeno from '../BoxMenoChoose/ChooseMeno'
const Menu = () => {
  return (
    <div className='menu-choose'>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1 className="text-center fw-bold mt-5  ">HELP ME CHOOSE</h1>
        <p className="text-center  fs-6">Tell us what you need. We help you choose the right products.</p>
        <ChooseMeno />
        <div className="container-sm mx-auto d-flex align-items-center justify-content-center mt-5">
            <button className="bg-danger btn-view" >
                <NavLink to="/asus" className='text-center text-center text-decoration-none text-white'> VIRW ALL PRODUCT
                </NavLink>
            </button>
        </div>
    </section>
    </div>
  )
}

export default Menu
