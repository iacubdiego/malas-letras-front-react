// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeMSxQz13U7yvNCQ3X83Acga_TXVjgdpk",
  authDomain: "malas-letras-backend-firebase.firebaseapp.com",
  projectId: "malas-letras-backend-firebase",
  storageBucket: "malas-letras-backend-firebase.appspot.com",
  messagingSenderId: "132199913336",
  appId: "1:132199913336:web:a95eacb6a0d1f032c09a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);