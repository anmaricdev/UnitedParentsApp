// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { //TUT:at some point, we'll need to save the keys and import them as constants for security reasons
  apiKey: "AIzaSyCbuIWUPqeGtRZ8a88CLGHAIwUPrPg9vxo", 
  authDomain: "unitedparentsapp.firebaseapp.com",
  databaseURL: "https://unitedparentsapp-default-rtdb.firebaseio.com",
  projectId: "unitedparentsapp",
  storageBucket: "unitedparentsapp.appspot.com",
  messagingSenderId: "569912712078",
  appId: "1:569912712078:web:e2342ba357dfa220e722df",
  measurementId: "G-6NRG9TFZFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Author Ante Maric - 1273904
const dbFS = getFirestore(app)
const dbRT = getDatabase(app); //or getDatabase(app) ??
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export {dbFS, dbRT}
export default app