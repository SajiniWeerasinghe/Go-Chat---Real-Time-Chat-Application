import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "gochat-b10a6.firebaseapp.com",
  projectId: "gochat-b10a6",
  storageBucket: "gochat-b10a6.appspot.com",
  messagingSenderId: "701099440354",
  appId: "1:701099440354:web:b983f0f3dc6bf1175b86bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();