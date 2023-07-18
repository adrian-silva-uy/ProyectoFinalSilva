// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ZF6wYz12UFK3ZsRRfcfAENmd8MAJJ4I",
  authDomain: "react-ecommerce-1c902.firebaseapp.com",
  projectId: "react-ecommerce-1c902",
  storageBucket: "react-ecommerce-1c902.appspot.com",
  messagingSenderId: "683374156975",
  appId: "1:683374156975:web:557d0e304e221c52a2885a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
