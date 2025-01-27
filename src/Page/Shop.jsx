import React from 'react'
import Hero from '../components/HeroSection/Hero'
import OurProduct from '../components/OurProduct/OurProduct'
import Related from '../components/Related/Related'
import LaptopProduct from '../components/LaptopProduct/LaptopProduct'
import Menu from '../components/MenuChoose/Menu'
import HotProduct from '../components/HotProduct/HotProduct'
import Footer from '../components/Footer/Footer'
import DetailLogo from '../components/DetialLogo/DetailLogo'
const Shop = () => {
  return (
    <div >
      <Hero /> 
      <OurProduct />
      <Related />
      <LaptopProduct />
      <Menu />
      <HotProduct />
      <DetailLogo />
      <Footer />
    </div>
  )
}

export default Shop
