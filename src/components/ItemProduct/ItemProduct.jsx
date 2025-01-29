import React from 'react'
import { Link } from 'react-router-dom'
const ItemProduct = (props) => {
  return (
    <div className='item-product'>
       <Link to = {`/productdisplay/${props.id}`}><img src= {props.image}  alt='' /></Link> 
       <h3>{props.name}</h3>
       <p>{props.new_price}</p>
       <p>{props.old_price}</p>
    </div>
  )
}

export default ItemProduct
