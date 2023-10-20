// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjdYf84rUIWDV4swPfQz2XKJXiymF37s8",
  authDomain: "coffee-store-fa6d2.firebaseapp.com",
  projectId: "coffee-store-fa6d2",
  storageBucket: "coffee-store-fa6d2.appspot.com",
  messagingSenderId: "572824891171",
  appId: "1:572824891171:web:fbc993d1afe6346d9e2696",
  measurementId: "G-G8P8YWHV2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;