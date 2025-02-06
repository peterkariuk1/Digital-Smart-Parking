// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA474nHtfZZX9LsOzTIdHfk0ywoESDVl_o",
  authDomain: "digital-star-parking.firebaseapp.com",
  projectId: "digital-star-parking",
  storageBucket: "digital-star-parking.firebasestorage.app",
  messagingSenderId: "1079686762314",
  appId: "1:1079686762314:web:d7dbedf4ff375f650bbbb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db= getFirestore(app);