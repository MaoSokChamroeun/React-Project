import React from 'react'
import './ItemsCss/Headphone.css'
import { Link, NavLink } from 'react-router-dom';
const HeadphoneItem = (props) => {
  return (
    <div className='headphone-item mt-5  '>
      <div className='headphone d-flex flex-column align-items-center '>
       <Link to={`/productdisplayheadphone/${props.headphone_id}`}><img onClick={window.scrollTo(0,0)} src={props.headphone_image} alt='' width={300} /></Link>
      </div>
      <h1 className='fs-5 mt-3  text-center fw-bold'>{props.headphone_name}</h1>
      <p className='headphone-description'>{props.headphone_description}</p>
      <button className='btn-learn-more headphone'>
          <NavLink to='/headphone' className='fw-bold'>ADD TO CARD</NavLink>
      </button>
    </div>
  )
}

export default HeadphoneItem;
