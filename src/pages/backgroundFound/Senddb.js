import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXoalubj1L2EGCehAMgbCjpfjYfZUgap8",
  authDomain: "ui-th4or-cv-database.firebaseapp.com",
  projectId: "ui-th4or-cv-database",
  storageBucket: "ui-th4or-cv-database.appspot.com",
  messagingSenderId: "185050734806",
  appId: "1:185050734806:web:34123ea0b2017027506977",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
