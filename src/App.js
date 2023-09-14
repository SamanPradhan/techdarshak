// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LogIn";
import SignupForm from "./Components/SignUp";
import Table from "./Components/Table";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Route for signup */}
          <Route path="/signup" element={<SignupForm />} />

          <Route
            exact
            path="/table"
            element={<ProtectedRoute Component={Table} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
