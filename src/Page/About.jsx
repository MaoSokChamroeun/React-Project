import React from "react";
import Footer from "../components/Footer/Footer";
import "./css/About.css";
import chamrouen from "../components/Assets/chamrouen.JPG";
import chanya from "../components/Assets/chanya.jpg";
import reach from "../components/Assets/reach.JPG";

const About = () => {
  return (
    <div className="bg-dark-subtle" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <section className="hero-section text-md-start ">
        <div className="container first-text ">
          <div className="first-text-left">
            <h1 className="fw-bold">About Us</h1>
            <p>
              Your one-stop destination for high-performance laptops, tailored
              to your needs. Our journey began with a vision to provide top-tier
              computing solutions to individuals, professionals, and businesses
              alike.
            </p>
            <button className="btn btn-primary ">Learn more</button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold">Who We Are</h2>
              <p className=" mt-3">
                At <strong>TechConnect Laptops</strong>, we pride ourselves on
                being a trusted provider of top-quality laptops for students,
                professionals, gamers, and more. With years of experience in the
                tech industry, our goal is to provide customers with
                cutting-edge technology, unparalleled support, and unbeatable
                value.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 text-center mt-3">
              <h3 className="fw-bold">Our Mission</h3>
              <p className="">
                To empower people by providing reliable, high-performance
                laptops tailored to meet diverse needs.
              </p>
            </div>
            <div className="col-md-4 text-center shadow-lg">
              <h3 className="pt-3 fw-bold ">Our Vision</h3>
              <p className=" ">
                To become the leading laptop seller by combining affordability,
                innovation, and excellent service.
              </p>
            </div>
            <div className="col-md-4 text-center mt-3">
              <h3 className="fw-bold">Our Promise</h3>
              <p className="">
                Every product we sell is backed by our commitment to quality and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section ">
        <div className="container">
          <div className="text-center mb-5 ">
            <h2 className="fw-bold">What We Offer</h2>
            <p>
              Explore our range of laptops and services designed for everyone.
            </p>
          </div>
          <div className="row text-center ">
            <div className="col-md-4 shadow-lg ">
              <h3 className="pt-3">Top Brands</h3>
              <p>
                We stock laptops from top brands like Dell, HP, Lenovo, Asus,
                and more.
              </p>
            </div>
            <div className="col-md-4 mt-3">
              <h3>Custom Configurations</h3>
              <p>
                Customize your laptop with upgraded processors, RAM, and
                storage.
              </p>
            </div>
            <div className="col-md-4 shadow-lg">
              <h3 className="pt-3">Expert Support</h3>
              <p>
                Our team provides guidance and after-sales support to ensure
                you’re satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section  py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet the Team</h2>
            <p className="">
              Our dedicated team ensures you have a seamless shopping
              experience.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <img src={chamrouen} alt="Team Member" className="img-fluid mb-3" />
              <h5>Mao Sokchamroeun</h5>
              <p className="">Team Leader</p>
            </div>
            <div className="col-md-4">
              <img src={chanya} alt="Team Member" className="img-fluid mb-3" />
              <h5>Yeab Chanya</h5>
              <p className="">Team</p>
            </div>
            <div className="col-md-4">
              <img src={reach} alt="Team Member" className="img-fluid mb-3" />
              <h5>Mi Aknureach</h5>
              <p className="">Team</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
