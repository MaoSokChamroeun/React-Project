import React from 'react'
import banner_keyboard_1 from '../Assets/banner_keyboard_1.webp'
import banner_keyboard_2 from '../Assets/banner_keyboard_2.webp'
import banner_keyboard_3 from '../Assets/banner_keyboard_3.webp'
import banner_keyboard_4 from '../Assets/banner_keyboard_4.webp'

import Footer from '../Footer/Footer'
import keyboard_product from '../Assets/keyboard_product'
import KeyboardItem from '../Item/KeyboardItem'
import DetailLogo from '../DetialLogo/DetailLogo'
import './Css/Keyboard.css'
import Breadcrump from '../Breadcrump/Breadcrump'
const Keyboard = () => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <div className='breadcrump'>
        <Breadcrump />
      </div>
        <section className="container-fluid ">
          <div className="banner d-flex justify-content-center" style={{margin: '10px'}}>
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={banner_keyboard_4} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner_keyboard_2} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner_keyboard_3} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner_keyboard_1} alt="" className="d-block w-100" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
        </div>
    </section>
    
    <div className='product-container d-flex'> 
      <div className='choose-menu'>
      <h1 className='text-center fw-bold mt-5'>KEYBOARD PRODUCT</h1>
      <div className="container my-4">
    <div className="accordion" id="filterAccordion">
      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="seriesHeading">
          <button className="accordion-button btn-menuu-keyboard" type="button" data-bs-toggle="collapse" data-bs-target="#seriesCollapse" aria-expanded="true" aria-controls="seriesCollapse">
            SERIES
          </button>
        </h2>
        <div id="seriesCollapse" className="accordion-collapse collapse show" aria-labelledby="seriesHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check ">
              <input className="form-check-input" type="checkbox" value="" id="rogFlow" />
              <label className="form-check-label" htmlFor="rogFlow">
                ROG Flow
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="rogZephyrus" />
              <label className="form-check-label" htmlFor="rogZephyrus">
                ROG Zephyrus
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="rogStrix" />
              <label className="form-check-label" htmlFor="rogStrix">
                ROG Strix
              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="gpuHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gpuCollapse" aria-expanded="false" aria-controls="gpuCollapse">
            GPU
          </button>
        </h2>
        <div id="gpuCollapse" className="accordion-collapse collapse" aria-labelledby="gpuHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption1" />
              <label className="form-check-label" htmlFor="gpuOption1">
                GeForce RTX 40 Series
              </label>
            </div>
            <div className='gpu ms-4 mt-4'>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4090
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4080
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4070
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4060
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4050
              </label>
            </div>
            </div>
            <div className='gpu ms-3 mt-4'>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 3050
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4090
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4080
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4070
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4060
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label className="form-check-label" htmlFor="gpuOption2">
              GeForce RTX 4050
              </label>
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="cpuHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpuCollapse" aria-expanded="false" aria-controls="cpuCollapse">
            CPU
          </button>
        </h2>
        <div id="cpuCollapse" className="accordion-collapse collapse" aria-labelledby="cpuHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption1"/>
              <label className="form-check-label" htmlFor="cpuOption1">
              AMD
              <sup>®</sup>
              Ryzen™ 7 6000 Series
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9
               <sup>®</sup>
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i7
               <sup>®</sup>
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              Ryzen™ 7 6000 Series
               <sup>®</sup>
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              Ryzen™ 7 6000 Series
               <sup>®</sup>
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9-13980HX
               <sup>®</sup>
              </label>
            </div>

            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9-13900H
               <sup>®</sup>
              </label>
            </div>

            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label className="form-check-label" htmlFor="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i7-13650HX
               <sup>®</sup>
              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="displaySizeHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displaySizeCollapse" aria-expanded="false" aria-controls="displaySizeCollapse">
            DISPLAY SIZE
          </button>
        </h2>
        <div id="displaySizeCollapse" className="accordion-collapse collapse" aria-labelledby="displaySizeHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="displaySizeOption1" />
              <label className="form-check-label" htmlFor="displaySizeOption1">
                17.3"
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label className="form-check-label" htmlFor="displaySizeOption2">
                16"
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label className="form-check-label" htmlFor="displaySizeOption2">
                15"
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label className="form-check-label" htmlFor="displaySizeOption2">
                14"
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label className="form-check-label" htmlFor="displaySizeOption2">
                18"
              </label>
            </div>
          </div>
        </div>
      </div>


      
      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="displayTypeHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displayTypeCollapse" aria-expanded="false" aria-controls="displayTypeCollapse">
            DISPLAY TYPE
          </button>
        </h2>
        <div id="displayTypeCollapse" className="accordion-collapse collapse" aria-labelledby="displayTypeHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption1" />
              <label className="form-check-label" htmlFor="displayTypeOption1">
                144Hz
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                ROG Nebula HDR Display
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                ROG Nebula Display
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                240Hz
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                165Hz
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                120Hz
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
                G-Sync™
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
               WQHD
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label className="form-check-label" htmlFor="displayTypeOption2">
               WQXGA
              </label>
            </div>
            
          </div>
        </div>
      </div>


      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="memoryHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#memoryCollapse" aria-expanded="false" aria-controls="memoryCollapse">
            MEMORY
          </button>
        </h2>
        <div id="memoryCollapse" className="accordion-collapse collapse" aria-labelledby="memoryHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check ">
              <input className="form-check-input" type="checkbox" value="" id="memoryOption1" />
              <label className="form-check-label" htmlFor="memoryOption1">
                8GB
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label className="form-check-label" htmlFor="memoryOption2">
                32GB
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label className="form-check-label" htmlFor="memoryOption2">
                16GB
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="storagHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#storagCollapse" aria-expanded="false" aria-controls="storagCollapse">
            STORAGE
          </button>
        </h2>
        <div id="storagCollapse" className="accordion-collapse collapse" aria-labelledby="storagHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="storagOption1" />
              <label className="form-check-label" htmlFor="storagOption1">
                SSD
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label className="form-check-label" htmlFor="storagOption2">
                1TB
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label className="form-check-label" htmlFor="storagOption2">
                2TB
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label className="form-check-label" htmlFor="storagOption2">
                512GB
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label className="form-check-label" htmlFor="storagOption2">
                16GB
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="connectivityHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#connectivityCollapse" aria-expanded="false" aria-controls="connectivityCollapse">
            CONNECTIVITY
          </button>
        </h2>
        <div id="connectivityCollapse" className="accordion-collapse collapse" aria-labelledby="connectivityHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check ">
              <input className="form-check-input" type="checkbox" value="" id="connectivityOption1" />
              <label className="form-check-label" htmlFor="connectivityOption1">
                Type-C USB 3.2 Gen 2
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label className="form-check-label" htmlFor="connectivityOption2">
              Type-A USB 3.2 Gen 2
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label className="form-check-label" htmlFor="connectivityOption2">
              Type-A USB 3.2 Gen 1
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label className="form-check-label" htmlFor="connectivityOption2">
              HDMI
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="betteryHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#betteryCollapse" aria-expanded="false" aria-controls="betteryCollapse">
            BATTERY
          </button>
        </h2>
        <div id="betteryCollapse" className="accordion-collapse collapse" aria-labelledby="betteryHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="betteryOption1" />
              <label className="form-check-label" htmlFor="betteryOption1">
                90Wh
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="betteryOption2" />
              <label className="form-check-label" htmlFor="betteryOption2">
                76Wh
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item menu-keyboard">
        <h2 className="accordion-header" id="networkingHeading">
          <button className="accordion-button btn-menuu-keyboard collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#networkingCollapse" aria-expanded="false" aria-controls="networkingCollapse">
            NETWORKING
          </button>
        </h2>
        <div id="networkingCollapse" className="accordion-collapse collapse" aria-labelledby="networkingHeading" data-bs-parent="#filterAccordion">
          <div className="accordion-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="networkingOption1" />
              <label className="form-check-label" htmlFor="networkingOption1">
                WIFI 6E (802.11 ax)
              </label>
            </div>
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="networkingOption2" />
              <label className="form-check-label" htmlFor="networkingOption2">
                WIFI 7 (802.11be)
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

      </div>
      <div className="item-container">
        <div className="card-container d-flex flex-wrap gap-4 mx-auto align-items-center justify-content-center">
          {keyboard_product.map((item,i) =>{
            return <KeyboardItem 
            key={i}
            keyboard_id = {item.keyboard_id}
            keyboard_front_image = {item.keyboard_front_image}
            keyboard_back_image = {item.keyboard_back_image}
            keyboard_name = {item.keyboard_name}
            keyboard_description = {item.keyboard_description}
             />
          })}
        </div>
      </div>
    </div>
    <DetailLogo />
    <Footer />
    </div>
  )
}

export default Keyboard
