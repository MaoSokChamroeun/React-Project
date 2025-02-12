import React from 'react'
import breadcrupm_arrow from '../Assets/breadcrum_arrow.png'
import './Breadcrump.css'
import { NavLink } from 'react-router-dom'
const Breadcrump = () => {
  return (
    <div className='breadcrupm-main ms-1 my-2 ' >
        <NavLink to='/' className='text-dark ms-2 fs-6 fw-medium' >Home</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/asus' className='text-dark ms-2 fs-6 fw-medium' >ASUS</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/msi' className='text-dark ms-2 fs-6 fw-medium'>MSI</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/tuf' className='text-dark ms-2 fs-6 fw-medium' >TUF</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/monitorproduct' className='text-dark ms-2 fs-6 fw-medium'>MONITOR</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/keyboard' className='text-dark ms-2 fs-6 fw-medium' >KEYBOARD</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <NavLink to='/headphone' className='text-dark ms-2 fs-6 fw-medium'>HEADPHONE</NavLink>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />

    </div>
  )
}

export default Breadcrump
