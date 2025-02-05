import React from 'react'
import monitor_product from '../Assets/monitor_product'
import Footer from '../Footer/Footer'
import MonitorItmes from '../Item/MonitorItems'
import DetailLogo from '../DetialLogo/DetailLogo'
import monitor_banner from '../Assets/monitor_banner_1.jpg'
const MonitorProduct = () => {
  return (
    <div className='monitor' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
        <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{margin: '110px'}}>
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>              
                  </div>        
                <div className="carousel-inner ">
                  <div className="carousel-item active" >
                    <img src={monitor_banner} alt="" className="d-block w-100" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
    <div className='product-container d-flex'> 
      <div className='choose-menu'>
      <h1 className='text-center fw-bold mt-2 fs-3'>MONITOR GAMING</h1>
      <div class="container my-4">
    <div class="accordion " id="filterAccordion">
      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="seriesHeading">
          <button class="accordion-button btn-menu-keyboard " type="button" data-bs-toggle="collapse" data-bs-target="#seriesCollapse" aria-expanded="true" aria-controls="seriesCollapse">
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

    
      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="gpuHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gpuCollapse" aria-expanded="false" aria-controls="gpuCollapse">
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

      
      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="cpuHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpuCollapse" aria-expanded="false" aria-controls="cpuCollapse">
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

    
      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="displaySizeHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displaySizeCollapse" aria-expanded="false" aria-controls="displaySizeCollapse">
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


      
      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="displayTypeHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displayTypeCollapse" aria-expanded="false" aria-controls="displayTypeCollapse">
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


      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="memoryHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#memoryCollapse" aria-expanded="false" aria-controls="memoryCollapse">
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

      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="storagHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#storagCollapse" aria-expanded="false" aria-controls="storagCollapse">
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

      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="connectivityHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#connectivityCollapse" aria-expanded="false" aria-controls="connectivityCollapse">
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

      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="betteryHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#betteryCollapse" aria-expanded="false" aria-controls="betteryCollapse">
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

      <div class="accordion-item p-2 menu-monitor">
        <h2 class="accordion-header" id="networkingHeading">
          <button class="accordion-button btn-menu-keyboard btn-menu-monitor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#networkingCollapse" aria-expanded="false" aria-controls="networkingCollapse">
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
          {monitor_product.map((item,i) =>{
            return <MonitorItmes 
            key={i}
            monitor_id = {item.monitor_id}
            monitor_image = {item.monitor_image}
            monitor_name = {item.monitor_name}
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

export default MonitorProduct;
