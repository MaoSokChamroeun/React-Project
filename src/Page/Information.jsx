import React from 'react'
import Footer from '../components/Footer/Footer'
import './css/Information.css'
import laptop_asus from '../components/Assets/laptop-1.jpg'
import top_brand from '../components/Assets/asus-logo.png'
const Information = () => {
  return (
    <div className=''  data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <section class="information-hero-section">
  <div class="container">
    <h1>Welcome to MCR COMPUTER-Seller Laptops</h1>
    <p>Your trusted partner for high-performance laptops, expert guidance, and top-tier customer service.</p>
   <button  class="btn-explor-products ">
     <a href="/service" className='text-decoration-none'>Explore Our Products</a>
   </button>
  </div>
</section>


<section class="features-section">
  <div class="container ">
    <div class="text-center mb-5">
      <h2>Why Choose Us?</h2>
      <p class="">Discover what sets us apart in the world of laptops.</p>
    </div>
    <div class="row">
      <div class="col-md-6 mb-4 img-features ">
        <h3>Wide Selection of Laptops</h3>
        <p class="">
          From lightweight ultrabooks for professionals to powerful gaming laptops, we offer a range of devices to suit every need.
        </p>
        <img src={laptop_asus} alt="Laptops" class="img-fluid"/>
      </div>
      <div class="col-md-6 mb-4 img-features">
        <h3>Expert Support and Advice</h3>
        <p class="">
          Not sure which laptop is right for you? Our team of experts is here to guide you every step of the way.
        </p>
        <img src={laptop_asus} alt="Support" class="img-fluid"/>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-4 text-center">
        <img src={top_brand} alt="Brands" class="mb-3"/>
        <h4>Top Brands</h4>
        <p class="">We partner with leading brands like Dell, HP, Lenovo, Asus, and more.</p>
      </div>
      <div class="col-md-4 text-center">
        <img src="https://via.placeholder.com/100" alt="Customizations" class="mb-3"/>
        <h4>Custom Upgrades</h4>
        <p class="">Customize your laptop with upgraded processors, memory, and storage options.</p>
      </div>
      <div class="col-md-4 text-center">
        <img src="https://via.placeholder.com/100" alt="Warranty" class="mb-3" />
        <h4>Warranty & Support</h4>
        <p class="">Every purchase is backed by warranties and reliable after-sales support.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-section bg-dark">
  <div class="container">
    <h2>Find the Perfect Laptop Today!</h2>
    <p class="lead mt-3">
      Browse our extensive collection or speak with an expert to get personalized recommendations.
    </p>
    <a href="/contact" class="btn btn-light btn-lg mt-3">Contact Us</a>
  </div>
</section>
      <Footer />
    </div>
  )
}

export default Information
