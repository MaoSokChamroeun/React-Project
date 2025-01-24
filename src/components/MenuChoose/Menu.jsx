import React from 'react'
import './Menu.css'
const Menu = () => {
  return (
    <div className=''>
      <section>
        <h1 class="text-center fw-bold mt-5 text-black">HELP ME CHOOSE</h1>
        <p class="text-center text-black fs-6">Tell us what you need. We help you choose the right products.</p>
            <div class="text-center row d-flex justify-content-center align-items-center main-cheakbox mx-auto">
                <div class="dropdown p-2 col "> 
                  <button class="btn rounded-0 bg-text  dropdown-toggle d-flex justify-content-between align-items-center mx-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                    SERIES
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li class="dropdown-item">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="option1" />
                        <label class="form-check-label" for="option1">
                          ROG FLOW
                        </label>
                      </div>
                    </li>
                    <li class="dropdown-item">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="option2"/>
                        <label class="form-check-label" for="option2">
                          ROG Zephyrus
                        </label>
                      </div>
                    </li>
                    <li class="dropdown-item">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="option3"/>
                        <label class="form-check-label" for="option3">
                          ROG Strix
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      GPU
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white  text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      CPU
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      DISPLAY SIZE
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      DISPLAY TYPE
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center mx-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      MEMORY
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      STORAGE
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1 " />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      CONNECTIVITY
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      BATTERY
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown p-2 col">
                    <button class="btn rounded-0 bg-white text-black dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                      NETWORKING
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option1" />
                          <label class="form-check-label" for="option1">
                            Option 1
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option2" />
                          <label class="form-check-label" for="option2">
                            Option 2
                          </label>
                        </div>
                      </li>
                      <li class="dropdown-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="option3" />
                          <label class="form-check-label" for="option3">
                            Option 3
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                
        </div>
      
        <div class="container-sm mx-auto d-flex align-items-center justify-content-center mt-4">
            <button class="bg-danger btn-view" >
                <a class="text-white text-center text-decoration-none" href="/asus">VIRW ALL PRODUCT</a>
            </button>
        </div>
    </section>
    </div>
  )
}

export default Menu
