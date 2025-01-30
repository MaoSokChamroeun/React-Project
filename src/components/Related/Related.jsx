import React from 'react'
import related_image from  '../Assets/81lypVvUPcL._AC_UF894_1000_QL80_-removebg-preview.png'
import card_shopping from '../Assets/card-shoping.png'
import './Ralated.css'

const Related = () => {

  return (
    <div className='mt-5 '>
     <h1 class="fw-bolder text-center">Related Product</h1>
    <div className='bg-secondary p-2 mt-5'>
     
        <div className="related-container  mt-5 container-fluid d-flex align-items-center justify-content-center my-9">
        <div data-aos="fade-right">
            <div className="related-left  max-w-md flex-column d-flex ">
                <p ><span  className="fw-bolder text-white">ASUS ROG </span>GAMING LAPTOP</p>
                <p className="fs-5 fw-bold">ROG, or Republic of Gamers, is a company that makes gaming products for enthusiasts and gamers. ROG's products include laptops, monitors, phones, and more. The company's mission is to create innovative products that offer exceptional gaming experiences.</p>
                <div className="button-product d-flex gap-4">
                 <button className="btn-buy bg-white text-black rounded-5 fs-6 fw-bolder d-flex align-items-center justify-content-center gap-1">BUY NOW
                 <img src={card_shopping} width={20} alt='' />
                 </button>
                <button className="btn-info rounded-5 fs-6 fw-bolder">INFOR MORE!</button>
                </div>
                
            </div>
            </div>
            <div data-aos="fade-left">
            <div className="related-right">
                <img src={related_image} alt=' '/>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Related
