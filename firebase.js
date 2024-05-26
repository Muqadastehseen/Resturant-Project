// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiB6y68sbZ-7DtCCTakLYJik4ThunkpGs",
  authDomain: "FireBase1-ffc5b.firebaseapp.com",
  databaseURL: "https://FireBase1-ffc5b-default-rtdb.firebaseio.com",
  projectId: "FireBase1-ffc5b",
  storageBucket: "FireBase1-ffc5b.appspot.com",
  messagingSenderId: "956541509437",
  appId: "1:971372463780:android:547bfc415e57876acb8831",
  measurementId: "G-B91K62HDC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);