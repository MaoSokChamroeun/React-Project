import React from 'react'
import headphone_product from '../Assets/headphone_product'
import HeadphoneItem from '../Item/HeadphoneItem'
import Footer from '../Footer/Footer'
import headphone_banner_1 from '../Assets/headphone_banner_1.webp'
import DetailLogo from '../DetialLogo/DetailLogo'

const HeadPhone = () => {
  return (
    <div className='headphone'>
              <section className="container-fluid bg-dark ">
          <div className="banner d-flex justify-content-center">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                  </div>        
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={headphone_banner_1} alt="" className="d-block w-100" />
                  </div>
       
                  {/* <div className="carousel-item">
                    <img src={tuf_banner_5} alt="" className="d-block w-100" />
                  </div> */}
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
      <h1 className='text-center fw-bold mt-5'>HEADPHONE PRODUCT</h1>
      <div class="container my-4">
    <div class="accordion" id="filterAccordion">
      <div class="accordion-item p-2  p-2">
        <h2 class="accordion-header" id="seriesHeading">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#seriesCollapse" aria-expanded="true" aria-controls="seriesCollapse">
          ROG Online Store Availability
          </button>
        </h2>
        <div id="seriesCollapse" class="accordion-collapse collapse show " aria-labelledby="seriesHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body ">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="rogFlow" />
              <label class="form-check-label" for="rogFlow">
              In Stock on eShop

              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="rogZephyrus" />
              <label class="form-check-label" for="rogZephyrus">
              Temporarily Out of Stock on eShop

              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="rogStrix" />
              <label class="form-check-label" for="rogStrix">
              All Products

              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div class="accordion-item p-2 p-2">
        <h2 class="accordion-header" id="gpuHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gpuCollapse" aria-expanded="false" aria-controls="gpuCollapse">
            PRICE
          </button>
        </h2>
        <div id="gpuCollapse" class="accordion-collapse collapse" aria-labelledby="gpuHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption1" />
              <label class="form-check-label" for="gpuOption1">
              ~ $111.00

              </label>
            </div>
            <div className='gpu ms-4 mt-4'>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              $112.00 ~ $143.00

              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              $144.00 ~ $175.00

              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              $176.00 ~ $207.00

              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="gpuOption2" />
              <label class="form-check-label" for="gpuOption2">
              $208.00 ~ up

              </label>
            </div>

            </div>
          </div>
        </div>
      </div>

      
      <div class="accordion-item p-2">
        <h2 class="accordion-header" id="cpuHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpuCollapse" aria-expanded="false" aria-controls="cpuCollapse">
          PRODUCT TYPE
          </button>
        </h2>
        <div id="cpuCollapse" class="accordion-collapse collapse" aria-labelledby="cpuHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption1"/>
              <label class="form-check-label" for="cpuOption1">             
                3.5mm Headsets 
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              USB HeadSets
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="cpuOption2"/>
              <label class="form-check-label" for="cpuOption2">
              Wireless HeadSets
              </label>
            </div>
          </div>
        </div>
      </div>

    
      <div class="accordion-item p-2">
        <h2 class="accordion-header" id="displaySizeHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displaySizeCollapse" aria-expanded="false" aria-controls="displaySizeCollapse">
          CONNECTIVITY
          </button>
        </h2>
        <div id="displaySizeCollapse" class="accordion-collapse collapse" aria-labelledby="displaySizeHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption1" />
              <label class="form-check-label" for="displaySizeOption1">
                USB-C
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                Bluetooth
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
              <label class="form-check-label" for="displaySizeOption2">
                2.4GHz Wireless
              </label>
            </div>
          </div>
        </div>
      </div>


      
      <div class="accordion-item p-2">
        <h2 class="accordion-header" id="displayTypeHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displayTypeCollapse" aria-expanded="false" aria-controls="displayTypeCollapse">
          COMPATIBILITY
          </button>
        </h2>
        <div id="displayTypeCollapse" class="accordion-collapse collapse" aria-labelledby="displayTypeHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption1" />
              <label class="form-check-label" for="displayTypeOption1">
                Desktops
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                Laptops
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                Mac
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                PS4
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                Xbox One
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                Nitendo Switche
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
                Mobile Phone
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
              <label class="form-check-label" for="displayTypeOption2">
               Xbox
              </label>
            </div>
           
            
          </div>
        </div>
      </div>


      <div class="accordion-item p-2">
        <h2 class="accordion-header" id="memoryHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#memoryCollapse" aria-expanded="false" aria-controls="memoryCollapse">
            COLOR
          </button>
        </h2>
        <div id="memoryCollapse" class="accordion-collapse collapse" aria-labelledby="memoryHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption1" />
              <label class="form-check-label" for="memoryOption1">
                Black
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label class="form-check-label" for="memoryOption2">
                White
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="memoryOption2" />
              <label class="form-check-label" for="memoryOption2">
                Special Edition
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item p-2">
        <h2 class="accordion-header" id="storagHeading">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#storagCollapse" aria-expanded="false" aria-controls="storagCollapse">
          LIGHTING
          </button>
        </h2>
        <div id="storagCollapse" class="accordion-collapse collapse" aria-labelledby="storagHeading" data-bs-parent="#filterAccordion">
          <div class="accordion-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="storagOption1" />
              <label class="form-check-label" for="storagOption1">
                RGB
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                Single-colored LED
              </label>
            </div>
            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" value="" id="storagOption2" />
              <label class="form-check-label" for="storagOption2">
                N/A
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
          {headphone_product.map((item,i) =>{
            return <HeadphoneItem 
            key={i}
            headphone_id = {item.headphone_id}
            headphone_image = {item.headphone_image}
            headphone_name = {item.headphone_name}
            headphone_description = {item.headphone_description}
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

export default HeadPhone
