import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyRx1rSS0BWv3zswN0nnFMh88x9lt7qtY",
  authDomain: "zephys-e53b0.firebaseapp.com",
  projectId: "zephys-e53b0",
  storageBucket: "zephys-e53b0.appspot.com",
  messagingSenderId: "214499119999",
  appId: "1:214499119999:web:2db5a5b9b8c7968721804a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);