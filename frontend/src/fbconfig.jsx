import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhHQsp-yfo6nj5AoKv2HvInX6xNiN73_Y",
  authDomain: "artograph-7e44a.firebaseapp.com",
  projectId: "artograph-7e44a",
  storageBucket: "artograph-7e44a.appspot.com",
  messagingSenderId: "23156137940",
  appId: "1:23156137940:web:75cc769f12985d91d98041",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
