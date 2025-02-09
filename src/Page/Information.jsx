import React from 'react'
import Footer from '../components/Footer/Footer'
import './css/Information.css'
import laptop_asus from '../components/Assets/laptop-1.jpg'
import top_brand from '../components/Assets/asus-logo.png'
import { TbShieldStar } from "react-icons/tb";
import { GiUpgrade } from "react-icons/gi";
const Information = () => {
  return (
    <div className=''  data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <section className="information-hero-section">
  <div className="container">
    <h1>Welcome to MCR COMPUTER-Seller Laptops</h1>
    <p>Your trusted partner for high-performance laptops, expert guidance, and top-tier customer service.</p>
   <button  className="btn-explor-products ">
     <a href="/service" className='text-decoration-none'>Explore Our Products</a>
   </button>
  </div>
</section>


<section className="features-section">
  <div className="container ">
    <div className="text-center mb-5">
      <h2>Why Choose Us?</h2>
      <p className="">Discover what sets us apart in the world of laptops.</p>
    </div>
    <div className="row">
      <div className="col-md-6 mb-4 img-features ">
        <h3>Wide Selection of Laptops</h3>
        <p className="">
          From lightweight ultrabooks for professionals to powerful gaming laptops, we offer a range of devices to suit every need.
        </p>
        <img src={laptop_asus} alt="Laptops" className="img-fluid"/>
      </div>
      <div className="col-md-6 mb-4 img-features">
        <h3>Expert Support and Advice</h3>
        <p className="">
          Not sure which laptop is right for you? Our team of experts is here to guide you every step of the way.
        </p>
        <img src={laptop_asus} alt="Support" className="img-fluid"/>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 text-center">
        <img src={top_brand} alt="Brands" className="mb-3" />
        <h4>Top Brands</h4>
        <p className="">We partner with leading brands like Dell, HP, Lenovo, Asus, and more.</p>
      </div>
      <div className="col-md-4 text-center">
        {/* <img src="https://via.placeholder.com/100" alt="Customizations" className="mb-3"/> */}
        <GiUpgrade className="icon-upgrade"/>
        <h4>Custom Upgrades</h4>
        <p className="">Customize your laptop with upgraded processors, memory, and storage options.</p>
      </div>
      <div className="col-md-4 text-center">
        {/* <img src="https://via.placeholder.com/100" alt="Warranty" className="mb-3" /> */}
        <TbShieldStar className="icon-warranty" />
        <h4>Warranty & Support</h4>
        <p className="">Every purchase is backed by warranties and reliable after-sales support.</p>
      </div>
    </div>
  </div>
</section>

<section className="cta-section bg-dark">
  <div className="container">
    <h2>Find the Perfect Laptop Today!</h2>
    <p className="lead mt-3">
      Browse our extensive collection or speak with an expert to get personalized recommendations.
    </p>
    <a href="/contact" className="btn btn-light btn-lg mt-3">Contact Us</a>
  </div>
</section>
      <Footer />
    </div>
  )
}

export default Information
