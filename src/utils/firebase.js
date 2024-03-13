// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-22f2a.firebaseapp.com",
  projectId: "nextblog-22f2a",
  storageBucket: "nextblog-22f2a.appspot.com",
  messagingSenderId: "1098777790645",
  appId: "1:1098777790645:web:c8b0a1455483dfcbe1d6fc",
  measurementId: "G-DG1JB84H55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
