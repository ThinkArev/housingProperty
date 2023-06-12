// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore' 
const firebaseConfig = {
  apiKey: "AIzaSyCeBerW3KqlosKDi1UsPUbX9WH8ZAbDd8s",
  authDomain: "housing-properties-app.firebaseapp.com",
  projectId: "housing-properties-app",
  storageBucket: "housing-properties-app.appspot.com",
  messagingSenderId: "139450032998",
  appId: "1:139450032998:web:dda8c93cba288a7fde1ea7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()
