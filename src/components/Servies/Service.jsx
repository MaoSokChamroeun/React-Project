import React from 'react'

const Service = () => {
  return (
    <div className='servies'>
       <section id="services" class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Our Services</h2>
                <p class="text-muted">Explore the range of services we offer</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-laptop display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Laptop Sales</h5>
                            <p class="card-text">We offer the latest laptops from top brands at competitive prices.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-gear display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Repair Services</h5>
                            <p class="card-text">Get your laptop repaired by our certified technicians quickly and efficiently.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-shield-check display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Extended Warranty</h5>
                            <p class="card-text">Protect your investment with our affordable extended warranty plans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="bg-light py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="fw-bold">About Us</h2>
                    <p>We are a leading laptop retailer and service provider, committed to delivering top-quality products and services to our customers. Whether you're a student, professional, or gamer, we have the perfect solution for your computing needs.</p>
                </div>
                <div class="col-md-6">
                    <img src="https://via.placeholder.com/500x300" alt="About Us" class="img-fluid rounded"/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Service
