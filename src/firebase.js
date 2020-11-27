import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZsVXBZwnBuTJBV0iIA7tIq_OSSxYuOW4",
  authDomain: "op-messenger-clone.firebaseapp.com",
  databaseURL: "https://op-messenger-clone.firebaseio.com",
  projectId: "op-messenger-clone",
  storageBucket: "op-messenger-clone.appspot.com",
  messagingSenderId: "44357480749",
  appId: "1:44357480749:web:4f2d9111b5eecd99c2a3a4",
  measurementId: "G-EV8JXKZSTZ",
});

const db = firebaseApp.firestore();

export default db;
