// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAwPJ76eEPJjEctgCWqEZvPgA1MTqANEM0",
    authDomain: "fir-sc-15b64.firebaseapp.com",
    projectId: "fir-sc-15b64",
    storageBucket: "fir-sc-15b64.appspot.com",
    messagingSenderId: "129843474067",
    appId: "1:129843474067:web:c63cc33fa6f079b9402766",
    measurementId: "G-2QV74QF5Z1"
};
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;