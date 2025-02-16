import React from 'react'
import error_image from '../Assets/404-error.png'
import { Link } from 'react-router-dom'
const ErrorBounddary = () => {
  return (
    <div className='error'>
        <img src={error_image} alt='' />
        <h2>Product Not Found :(</h2>
        <Link to="/">Go Back to Home</Link>
    </div>
  )
}

export default ErrorBounddary
