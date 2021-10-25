import firebase from "firebase";

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCni_zLjTOUcVHPcIGFIaHJLzcqM5jXPw0",
  authDomain: "class-test-c8178.firebaseapp.com",
  projectId: "class-test-c8178",
  storageBucket: "class-test-c8178.appspot.com",
  messagingSenderId: "871116642687",
  appId: "1:871116642687:web:300dedaa0f6859038ee24a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
