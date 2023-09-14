import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useState(""); // Initialize token state with an empty string

  const logoutToken = () => {
    localStorage.removeItem("techDToken");
    alert("Logout Sucessfull");
    window.location.reload();
  };

  useEffect(() => {
    // Fetch the token from local storage during component mount
    const token1 = localStorage.getItem("techDToken");
    setToken(token1); // Update the token state
  }, []); // The empty dependency array ensures this effect runs only once during component mount

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Your App Name
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item" onClick={logoutToken}>
                <Link className="nav-link" to="/login">
                  Logout
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/Table">
                Data Table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
