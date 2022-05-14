import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase";

// import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4paWrB29QTvWNi8NxOJL8JKkuHMmjWts",
  authDomain: "twitter-clone-154fd.firebaseapp.com",
  databaseURL: "https://twitter-clone-154fd-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-154fd",
  storageBucket: "twitter-clone-154fd.appspot.com",
  messagingSenderId: "145331898455",
  appId: "1:145331898455:web:064cb7d2ac940a31e93b12",
  measurementId: "G-0TFZ2KBNWG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;