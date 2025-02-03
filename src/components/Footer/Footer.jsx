import React from 'react'
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div>
       <footer class="bg-dark text-white py-5 mt-5 ">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-3">
                    <img src={logo} alt="Logo" width="200" class="img-fluid mb-3" />
                    <p>Your go-to solution for amazing services and products.</p>
                </div>
                <div class="col-md-3">
                    <h5>Check Products</h5>
                    <ul class="list-unstyled">
                        <li><a href="/" class="text-white  smooth-scroll nav-link">Home</a></li>
                        <li><a href="/about" class="text-white  smooth-scroll nav-link">About</a></li>
                        <li><a href="/contact" class="text-white  smooth-scroll nav-link">Contact</a></li>
                        <li><a href="#technology" class="text-white  smooth-scroll nav-link">Laptop</a></li>
                        <li><a href="#product" class="text-white  smooth-scroll nav-link">Accessories</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Contact Us</h5>
                    <form id="contactForm">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            <small id="emailHelp" class="form-text text-danger d-none">Invalid email address.</small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" class="btn btn-light">Submit</button>
                    </form>
                </div>
                <div class="col-md-3">
                    <h5>Follow Us</h5>
                    <ul class="list-unstyled">
                        <li><a href="/" class="text-white nav-link">Facebook <i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="/" class="text-white nav-link">Twitter <i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="/" class="text-white nav-link">Instagram <i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="/" class="text-white nav-link">Telegram <i class="fa-brands fa-telegram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col text-center mt-5">
                    <p>&copy; 2025 CHAMROUEN. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
