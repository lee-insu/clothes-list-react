import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE ,
    messagingSenderId: process.env.REACT_APP_FIREBSE_MESSAGING,
    appId: process.env.REACT_APP_FIREBSE_APPID,
    measurementId: process.env.REACT_APP_FIREBSE_MEASUR
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const analytics = new firebase.analytics();
  const fireStore = new firebase.firestore();
  const storage = new firebase.storage();

  export {fireStore, storage, analytics};