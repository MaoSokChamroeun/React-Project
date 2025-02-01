import React from 'react'
import tuf_product from '../Assets/tuf_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProductDisplayTuf = () => {
  const {tufID} = useParams();
  const tufProduct = tuf_product.find((e) => e.tuf_id === Number(tufID));
  if(!tufProduct){
    return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
  }
  return (
    <div className='product-display-tuf' style={{margin: '110px'}}>
      <h1>Tuf Gaming</h1>
      <img src={tufProduct.tuf_image} alt=' ' />
    </div>
  )
}

export default ProductDisplayTuf
