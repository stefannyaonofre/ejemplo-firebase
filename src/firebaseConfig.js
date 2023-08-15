// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3lUzIrhQTqv3-cw_J_kHQOkwpEFqzY4",
  authDomain: "ejemplo-firebase-414ee.firebaseapp.com",
  projectId: "ejemplo-firebase-414ee",
  storageBucket: "ejemplo-firebase-414ee.appspot.com",
  messagingSenderId: "962206500456",
  appId: "1:962206500456:web:468b3812b0e123830fdddd",
  measurementId: "G-P1F2F879QT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);