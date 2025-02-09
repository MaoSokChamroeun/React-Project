import React, { useState, useContext } from 'react'
import logo from '../Assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navigation.css'
import { ShopContext } from '../Context/ShopContext';
import DarkMode from '../DarkMode/DarkMode';
const Navigation = () => {
  const {getCountTotalItems} = useContext(ShopContext)
  const [menu , setMenu] = useState("/");

  return (
    <div className='container-fluid navbar-container'>
      <div className='d-flex align-items-center justify-content-between '>
        <Link to='/'><img  src={logo} alt='' width={150}/></Link>
        <nav className="navbar navbar-expand-lg">
       <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse" id="navbarPillsExample">
           <ul className="navbar-nav navbar-nav-pills mt-3">
        <li className="nav-item" onClick={() => { setMenu("shop") }}>
        <Link to={'/'} className="nav-link fw-semibold fs-6 list-text">Home</Link> {menu === "shop" ? <hr></hr> : <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("about") }}>
           <Link to={'about'} className="nav-link fw-semibold fs-6 list-text">About</Link> {menu === "about" ? <hr></hr> : <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("contact") }}>
           <Link to={'contact'} className="nav-link fw-semibold fs-6 list-text">Contact</Link> {menu === "contact" ? <hr></hr> : <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("laptop") }}>
           <Link to={'asus'} className="nav-link fw-semibold fs-6 list-text">Laptop</Link> {menu === "laptop" ? <hr></hr>: <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("monitor") }}>
            <Link to={'monitorproduct'} className="nav-link fw-semibold fs-6 list-text">Monitor</Link> {menu === "monitor" ? <hr></hr> : <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("information") }}>
            <Link to={'information'} className="nav-link fw-semibold fs-6 list-text">Information</Link> {menu === "information" ? <hr></hr> : <></>}
        </li>
        <li className="nav-item" onClick={() => { setMenu("asseserise") }}>
            <Link to={'asseserise'} className="nav-link fw-semibold fs-6 list-text">Asseserise</Link> {menu === "asseserise" ? <hr></hr> : <></>}
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
<div className='d-flex gap-3 align-items-center justify-content-center search-bar'> 
    <DarkMode className ="btn-moon bg-danger" />
  <button  >
    <FaSearch style={{fontSize: '20px'}} className='search-icon'/>
  </button>
  <Link to = '/cardtotal'><button className='d-flex align-items-center'>
    <FaShoppingCart style={{fontSize: '20px'} } className='shop-card '/>
  </button>
  </Link>
  <div className='card-count'>
          <p>{getCountTotalItems()}</p>
        </div>
</div>
      </div>
    </div>
  )
}

export default Navigation
