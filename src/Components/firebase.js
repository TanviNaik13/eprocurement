// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcSHaZAXaMAlT7QSJvwKQD0hGbOHObBXE",
  authDomain: "eprocurement-32ba4.firebaseapp.com",
  projectId: "eprocurement-32ba4",
  storageBucket: "eprocurement-32ba4.appspot.com",
  messagingSenderId: "768551837818",
  appId: "1:768551837818:web:ff33e372647055b26b1bc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;