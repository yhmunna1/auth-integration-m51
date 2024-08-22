// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzQF19Cb1cheUe8P741J0bYVjGuyyGaw",
  authDomain: "auth-integration-m51.firebaseapp.com",
  projectId: "auth-integration-m51",
  storageBucket: "auth-integration-m51.appspot.com",
  messagingSenderId: "1039428996894",
  appId: "1:1039428996894:web:bea46ab55cf998cd86c30f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
