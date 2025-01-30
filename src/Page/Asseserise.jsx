import React from 'react'
import Footer from '../components/Footer/Footer'
import './css/Asseserise.css'
import rog_bag from '../components/Assets/ROG-bag.jpg'
import tuf_keyboard from '../components/Assets/tuf_keyboard.jpg'
import rog_mouse from '../components/Assets/asus_mouse.jpg'
import cooling_pend from '../components/Assets/cooling_pend.jpg'
import laptop_stand from '../components/Assets/laptop_stand.jpg'
import rog_charge from '../components/Assets/rog_charge.jpeg'
const Asseserise = () => {
  return (
    <div className='bg-dark-subtle' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <section class="asseserise-hero-section">
  <div class="container">
    <h1>Top Laptop Accessories</h1>
    <p>Enhance your laptop experience with our wide range of accessories.</p>
  </div>
</section>


<section class="accessories-section py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Laptop Accessories</h2>
      <p class="text-muted">Browse through our collection of essential accessories for your laptop.</p>
    </div>
    <div class="row">
 
      <div class="col-md-4">
        <div class="product-card">
          <img src={rog_bag} alt="Laptop Bag" class="img-fluid mb-3"/>
          <h4>Laptop Bags</h4>
          <p class="text-muted">Keep your laptop safe and stylish with our range of bags.</p>
          <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="product-card">
          <img src={rog_charge} alt="Laptop Charger" class="img-fluid mb-3"/>
          <h4>Laptop Chargers</h4>
          <p class="text-muted">Never run out of battery with our reliable laptop chargers.</p>
          <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
  
      <div class="col-md-4 mb-4">
        <div class="product-card">
          <img src={rog_mouse} alt="Laptop Mouse" class="img-fluid mb-3"/>
          <h4>Laptop Mouse</h4>
          <p class="text-muted">Browse our collection of precision mice for smooth navigation.</p>
           <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
     
      <div class="col-md-4">
        <div class="product-card">
          <img src={tuf_keyboard} alt="Laptop Keyboard" class="img-fluid mb-3"/>
          <h4>Laptop Keyboards</h4>
          <p class="text-muted">Upgrade your typing experience with our durable laptop keyboards.</p>
           <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
     
      <div class="col-md-4 ">
        <div class="product-card">
          <img src={laptop_stand} alt="Laptop Stand" class="img-fluid mb-3"/>
          <h4>Laptop Stands</h4>
          <p class="text-muted">Improve ergonomics with adjustable laptop stands.</p>
           <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
     
      <div class="col-md-4">
        <div class="product-card">
          <img src={cooling_pend} alt="Cooling Pad" class="img-fluid mb-3"/>
          <h4>Laptop Cooling Pads</h4>
          <p class="text-muted">Prevent overheating and keep your laptop cool with cooling pads.</p>
           <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>View Details</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="cta-section bg-dark">
  <div class="container ">
    <h2>Shop Our Full Range of Accessories Today!</h2>
    <p class="lead mt-3">
      Don't miss out on enhancing your laptop experience. Get the best accessories for your device.
    </p>
    <button className='btn-detial'>
             <a href="/" className='text-white text-decoration-none'>Contact Us</a>
          </button>
  </div>
</section>
      <Footer />
    </div>
  )
}

export default Asseserise
