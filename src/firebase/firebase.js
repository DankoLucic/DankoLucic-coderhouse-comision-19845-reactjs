// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGT-Qrl0SulLEv1fAe1UwGGyL32DqhFbk",
  authDomain: "proyecto01-55eb4.firebaseapp.com",
  projectId: "proyecto01-55eb4",
  storageBucket: "proyecto01-55eb4.appspot.com",
  messagingSenderId: "869205137661",
  appId: "1:869205137661:web:8e5d5db9c7fe30f2864694",
  measurementId: "G-N7CKL9DXN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const getFirestoreApp= () => {
    return app
}
