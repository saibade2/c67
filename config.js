import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB5Ajegv8sHxLS5jmciY3QeCGS14yrsitQ",
    authDomain: "team-voting-c6aed.firebaseapp.com",
    projectId: "team-voting-c6aed",
    storageBucket: "team-voting-c6aed.appspot.com",
    messagingSenderId: "139538253297",
    appId: "1:139538253297:web:a4771a6ae5c255f1d47050"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();