// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhHQsp-yfo6nj5AoKv2HvInX6xNiN73_Y",
  authDomain: "artograph-7e44a.firebaseapp.com",
  projectId: "artograph-7e44a",
  storageBucket: "artograph-7e44a.firebasestorage.app",
  messagingSenderId: "23156137940",
  appId: "1:23156137940:web:75cc769f12985d91d98041",
  measurementId: "G-CFMNX8E6F6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);