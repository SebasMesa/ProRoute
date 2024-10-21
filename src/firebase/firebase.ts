// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJG9gqZeYUdhoE0dujGoPI4ucrczuazyQ",
  authDomain: "proroute-707ce.firebaseapp.com",
  projectId: "proroute-707ce",
  storageBucket: "proroute-707ce.appspot.com",
  messagingSenderId: "1000946516519",
  appId: "1:1000946516519:web:9d39f128fc4485adf84402",
  measurementId: "G-JFF63WZK1K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);