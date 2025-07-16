// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjAr7dve61MkXIRPfkaX-S2x_mWu-wQ8I",
  authDomain: "kc-assignment.firebaseapp.com",
  projectId: "kc-assignment",
  storageBucket: "kc-assignment.firebasestorage.app",
  messagingSenderId: "172635989999",
  appId: "1:172635989999:web:83898a81113a330290781a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);