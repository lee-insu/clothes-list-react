import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE ,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const fireStore = new firebase.firestore();

  export {fireStore};