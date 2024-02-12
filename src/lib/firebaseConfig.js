import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC40Kmh_KQuG-4kpEvOfLDDdjIpk4A1pO4",
  authDomain: "generatorowo-cb4ab.firebaseapp.com",
  projectId: "generatorowo-cb4ab",
  storageBucket: "generatorowo-cb4ab.appspot.com",
  messagingSenderId: "476133980859",
  appId: "1:476133980859:web:6f4efae73a76ada96ac79e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
