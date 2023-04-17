// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

//const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: 'AIzaSyAyItCs69Mxj67P06Amh9nkh7erabCeLmo',
  authDomain: "rickandmorty-7c89c.firebaseapp.com",
  projectId: "rickandmorty-7c89c",
  storageBucket: "rickandmorty-7c89c.appspot.com",
  messagingSenderId: "130634794104",
  appId: "1:130634794104:web:4b46a4f339b511bad2598d",
  measurementId: "G-YQDDTMG9JG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();