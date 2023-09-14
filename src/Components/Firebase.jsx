// // Import the functions you need from the SDKs you need
// import { useEffect, useState } from "react";
// import firebase from "firebase/app";
// // import "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: "techdarshak-6e3fe.firebaseapp.com",
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: "techdarshak-6e3fe.appspot.com",
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDERID,
//   appId: "1:495089111177:web:bc316b60c94413a6653658",
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// class Firebase {
//   constructor() {
//     if (!firebase.apps.length) {
//       // Initialize Firebase with the provided configuration
//       firebase.initializeApp(firebaseConfig);
//     }

//     this.auth = firebase.auth();
//   }

//   // Sign-up method
//   async signUp(email, password) {
//     try {
//       const userCredential = await this.auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Sign-in method
//   async signIn(email, password) {
//     try {
//       const userCredential = await this.auth.signInWithEmailAndPassword(
//         email,
//         password
//       );
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Sign-out method
//   async signOut() {
//     try {
//       await this.auth.signOut();
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Listen for changes in authentication state
//   onAuthStateChanged(callback) {
//     this.auth.onAuthStateChanged(callback);
//   }
// }

// export default Firebase;
