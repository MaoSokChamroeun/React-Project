import React from 'react'
import assus_logo from '../Assets/asus-logo.png'
import mis_logo from  '../Assets/msi-logo.png'
import tuf_logo from '../Assets/tuf_logo.png'
import monitor from '../Assets/monitor.png'
import keyboad from '../Assets/keybaod.png'
import headphone from '../Assets/headphone.png'
import { Link } from 'react-router-dom'
import './OurProduct.css'

const OurProduct = () => {

  return (
    <div className='container-fluid mt-5 our-product'  data-aos="fade-up" data-aos-anchor-placement="top-bottom"> 
      <h1 className='text-center fw-bold  '>Our Product  </h1>  
      <div className=' mx-auto container d-flex align-items-center justify-content-between p-2  rounded-4 mt-5 detail-logo-brand'>
          <Link to= '/asus'><img className='image-ourproduct' onClick={window.scrollTo(0,0)} src={assus_logo} alt='' width={90} /></Link>
          <Link to = '/msi'><img className='image-ourproduct' src={mis_logo} alt='' width={90} /></Link>
          <Link to='/tuf'><img className='image-ourproduct' src={tuf_logo} alt='' width={90} /></Link>
          <Link to='/monitorproduct'><img className='image-ourproduct' src={monitor} alt='' width={90} /></Link>
          <Link to= '/keyboard'><img className='image-ourproduct' src={keyboad} alt='' width={90} /></Link>
          <Link to='/headphone'><img className='image-ourproduct' src={headphone} alt='' width={90} /></Link>
      </div>
    </div>
  )
}

export default OurProduct
