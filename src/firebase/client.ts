// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2rULoJjsW_ka1iDGn6dHZdhUQqMCWkc",
  authDomain: "prepareai.firebaseapp.com",
  projectId: "prepareai",
  storageBucket: "prepareai.firebasestorage.app",
  messagingSenderId: "440157275219",
  appId: "1:440157275219:web:239a1a0221b7308492f2a6",
  measurementId: "G-3YJ2G1RGEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);