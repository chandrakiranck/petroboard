import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtibkYYC9TNqBQYmats1G5Qk51z17AKZQ",
  authDomain: "petroboard-b787b.firebaseapp.com",
  projectId: "petroboard-b787b",
  storageBucket: "petroboard-b787b.appspot.com",
  messagingSenderId: "322692273978",
  appId: "1:322692273978:web:b06129abad63529ec26203",
  measurementId: "G-GL9545T42M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
