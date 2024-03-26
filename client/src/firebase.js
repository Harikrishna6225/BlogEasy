// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b4f37.firebaseapp.com",
  projectId: "mern-blog-b4f37",
  storageBucket: "mern-blog-b4f37.appspot.com",
  messagingSenderId: "616601549454",
  appId: "1:616601549454:web:b9cbed7fc9778dc2a867df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);