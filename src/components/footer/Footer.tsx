import React from 'react'

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer"
      style={{ background: "linear-gradient(to right, #6190e8, #a7bfe8)" }}
    >
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
                  <a href="index">Home</a>
                </li>
                <li>
                  <a href="about">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
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
  );
}

export default Footer