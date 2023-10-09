import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1G0Fj7u4rCqircsZ593RKKFHAYSigeT8",
  authDomain: "bee-party-4bb19.firebaseapp.com",
  projectId: "bee-party-4bb19",
  storageBucket: "bee-party-4bb19.appspot.com",
  messagingSenderId: "707926274186",
  appId: "1:707926274186:web:f8d69b4ce65feadca2fd73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
