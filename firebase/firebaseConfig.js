// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebaseStore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8yZWkf2OncwjpbzR6XrnJX8flEOkNuTw",
  authDomain: "porto-1057d.firebaseapp.com",
  projectId: "porto-1057d",
  storageBucket: "porto-1057d.appspot.com",
  messagingSenderId: "847920237523",
  appId: "1:847920237523:web:3bb73c534dada8f3433d26"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubLoginProvider = new GithubAuthProvider();
export const facebookLoginProvider = new FacebookAuthProvider();
export const googleLoginProvider = new GoogleAuthProvider();
export const emailPassLoginProvider = auth.signInWithEmailAndPassword;

//export const emailPassSignUpProvider = new createUserWithEmailAndPassword();