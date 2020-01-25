  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8XfS3leyBhBWsYZHzniqWJBuNJMZjjmw",
    authDomain: "simple-chat-8920a.firebaseapp.com",
    databaseURL: "https://simple-chat-8920a.firebaseio.com",
    projectId: "simple-chat-8920a",
    storageBucket: "simple-chat-8920a.appspot.com",
    messagingSenderId: "800232304494",
    appId: "1:800232304494:web:e0259541625c97aa0a5b7f",
    measurementId: "G-DCENS6ECXY"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()

