// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAZnjH6RWWto3Ul0T_j_a03gB0pSYxZ-ZM",
  authDomain: "ecommerse15001.firebaseapp.com",
  projectId: "ecommerse15001",
  storageBucket: "ecommerse15001.appspot.com",
  messagingSenderId: "28393959519",
  appId: "1:28393959519:web:02d378fd455870b0342bea",
  measurementId: "G-488CTDPLG0"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)