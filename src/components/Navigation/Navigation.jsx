import React, { useState } from 'react'
import logo from '../Assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
  const [menu , setMenu] = useState("/");

  return (
    <div className='container-fluid bg-white'>
      <div className='  d-flex align-items-center justify-content-between '>
        <Link to='/'><img src={logo} alt='' width={150}/></Link>
        <nav class="navbar navbar-expand-lg">
       <div class="container-fluid">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarPillsExample">
           <ul class="navbar-nav navbar-nav-pills mt-3">
        <li class="nav-item" onClick={() => { setMenu("shop") }}>
        <Link to={'/'} class="nav-link fw-semibold fs-6 text-black">Home</Link> {menu === "shop" ? <hr></hr> : <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("about") }}>
           <Link to={'about'} class="nav-link fw-semibold fs-6 text-black">About</Link> {menu === "about" ? <hr></hr> : <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("contact") }}>
           <Link to={'contact'} class="nav-link fw-semibold fs-6 text-black">Contact</Link> {menu === "contact" ? <hr></hr> : <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("laptop") }}>
           <Link to={'asus'} class="nav-link fw-semibold fs-6 text-black">Laptop</Link> {menu === "laptop" ? <hr></hr>: <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("monitor") }}>
            <Link to={'monitorproduct'} class="nav-link fw-semibold fs-6 text-black">Monitor</Link> {menu === "monitor" ? <hr></hr> : <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("information") }}>
            <Link to={'information'} class="nav-link fw-semibold fs-6 text-black">Information</Link> {menu === "information" ? <hr></hr> : <></>}
        </li>
        <li class="nav-item" onClick={() => { setMenu("asseserise") }}>
            <Link to={'asseserise'} class="nav-link fw-semibold fs-6 text-black">Asseserise</Link> {menu === "asseserise" ? <hr></hr> : <></>}
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
<div className='d-flex gap-2'> 
  <button style={{border: 'none',backgroundColor: 'none'}} >
    {/* <img src={search_icon} alt='' width={20} /> */}
    <FaSearch style={{fontSize: '20px'}}/>
  </button>
  <button style={{border: 'none',backgroundColor: 'none'}}>
    {/* <img src={card_seller} alt='' width={20}/> */}
    <FaShoppingCart style={{fontSize: '20px'} }/>
  </button>
</div>
      </div>
    </div>
  )
}

export default Navigation
