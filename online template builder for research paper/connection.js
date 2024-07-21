const firebaseConfig = {

  apiKey: "AIzaSyBsC4uL_3jvxjRwD0sDc3r0oFNYY09ebW8",
  authDomain: "myapplication-70264.firebaseapp.com",
  databaseURL: "https://myapplication-70264-default-rtdb.firebaseio.com",
  projectId: "myapplication-70264",
  storageBucket: "myapplication-70264.appspot.com",
  messagingSenderId: "195317923419",
  appId: "1:195317923419:web:f4d9d233f595ef4bdd897e",
  measurementId: "G-G2VYJV69N0"

};
//start the server
firebase.initializeApp(firebaseConfig);
//authentication object
var authenticationobject = firebase.auth();