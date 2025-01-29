import React from 'react'
import keyboard_product from '../Assets/keyboard_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProductDisplayKeyboard = () => {
    const { keyboardID}  = useParams();
    const keyboardProduct = keyboard_product.find((e) => e.keyboard_id === Number(keyboardID));
    if(!keyboardProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div>
       <h1>Keyboard</h1>
       <img src={keyboardProduct.keyboard_front_image} alt=''/>
    </div>
  )
}

export default ProductDisplayKeyboard
