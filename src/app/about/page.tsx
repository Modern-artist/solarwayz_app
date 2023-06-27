import React from "react";

export default function page() {
  return (
    <div>
      <>
        <header id="header" className="header d-flex align-items-center">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.svg" alt="" />
              <h1>SOLARWAYZ TECHNOLOGIES</h1>
            </a>

            <i className="mobile-nav-toggle mobile-nav-show fa fa-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none fa fa-times"></i>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="index">Home</a>
                </li>
                <li>
                  <a href="about" className="active">
                    About
                  </a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

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
                  <a href="index.html">Home</a>
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
              backgroundImage:
                "url(assets/img/about.jpeg)"}}
                ></div>
                <div className="col-lg-7">
                  <h2>About Us</h2>
                  <div className="our-story">
                    <h4 style={{color: '#364d59', fontWeight: 'bold' }}>
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
              backgroundImage:
                "url(assets/img/halt-services.jpeg)",
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

        <footer id="footer" className="footer">
          <div className="footer-content position-relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="footer-info">
                    <h3>SOLARWAYZ TECHNOLOGIES</h3>
                    <p>
                      Office no-442, Barola Main Market, F-4, DT/5, C-1/19,
                      SECTOR-49,
                      <br />
                      NOIDA UTTARPRADESH, INDIA, 201301 <br />
                      <br />
                      <strong>Phone:</strong> +1 224-585-7342
                      <br />
                      <strong>Email:</strong> info@solarwayz.com
                      <br />
                    </p>
                    <div className="social-links d-flex mt-3">
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="#alt-services">Permit Documentation</a>
                    </li>
                    <li>
                      <a href="#alt-services">Proposal Layout</a>
                    </li>
                    <li>
                      <a href="#alt-services">Site Analysis</a>
                    </li>
                    <li>
                      <a href="#alt-services"> PTO application services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-legal text-center position-relative">
            <div className="container">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>SOLARWAYZ TECHNOLOGIES</span>
                </strong>
                . All Rights Reserved
              </div>
            </div>
          </div>
        </footer>

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
