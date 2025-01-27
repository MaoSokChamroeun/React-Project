import React from 'react'
import './ItemsCss/MsiItems.css'
import { Link, NavLink } from 'react-router-dom'
const MsiItmes = (props) => {
  return (
    <div>
        <div className='infor-asus d-flex flex-column align-items-center'>
          <Link to= '/msi'><img onClick={window.scrollTo(0,0)} src={props.msi_image} alt='' width={300} /></Link>
      <h1 className='fw-bold fs-4'>{props.msi_name}</h1>
         <p className='msi-description'>{props.msi_description}</p>
      <button className='btn-learn-more'>
          <NavLink to='/msi' className='fw-bold'>ADD TO CARD</NavLink>
      </button>
      </div>
    </div>
  )
}

export default MsiItmes
