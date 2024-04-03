// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEOc3Hvokz0YUEABqxnE6Swm0fzWRb54E",
  authDomain: "authentication-by-firebase3.firebaseapp.com",
  projectId: "authentication-by-firebase3",
  storageBucket: "authentication-by-firebase3.appspot.com",
  messagingSenderId: "839624930679",
  appId: "1:839624930679:web:93f2d48dc1877648041d72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
