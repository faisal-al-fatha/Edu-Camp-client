// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9gRDOLEP5rtZSOXMN1g5-OQPVwTgdbIg",
  authDomain: "edu-camp.firebaseapp.com",
  projectId: "edu-camp",
  storageBucket: "edu-camp.appspot.com",
  messagingSenderId: "951596477718",
  appId: "1:951596477718:web:98f8b5c6c5d9737b18b437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;