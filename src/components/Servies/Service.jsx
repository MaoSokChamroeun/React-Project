import React from "react";
import "./Service.css";
import { IoSearchOutline } from "react-icons/io5";
const Service = () => {
  return (
    <div className="servies"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <section id="services">
        <div class="service-banner">
          <div class="text-center text-banner">
            <h1 class="fw-bold fs-1">Our Services</h1>
            <p class="text-white">Explore the range of services we offer</p>
            <div className="w-full max-w-md search-service">
              <input
                type="text"
                placeholder="Please describe your problem"
                id="search-input"
              />

              <IoSearchOutline style={{ fontSize: "2.3rem" }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row g-4 mt-2">
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 border-0 shadow-lg">
                <div class="card-body text-center ">
                  <i class="bi bi-laptop display-4 text-primary mb-3"></i>
                  <h5 class="card-title">Laptop Sales</h5>
                  <p class="card-text">
                    We offer the latest laptops from top brands at competitive
                    prices.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 border-0 shadow-lg">
                <div class="card-body text-center">
                  <i class="bi bi-gear display-4 text-primary mb-3"></i>
                  <h5 class="card-title">Repair Services</h5>
                  <p class="card-text">
                    Get your laptop repaired by our certified technicians
                    quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 border-0 shadow-lg">
                <div class="card-body text-center">
                  <i class="bi bi-shield-check display-4 text-primary mb-3"></i>
                  <h5 class="card-title">Extended Warranty</h5>
                  <p class="card-text">
                    Protect your investment with our affordable extended
                    warranty plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container" id="why-choose-us">
        <h2 class="text-center mt-5">Why Choose Us</h2>
        <h5 class="text-center mt-3 letter">
          Fastest repair service with best price!
        </h5>

        <div class="d-flex justify-content-center align-items-center">
          <div class="line"></div>
          <div class="main-line"></div>
          <div class="line"></div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="center">
              <div class="icon-service mt-5">
                <img
                  id="data-recovery"
                  class=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUy1JbCgLcpuT9vmw31kbsorKV5PI2soagg&s"
                  alt="data-recovery"
                />
              </div>
              <h5 class="text-center mt-2">Data recovery</h5>
              <p class="text-center service-text-h4">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="center">
              <div class="icon-service mt-5">
                <img
                  id="computer-repair"
                  class=""
                  src="https://cdn-icons-png.flaticon.com/512/1803/1803202.png"
                  alt="computer rapaired"
                />
              </div>
              <h5 class="text-center mt-2">Computer repair</h5>
              <p class="text-center service-text-h4">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="center">
              <div class="icon-service mt-5">
                <img
                  id="cleaning-service"
                  class=""
                  src="https://cdn-icons-png.flaticon.com/512/1276/1276982.png"
                  alt="cleaning-service"
                />
              </div>
              <h5 class="text-center mt-2">Cleaning service</h5>
              <p class="text-center service-text-h4">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="center">
              <div class="icon-service mt-5">
                <img
                  id="network-solution"
                  class=""
                  src="https://www.shutterstock.com/image-vector/server-global-location-concept-content-260nw-1849210243.jpg"
                  alt="network-solution"
                />
              </div>
              <h5 class="text-center mt-2">Network solution</h5>
              <p class="text-center service-text-h4">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Service;