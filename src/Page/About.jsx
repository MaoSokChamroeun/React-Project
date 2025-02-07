import React from "react";
import Footer from "../components/Footer/Footer";
import "./css/About.css";
import chamrouen from "../components/Assets/chamrouen.JPG";
import chanya from "../components/Assets/chanya.jpg";
import reach from "../components/Assets/reach.JPG";

const About = () => {
  return (
    <div
      className="bg-dark-subtle"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <section class="hero-section text-md-start ">
        <div className="container first-text ">
          <div class="first-text-left">
            <h1 class="fw-bold">About Us</h1>
            <p>
              Your one-stop destination for high-performance laptops, tailored
              to your needs. Our journey began with a vision to provide top-tier
              computing solutions to individuals, professionals, and businesses
              alike.
            </p>
            <button class="btn btn-primary ">Learn more</button>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="fw-bold">Who We Are</h2>
              <p class="text-muted mt-3">
                At <strong>TechConnect Laptops</strong>, we pride ourselves on
                being a trusted provider of top-quality laptops for students,
                professionals, gamers, and more. With years of experience in the
                tech industry, our goal is to provide customers with
                cutting-edge technology, unparalleled support, and unbeatable
                value.
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-4 text-center mt-3">
              <h3 class="fw-bold">Our Mission</h3>
              <p class="text-muted">
                To empower people by providing reliable, high-performance
                laptops tailored to meet diverse needs.
              </p>
            </div>
            <div class="col-md-4 text-center shadow-lg">
              <h3 class="pt-3 fw-bold ">Our Vision</h3>
              <p class="text-muted ">
                To become the leading laptop seller by combining affordability,
                innovation, and excellent service.
              </p>
            </div>
            <div class="col-md-4 text-center mt-3">
              <h3 class="fw-bold">Our Promise</h3>
              <p class="text-muted">
                Every product we sell is backed by our commitment to quality and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="services-section bg-secondary">
        <div class="container">
          <div class="text-center mb-5 ">
            <h2 class="fw-bold">What We Offer</h2>
            <p>
              Explore our range of laptops and services designed for everyone.
            </p>
          </div>
          <div class="row text-center ">
            <div class="col-md-4 shadow-lg ">
              <h3 class="pt-3">Top Brands</h3>
              <p>
                We stock laptops from top brands like Dell, HP, Lenovo, Asus,
                and more.
              </p>
            </div>
            <div class="col-md-4 mt-3">
              <h3>Custom Configurations</h3>
              <p>
                Customize your laptop with upgraded processors, RAM, and
                storage.
              </p>
            </div>
            <div class="col-md-4 shadow-lg">
              <h3 class="pt-3">Expert Support</h3>
              <p>
                Our team provides guidance and after-sales support to ensure
                you’re satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="team-section bg-light py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Meet the Team</h2>
            <p class="text-muted">
              Our dedicated team ensures you have a seamless shopping
              experience.
            </p>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <img src={chamrouen} alt="Team Member" class="img-fluid mb-3" />
              <h5>Mao Sokchamroeun</h5>
              <p class="text-muted">Team Leader</p>
            </div>
            <div class="col-md-4">
              <img src={chanya} alt="Team Member" class="img-fluid mb-3" />
              <h5>Yeab Chanya</h5>
              <p class="text-muted">Team</p>
            </div>
            <div class="col-md-4">
              <img src={reach} alt="Team Member" class="img-fluid mb-3" />
              <h5>Mi Aknureach</h5>
              <p class="text-muted">Team</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
