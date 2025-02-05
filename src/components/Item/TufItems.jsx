import React from 'react'
import './ItemsCss/TufItems.css'
import { Link, NavLink } from 'react-router-dom'
const TufItems = (props) => {
  return (
    <div className='tuf-gaming tuf-box-list' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className='tuf-item d-flex flex-column align-items-center'>
           <Link to={`/productdisplaytuf/${props.tuf_id}`}><img onClick={window.scrollTo(0,0)} src={props.tuf_image} alt='' /></Link> 
            <h1 className='fw-bold fs-4 text-center'>{props.tuf_name}</h1>
      
      </div>
      <ul className='info-tuf'>
                <li>{props.tuf_window}</li>
                <li>{props.tuf_graphic_card}</li>
                <li>{props.tuf_cpu}</li>
                <li>{props.tuf_storage}</li>
            </ul>
            <button className='btn-learn-more tuf'>
          <NavLink to='/tuf' className='fw-500'>LEARN MORE</NavLink>
      </button>
    </div>
  )
}

export default TufItems
