// In LoginForm.js
import React, { useState } from "react";

function LoginForm() {
  const [loginInputEmail1, setLoginInputEmail1] = useState("");
  const [loginInputPassword1, setLoginInputPassword1] = useState("");

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: loginInputEmail1,
      password: loginInputPassword1,
    };

    // Your fetch logic here...
  };

  return (
    <form onSubmit={handleLoginFormSubmit}>
      {/* Your input fields and submit button */}
    </form>
  );
}

export default LoginForm;
