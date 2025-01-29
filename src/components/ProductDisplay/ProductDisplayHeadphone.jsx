import React from 'react'
import headphone_product from '../Assets/headphone_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProductDisplayHeadphone = () => {
    const {headphoneID} = useParams();
    const headphoneProduct = headphone_product.find((e) => e.headphone_id === Number(headphoneID));
    if(!headphoneProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div className='product-display-headphone'>
         <h1>HeadPhone</h1>
         <img src={headphoneProduct.headphone_image} alt=''/>   
    </div>
  )
}

export default ProductDisplayHeadphone
