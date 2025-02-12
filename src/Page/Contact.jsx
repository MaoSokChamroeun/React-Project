import React from 'react'
import Footer from '../components/Footer/Footer'
import logo from '../components/Assets/logo.png'
import './css/Contact.css'
const Contact = () => {
  return (
    <div className='' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="container contact-container">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      <div className="form-container">
        <div className="form-header text-center mb-4">
          <img src={logo} alt='' width={200} />
          <p className="text-muted">We'd love to hear from you. Please fill out the form below.</p>
        </div>
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label for="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-danger btn-lg">Send Message</button>
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
