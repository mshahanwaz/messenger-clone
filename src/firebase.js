import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwRGxR_xus0Ig2S5w523Gi7FVsFk3v6AQ",
  authDomain: "messenger-clone-69.firebaseapp.com",
  databaseURL: "https://messenger-clone-69.firebaseio.com",
  projectId: "messenger-clone-69",
  storageBucket: "messenger-clone-69.appspot.com",
  messagingSenderId: "684258942355",
  appId: "1:684258942355:web:ce149ec522e16d8e4f9c66",
  measurementId: "G-LVRNPZTHH7",
});

const db = firebaseApp.firestore();

export default db;
