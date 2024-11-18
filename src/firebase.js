// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMHwlvhDF62M5N3XPfyc8n7O5TsP3E02g",
  authDomain: "my-firebase-741a2.firebaseapp.com",
  projectId: "my-firebase-741a2",
  storageBucket: "my-firebase-741a2.firebasestorage.app",
  messagingSenderId: "919635252491",
  appId: "1:919635252491:web:ff40eb724d366bc4f27e0e",
  databaseUrl:"https://my-firebase-741a2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);