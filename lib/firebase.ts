import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG96EcM26ofVaGyBc6XydC_5TxDlu4JLw",
  authDomain: "virtualproperty-a60a5.firebaseapp.com",
  projectId: "virtualproperty-a60a5",
  storageBucket: "virtualproperty-a60a5.firebasestorage.app",
  messagingSenderId: "737923852381",
  appId: "1:737923852381:web:3aafaf7e0c43b7f33f05b4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);