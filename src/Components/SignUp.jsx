// SignupForm.js
import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Your signup logic here, e.g., make an API request to register the user

    // Reset the form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupInputPassword2" className="form-label">
            Confirm Password
          </label>
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
