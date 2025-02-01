import React from 'react'
import monitor_product from '../Assets/monitor_product'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProductDisplayMonitor = () => {
    const { monitorID} = useParams();
    const monitorProduct = monitor_product.find((e) => e.monitor_id === Number(monitorID));
    if(!monitorProduct){
        return <h1 className="text-center fw-bold f3">Product Not Found :( <Link to = '/'>Back Home</Link></h1>
    }
  return (
    <div className='product-display-monitor' style={{margin: '110px'}}>
       <h1>Monitor</h1>
       <img src={monitorProduct.monitor_image} alt=''/>
    </div>
  )
}

export default ProductDisplayMonitor
