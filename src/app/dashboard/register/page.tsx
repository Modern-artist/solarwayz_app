"use client";

import React, { useState } from "react";
import "../login/login.scss";
import { registerUser } from "@/axios/auth";
const page = () => {
  // useState for every input
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [pno, setPno] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // handle form submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation checks
    if (name.trim() === "") {
      console.error("Name is required");
      return;
    }

    if (location.trim() === "") {
      console.error("Location is required");
      return;
    }

    if (pno.trim() === "") {
      console.error("Phone number is required");
      return;
    }

    if (email.trim() === "") {
      console.error("Email is required");
      return;
    }

    if (password.trim() === "") {
      console.error("Password is required");
      return;
    }

    // If all validations pass, proceed with form submission or further logic
    console.log("Form submitted");

    const res = await registerUser({ name, location, pno, email, password });
    console.log("response from register user", res);
    // Additional logic...
  };

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
        <form onSubmit={handleSubmit}>
          <div className="regForm">
            <h2>Register Account</h2>
            <input
              className="formInp"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="formInp"
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="contactForm">
              <input
                className="formInp"
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPno(e.target.value)}
              />
              <input
                className="formInp"
                type="text"
                placeholder="E-mail ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              className="formInp"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="loginBtn">
              Login
            </button>
            <span>
              Do you have an account?{" "}
              <a href="/login">
                <b>Sign In</b>
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
