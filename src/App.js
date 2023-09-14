// App.js
import React, { useEffect, useState } from "react";
// import Firebase from "./Components/Firebase"; // Import your Firebase component
import PostsTable from "./Components/Table";
function App() {
  const [user, setUser] = useState(null);
  // const firebase = new Firebase();

  // useEffect(() => {
  //   // Listen for changes in authentication state
  //   firebase.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <PostsTable />
    </div>
  );
}

export default App;
