import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBr7hSA06BZ2VFFqhGn3jJOIe5hGQECru4",
  authDomain: "thana-d3c9c.firebaseapp.com",
  databaseURL:
    "https://thana-d3c9c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thana-d3c9c",
  storageBucket: "thana-d3c9c.appspot.com",
  messagingSenderId: "628489418792",
  appId: "1:628489418792:web:15d6fccf1475bf83e31d1d",
  measurementId: "G-6FE9HYZ8R9",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFirebase();

export { firebase };
