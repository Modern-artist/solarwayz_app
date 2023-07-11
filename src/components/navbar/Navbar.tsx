import React from "react";

const Navbar = ({ flag = "0" }) => {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.svg" alt="" />
            <h1>SOLARWAYZ TECHNOLOGIES</h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show fa fa-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none fa fa-times"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/" className={`${flag == "0" ? "active" : ""}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="about" className={`${flag == "1" ? "active" : ""}`}>
                  About
                </a>
              </li>
              <li>
                <a href="services" className={`${flag == "2" ? "active" : ""}`}>
                  Services
                </a>
              </li>
              <li>
                <a href="contact" className={`${flag == "3" ? "active" : ""}`}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/dashboard/login">Sign in</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
