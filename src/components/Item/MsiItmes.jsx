import React from 'react'
import './ItemsCss/MsiItems.css'
import { Link, NavLink } from 'react-router-dom'
const MsiItmes = (props) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className='infor-msi d-flex flex-column align-items-center'>
          <Link to= {`/productdisplaymsi/${props.msi_id}`}><img onClick={window.scrollTo(0,0)} src={props.msi_image} alt='' width={280} /></Link>
          <h1 className='fw-bold fs-4 text-center'>{props.msi_name}</h1>
         <p className='msi-description'>{props.msi_description}</p>
         <button className='btn-learn-more msi-btn'>
          <NavLink to='/msi' className='fw-500'>LEARN MORE</NavLink>
      </button>
      </div>
    </div>
  )
}

export default MsiItmes
