import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOqtP5Bf5VmJnizauNsNIjJlKv3zssAog",
  authDomain: "poem-8a547.firebaseapp.com",
  projectId: "poem-8a547",
  storageBucket: "poem-8a547.appspot.com",
  messagingSenderId: "315192511753",
  appId: "1:315192511753:web:19cd5be2a589e6b63197d8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
