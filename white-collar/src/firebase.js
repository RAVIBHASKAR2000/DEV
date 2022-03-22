import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAJKqUgNk07eqjUHamJFcngSA0xrn3JLd0",
  authDomain: "white-collar-75eec.firebaseapp.com",
  projectId: "white-collar-75eec",
  storageBucket: "white-collar-75eec.appspot.com",
  messagingSenderId: "574823787236",
  appId: "1:574823787236:web:8a4228d8ef61298454daf1"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);


  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth} ;
  