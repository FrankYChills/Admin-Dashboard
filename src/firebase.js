import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "techflix-6d31c.firebaseapp.com",
  projectId: "techflix-6d31c",
  storageBucket: "techflix-6d31c.appspot.com",
  messagingSenderId: "657354871558",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-7K0LBX9XQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// access firebase storage
const storage = firebase.storage();
export default storage;
