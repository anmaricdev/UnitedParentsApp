// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbuIWUPqeGtRZ8a88CLGHAIwUPrPg9vxo",
  authDomain: "unitedparentsapp.firebaseapp.com",
  projectId: "unitedparentsapp",
  storageBucket: "unitedparentsapp.appspot.com",
  messagingSenderId: "569912712078",
  appId: "1:569912712078:web:e2342ba357dfa220e722df",
  measurementId: "G-6NRG9TFZFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app

