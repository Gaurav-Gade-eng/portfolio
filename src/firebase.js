// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (Optional) Only keep analytics if you really need it
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-n_GZ8Rzq9a2UwBcnY7cgUj1Jf0YycRs",
  authDomain: "gaurav-portfolio-73a2d.firebaseapp.com",
  projectId: "gaurav-portfolio-73a2d",
  storageBucket: "gaurav-portfolio-73a2d.firebasestorage.app",
  messagingSenderId: "1081409908218",
  appId: "1:1081409908218:web:2c2538bf28f4ba496ac843",
  measurementId: "G-EX8L1SF0BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);