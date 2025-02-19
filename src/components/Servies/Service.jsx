import React from "react";
import "./Service.css";
import { IoSearchOutline } from "react-icons/io5";
import service1 from "../Assets/service_1.png";
import service2 from "../Assets/service_2.png";
import service3 from "../Assets/service_3.png";
import service4 from "../Assets/service_4.png";
import Footer from "../Footer/Footer";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { TbClockUp } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdSignalWifiStatusbarConnectedNoInternet3 } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
const Service = () => {
  return (
    <div
      className="servies "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <section id="services">
        <div className="service-banner">
          <div className="text-center text-banner">
            <h1 className="fw-bold fs-1">Our Services</h1>
            <p className="text-white">Explore the range of services we offer</p>
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
      <section >
        <div className="container">
          <div className="row g-4 mt-2">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body text-center ">
                  <i className="bi bi-laptop display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Laptop Sales</h5>
                  <p className="card-text">
                    We offer the latest laptops from top brands at competitive
                    prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body text-center">
                  <i className="bi bi-gear display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Repair Services</h5>
                  <p className="card-text">
                    Get your laptop repaired by our certified technicians
                    quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Extended Warranty</h5>
                  <p className="card-text">
                    Protect your investment with our affordable extended
                    warranty plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <div className="container" id="why-choose-us">
        <h2 className="text-center mt-5">Why Choose Us</h2>
        <h5 className="text-center mt-3 letter">
          Fastest repair service with best price!
        </h5>

        <div className="d-flex justify-content-center align-items-center">
          <div className="main-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="center">
              <div className="icon-service mt-5">
                <img
                  id="data-recovery"
                  className=""
                  src={service2}
                  alt="data-recovery"
                />
              </div>
              <h5 className="text-center mt-2">Data recovery</h5>
              <p className="text-center service-text">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="center">
              <div className="icon-service mt-5">
                <img
                  id="computer-repair"
                  className=""
                  src={service1}
                  alt="computer rapaired"
                />
              </div>
              <h5 className="text-center mt-2">Computer repair</h5>
              <p className="text-center service-text">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="center">
              <div className="icon-service mt-5">
                <img
                  id="cleaning-service"
                  className=""
                  src={service3}
                  alt="cleaning-service"
                />
              </div>
              <h5 className="text-center mt-2">Mobie service</h5>
              <p className="text-center service-text">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="center">
              <div className="icon-service mt-5">
                <img
                  id="network-solution"
                  className=""
                  src={service4}
                  alt="network-solution"
                />
              </div>
              <h5 className="text-center mt-2">Network solution</h5>
              <p className="text-center service-text">
                Persspiciatis eos quos totam cum minima aut.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="service-process mt-5">
        <div className="all-icon-service">
          <div className="row">
            <div className="col-12">
              <div className="full">
                <div className="container">
                  <h2>Service process</h2>
                  <h5 className="letter mt-3">
                    Easy and effective way to get your device repaired.
                  </h5>
                  <div className="d-flex justify-content-start align-items-start">
                  <div className="main-line"></div>
                </div>


                <div class="container mt-5 ">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class="icon-service-process mt-3">
                          <TbClockUp className="icon-service-process" />
                        </div>
                        <h5 class="mt-3">Fast Service</h5>
                        <p>Quick and reliable service.</p>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class=" mt-3">
                          <RiSecurePaymentLine className="icon-service-process" />
                        </div>
                        <h5 class="mt-3">Secure Payment</h5>
                        <p>Safe transactions with encryption.</p>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class=" mt-3">
                          <RiTeamLine className="icon-service-process" />
                        </div>
                        <h5 class="mt-3">Expert Team</h5>
                        <p>Experienced professionals at your service.</p>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class=" mt-3">
                          <MdSignalWifiStatusbarConnectedNoInternet3 className="icon-service-process" />
                        </div>
                        <h5 class="mt-3">Network Solutions</h5>
                        <p>Robust network support for businesses.</p>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class=" mt-3">
                          <MdOutlineSupportAgent className="icon-service-process" />
                         
                        </div>
                        <h5 class="mt-3">24/7 Support</h5>
                        <p>Always available for your needs.</p>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div class="service-box">
                        <div class="mt-3">
                          <IoMdPricetags className="icon-service-process " />
                        </div>
                        <h5 class="mt-3">Affordable Pricing</h5>
                        <p>Quality service at the best price.</p>
                      </div> 
                   </div>


                   </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>

  );
};

export default Service;

