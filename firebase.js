// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9xv3_9hBGbvokPboPs1KsxMTE51nlHqM",
  authDomain: "digital-e-gram-panchayat-fc22b.firebaseapp.com",
  projectId: "digital-e-gram-panchayat-fc22b",
  storageBucket: "digital-e-gram-panchayat-fc22b.appspot.com",
  messagingSenderId: "878909026532",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
