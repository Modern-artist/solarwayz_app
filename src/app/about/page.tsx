import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function page() {
  return (
    <div>
      <>
        <Navbar flag="1" />

        <main id="main">
          <div
            className="breadcrumbs d-flex align-items-center"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-4.jpeg)",
            }}
          >
            <div
              className="container position-relative d-flex flex-column align-items-center"
              data-aos="fade"
            >
              <h2>About</h2>
              <ol>
                <li>
                  <a href="index">Home</a>
                </li>
                <li>About</li>
              </ol>
            </div>
          </div>

          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative">
                <div
                  className="col-lg-7 about-img"
                  style={{
                    backgroundImage: "url(assets/img/about.jpeg)",
                  }}
                ></div>
                <div className="col-lg-7">
                  <h2>About Us</h2>
                  <div className="our-story">
                    <h4 style={{ color: "#364d59", fontWeight: "bold" }}>
                      What we do
                    </h4>
                    <p>
                      Welcome to SOLARWAYZ TECHNOLOGIES, the premier provider of
                      solar permit design and proposal layout services for
                      residential and commercial businesses in the United
                      States. Our team of skilled engineers, designers, and
                      proposal specialists is committed to assisting you in
                      securing the required permits and deals for your solar
                      energy company.
                      <br />
                      <br />
                      At SOLARWAYZ TECHNOLOGIES, we are passionate about solar
                      energy and its potential to transform the way we power our
                      homes and businesses. Our mission is to help our customers
                      achieve their solar energy goals by providing
                      comprehensive permit design and proposal layout services
                      that are tailored to meet their unique needs. <br />
                      <br />
                      We pride ourselves on delivering exceptional customer
                      service and support throughout the entire permit design
                      and proposal layout process. Our team works closely with
                      you to understand your goals and objectives, and we
                      utilize the latest technologies and software to deliver
                      the highest quality solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-around gy-4">
                <div
                  className="col-lg-6 img-bg"
                  // style={{"backgroundImage: url(assets/img/alt-services.jpeg)"}}
                  style={{
                    backgroundImage: "url(assets/img/halt-services.jpeg)",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                ></div>

                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h3>What are we</h3>
                  <p>
                    Solarwayz Technologies is a leading provider of solar permit
                    design and proposal layout services in the United States.
                    Our team of experienced engineers, designers, and proposal
                    specialists is dedicated to helping residential and
                    commercial solar energy projects obtain permits and win more
                    business. We offer comprehensive services including site
                    analysis, system design, permit documentation, and custom
                    proposal layouts. Our focus is on delivering exceptional
                    customer service and support throughout the entire process.
                    With a deep understanding of local and state regulations, we
                    ensure compliance and efficient project completion. At
                    Solarwayz Technologies, we are passionate about solar energy
                    and strive to provide tailored solutions that meet the
                    unique needs of each client. Choose Solarwayz Technologies
                    for your solar permit design and proposal layout needs and
                    let us help you achieve your solar energy goals.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        <a
          href="#"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="fa fa-arrow-up text-white"></i>
        </a>

        <div id="preloader"></div>
      </>
    </div>
  );
}
