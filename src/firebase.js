import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8nGQyFdFJNU8l4q5faz87tRs-T16l6VQ",
  authDomain: "my-portfolio-admin-80e6c.firebaseapp.com",
  projectId: "my-portfolio-admin-80e6c",
  storageBucket: "my-portfolio-admin-80e6c.appspot.com",
  messagingSenderId: "272608126633",
  appId: "1:272608126633:web:66f112b7d350438a86ebb8",
};

const app = initializeApp(firebaseConfig);

// ✅ THESE TWO EXPORTS ARE REQUIRED
export const auth = getAuth(app);
export const db = getFirestore(app);
