import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGXzPtU0dNcBG0oRnnlU0ADDL5Hf9fldU",
  authDomain: "projetomobile-9088f.firebaseapp.com",
  projectId: "projetomobile-9088f",
  storageBucket: "projetomobile-9088f.firebasestorage.app",
  messagingSenderId: "607867109897",
  appId: "1:607867109897:web:20484ae536642f6daf6ed8",
  measurementId: "G-0LXTBRZ0KT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
