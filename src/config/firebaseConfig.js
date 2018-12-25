import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmNUbCOotqvBDZyb_h_PiFjJc4Z3Cp9yY",
    authDomain: "project-planner-1111.firebaseapp.com",
    databaseURL: "https://project-planner-1111.firebaseio.com",
    projectId: "project-planner-1111",
    storageBucket: "project-planner-1111.appspot.com",
    messagingSenderId: "246323590162"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
