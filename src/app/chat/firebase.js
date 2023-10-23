import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOWvv2UrE-oZhkd9XIegIk8AnVe1HSiXo",
  authDomain: "prueba1-9f362.firebaseapp.com",
  projectId: "prueba1-9f362",
  storageBucket: "prueba1-9f362.appspot.com",
  messagingSenderId: "182553410065",
  appId: "1:182553410065:web:075ca7ba9bef4ac9b7cfb0",
  measurementId: "G-YDTN9VLF80",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
