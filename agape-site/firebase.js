// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADXekMsYObiaFu7NDPLQnaKAtS0gIKXLM",
  authDomain: "agape-site-5f386.firebaseapp.com",
  projectId: "agape-site-5f386",
  storageBucket: "agape-site-5f386.firebasestorage.app",
  messagingSenderId: "659061483999",
  appId: "1:659061483999:web:8188d3cd078879c77c3c6a",
  measurementId: "G-4LDM826BHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
