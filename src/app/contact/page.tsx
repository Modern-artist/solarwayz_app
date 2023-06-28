import React from 'react'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const page = () => {
  return (
    <div>
      <>
        <Navbar flag={"3"} />

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
                  <a href="index">Home</a>
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
                  <div className="h-100 info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@solarwayz.com</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 ">
                  <div className="h-100 info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>+1 224-585-7342</p>
                  </div>
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

export default page