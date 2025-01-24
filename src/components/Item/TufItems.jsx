import React from 'react'
import './ItemsCss/TufItems.css'
import { Link } from 'react-router-dom'
const TufItems = (props) => {
  return (
    <div className='tuf-gaming'>
      <div className='tuf-item d-flex flex-column align-items-center'>
           <Link to='/tuf'><img onClick={window.scrollTo(0,0)} src={props.tuf_image} alt='' /></Link> 
            <h1 className='fw-bold fs-4 text-center'>{props.tuf_name}</h1>
      
      </div>
      <ul className='info-tuf'>
                <li>{props.tuf_window}</li>
                <li>{props.tuf_graphic_card}</li>
                <li>{props.tuf_cpu}</li>
                <li>{props.tuf_storage}</li>
            </ul>
            <button className='btn-learn-more tuf'>
          <a href='/tuf'>LEARN MORE</a>
      </button>
    </div>
  )
}

export default TufItems
