import firebase from "firebase/app";
// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA57UyJ5ritVp4ZRK5YuZeVB8mJCnvg2M8",
    authDomain: "the-decider-skills.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "the-decider-skills",
    storageBucket: "the-decider-skills.appspot.com",
    messagingSenderId: "447327530304",
    appId: "1:447327530304:web:e440522c6b471ef8f79ea5",
    measurementId: "G-VEYYS8B2Q6",
  });
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const usersRef = db.collection("users");
export const storage = firebase.storage();
