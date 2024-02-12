// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXg9_PilDr_BsnShQi6shNtD5zaDlApQ8",
  authDomain: "swimtest-a919b.firebaseapp.com",
  projectId: "swimtest-a919b",
  storageBucket: "swimtest-a919b.appspot.com",
  messagingSenderId: "199998831811",
  appId: "1:199998831811:web:3d038a429a04a0394e3676",
  measurementId: "G-PW9DGXMWRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export {db}; 

