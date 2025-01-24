import React from 'react'
const Item = (props) => {
  return (
    <>
      <div className = "item  ">
          <img  src = {props.image} alt= '' width={90}/>
       </div>
    {/* <div className='text-center p-2'>
      <img src = {props.laptop_image} alt='' width={492}/>
      <h1 className='fw-bold text-center mt-2'>{props.laptop_name}</h1>
      <p className='text-center'>{props.laptop_description}</p>
      </div> */}
    </>
    
  )
}

export default Item
