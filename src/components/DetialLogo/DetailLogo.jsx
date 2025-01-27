import React from 'react'
import asus from '../Assets/asus-logo.png'
import msi from '../Assets/msi-logo.png'
import tuf from '../Assets/tuf_logo.png'
import monitor from '../Assets/monitor.png'
import keyboard from '../Assets/keybaod.png'
import headphone from '../Assets/headphone.png'
import './DetailLogo.css'
import { Link } from 'react-router-dom'
const DetailLogo = () => {
  return (
    <div className='detail_logo mt-top'>
        <h1 className='text-center fw-bold'>TOP GAMING BRAND</h1>
        <div className='detial-container mt-5 '>
        <marquee>
            <Link to= '/asus'><img src={asus} alt='' width={120} /></Link>
            <Link to= '/msi'><img src={msi} alt='' width={120} /></Link>  
            <Link to= '/tuf'><img src={tuf} alt='' width={120} /></Link> 
            <Link to= '/monitor'><img src={monitor} alt='' width={120} /></Link> 
            <Link to= '/keyboard'><img src={keyboard} alt='' width={120} /></Link> 
            <Link to= '/headphone'><img src={headphone} alt='' width={120} /></Link> 
            </marquee>
        </div>
    </div>
  )
}

export default DetailLogo
