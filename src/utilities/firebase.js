// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LN5p7NWg_HtXBR9mAa5ZX84L8rtNHZQ",
  authDomain: "seriesgpt-2411.firebaseapp.com",
  projectId: "seriesgpt-2411",
  storageBucket: "seriesgpt-2411.appspot.com",
  messagingSenderId: "1099242794644",
  appId: "1:1099242794644:web:91ac50a9f970eb1d520e81",
  measurementId: "G-GYWHJ96VZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();