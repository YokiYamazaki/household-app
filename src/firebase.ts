// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "householdtypescript-f972d.firebaseapp.com",
  projectId: "householdtypescript-f972d",
  storageBucket: "householdtypescript-f972d.firebasestorage.app",
  messagingSenderId: "9454372409",
  appId: "1:9454372409:web:2fd462d0ea485fe797efe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };