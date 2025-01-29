import React from 'react'
import './ItemsCss/Keyboard.css'
import { Link, NavLink } from 'react-router-dom'
const KeyboardItem = (props) => {
  return (
    <div className='keyboard d-flex flex-column align-items-center  mt-5'>
       <div className='keyboard-container '>
        <Link to= {`/productdisplaykeyboard/${props.keyboard_id}`}><img className='image-hover' onClick={window.scrollTo(0,0)} src={props.keyboard_back_image} alt='' width={100}/></Link>
        <Link to={`/productdisplaykeyboard/${props.keyboard_id}`}><img className='image-default' onClick={window.scrollTo(0,0)} src={props.keyboard_front_image} alt=''  width={100}/></Link>
       </div>
       <div className='text-keyboard'>
       <h1 className='fs-4 text-center fw-bold'>{props.keyboard_name}</h1>
       <p>{props.keyboard_description}</p>

       
       </div>
       <button className='btn-learn-more keyboard-btn'>
          <NavLink to='/keyboard' className='fw-500'>LEARN MORE</NavLink>
      </button>
    </div>
  )
}

export default KeyboardItem
