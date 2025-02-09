
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CardTotal.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import Footer from '../Footer/Footer';
const CardTotal = () => {
 
  const { cardItems, all_product, removeFromCard, getTotalCardAmount} = useContext(ShopContext);
  
  return (
    <div className="card-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="card-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr></hr>
      {all_product?.map((product) => {
        const quantity = cardItems[product.id] || 0;
        if (quantity > 0) {
          return (
            <div key={product.id}>
              <div className="card-item-formate card-item-format-main">
           
                <img src ={product.image} alt={product.name} className="card-icon-product-icon" />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="card-item-quantity">{quantity}</button>
                <p>${product.new_price * quantity}</p>
                <img className="card-item-remove-icon" src={remove_icon} onClick={() => { removeFromCard(product.id); }} alt="remove" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })} 
      <div className="card-item-down">
        <div className="card-item-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="card-item-total-item">
              <p>Subtotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="card-item-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="card-item-total-item">
              <h3>Total</h3>
              <h3>${getTotalCardAmount()}</h3>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="card-item-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="card-item-promo-box">
              <input type="text" placeholder="Enter your promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CardTotal;

