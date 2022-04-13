
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
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
export const getFirestoreApp = () => {
    return app
}
