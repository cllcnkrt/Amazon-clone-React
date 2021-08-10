import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWm8qEAXHIec2_AS_iiCbb5Iignvm3R54",
  authDomain: "clone-d42b2.firebaseapp.com",
  projectId: "clone-d42b2",
  storageBucket: "clone-d42b2.appspot.com",
  messagingSenderId: "932775880954",
  appId: "1:932775880954:web:8baa8956b579e0f3638143",
  measurementId: "G-VFJDSYM1XY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
