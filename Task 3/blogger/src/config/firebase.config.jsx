
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDGPwgo2YlE6EJXya2sDfORW2-oqDJISc",
  authDomain: "fir-3ca59.firebaseapp.com",
  projectId: "fir-3ca59",
  storageBucket: "fir-3ca59.appspot.com",
  messagingSenderId: "664782573820",
  appId: "1:664782573820:web:3c02658fdfeb42f5c48779",
  measurementId: "G-MP1Z4NYWPV"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)