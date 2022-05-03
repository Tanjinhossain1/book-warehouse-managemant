// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHuZmaHkvQ9Tw71ghCpbnjBX6lltMjxk",
  authDomain: "books-warehouse-edfd7.firebaseapp.com",
  projectId: "books-warehouse-edfd7",
  storageBucket: "books-warehouse-edfd7.appspot.com",
  messagingSenderId: "817891400376",
  appId: "1:817891400376:web:e9eaf5c764eed4195af24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;