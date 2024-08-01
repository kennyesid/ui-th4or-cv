// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXoalubj1L2EGCehAMgbCjpfjYfZUgap8",
    authDomain: "ui-th4or-cv-database.firebaseapp.com",
    projectId: "ui-th4or-cv-database",
    storageBucket: "ui-th4or-cv-database.appspot.com",
    messagingSenderId: "185050734806",
    appId: "1:185050734806:web:34123ea0b2017027506977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);