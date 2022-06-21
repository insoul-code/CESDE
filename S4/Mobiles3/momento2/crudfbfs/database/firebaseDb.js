// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD0txUbDPf8OQuIhI_vvURrNeBqEXskNeA",
    authDomain: "fbusers-moviles3.firebaseapp.com",
    projectId: "fbusers-moviles3",
    storageBucket: "fbusers-moviles3.appspot.com",
    messagingSenderId: "773825997443",
    appId: "1:773825997443:web:f6e88b0ae93295e149c9b6",
    measurementId: "G-45HLCQVQQF"
};
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;