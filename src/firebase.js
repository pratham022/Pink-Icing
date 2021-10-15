import firebase from "firebase";

const firebaseApp=firebase.initializeApp(
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
{
    apiKey: "AIzaSyD5Wz1vt8yH28YtXDK6r6t_NlYu1V8tC3M",
  authDomain: "pink-icing.firebaseapp.com",
  projectId: "pink-icing",
  storageBucket: "pink-icing.appspot.com",
  messagingSenderId: "462677986184",
  appId: "1:462677986184:web:533e1f8cb111fe6939883d",
  measurementId: "G-SHBJDVTMDH"
  }
);

const db=firebaseApp.firestore();

export default db;