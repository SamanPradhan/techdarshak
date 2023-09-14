// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import your components
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Posts Table with Pagination</h1>
        {/* Add your Navbar component here */}

        {/* Route for login */}
        <Route path="/login" component={LoginForm} />

        {/* Route for signup */}
        <Route path="/signup" component={SignupForm} />

        {/* Add other routes as needed */}
      </div>
    </Router>
  );
}

export default App;
