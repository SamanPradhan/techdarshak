// In LoginForm.js
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function LoginForm() {
  const navigate = useNavigate();
  const [loginInputEmail1, setLoginInputEmail1] = useState("");
  const [loginInputPassword1, setLoginInputPassword1] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: loginInputEmail1,
      password: loginInputPassword1,
    };
    console.log(data);
    axios
      .post("https://tech-darshak.onrender.com/users/login", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        console.log(response.data);
        localStorage.setItem("techDToken", response.data.token);
        alert("Login successfull");
        navigate("/table");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed");
        setResponseMessage("An error occurred while submitting the form.");
      });
  };

  return (
    <>
      <form
        style={{
          margin: "3rem 30rem",
          padding: "1rem",
          border: "2px solid grey",
          borderRadius: "10px",
        }}
        onSubmit={handleLoginFormSubmit}
      >
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="signupInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="signupInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            value={loginInputEmail1}
            onChange={(e) => setLoginInputEmail1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signupInputPassword1"
            placeholder="Password"
            value={loginInputPassword1}
            onChange={(e) => setLoginInputPassword1(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </>
  );
}

export default LoginForm;
