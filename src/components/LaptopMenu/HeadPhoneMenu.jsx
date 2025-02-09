import React from 'react'

const HeadPhoneMenu = () => {
  return (
    <div className="accordion" id="filterAccordion">
    <div className="accordion-item p-2 menu-headphone">
      <h2 className="accordion-header" id="seriesHeading">
        <button className="accordion-button btn-menu-headphone" type="button" data-bs-toggle="collapse" data-bs-target="#seriesCollapse" aria-expanded="true" aria-controls="seriesCollapse">
        ROG Online Store Availability
        </button>
      </h2>
      <div id="seriesCollapse" className="accordion-collapse collapse show " aria-labelledby="seriesHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body ">
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" value="" id="rogFlow" />
            <label className="form-check-label" htmlFor="rogFlow">
            In Stock on eShop

            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="rogZephyrus" />
            <label className="form-check-label" htmlFor="rogZephyrus">
            Temporarily Out of Stock on eShop

            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="rogStrix" />
            <label className="form-check-label" htmlFor="rogStrix">
            All Products

            </label>
          </div>
        </div>
      </div>
    </div>

  
    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="gpuHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gpuCollapse" aria-expanded="false" aria-controls="gpuCollapse">
          PRICE
        </button>
      </h2>
      <div id="gpuCollapse" className="accordion-collapse collapse" aria-labelledby="gpuHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="gpuOption1" />
            <label className="form-check-label" htmlFor="gpuOption1">
            ~ $111.00

            </label>
          </div>
          <div className='gpu ms-4 mt-4'>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
            <label className="form-check-label" htmlFor="gpuOption2">
            $112.00 ~ $143.00

            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
            <label className="form-check-label" htmlFor="gpuOption2">
            $144.00 ~ $175.00

            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
            <label className="form-check-label" htmlFor="gpuOption2">
            $176.00 ~ $207.00

            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="gpuOption2" />
            <label className="form-check-label" htmlFor="gpuOption2">
            $208.00 ~ up

            </label>
          </div>

          </div>
        </div>
      </div>
    </div>

    
    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="cpuHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpuCollapse" aria-expanded="false" aria-controls="cpuCollapse">
        PRODUCT TYPE
        </button>
      </h2>
      <div id="cpuCollapse" className="accordion-collapse collapse" aria-labelledby="cpuHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="cpuOption1"/>
            <label className="form-check-label" htmlFor="cpuOption1">             
              3.5mm Headsets 
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
            <label className="form-check-label" htmlFor="cpuOption2">
            USB HeadSets
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="cpuOption2"/>
            <label className="form-check-label" htmlFor="cpuOption2">
            Wireless HeadSets
            </label>
          </div>
        </div>
      </div>
    </div>

  
    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="displaySizeHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displaySizeCollapse" aria-expanded="false" aria-controls="displaySizeCollapse">
        CONNECTIVITY
        </button>
      </h2>
      <div id="displaySizeCollapse" className="accordion-collapse collapse" aria-labelledby="displaySizeHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displaySizeOption1" />
            <label className="form-check-label" htmlFor="displaySizeOption1">
              USB-C
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
            <label className="form-check-label" htmlFor="displaySizeOption2">
              Bluetooth
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displaySizeOption2" />
            <label className="form-check-label" htmlFor="displaySizeOption2">
              2.4GHz Wireless
            </label>
          </div>
        </div>
      </div>
    </div>


    
    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="displayTypeHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#displayTypeCollapse" aria-expanded="false" aria-controls="displayTypeCollapse">
        COMPATIBILITY
        </button>
      </h2>
      <div id="displayTypeCollapse" className="accordion-collapse collapse" aria-labelledby="displayTypeHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption1" />
            <label className="form-check-label" htmlFor="displayTypeOption1">
              Desktops
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              Laptops
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              Mac
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              PS4
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              Xbox One
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              Nitendo Switche
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
              Mobile Phone
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="displayTypeOption2" />
            <label className="form-check-label" htmlFor="displayTypeOption2">
             Xbox
            </label>
          </div>
         
          
        </div>
      </div>
    </div>


    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="memoryHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#memoryCollapse" aria-expanded="false" aria-controls="memoryCollapse">
          COLOR
        </button>
      </h2>
      <div id="memoryCollapse" className="accordion-collapse collapse" aria-labelledby="memoryHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" value="" id="memoryOption1" />
            <label className="form-check-label" htmlFor="memoryOption1">
              Black
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="memoryOption2" />
            <label className="form-check-label" htmlFor="memoryOption2">
              White
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="memoryOption2" />
            <label className="form-check-label" htmlFor="memoryOption2">
              Special Edition
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="accordion-item p-2 menu-headphone ">
      <h2 className="accordion-header" id="storagHeading">
        <button className="accordion-button btn-menu-headphone collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#storagCollapse" aria-expanded="false" aria-controls="storagCollapse">
        LIGHTING
        </button>
      </h2>
      <div id="storagCollapse" className="accordion-collapse collapse" aria-labelledby="storagHeading" data-bs-parent="#filterAccordion">
        <div className="accordion-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="storagOption1" />
            <label className="form-check-label" htmlFor="storagOption1">
              RGB
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
            <label className="form-check-label" htmlFor="storagOption2">
              Single-colored LED
            </label>
          </div>
          <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" value="" id="storagOption2" />
            <label className="form-check-label" htmlFor="storagOption2">
              N/A
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeadPhoneMenu
