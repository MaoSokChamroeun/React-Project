import React from 'react'
import './ItemsCss/AsusItems.css'
import { Link, NavLink } from 'react-router-dom'

const AsusItems = (props) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className='asus-item'>
    	  <div className='infor-asus d-flex flex-column align-items-center'>
         <Link to={`/productdisplayasus/${props.asus_id}`}><img onClick={window.scrollTo(0,0)} src={props.asus_image} alt='' width={300} /></Link>
           <h1 className='fw-bold fs-4'>{props.asus_name}</h1>
      <ul>
        <li>{props.window_info}</li>
        <li>{props.graphic_card}</li>
        <li>{props.cpu}</li>
        <li>{props.storage}</li>
        <li>{props.display}</li>
      </ul>

      <button className='btn-learn-more'>
          <NavLink to='/asus' className='fw-500'>LEARN MORE</NavLink>
      </button>
      </div>
      
    </div>
    </div>
  )
}

export default AsusItems
