import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "dotenv/config";

const firebaseConfig = {
  apiKey: "AIzaSyA7bxEnVgENplBQ0fXv-PG_fysYzwy0pMM",
  authDomain: "pjh-shoppingmall.firebaseapp.com",
  projectId: "pjh-shoppingmall",
  storageBucket: "pjh-shoppingmall.appspot.com",
  messagingSenderId: "714406617668",
  appId: "1:714406617668:web:05a4eb4a1095e32de69211",
};

const app = initializeApp(firebaseConfig);
export default app;

export const db = getFirestore(app);
