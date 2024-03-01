// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyD1vnozvmxi3GdbEGyNkXXpuedGu5fhoK8",
  authDomain: "pmclub-website.firebaseapp.com",
  databaseURL: "https://pmclub-website.firebaseio.com",
  projectId: "pmclub-website",
  storageBucket: "pmclub-website.appspot.com",
  messagingSenderId: "991304741409",
  appId: "1:991304741409:web:37a94fc0b1b5c5545b6960",
  measurementId: "G-94VBVMBTHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
