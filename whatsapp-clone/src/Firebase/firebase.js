import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDxS5u8rM9JReIpKyfxooFJ0qMWegM4F2g",
  authDomain: "whatsapp-clone2121.firebaseapp.com",
  projectId: "whatsapp-clone2121",
  storageBucket: "whatsapp-clone2121.appspot.com",
  messagingSenderId: "1037489979967",
  appId: "1:1037489979967:web:47a81303f63c918cfaee8a",
  measurementId: "G-6D5PZPQN6E",
};
const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
