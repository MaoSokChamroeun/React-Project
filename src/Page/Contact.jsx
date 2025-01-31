import React from 'react'
import Footer from '../components/Footer/Footer'
import logo from '../components/Assets/logo.png'
import './css/Contact.css'
const Contact = () => {
  return (
    <div className=''>
      <div class="container contact-container">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="form-container">
        <div class="form-header text-center mb-4">
          <img src={logo} alt='' width={200} />
          <p class="text-muted">We'd love to hear from you. Please fill out the form below.</p>
        </div>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Your Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Enter the subject" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-danger btn-lg">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  )
}

export default Contact
