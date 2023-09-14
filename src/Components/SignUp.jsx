// // SignUp.js
// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { auth } from "./Firebase";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.error("Error signing up:", error);
//     }
//   };

//   return (
//     <Form>
//       <Form.Group controlId="email">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="success" type="submit" onClick={handleSignUp}>
//         Sign Up
//       </Button>
//     </Form>
//   );
// }

// export default SignUp;
