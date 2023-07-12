import React from "react";
import "../login/login.scss";
const page = () => {
  return (
    <div className="LoginBox">
      <img className="sideImg" src="../../assets/img/loginImg.png" alt="" />
      <div className="logo">
        <a href="/" className="d-flex align-items-center">
          <img src="../../assets/img/logo.svg" alt="" />
          <span className="logoText">SOLARWAYZ TECHNOLOGIES</span>
        </a>
      </div>
      <div className="formContainer">
        <div className="regForm">
          <h2>Register Account</h2>
          <input className="formInp" type="text" placeholder="Name" />
          <input className="formInp" type="text" placeholder="Location" />
          <div className="contactForm">
            <input className="formInp" type="text" placeholder="Phone number" />
            <input className="formInp" type="text" placeholder="E-mail ID" />
          </div>
          <input className="formInp" type="password" placeholder="password" />
          <button className="loginBtn">Login</button>
          <span>
            Do you have an account?{" "}
            <a href="/login">
              <b>Sign In</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
