import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      email,
      password,
    };
    console.log(userData);

    try {
      const response = await axios.post(
        "https://tech-darshak.onrender.com/users/signup",
        userData
      );

      console.log(response.data);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert("signup success");
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Signup error:", error);
      alert("signup failed");
    }
  };

  return (
    <div>
      <form
        style={{
          margin: "3rem 30rem",
          padding: "1rem",
          border: "2px solid grey",
          borderRadius: "10px",
        }}
        onSubmit={handleSignup}
      >
        <h2>Sign Up</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="signupInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="signupInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="signupInputPassword2"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
