import firebase from 'firebase/app';
import 'firebase/database';
import { Firestore } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
   databaseURL: "https://console.firebase.google.com/project/proyectointegrador1-3d020/firestore/data/~2FMessages~2Fjnklj?hl=es",
   apiKey: "AIzaSyCwYfdj0dPulOidRTcJsYj-G4imYE--EWc",
   authDomain: "proyectointegrador1-3d020.firebaseapp.com",
   projectId: "proyectointegrador1-3d020",
   storageBucket: "proyectointegrador1-3d020.appspot.com",
   messagingSenderId: "848659024283",
   appId: "1:848659024283:web:4426c775cd67dc4023793e"
};

//if (!firebase.apps.length) {
 // firebase.initializeApp(firebaseConfig);
//}

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { firebase, database };

