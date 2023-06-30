import React from 'react'
import "./login.scss";
const page = () => {
  return (
    <div className="LoginBox">
      <img className="sideImg" src="./assets/img/loginImg.png" alt="" />
      <div className="logo">
        <a href="/" className="d-flex align-items-center">
          <img src="assets/img/logo.svg" alt="" />
          <span>SOLARWAYZ TECHNOLOGIES</span>
        </a>
      </div>
      <div className="formContainer">
        <div className="loginForm">
          <h2>Login Account</h2>
          <input className="formInp" type="text" placeholder="username" />
          <input className="formInp" type="password" placeholder="password" />
          <button className="loginBtn">Login</button>
          <span>
            Do you have an account?{" "}
            <a href="/register">
              <b>Sign Up</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default page