"use client";
import React, { useState } from "react";
import "./login.scss";
import { logInUser, registerUser } from "@/axios/auth";
import { signIn, signOut, useSession } from "next-auth/react";
const page = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { data: session } = useSession();
  console.log("sesssion value is ", session);
  // handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation checks
    if (name.trim() === "") {
      console.error("Name is required");
      return;
    }

    if (password.trim() === "") {
      console.error("Password is required");
      return;
    }
    // If all validations pass, proceed with form submission or further logic
    // const res = logInUser({ name, password });
    const res = signIn("credentials", {
      email: name,
      password,
      redirect: false,
    });
    console.log("Form submitted with", name, password, res);
    // Additional logic...
  };

  return (
    <div className="LoginBox">
      <img className="sideImg" src="../../assets/img/loginImg.png" alt="" />
      <div className="logo">
        <a href="/" className="d-flex align-items-center">
          <img src="../../assets/img/logo.svg" alt="" />
          <span>SOLARWAYZ TECHNOLOGIES</span>
        </a>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="loginForm">
            <h2>Login Account</h2>
            <input
              className="formInp"
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
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
              <a href="/dashboard/register">
                <b>Sign Up</b>
              </a>
            </span>
          </div>
        </form>
        {session ? (
          <button onClick={() => signOut()}>
            SignOut from the application
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default page;
