// import React, { useContext } from 'react'
// import './CardTotal.css'
// import { ShopContext } from '../Context/ShopContext'

// const CardTotal = () => {
//     const {all_product, getTotalCardAmount ,cardItems, removeFromCard} = useContext(ShopContext)
//   return (
//     <div className='card-item'>
//         <div className='card-item-format-main'>
//       <p>Products</p>
//       <p>Title</p>
//       <p>Price</p>
//       <p>Quantity</p>
//       <p>Total</p>
//       <p>Remove</p>
//       </div>
//       <hr></hr>
//       {all_product.map((e) => {
//         if(cardItems[e.id] >0){
//             return <div>
//                 <div className='card-item-formate card-item-format-main'>
//                 <img src={e.image} className='card-icon-product-icon' alt=''/>
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button className='card-item-quantity'>{cardItems[e.id]}</button>
//                 <p>${e.new_price * cardItems[e.id]}</p>
//                 {/* <img className='card-item-remove-icon' src= {remove_icon} onClick={() => {removeFromCard(e.id)}} alt='' /> */}
//                 </div> 
//                 <hr></hr>
//       </div>
//         }
//         return null;
//       })}

//       <div className='card-item-down'>
//       <div  className='card-item-total'>
//       <h1>Card Totals</h1>
//       <div>
//         <div className='card-item-total-item'>
//         <p>Subtotal</p>
//         <p>${getTotalCardAmount()}</p>
//         </div>
//         <hr></hr>

//         <div className='card-item-total-item'>
//         <p>Shipping Fee</p>
//         <p>Free</p>
//         </div>
//         <hr></hr>
//         <div className='card-item-total-item'>
//         <h3>Total</h3>
//         <h3>${getTotalCardAmount()}</h3>
//         </div>
//         <button>PRODUCT TO CHEAKOUT</button>
//       </div>
//       <div className='card-item-promocode'>
//       <p>If you have a promo code, Enter it here</p>
//       <div className='card-item-promo-box'> 
//          <input type='text' placeholder='Enter your promo code'/>
//          <button >Submit</button>
//       </div>
//       </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default CardTotal
