import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginForm from "./LogIn";

const ProtectedRoute = ({ Component }) => {
  const accessToken = localStorage.getItem("techDToken");

  return accessToken ? (
    Component === LoginForm ? (
      <div className="notFound">
        <div>
          <div>
            <h1>You are already Logged in</h1>
            <Link to="/">
              Return to <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <Component />
    )
  ) : (
    <>
      <LoginForm />
      <Navigate to="/login" />
    </>
  );
};

export default ProtectedRoute;
