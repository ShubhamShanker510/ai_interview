// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // For Firebase Authentication
import { getFirestore } from "firebase/firestore";
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
const app = !getApps().length ?initializeApp(firebaseConfig): getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);