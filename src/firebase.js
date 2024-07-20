// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCj0vzxemTumF5Ddr_fUSlHvDLhhXPcDv8",
    authDomain: "clone-a6ed3.firebaseapp.com",
    projectId: "clone-a6ed3",
    storageBucket: "clone-a6ed3.appspot.com",
    messagingSenderId: "782176564790",
    appId: "1:782176564790:web:54c7080522fcc82e074a97",
    measurementId: "G-BWKHZMKN65"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}