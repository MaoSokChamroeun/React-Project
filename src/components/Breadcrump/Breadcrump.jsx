import React from 'react'
import breadcrupm_arrow from '../Assets/breadcrum_arrow.png'
const Breadcrump = () => {
  return (
    <div className='breadcrupm ms-1 my-2' >
        <a className='text-dark ms-2 fs-6 fw-medium' href='/'>Home</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/asus'>ASUS</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/msi'>MSI</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/tuf'>TUF</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/monitorproduct'>MONITOR</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/keyboard'>KEYBOARD</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />
        <a className='text-dark ms-2 fs-6 fw-medium' href='/headphone'>HEADPHONE</a>
        <img className='ms-2' src={breadcrupm_arrow} alt='' />

    </div>
  )
}

export default Breadcrump
