import React from 'react'

const page = () => {
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
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="contact" className="active">
                    Contact
                  </a>
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
                "url('assets/img/hero-carousel/hero-carousel-1.jpeg')",
            }}
          >
            <div
              className="container position-relative d-flex flex-column align-items-center"
              data-aos="fade"
            >
              <h2>Contact</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>

          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-map"></i>
                    <h3>Our Address</h3>
                    <p style={{ textAlign: "center" }}>
                      Office no-442, Barola Main Market, F-4, DT/5,
                      C-1/19,SECTOR-49,
                      <br />
                      NOIDA UTTARPRADESH, INDIA, 201301
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@solarwayz.com</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 ">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>+1 224-585-7342</p>
                  </div>
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
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
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

export default page