import React from 'react'
import msi_banner_1 from '../Assets/msi_banner_1.jpeg'
import msi_banner_2 from '../Assets/msi_banner_2.jpeg'
import msi_banner_3 from '../Assets/msi_banner_3.jpeg'
import msi_banner_4 from '../Assets/msi_banner_4.jpeg'
import msi_banner_5 from '../Assets/msi_banner_5.jpeg'
import msi_banner_6 from '../Assets/msi_banner_6.jpeg'
import msi_banner_7 from '../Assets/msi_banner_7.jpeg'
import msi_banner_8 from '../Assets/msi_banner_8.jpeg'
import msi_banner_9 from '../Assets/msi_banner_9.jpeg'
import msi_banner_10 from '../Assets/msi_banner_10.jpeg'
import msi_banner_11 from '../Assets/msi_banner_11.jpeg'
import msi_banner_12 from '../Assets/msi_banner_12.jpeg'
import msi_banner_13 from '../Assets/msi_banner_13.jpeg'
import MsiItmes from '../Item/MsiItmes'

import msi_product from '../Assets/msi_product'
import Footer from '../Footer/Footer'
import DetailLogo from '../DetialLogo/DetailLogo'
import { Link, Outlet } from 'react-router-dom'
const Mis = () => {
  return (
    <div>
        <section className="container-fluid bg-dark ">
          <div className="banner d-flex justify-content-center">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="9"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="10"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="11"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="12"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="13"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={msi_banner_1} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_2} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_3} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_4} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_5} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_6} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_7} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_8} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_9} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_10} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_11} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_12} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={msi_banner_13} alt="" className="d-block w-100" />
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
      <h1 className='text-center fw-bold mt-5'>MSI PRODUCT</h1>
      <div class="container my-4">
    <div class="accordion" id="filterAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="seriesHeading">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#seriesCollapse" aria-expanded="true" aria-controls="seriesCollapse">
            SERIES
          </button>
        </h2>
        <div id="seriesCollapse" class="accordion-collapse collapse show" aria-labelledby="seriesHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="rogFlow" />
              <label class="form-check-label" for="rogFlow">
                ROG Flow
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="rogZephyrus" />
              <label class="form-check-label" for="rogZephyrus">
                ROG Zephyrus
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="rogStrix" />
              <label class="form-check-label" for="rogStrix">
                ROG Strix
              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div class="accordion-item">
        <h2 class="accordion-header" id="gpuHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gpuCollapse" aria-expanded="false" aria-controls="gpuCollapse">
            GPU
          </button>
        </h2>
        <div id="gpuCollapse" class="accordion-collapse collapse" aria-labelledby="gpuHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption1" />
              <label class="form-check-label" for="gpuOption1">
                GeForce RTX 40 Series
              </label>
            </div>
            <div className='gpu ms-4 mt-4'>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4090
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4080
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4070
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4060
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4050
              </label>
            </div>
            </div>
            <div className='gpu ms-3 mt-4'>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 3050
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4090
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4080
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4070
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4060
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              GeForce RTX 4050
              </label>
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="accordion-item">
        <h2 class="accordion-header" id="cpuHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpuCollapse" aria-expanded="false" aria-controls="cpuCollapse">
            CPU
          </button>
        </h2>
        <div id="cpuCollapse" class="accordion-collapse collapse" aria-labelledby="cpuHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption1"/>
              <label class="form-check-label" for="cpuOption1">
              AMD
              <sup>®</sup>
              Ryzen™ 7 6000 Series
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9
               <sup>®</sup>
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i7
               <sup>®</sup>
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              Ryzen™ 7 6000 Series
               <sup>®</sup>
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              Ryzen™ 7 6000 Series
               <sup>®</sup>
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9-13980HX
               <sup>®</sup>
              </label>
            </div>

            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i9-13900H
               <sup>®</sup>
              </label>
            </div>

            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              13th Gen intel <sup>®</sup> Core™ i7-13650HX
               <sup>®</sup>
              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div class="accordion-item">
        <h2 class="accordion-header" id="displaySizeHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displaySizeCollapse" aria-expanded="false" aria-controls="displaySizeCollapse">
            DISPLAY SIZE
          </button>
        </h2>
        <div id="displaySizeCollapse" class="accordion-collapse collapse" aria-labelledby="displaySizeHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption1" />
              <label class="form-check-label" for="displaySizeOption1">
                17.3"
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                16"
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                15"
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                14"
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                18"
              </label>
            </div>
          </div>
        </div>
      </div>


      
      <div class="accordion-item">
        <h2 class="accordion-header" id="displayTypeHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displayTypeCollapse" aria-expanded="false" aria-controls="displayTypeCollapse">
            DISPLAY TYPE
          </button>
        </h2>
        <div id="displayTypeCollapse" class="accordion-collapse collapse" aria-labelledby="displayTypeHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption1" />
              <label class="form-check-label" for="displayTypeOption1">
                144Hz
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                ROG Nebula HDR Display
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                ROG Nebula Display
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                240Hz
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                165Hz
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                120Hz
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                G-Sync™
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
               WQHD
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
               WQXGA
              </label>
            </div>
            
          </div>
        </div>
      </div>


      <div class="accordion-item">
        <h2 class="accordion-header" id="memoryHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#memoryCollapse" aria-expanded="false" aria-controls="memoryCollapse">
            MEMORY
          </button>
        </h2>
        <div id="memoryCollapse" class="accordion-collapse collapse" aria-labelledby="memoryHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption1" />
              <label class="form-check-label" for="memoryOption1">
                8GB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label class="form-check-label" for="memoryOption2">
                32GB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label class="form-check-label" for="memoryOption2">
                16GB
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="storagHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#storagCollapse" aria-expanded="false" aria-controls="storagCollapse">
            STORAGE
          </button>
        </h2>
        <div id="storagCollapse" class="accordion-collapse collapse" aria-labelledby="storagHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="storagOption1" />
              <label class="form-check-label" for="storagOption1">
                SSD
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                1TB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                2TB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                512GB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                16GB
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="connectivityHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#connectivityCollapse" aria-expanded="false" aria-controls="connectivityCollapse">
            CONNECTIVITY
          </button>
        </h2>
        <div id="connectivityCollapse" class="accordion-collapse collapse" aria-labelledby="connectivityHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="connectivityOption1" />
              <label class="form-check-label" for="connectivityOption1">
                Type-C USB 3.2 Gen 2
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label class="form-check-label" for="connectivityOption2">
              Type-A USB 3.2 Gen 2
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label class="form-check-label" for="connectivityOption2">
              Type-A USB 3.2 Gen 1
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="connectivityOption2" />
              <label class="form-check-label" for="connectivityOption2">
              HDMI
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="betteryHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#betteryCollapse" aria-expanded="false" aria-controls="betteryCollapse">
            BATTERY
          </button>
        </h2>
        <div id="betteryCollapse" class="accordion-collapse collapse" aria-labelledby="betteryHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="betteryOption1" />
              <label class="form-check-label" for="betteryOption1">
                90Wh
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="betteryOption2" />
              <label class="form-check-label" for="betteryOption2">
                76Wh
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="networkingHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#networkingCollapse" aria-expanded="false" aria-controls="networkingCollapse">
            NETWORKING
          </button>
        </h2>
        <div id="networkingCollapse" class="accordion-collapse collapse" aria-labelledby="networkingHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="networkingOption1" />
              <label class="form-check-label" for="networkingOption1">
                WIFI 6E (802.11 ax)
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="networkingOption2" />
              <label class="form-check-label" for="networkingOption2">
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
       
            {msi_product.map((item,i) =>{
            return <MsiItmes 
            key={i}
            msi_id = {item.msi_id}
            msi_name= {item.msi_name}
            msi_image = {item.msi_image}
            msi_description = {item.msi_description}
             />
          })}
           <Outlet />
        </div>
      </div>
    </div>
    <DetailLogo />
    <Footer />
    </div>
  )
}

export default Mis
